import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BlogListing } from "@/components/blog/blog-listing";
import { buildListing } from "@/lib/blog/listing";
import { listingMetadata } from "@/lib/blog/metadata";
import { POSTS_PER_PAGE, categoryPageHref, parsePageParam } from "@/lib/blog/paths";
import { getPublishedPosts, listCategories } from "@/lib/blog/posts";

export const revalidate = false;
export const dynamicParams = true;

type PageProps = {
  params: Promise<{ category: string; page: string }>;
};

export function generateStaticParams() {
  const posts = getPublishedPosts();
  return listCategories(posts).flatMap((category) => {
    const count = posts.filter((post) => post.categorySlug === category.slug).length;
    const totalPages = Math.ceil(count / POSTS_PER_PAGE);
    return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
      category: category.slug,
      page: String(index + 2),
    }));
  });
}

function categoryCopy(name: string, page: number) {
  return {
    title: `${name} guides (page ${page})`,
    description: `Guides from Wolf Pack Wash on ${name.toLowerCase()} for homeowners in Raleigh and the Triangle.`,
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug, page: raw } = await params;
  const page = parsePageParam(raw);
  const posts = getPublishedPosts();
  const category = listCategories(posts).find((item) => item.slug === slug);
  if (!page || !category) return {};
  const filtered = posts.filter((post) => post.categorySlug === slug);
  const listing = buildListing(posts, filtered, page);
  if (!listing) return {};
  const copy = categoryCopy(category.name, page);
  return listingMetadata({
    ...copy,
    path: categoryPageHref(slug, page),
    page,
    totalPages: listing.totalPages,
    hrefFor: (nextPage) => categoryPageHref(slug, nextPage),
    keywords: [category.name],
  });
}

export default async function CategoryPagedPage({ params }: PageProps) {
  const { category: slug, page: raw } = await params;
  const page = parsePageParam(raw);
  if (!page) notFound();
  if (page === 1) redirect(`/blog/category/${slug}`);
  const posts = getPublishedPosts();
  const category = listCategories(posts).find((item) => item.slug === slug);
  if (!category) notFound();
  const filtered = posts.filter((post) => post.categorySlug === slug);
  const listing = buildListing(posts, filtered, page);
  if (!listing) notFound();
  const copy = categoryCopy(category.name, page);

  return (
    <BlogListing
      eyebrow={`${category.name} · Page ${page}`}
      title={copy.title}
      description={copy.description}
      hrefForPage={(nextPage) => categoryPageHref(slug, nextPage)}
      activeCategory={slug}
      {...listing}
    />
  );
}
