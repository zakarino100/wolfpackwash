import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CoverImage } from "@/components/blog/cover-image";
import { QuoteBand } from "@/components/blog/quote-band";
import { ShareLinks, SocialFollow } from "@/components/blog/social-links";
import { formatBlogDate } from "@/lib/blog/dates";
import type { PostCard, PostSummary } from "@/lib/blog/posts";
import type { TocItem } from "@/lib/blog/toc";
import { siteConfig } from "@/lib/site/config";

type PostArticleProps = {
  post: PostSummary;
  readTime: string;
  canonical: string;
  toc: TocItem[];
  related: PostCard[];
  showPlan: boolean;
  preselect?: string;
  children: ReactNode;
};

export function PostArticle({ post, readTime, canonical, toc, related, showPlan, preselect, children }: PostArticleProps) {
  const showToc = toc.length >= 2;

  return (
    <article className="bg-[var(--surface-1)] py-12 text-[var(--ink)] sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18.5rem]">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                <li>
                  <Link className="blog-quiet" href="/blog">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link className="blog-quiet" href={`/blog/category/${post.categorySlug}`}>
                    {post.category}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="max-w-[16rem] truncate text-[var(--ink)] sm:max-w-md">
                  {post.title}
                </li>
              </ol>
            </nav>

            <div className="relative mt-6 overflow-hidden rounded-[1.75rem]">
              <CoverImage
                src={post.cover}
                alt={post.coverAlt}
                sizes="(max-width: 767px) 140px, (max-width: 1279px) 60vw, 40rem"
                preload
                fetchPriority="high"
                frame="bleed"
              />
              <Link
                href={`/blog/category/${post.categorySlug}`}
                className="blog-chip is-on-photo absolute left-4 top-4"
              >
                {post.category}
              </Link>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[var(--ink-strong)] sm:text-5xl">{post.title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">{post.description}</p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
              <span>
                By{" "}
                <a className="blog-quiet text-[var(--ink)]" href="#author">
                  {post.author}
                </a>
              </span>
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              {post.updated !== post.date ? <time dateTime={post.updated}>Updated {formatBlogDate(post.updated)}</time> : null}
              <span>{readTime}</span>
            </div>

            {showToc ? (
              <div className="mt-8 lg:hidden">
                <Toc items={toc} />
              </div>
            ) : null}

            <div className="blog-prose mt-8">{children}</div>

            {post.tags.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li key={tag.slug}>
                    <Link className="blog-chip" href={`/blog/tag/${tag.slug}`}>
                      {tag.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-10">
              <QuoteBand preselect={preselect} showPlan={showPlan} />
            </div>

            <section id="author" className="mt-8 flex gap-4 rounded-[1.75rem] border border-[var(--hairline)] bg-[var(--card)] p-6 themed-card">
              <Image
                src="/logos/wpw-emblem.png"
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 object-contain"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C81920]">Written by</p>
                <h2 className="mt-1 text-xl font-semibold text-[var(--ink-strong)]">{post.author}</h2>
                {post.author === "Wolf Pack Wash" ? (
                  <p className="mt-2 text-sm leading-7 text-[var(--ink-muted)]">
                    Wolf Pack Wash is a locally owned exterior cleaning company serving Raleigh, Cary, Apex, Holly Springs, and the surrounding Triangle.
                  </p>
                ) : (
                  <p className="mt-2 text-sm leading-7 text-[var(--ink-muted)]">Writing for Wolf Pack Wash.</p>
                )}
                <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold">
                  <Link className="blog-quiet" href="/about-us">
                    About the company
                  </Link>
                  <a className="blog-quiet" href={siteConfig.phoneHref}>
                    Call {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </section>

            <div className="mt-8 space-y-6 lg:hidden">
              <ShareLinks canonical={canonical} title={post.title} />
              <SocialFollow />
            </div>
          </div>

          <aside className="hidden space-y-6 lg:sticky lg:top-24 lg:block lg:self-start">
            {showToc ? <Toc items={toc} /> : null}
            <div className="rounded-[1.5rem] border border-[var(--hairline)] bg-[var(--card)] p-5 themed-card">
              <ShareLinks canonical={canonical} title={post.title} />
            </div>
            <div className="rounded-[1.5rem] border border-[var(--hairline)] bg-[var(--card)] p-5 themed-card">
              <SocialFollow />
            </div>
            <QuoteBand compact preselect={preselect} showPlan={showPlan} />
          </aside>
        </div>

        {related.length > 0 ? (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-[var(--ink-strong)]">Keep reading</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <article key={item.slug} className="overflow-hidden rounded-[1.75rem] border border-[var(--hairline)] bg-[var(--card)] themed-card">
                  <Link href={`/blog/${item.slug}`} className="blog-card flex h-full flex-col">
                    <CoverImage src={item.cover} alt={item.coverAlt} sizes="(max-width: 767px) 140px, 22rem" frame="bleed" />
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C81920]">{item.category}</p>
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-[var(--ink-strong)]">{item.title}</h3>
                      <p className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                        <time dateTime={item.date}>{formatBlogDate(item.date)}</time>
                        <span aria-hidden="true"> · </span>
                        {item.readTime}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}

function Toc({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="On this page" className="rounded-[1.5rem] border border-[var(--hairline)] bg-[var(--card)] p-5 themed-card">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink-strong)]">On this page</p>
      <ol className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.id} className={item.depth === 3 ? "pl-3" : undefined}>
            <a className="blog-quiet text-sm leading-6" href={`#${item.id}`}>
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
