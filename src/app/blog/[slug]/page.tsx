import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, blogPosts, blogPostKeywords } from "@/lib/site/blog";
import { buildMetadata } from "@/lib/site/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const linkClass =
  "font-semibold text-[#C81920] underline decoration-[#C81920]/50 underline-offset-4 hover:text-white";

const inlineLinkPattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function renderInlineLinks(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = new RegExp(inlineLinkPattern.source, inlineLinkPattern.flags);
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let linkIndex = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const label = match[1];
    const href = match[2];
    const key = `${href}-${linkIndex}`;
    linkIndex += 1;

    if (href.startsWith("/") && !href.startsWith("//")) {
      nodes.push(
        <Link key={key} href={href} className={linkClass}>
          {label}
        </Link>,
      );
    } else if (/^tel:\+\d+$/.test(href)) {
      nodes.push(
        <a key={key} href={href} className={linkClass}>
          {label}
        </a>,
      );
    } else {
      nodes.push(match[0]);
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: blogPostKeywords[post.slug] ?? [],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[#07111b] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">{post.category}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/78">{post.description}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.24em] text-white/45">
          <span>{post.readTime}</span>
          <span>{post.publishedAt}</span>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(98,197,255,0.18),rgba(255,255,255,0.04))] p-8">
          <p className="max-w-2xl text-sm leading-7 text-white/80">
            Helpful local guidance from Wolf Pack Wash. The goal is simple: answer real homeowner questions clearly, build trust, and make the next step easy when you are ready for a quote.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-base leading-8 text-white/82">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{renderInlineLinks(paragraph)}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
