import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "@/components/blog/blog-listing";
import { buildListing } from "@/lib/blog/listing";
import { listingMetadata } from "@/lib/blog/metadata";
import { tagPageHref } from "@/lib/blog/paths";
import { getPublishedPosts, listTags } from "@/lib/blog/posts";

export const revalidate = false;
export const dynamicParams = true;

type PageProps = {
  params: Promise<{ tag: string }>;
};

export function generateStaticParams() {
  return listTags(getPublishedPosts()).map((tag) => ({ tag: tag.slug }));
}

function tagCopy(name: string) {
  return {
    title: `${name} articles`,
    description: `Articles from Wolf Pack Wash tagged ${name} for homeowners in the Triangle.`,
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag: slug } = await params;
  const posts = getPublishedPosts();
  const tag = listTags(posts).find((item) => item.slug === slug);
  if (!tag) return {};
  const filtered = posts.filter((post) => post.tags.some((item) => item.slug === slug));
  const listing = buildListing(posts, filtered, 1);
  if (!listing) return {};
  const copy = tagCopy(tag.name);
  return listingMetadata({
    ...copy,
    path: tagPageHref(slug, 1),
    page: 1,
    totalPages: listing.totalPages,
    hrefFor: (page) => tagPageHref(slug, page),
    keywords: [tag.name],
  });
}

export default async function TagPage({ params }: PageProps) {
  const { tag: slug } = await params;
  const posts = getPublishedPosts();
  const tag = listTags(posts).find((item) => item.slug === slug);
  if (!tag) notFound();
  const filtered = posts.filter((post) => post.tags.some((item) => item.slug === slug));
  const listing = buildListing(posts, filtered, 1);
  if (!listing) notFound();
  const copy = tagCopy(tag.name);

  return (
    <BlogListing
      eyebrow={tag.name}
      title={copy.title}
      description={copy.description}
      hrefForPage={(page) => tagPageHref(slug, page)}
      activeTag={slug}
      {...listing}
    />
  );
}
