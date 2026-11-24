import type { MetadataRoute } from "next";
import { blogDateToUtc } from "@/lib/blog/dates";
import { POSTS_PER_PAGE, blogPageHref, categoryPageHref, tagPageHref } from "@/lib/blog/paths";
import { getPublishedPosts, listCategories, listTags } from "@/lib/blog/posts";
import { siteConfig } from "@/lib/site/config";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: RouteConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.95, changeFrequency: "monthly" },
  { path: "/services", priority: 0.95, changeFrequency: "monthly" },
  { path: "/house-washing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/soft-washing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/window-cleaning", priority: 0.9, changeFrequency: "monthly" },
  { path: "/gutter-cleaning", priority: 0.9, changeFrequency: "monthly" },
  { path: "/concrete-pressure-washing", priority: 0.88, changeFrequency: "monthly" },
  { path: "/driveway-pressure-washing", priority: 0.88, changeFrequency: "monthly" },
  { path: "/deck-pressure-washing", priority: 0.85, changeFrequency: "monthly" },
  { path: "/fence-pressure-washing", priority: 0.85, changeFrequency: "monthly" },
  { path: "/sidewalk-pressure-washing", priority: 0.85, changeFrequency: "monthly" },
  { path: "/fence-deck-cleaning", priority: 0.90, changeFrequency: "monthly" },
  { path: "/roof-washing", priority: 0.92, changeFrequency: "monthly" },
  { path: "/holiday-lights-installation", priority: 0.88, changeFrequency: "monthly" },
  { path: "/permanent-lighting", priority: 0.88, changeFrequency: "monthly" },
  { path: "/maintenance-plan", priority: 0.88, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.85, changeFrequency: "weekly" },
  { path: "/reviews", priority: 0.85, changeFrequency: "weekly" },
  { path: "/residential", priority: 0.82, changeFrequency: "monthly" },
  { path: "/commercial", priority: 0.82, changeFrequency: "monthly" },
  { path: "/about-us", priority: 0.80, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.80, changeFrequency: "weekly" },
  { path: "/podcast", priority: 0.60, changeFrequency: "monthly" },
  { path: "/wolfpack-training-academy", priority: 0.60, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.30, changeFrequency: "yearly" },
  { path: "/terms-of-service", priority: 0.30, changeFrequency: "yearly" },
];

function pagedEntries(
  hrefFor: (page: number) => string,
  count: number,
  lastModified: Date,
  priority: number,
): MetadataRoute.Sitemap {
  const totalPages = Math.max(1, Math.ceil(count / POSTS_PER_PAGE));
  return Array.from({ length: totalPages }, (_, index) => ({
    url: `${siteConfig.domain}${hrefFor(index + 1)}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: index === 0 ? priority : Math.max(0.3, priority - 0.15),
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
  const posts = getPublishedPosts();
  const newest = posts[0] ? blogDateToUtc(posts[0].updated) : now;
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.domain}/blog/${post.slug}`,
    lastModified: blogDateToUtc(post.updated),
    changeFrequency: "monthly",
    priority: 0.72,
  }));
  const indexPages = pagedEntries(blogPageHref, posts.length, newest, 0.5).filter((entry) => !entry.url.endsWith("/blog"));
  const categories = listCategories(posts).flatMap((category) =>
    pagedEntries((page) => categoryPageHref(category.slug, page), category.count, newest, 0.55),
  );
  const tags = listTags(posts).flatMap((tag) => pagedEntries((page) => tagPageHref(tag.slug, page), tag.count, newest, 0.45));
  return [...pages, ...postEntries, ...indexPages, ...categories, ...tags];
}
