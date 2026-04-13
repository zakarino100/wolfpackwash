import type { Metadata } from 'next';
import Link from 'next/link';
import { pageContent } from '@/lib/site/page-content';
import { blogPosts } from '@/lib/site/blog';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.blog;

export default function Page() {
  return (
    <section className="bg-[#07111b] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">{pageContent.blog.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{pageContent.blog.title}</h1>
          <p className="mt-5 text-base leading-8 text-white/78">{pageContent.blog.description}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 transition hover:border-[#C81920]/40 hover:bg-white/[0.08]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-200/75">{post.category}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/74">{post.description}</p>
              <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/45">
                <span>{post.readTime}</span>
                <span>{post.publishedAt}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
