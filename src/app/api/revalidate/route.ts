import { createHash, timingSafeEqual } from "node:crypto";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const BLOG_TAG = "blog";

function secretMatches(provided: string, expected: string): boolean {
  const left = createHash("sha256").update(provided).digest();
  const right = createHash("sha256").update(expected).digest();
  return timingSafeEqual(left, right);
}

function pathAllowed(path: string): boolean {
  return path === "/blog" || path === "/feed.xml" || path === "/sitemap.xml" || path.startsWith("/blog/");
}

function tagAllowed(tag: string): boolean {
  return tag === BLOG_TAG || /^blog:[a-z0-9]+(?:-[a-z0-9]+)*$/.test(tag);
}

export function GET() {
  return NextResponse.json({ ok: false, revalidated: false }, { status: 405 });
}

export async function POST(request: Request) {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected || expected.length < 16) {
    return NextResponse.json({ ok: false, revalidated: false, error: "revalidate_secret_unset" }, { status: 401 });
  }

  const header = request.headers.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice("Bearer ".length).trim() : "";
  if (!token || !secretMatches(token, expected)) {
    return NextResponse.json({ ok: false, revalidated: false }, { status: 401 });
  }

  let body: { paths?: unknown; tags?: unknown; all?: unknown } = {};
  const text = await request.text();
  if (text.trim()) {
    try {
      body = JSON.parse(text) as typeof body;
    } catch {
      return NextResponse.json({ ok: false, revalidated: false, error: "invalid_json" }, { status: 400 });
    }
  }

  const requestedPaths = Array.isArray(body.paths) ? body.paths.filter((path): path is string => typeof path === "string") : [];
  const requestedTags = Array.isArray(body.tags) ? body.tags.filter((tag): tag is string => typeof tag === "string") : [];
  const refreshAll = body.all === true || (requestedPaths.length === 0 && requestedTags.length === 0);

  if (requestedPaths.some((path) => !pathAllowed(path)) || requestedTags.some((tag) => !tagAllowed(tag))) {
    return NextResponse.json({ ok: false, revalidated: false, error: "path_not_allowed" }, { status: 400 });
  }

  const paths = refreshAll ? ["/blog", "/feed.xml", "/sitemap.xml"] : requestedPaths;
  const tags = refreshAll ? [BLOG_TAG] : requestedTags;

  for (const tag of tags) {
    revalidateTag(tag, { expire: 0 });
  }
  for (const path of paths) {
    if (path === "/blog") revalidatePath("/blog", "layout");
    else revalidatePath(path);
  }

  return NextResponse.json({ ok: true, revalidated: true, paths, tags });
}
