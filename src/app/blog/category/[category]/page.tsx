import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "@/components/blog/blog-listing";
import { buildListing } from "@/lib/blog/listing";
import { listingMetadata } from "@/lib/blog/metadata";
import { categoryPageHref } from "@/lib/blog/paths";
import { getPublishedPosts, listCategories } from "@/lib/blog/posts";

export const revalidate = false;
export const dynamicParams = true;

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return listCategories(getPublishedPosts()).map((category) => ({ category: category.slug }));
}

function categoryCopy(name: string) {
  return {
    title: `${name} guides`,
    description: `Guides from Wolf Pack Wash on ${name.toLowerCase()} for homeowners in Raleigh and the Triangle.`,
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const posts = getPublishedPosts();
  const category = listCategories(posts).find((item) => item.slug === slug);
  if (!category) return {};
  const filtered = posts.filter((post) => post.categorySlug === slug);
  const listing = buildListing(posts, filtered, 1);
  if (!listing) return {};
  const copy = categoryCopy(category.name);
  return listingMetadata({
    ...copy,
    path: categoryPageHref(slug, 1),
    page: 1,
    totalPages: listing.totalPages,
    hrefFor: (page) => categoryPageHref(slug, page),
    keywords: [category.name],
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const posts = getPublishedPosts();
  const category = listCategories(posts).find((item) => item.slug === slug);
  if (!category) notFound();
  const filtered = posts.filter((post) => post.categorySlug === slug);
  const listing = buildListing(posts, filtered, 1);
  if (!listing) notFound();
  const copy = categoryCopy(category.name);

  return (
    <BlogListing
      eyebrow={category.name}
      title={copy.title}
      description={copy.description}
      hrefForPage={(page) => categoryPageHref(slug, page)}
      activeCategory={slug}
      {...listing}
    />
  );
}
