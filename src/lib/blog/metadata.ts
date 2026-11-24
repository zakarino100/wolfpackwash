import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site/seo";
import type { PostSummary } from "@/lib/blog/posts";

const feed = { "application/rss+xml": "/feed.xml" };

export function listingMetadata({
  title,
  description,
  path,
  page,
  totalPages,
  hrefFor,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  page: number;
  totalPages: number;
  hrefFor: (page: number) => string;
  keywords?: string[];
}): Metadata {
  const metadata = buildMetadata({ title, description, path, keywords });
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      types: feed,
    },
    pagination: {
      previous: page > 1 ? hrefFor(page - 1) : null,
      next: page < totalPages ? hrefFor(page + 1) : null,
    },
  };
}

export function postMetadata(post: PostSummary): Metadata {
  const path = `/blog/${post.slug}`;
  const metadata = buildMetadata({
    title: post.title,
    description: post.description,
    path,
    keywords: [...post.keywords, ...post.tags.map((tag) => tag.name), post.category],
    ogImage: post.cover === "brand" ? undefined : post.cover,
    ogImageAlt: post.coverAlt,
    article: {
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      tags: post.tags.map((tag) => tag.name),
    },
  });
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      types: feed,
    },
  };
}
