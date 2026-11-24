#!/usr/bin/env python3
"""HTTP smoke checks for the production site after a Railway deploy.

Required pages must return 200. /feed.xml is required once it exists. A 404 is
tolerated because that feed is not on main yet (it is added in unmerged PR #3).
Any other status for the feed fails the run.
"""

from __future__ import annotations

import html
import re
import sys
import time
import urllib.error
import urllib.request
from urllib.parse import urlparse

BASE = "https://www.wolfpackwashnc.com"
RSS_PATH = "/feed.xml"
ALLOWED_HOSTS = {"www.wolfpackwashnc.com", "wolfpackwashnc.com"}
INITIAL_WAIT_SECONDS = 20
ATTEMPTS = 24
PAUSE_SECONDS = 10
TIMEOUT_SECONDS = 20

REQUIRED_PATHS = ("/", "/blog", "/sitemap.xml", "/api/health")


def fetch(path: str) -> tuple[int, str, str]:
    url = path if path.startswith("http") else BASE + path
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "wolfpackwash-deploy-smoke",
            "Cache-Control": "no-cache",
            "Accept": "*/*",
        },
        method="GET",
    )
    try:
        with urllib.request.urlopen(request, timeout=TIMEOUT_SECONDS) as response:
            final_url = response.geturl()
            body = response.read(2_000_000).decode("utf-8", "replace")
            return response.status, body, final_url
    except urllib.error.HTTPError as error:
        body = error.read(2_000_000).decode("utf-8", "replace")
        return error.code, body, error.geturl() or url
    except Exception as error:  # noqa: BLE001 — network failures are a failed check
        print(f"request error {url}: {error}", file=sys.stderr)
        return 0, "", url


def same_site(url: str) -> bool:
    host = urlparse(url).netloc.lower().split(":")[0]
    return host in ALLOWED_HOSTS


def blog_post_path(value: str) -> str | None:
    text = html.unescape(value.strip())
    if text.startswith("/"):
        parsed = urlparse(text)
    else:
        parsed = urlparse(text)
        if parsed.scheme not in {"http", "https"}:
            return None
        if parsed.netloc.lower().split(":")[0] not in ALLOWED_HOSTS:
            return None
    path = parsed.path
    if not path.startswith("/blog/"):
        return None
    slug = path[len("/blog/") :].strip("/")
    if not slug or "/" in slug:
        return None
    return "/blog/" + slug


def newest_from_rss(body: str) -> str | None:
    match = re.search(r"<item\b[^>]*>(.*?)</item>", body, re.I | re.S)
    if not match:
        return None
    link = re.search(r"<link>(.*?)</link>", match.group(1), re.I | re.S)
    if not link:
        return None
    return blog_post_path(link.group(1))


def newest_from_sitemap(body: str) -> str | None:
    best: tuple[str, str] | None = None
    for entry in re.findall(r"<url\b[^>]*>(.*?)</url>", body, re.I | re.S):
        loc = re.search(r"<loc>(.*?)</loc>", entry, re.I | re.S)
        if not loc:
            continue
        path = blog_post_path(loc.group(1))
        if path is None:
            continue
        lastmod = re.search(r"<lastmod>(.*?)</lastmod>", entry, re.I | re.S)
        stamp = lastmod.group(1).strip() if lastmod else ""
        candidate = (stamp, path)
        if best is None or candidate > best:
            best = candidate
    return None if best is None else best[1]


def newest_from_blog_html(body: str) -> str | None:
    for href in re.findall(r"""href=["']([^"'#]+)""", body, re.I):
        path = blog_post_path(href)
        if path:
            return path
    return None


def discover_post(
    feed_status: int,
    feed_body: str,
    sitemap_status: int,
    sitemap_body: str,
    blog_status: int,
    blog_body: str,
) -> tuple[str | None, str]:
    if feed_status == 200:
        path = newest_from_rss(feed_body)
        if path:
            return path, "rss"
    if sitemap_status == 200:
        path = newest_from_sitemap(sitemap_body)
        if path:
            return path, "sitemap"
    if blog_status == 200:
        path = newest_from_blog_html(blog_body)
        if path:
            return path, "blog-index"
    return None, "none"


def main() -> int:
    print(f"waiting {INITIAL_WAIT_SECONDS}s for the new deploy to go live", flush=True)
    time.sleep(INITIAL_WAIT_SECONDS)

    rss_statuses: list[int] = []
    healthy_feed_misses = 0
    last_report: list[str] = []

    for attempt in range(1, ATTEMPTS + 1):
        pages: dict[str, tuple[int, str, str]] = {}
        for path in (*REQUIRED_PATHS, RSS_PATH):
            if path == "/blog":
                continue
            pages[path] = fetch(path)

        feed_status, feed_body, feed_url = pages[RSS_PATH]
        sitemap_status, sitemap_body, _sitemap_url = pages["/sitemap.xml"]
        blog_status, blog_body, blog_url = fetch("/blog")
        pages["/blog"] = (blog_status, blog_body, blog_url)
        rss_statuses.append(feed_status)

        post_path, source = discover_post(
            feed_status,
            feed_body,
            sitemap_status,
            sitemap_body,
            blog_status,
            blog_body,
        )
        post_status = 0
        post_url = ""
        if post_path:
            post_status, _post_body, post_url = fetch(post_path)
            pages[post_path] = (post_status, "", post_url)

        lines = [
            f"attempt {attempt}/{ATTEMPTS}",
            f"  newest post: {post_path or '(not found)'} via {source} -> {post_status or 'n/a'}",
        ]
        required_ok = post_path is not None and post_status == 200 and same_site(post_url)
        for path in REQUIRED_PATHS:
            status, _body, final_url = pages[path]
            on_site = status == 200 and same_site(final_url)
            lines.append(f"  {status} {path} ({final_url})")
            if not on_site:
                required_ok = False
        lines.append(f"  {feed_status} {RSS_PATH} ({feed_url})")
        print("\n".join(lines), flush=True)
        last_report = lines

        feed_ok = feed_status == 200 and same_site(feed_url)
        if required_ok and feed_ok:
            print("smoke ok", flush=True)
            return 0
        if required_ok and feed_status == 404 and all(code == 404 for code in rss_statuses):
            # The new container is serving. Give a deploy that publishes /feed.xml
            # a few more tries, then accept 404. That path is not on main yet
            # (unmerged PR #3). Any status other than 200 or a steady 404 fails.
            healthy_feed_misses += 1
            if healthy_feed_misses >= 3:
                print(
                    "RSS /feed.xml returned 404 while the rest of the site returned 200. "
                    "The feed is not on main (it is added in unmerged PR #3). "
                    "404 is tolerated; any other non-200 fails.",
                    flush=True,
                )
                print("smoke ok", flush=True)
                return 0
        else:
            healthy_feed_misses = 0
        if attempt < ATTEMPTS:
            time.sleep(PAUSE_SECONDS)

    print("smoke failed", file=sys.stderr)
    print("\n".join(last_report), file=sys.stderr)
    if rss_statuses and any(code not in (200, 404) for code in rss_statuses):
        print(
            f"RSS {RSS_PATH} returned a non-200 status other than a persistent 404.",
            file=sys.stderr,
        )
    return 1


if __name__ == "__main__":
    sys.exit(main())
