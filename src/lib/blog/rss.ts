import { siteConfig } from "@/lib/site/config";
import { blogDateToUtc } from "@/lib/blog/dates";
import type { PostSummary } from "@/lib/blog/posts";

function xml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderRss(posts: PostSummary[]): string {
  const self = `${siteConfig.domain}/feed.xml`;
  const newest = posts[0]?.updated ?? posts[0]?.date;
  const items = posts
    .map((post) => {
      const link = `${siteConfig.domain}/blog/${post.slug}`;
      return [
        "<item>",
        `<title>${xml(post.title)}</title>`,
        `<link>${xml(link)}</link>`,
        `<guid isPermaLink="true">${xml(link)}</guid>`,
        `<pubDate>${blogDateToUtc(post.date).toUTCString()}</pubDate>`,
        `<description>${xml(post.description)}</description>`,
        `<category>${xml(post.category)}</category>`,
        "</item>",
      ].join("");
    })
    .join("");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    `<title>${xml(siteConfig.name)} Blog</title>`,
    `<link>${xml(`${siteConfig.domain}/blog`)}</link>`,
    `<description>${xml("Exterior cleaning tips and homeowner guides from Wolf Pack Wash in the Triangle.")}</description>`,
    "<language>en-us</language>",
    newest ? `<lastBuildDate>${blogDateToUtc(newest).toUTCString()}</lastBuildDate>` : "",
    `<atom:link href="${xml(self)}" rel="self" type="application/rss+xml"/>`,
    items,
    "</channel>",
    "</rss>",
  ].join("");
}
