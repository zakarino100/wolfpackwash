import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import { postFrontmatterSchema } from "@/lib/blog/schema";
import { slugify } from "@/lib/blog/slug";
import { readingTimeLabel } from "@/lib/blog/reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const LEGACY_FILE = path.join(process.cwd(), "src", "lib", "site", "blog.ts");

export type TagRef = {
  name: string;
  slug: string;
};

export type PostSummary = {
  title: string;
  description: string;
  date: string;
  updated: string;
  slug: string;
  category: string;
  categorySlug: string;
  tags: TagRef[];
  cover: string;
  coverAlt: string;
  author: string;
  keywords: string[];
};

export type PostCard = PostSummary & {
  readTime: string;
};

type CatalogEntry = PostSummary & {
  draft: boolean;
  filePath: string;
};

function readFrontmatterBlock(filePath: string): string {
  const fd = fs.openSync(filePath, "r");
  try {
    const chunks: Buffer[] = [];
    const buf = Buffer.alloc(4096);
    let offset = 0;
    while (offset < 64 * 1024) {
      const read = fs.readSync(fd, buf, 0, buf.length, offset);
      if (read <= 0) break;
      chunks.push(Buffer.from(buf.subarray(0, read)));
      offset += read;
      const text = Buffer.concat(chunks).toString("utf8");
      if (!text.startsWith("---")) break;
      const end = text.indexOf("\n---", 3);
      if (end !== -1) return text.slice(0, end + 4);
    }
  } finally {
    fs.closeSync(fd);
  }
  return fs.readFileSync(filePath, "utf8");
}

function assertCoverExists(cover: string, filePath: string) {
  if (cover === "brand" || cover.startsWith("https://")) return;
  const relative = cover.replace(/^\/+/, "");
  const full = path.join(process.cwd(), "public", relative);
  const publicRoot = path.join(process.cwd(), "public");
  if (!full.startsWith(publicRoot) || !fs.existsSync(full)) {
    throw new Error(`${filePath}: cover file not found at public${cover}`);
  }
}

function asIsoDate(value: unknown): unknown {
  if (!(value instanceof Date) || Number.isNaN(value.getTime())) return value;
  const year = value.getUTCFullYear();
  const month = String(value.getUTCMonth() + 1).padStart(2, "0");
  const day = String(value.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function loadEntry(filePath: string): CatalogEntry {
  const filename = path.basename(filePath);
  let data: unknown;
  try {
    data = matter(readFrontmatterBlock(filePath)).data;
    if (data && typeof data === "object") {
      const record = data as Record<string, unknown>;
      record.date = asIsoDate(record.date);
      record.updated = asIsoDate(record.updated);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "invalid frontmatter";
    throw new Error(`${filePath}: ${message}`);
  }
  const parsed = postFrontmatterSchema.safeParse(data);
  if (!parsed.success) {
    const details = parsed.error.issues.map((issue) => `${issue.path.join(".") || "frontmatter"}: ${issue.message}`).join("; ");
    throw new Error(`${filePath}: ${details}`);
  }
  const frontmatter = parsed.data;
  const expected = path.basename(filename, path.extname(filename));
  if (frontmatter.slug !== expected) {
    throw new Error(`${filePath}: slug "${frontmatter.slug}" must match the filename "${expected}"`);
  }
  assertCoverExists(frontmatter.cover, filePath);
  const tags: TagRef[] = [];
  const seen = new Set<string>();
  for (const name of frontmatter.tags) {
    const slug = slugify(name);
    if (seen.has(slug)) {
      throw new Error(`${filePath}: tags "${name}" collide on /blog/tag/${slug}`);
    }
    seen.add(slug);
    tags.push({ name, slug });
  }
  let categorySlug: string;
  try {
    categorySlug = slugify(frontmatter.category);
  } catch {
    throw new Error(`${filePath}: category "${frontmatter.category}" cannot be turned into a URL`);
  }
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    updated: frontmatter.updated,
    slug: frontmatter.slug,
    category: frontmatter.category,
    categorySlug,
    tags,
    cover: frontmatter.cover,
    coverAlt: frontmatter.coverAlt,
    author: frontmatter.author,
    keywords: frontmatter.keywords,
    draft: frontmatter.draft,
    filePath,
  };
}

function assertLegacyPostsConverted(entries: CatalogEntry[]) {
  if (!fs.existsSync(LEGACY_FILE)) return;
  const source = fs.readFileSync(LEGACY_FILE, "utf8");
  if (!source.includes("export const blogPosts")) return;
  const slugs = [...source.matchAll(/slug:\s*["']([^"']+)["']/g)].map((match) => match[1]);
  const known = new Set(entries.map((entry) => entry.slug));
  const missing = slugs.filter((slug) => !known.has(slug));
  if (missing.length > 0) {
    throw new Error(
      `src/lib/site/blog.ts still lists posts that are not files in content/blog: ${missing.join(", ")}. Run: node scripts/import-legacy-blog.mjs src/lib/site/blog.ts`,
    );
  }
}

function loadCatalog(): CatalogEntry[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((name) => !name.startsWith(".") && !name.startsWith("_") && (name.endsWith(".md") || name.endsWith(".mdx")));
  const entries = files.map((name) => loadEntry(path.join(CONTENT_DIR, name)));
  const slugs = new Set<string>();
  for (const entry of entries) {
    if (slugs.has(entry.slug)) {
      throw new Error(`Duplicate blog slug "${entry.slug}"`);
    }
    slugs.add(entry.slug);
  }
  assertLegacyPostsConverted(entries);
  return entries.sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return a.slug < b.slug ? -1 : 1;
  });
}

function toSummary(entry: CatalogEntry): PostSummary {
  return {
    title: entry.title,
    description: entry.description,
    date: entry.date,
    updated: entry.updated,
    slug: entry.slug,
    category: entry.category,
    categorySlug: entry.categorySlug,
    tags: entry.tags,
    cover: entry.cover,
    coverAlt: entry.coverAlt,
    author: entry.author,
    keywords: entry.keywords,
  };
}

const draftsVisible = process.env.NODE_ENV !== "production";

export const getCatalog = cache(loadCatalog);

export function getPublishedPosts(): PostSummary[] {
  return getCatalog()
    .filter((entry) => !entry.draft)
    .map(toSummary);
}

export function getPostSource(slug: string): { summary: PostSummary; markdown: string } | null {
  const entry = getCatalog().find((item) => item.slug === slug);
  if (!entry) return null;
  if (entry.draft && !draftsVisible) return null;
  const markdown = matter(fs.readFileSync(entry.filePath, "utf8")).content;
  if (/^\s*import\s/m.test(markdown) || /^\s*export\s/m.test(markdown)) {
    throw new Error(`${entry.filePath}: posts cannot import or export JavaScript`);
  }
  if (/<script[\s>/]/i.test(markdown)) {
    throw new Error(`${entry.filePath}: script tags are not allowed`);
  }
  return { summary: toSummary(entry), markdown };
}

export function withReadingTime(posts: PostSummary[]): PostCard[] {
  const bySlug = new Map(getCatalog().map((entry) => [entry.slug, entry]));
  return posts.map((post) => {
    const entry = bySlug.get(post.slug);
    const markdown = entry ? matter(fs.readFileSync(entry.filePath, "utf8")).content : "";
    return { ...post, readTime: readingTimeLabel(markdown) };
  });
}

export type Term = {
  name: string;
  slug: string;
  count: number;
};

export function listCategories(posts: PostSummary[]): Term[] {
  const map = new Map<string, Term>();
  for (const post of posts) {
    const existing = map.get(post.categorySlug);
    if (existing) existing.count += 1;
    else map.set(post.categorySlug, { name: post.category, slug: post.categorySlug, count: 1 });
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export function listTags(posts: PostSummary[]): Term[] {
  const map = new Map<string, Term>();
  for (const post of posts) {
    for (const tag of post.tags) {
      const existing = map.get(tag.slug);
      if (existing) existing.count += 1;
      else map.set(tag.slug, { name: tag.name, slug: tag.slug, count: 1 });
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function relatedPosts(posts: PostSummary[], currentSlug: string, categorySlug: string, limit = 3): PostSummary[] {
  const same = posts.filter((post) => post.slug !== currentSlug && post.categorySlug === categorySlug);
  const rest = posts.filter((post) => post.slug !== currentSlug && post.categorySlug !== categorySlug);
  return [...same, ...rest].slice(0, limit);
}

const CARE_PLAN_CATEGORIES = new Set([
  "house-washing",
  "window-cleaning",
  "gutter-cleaning",
  "soft-washing",
  "roof-washing",
  "concrete-cleaning",
  "concrete-pressure-washing",
  "driveway-pressure-washing",
  "deck-pressure-washing",
  "fence-pressure-washing",
  "sidewalk-pressure-washing",
  "fence-deck-cleaning",
]);

export function showCarePlan(categorySlug: string, markdown: string): boolean {
  return CARE_PLAN_CATEGORIES.has(categorySlug) || markdown.includes("/maintenance-plan");
}
