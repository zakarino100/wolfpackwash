import Link from "next/link";
import { CoverImage } from "@/components/blog/cover-image";
import { QuoteBand } from "@/components/blog/quote-band";
import { SocialFollow } from "@/components/blog/social-links";
import { formatBlogDate } from "@/lib/blog/dates";
import type { PostCard, Term } from "@/lib/blog/posts";
import { pageContent } from "@/lib/site/page-content";

type BlogListingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  featured: PostCard | null;
  cards: PostCard[];
  recent: PostCard[];
  categories: Term[];
  tags: Term[];
  page: number;
  totalPages: number;
  hrefForPage: (page: number) => string;
  activeCategory?: string;
  activeTag?: string;
};

const cardSizes = "(max-width: 767px) 280px, (max-width: 1279px) 40vw, 22rem";

export function BlogListing({
  eyebrow = pageContent.blog.eyebrow,
  title,
  description,
  featured,
  cards,
  recent,
  categories,
  tags,
  page,
  totalPages,
  hrefForPage,
  activeCategory,
  activeTag,
}: BlogListingProps) {
  const visibleTags = tags.slice(0, 12);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#07111b] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,25,32,0.22),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5a60]">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/78">{description}</p>
        </div>
      </section>

      <section className="bg-[var(--surface-1)] py-12 text-[var(--ink)] sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:px-8">
          <div>
            <div className="space-y-4">
              <nav aria-label="Categories" className="flex flex-wrap gap-2">
                <Link className="blog-chip" href="/blog" aria-current={!activeCategory && !activeTag ? "page" : undefined}>
                  All
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    className="blog-chip"
                    href={`/blog/category/${category.slug}`}
                    aria-current={activeCategory === category.slug ? "page" : undefined}
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
              {visibleTags.length > 0 ? (
                <nav aria-label="Tags" className="flex flex-wrap gap-x-4 gap-y-2">
                  {visibleTags.map((tag) => (
                    <Link
                      key={tag.slug}
                      className="blog-tag"
                      href={`/blog/tag/${tag.slug}`}
                      aria-current={activeTag === tag.slug ? "page" : undefined}
                    >
                      {tag.name}
                    </Link>
                  ))}
                </nav>
              ) : null}
            </div>

            {featured ? (
              <article className="mt-8 overflow-hidden rounded-[1.75rem] border border-[var(--hairline)] bg-[var(--card)] themed-card">
                <Link href={`/blog/${featured.slug}`} className="blog-card grid lg:grid-cols-[1.15fr_0.85fr]">
                  <CoverImage src={featured.cover} alt={featured.coverAlt} sizes="(max-width: 767px) 280px, (max-width: 1279px) 40vw, 36rem" frame="bleed" />
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C81920]">Latest · {featured.category}</p>
                    <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--ink-strong)]">{featured.title}</h2>
                    <p className="mt-4 text-base leading-7 text-[var(--ink-muted)]">{featured.description}</p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                      <time dateTime={featured.date}>{formatBlogDate(featured.date)}</time>
                      <span aria-hidden="true"> · </span>
                      {featured.readTime}
                    </p>
                  </div>
                </Link>
              </article>
            ) : null}

            {cards.length > 0 ? (
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {cards.map((post) => (
                  <article key={post.slug} className="overflow-hidden rounded-[1.75rem] border border-[var(--hairline)] bg-[var(--card)] themed-card">
                    <Link href={`/blog/${post.slug}`} className="blog-card flex h-full flex-col">
                      <CoverImage src={post.cover} alt={post.coverAlt} sizes={cardSizes} frame="bleed" />
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C81920]">{post.category}</p>
                        <h2 className="mt-3 text-xl font-semibold leading-snug text-[var(--ink-strong)]">{post.title}</h2>
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--ink-muted)]">{post.description}</p>
                        <p className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                          <span aria-hidden="true"> · </span>
                          {post.readTime}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : null}

            {!featured && cards.length === 0 ? (
              <p className="mt-8 text-base text-[var(--ink-muted)]">No published posts in this list yet.</p>
            ) : null}

            <Pagination page={page} totalPages={totalPages} hrefFor={hrefForPage} />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-[1.5rem] border border-[var(--hairline)] bg-[var(--card)] p-5 themed-card">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink-strong)]">Recent</h2>
              <ul className="mt-4 space-y-4">
                {recent.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="blog-card grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-3">
                      <CoverImage src={post.cover} alt="" sizes="72px" />
                      <span>
                        <span className="block text-sm font-semibold leading-5 text-[var(--ink-strong)]">{post.title}</span>
                        <time className="mt-1 block text-[11px] uppercase tracking-[0.14em] text-[var(--ink-faint)]" dateTime={post.date}>
                          {formatBlogDate(post.date)}
                        </time>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[1.5rem] border border-[var(--hairline)] bg-[var(--card)] p-5 themed-card">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink-strong)]">Categories</h2>
              <ul className="mt-3 space-y-2">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link className="blog-quiet flex items-baseline justify-between gap-3 text-sm" href={`/blog/category/${category.slug}`}>
                      <span>{category.name}</span>
                      <span className="text-xs text-[var(--ink-faint)]">{category.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <QuoteBand />
            <div className="rounded-[1.5rem] border border-[var(--hairline)] bg-[var(--card)] p-5 themed-card">
              <SocialFollow />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Pagination({
  page,
  totalPages,
  hrefFor,
}: {
  page: number;
  totalPages: number;
  hrefFor: (page: number) => string;
}) {
  if (totalPages <= 1) return null;
  const windowEnd = Math.min(totalPages, Math.max(page + 2, 5));
  const windowStart = Math.max(1, windowEnd - 4);
  const pages: number[] = [];
  for (let number = windowStart; number <= windowEnd; number += 1) pages.push(number);

  return (
    <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center gap-2">
      {page > 1 ? (
        <Link className="blog-chip" href={hrefFor(page - 1)} rel="prev">
          Previous
        </Link>
      ) : (
        <span className="blog-chip is-disabled">Previous</span>
      )}
      {pages.map((number) =>
        number === page ? (
          <span key={number} className="blog-chip" aria-current="page">
            {number}
          </span>
        ) : (
          <Link key={number} className="blog-chip" href={hrefFor(number)}>
            {number}
          </Link>
        ),
      )}
      {page < totalPages ? (
        <Link className="blog-chip" href={hrefFor(page + 1)} rel="next">
          Next
        </Link>
      ) : (
        <span className="blog-chip is-disabled">Next</span>
      )}
    </nav>
  );
}
