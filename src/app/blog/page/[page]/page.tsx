import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BlogListing } from "@/components/blog/blog-listing";
import { buildListing } from "@/lib/blog/listing";
import { listingMetadata } from "@/lib/blog/metadata";
import { POSTS_PER_PAGE, blogPageHref, parsePageParam } from "@/lib/blog/paths";
import { getPublishedPosts } from "@/lib/blog/posts";
import { pageContent } from "@/lib/site/page-content";

export const revalidate = false;
export const dynamicParams = true;

type PageProps = {
  params: Promise<{ page: string }>;
};

export function generateStaticParams() {
  const totalPages = Math.ceil(getPublishedPosts().length / POSTS_PER_PAGE);
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page: raw } = await params;
  const page = parsePageParam(raw);
  const posts = getPublishedPosts();
  const listing = page ? buildListing(posts, posts, page) : null;
  if (!page || !listing) return {};
  return listingMetadata({
    title: `${pageContent.blog.title} (page ${page})`,
    description: pageContent.blog.description,
    path: blogPageHref(page),
    page,
    totalPages: listing.totalPages,
    hrefFor: blogPageHref,
  });
}

export default async function BlogPagedPage({ params }: PageProps) {
  const { page: raw } = await params;
  const page = parsePageParam(raw);
  if (!page) notFound();
  if (page === 1) redirect("/blog");
  const posts = getPublishedPosts();
  const listing = buildListing(posts, posts, page);
  if (!listing) notFound();

  return (
    <BlogListing
      eyebrow={`${pageContent.blog.eyebrow} · Page ${page}`}
      title={pageContent.blog.title}
      description={pageContent.blog.description}
      hrefForPage={blogPageHref}
      {...listing}
    />
  );
}
