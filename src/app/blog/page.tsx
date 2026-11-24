import type { Metadata } from "next";
import { BlogListing } from "@/components/blog/blog-listing";
import { buildListing } from "@/lib/blog/listing";
import { blogPageHref } from "@/lib/blog/paths";
import { getPublishedPosts } from "@/lib/blog/posts";
import { pageContent } from "@/lib/site/page-content";
import { pageSeo } from "@/lib/site/page-seo";

export const revalidate = false;

export const metadata: Metadata = {
  ...pageSeo.blog,
  alternates: {
    ...pageSeo.blog.alternates,
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function BlogIndexPage() {
  const posts = getPublishedPosts();
  const listing = buildListing(posts, posts, 1);
  if (!listing) return null;

  return (
    <BlogListing
      title={pageContent.blog.title}
      description={pageContent.blog.description}
      hrefForPage={blogPageHref}
      {...listing}
    />
  );
}
