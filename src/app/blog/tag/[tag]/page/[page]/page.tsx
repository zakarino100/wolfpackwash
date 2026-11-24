import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BlogListing } from "@/components/blog/blog-listing";
import { buildListing } from "@/lib/blog/listing";
import { listingMetadata } from "@/lib/blog/metadata";
import { POSTS_PER_PAGE, parsePageParam, tagPageHref } from "@/lib/blog/paths";
import { getPublishedPosts, listTags } from "@/lib/blog/posts";

export const revalidate = false;
export const dynamicParams = true;

type PageProps = {
  params: Promise<{ tag: string; page: string }>;
};

export function generateStaticParams() {
  const posts = getPublishedPosts();
  return listTags(posts).flatMap((tag) => {
    const count = posts.filter((post) => post.tags.some((item) => item.slug === tag.slug)).length;
    const totalPages = Math.ceil(count / POSTS_PER_PAGE);
    return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
      tag: tag.slug,
      page: String(index + 2),
    }));
  });
}

function tagCopy(name: string, page: number) {
  return {
    title: `${name} articles (page ${page})`,
    description: `Articles from Wolf Pack Wash tagged ${name} for homeowners in the Triangle.`,
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag: slug, page: raw } = await params;
  const page = parsePageParam(raw);
  const posts = getPublishedPosts();
  const tag = listTags(posts).find((item) => item.slug === slug);
  if (!page || !tag) return {};
  const filtered = posts.filter((post) => post.tags.some((item) => item.slug === slug));
  const listing = buildListing(posts, filtered, page);
  if (!listing) return {};
  const copy = tagCopy(tag.name, page);
  return listingMetadata({
    ...copy,
    path: tagPageHref(slug, page),
    page,
    totalPages: listing.totalPages,
    hrefFor: (nextPage) => tagPageHref(slug, nextPage),
    keywords: [tag.name],
  });
}

export default async function TagPagedPage({ params }: PageProps) {
  const { tag: slug, page: raw } = await params;
  const page = parsePageParam(raw);
  if (!page) notFound();
  if (page === 1) redirect(`/blog/tag/${slug}`);
  const posts = getPublishedPosts();
  const tag = listTags(posts).find((item) => item.slug === slug);
  if (!tag) notFound();
  const filtered = posts.filter((post) => post.tags.some((item) => item.slug === slug));
  const listing = buildListing(posts, filtered, page);
  if (!listing) notFound();
  const copy = tagCopy(tag.name, page);

  return (
    <BlogListing
      eyebrow={`${tag.name} · Page ${page}`}
      title={copy.title}
      description={copy.description}
      hrefForPage={(nextPage) => tagPageHref(slug, nextPage)}
      activeTag={slug}
      {...listing}
    />
  );
}
