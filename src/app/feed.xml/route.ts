import { getPublishedPosts } from "@/lib/blog/posts";
import { renderRss } from "@/lib/blog/rss";

export const revalidate = false;
export const dynamic = "force-static";

export function GET() {
  const xml = renderRss(getPublishedPosts());
  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
