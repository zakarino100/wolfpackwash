import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogImage, BlogLink } from "@/components/blog/mdx-components";
import { PostArticle } from "@/components/blog/post-article";
import { MidPostCta } from "@/components/blog/quote-band";
import { JsonLd } from "@/components/seo/json-ld";
import { compileMdx } from "@/lib/blog/compile";
import { blogPostingJsonLd } from "@/lib/blog/jsonld";
import { postMetadata } from "@/lib/blog/metadata";
import { getPostSource, getPublishedPosts, relatedPosts, showCarePlan, withReadingTime } from "@/lib/blog/posts";
import { quotePreselect } from "@/lib/blog/quote";
import { readingTimeLabel } from "@/lib/blog/reading-time";
import { extractToc } from "@/lib/blog/toc";
import { siteConfig } from "@/lib/site/config";

export const revalidate = false;
export const dynamicParams = true;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const source = getPostSource(slug);
  if (!source) return {};
  return postMetadata(source.summary);
}

const components = {
  a: BlogLink,
  img: BlogImage,
  MidPostCta,
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const source = getPostSource(slug);
  if (!source) notFound();

  const Content = await compileMdx(source.markdown);
  const published = getPublishedPosts();
  const related = withReadingTime(relatedPosts(published, source.summary.slug, source.summary.categorySlug));
  const canonical = new URL(`/blog/${source.summary.slug}`, siteConfig.domain).toString();

  return (
    <>
      <JsonLd data={blogPostingJsonLd(source.summary, `/blog/${source.summary.slug}`)} />
      <PostArticle
        post={source.summary}
        readTime={readingTimeLabel(source.markdown)}
        canonical={canonical}
        toc={extractToc(source.markdown)}
        related={related}
        showPlan={showCarePlan(source.summary.categorySlug, source.markdown)}
        preselect={quotePreselect(source.summary.category)}
      >
        <Content components={components} />
      </PostArticle>
    </>
  );
}
