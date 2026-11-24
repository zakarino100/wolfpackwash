import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import matter from "gray-matter";
import ts from "typescript";

const args = process.argv.slice(2);
const updateBody = args.includes("--update-body");
const dryRun = args.includes("--dry-run");
const sourcePath = args.find((arg) => !arg.startsWith("--")) ?? "src/lib/site/blog.ts";

const covers = {
  "House Washing": {
    cover: "/gallery-images/house-wash.webp",
    coverAlt: "Crew member washing yellow pollen off brick siding.",
  },
  "Gutter Cleaning": {
    cover: "/gallery-images/real-gutter.webp",
    coverAlt: "Before and after of a gutter along a shingle roof, with the Wolf Pack Wash emblem.",
  },
  "Window Cleaning": {
    cover: "/gallery-images/window-cleaning.webp",
    coverAlt: "A water-fed pole brush washing an exterior window.",
  },
  "Holiday Lights": {
    cover: "/service-images/holiday-lights.webp",
    coverAlt: "Holiday lights on a home, from the Wolf Pack Wash service photos.",
  },
  "Roof Washing": {
    cover: "/service-images/roof-washing.webp",
    coverAlt: "A roof from the Wolf Pack Wash service photos.",
  },
  "Soft Washing": {
    cover: "/hero-images/soft-washing.webp",
    coverAlt: "A home exterior from the Wolf Pack Wash soft washing photos.",
  },
};

function yamlString(value) {
  return `"${String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;
}

function yamlList(values, key) {
  if (!values?.length) return "";
  return `${key}:\n${values.map((value) => `  - ${yamlString(value)}`).join("\n")}\n`;
}

const absolute = path.resolve(sourcePath);
const source = fs.readFileSync(absolute, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
}).outputText;
const tempFile = path.join(os.tmpdir(), `wpw-legacy-blog-${process.pid}.mjs`);
fs.writeFileSync(tempFile, compiled);
const loaded = await import(`${pathToFileURL(tempFile).href}?t=${Date.now()}`);
const posts = loaded.blogPosts;
const keywords = loaded.blogPostKeywords ?? {};

if (!Array.isArray(posts)) {
  console.error(`${sourcePath} does not export a blogPosts array. Nothing to import.`);
  process.exit(1);
}

const outDir = path.join(process.cwd(), "content", "blog");
fs.mkdirSync(outDir, { recursive: true });
let created = 0;
let updated = 0;
let skipped = 0;

for (const post of posts) {
  if (!post?.slug || !post.title || !post.description || !(post.publishedAt || post.date)) {
    throw new Error(`Legacy post is missing slug, title, description, or date: ${JSON.stringify(post?.slug ?? post)}`);
  }
  const date = post.date || post.publishedAt;
  const destination = path.join(outDir, `${post.slug}.mdx`);
  const body = Array.isArray(post.body) ? post.body.join("\n\n") : String(post.body ?? "");
  const exists = fs.existsSync(destination);

  if (exists && updateBody) {
    const current = matter(fs.readFileSync(destination, "utf8"));
    const next = matter.stringify(`${body}\n`, current.data);
    if (!dryRun) fs.writeFileSync(destination, next.endsWith("\n") ? next : `${next}\n`);
    updated += 1;
    console.log(`updated body ${post.slug}`);
    continue;
  }

  if (exists) {
    skipped += 1;
    console.log(`skip ${post.slug} (already in content/blog)`);
    continue;
  }

  const art = covers[post.category] ?? { cover: "brand", coverAlt: "Wolf Pack Wash emblem" };
  const tags = Array.isArray(post.tags) && post.tags.length > 0 ? post.tags : [String(post.category)];
  const keywordList = Array.isArray(keywords[post.slug]) ? keywords[post.slug] : post.keywords;
  const file = [
    "---",
    `title: ${yamlString(post.title)}`,
    `description: ${yamlString(post.description)}`,
    `date: ${yamlString(date)}`,
    `updated: ${yamlString(post.updated || date)}`,
    `slug: ${post.slug}`,
    `category: ${yamlString(post.category)}`,
    yamlList(tags, "tags").trimEnd(),
    `cover: ${yamlString(art.cover)}`,
    `coverAlt: ${yamlString(post.coverAlt || art.coverAlt)}`,
    `author: ${yamlString(post.author || "Wolf Pack Wash")}`,
    `draft: ${post.draft === true ? "true" : "false"}`,
    yamlList(keywordList, "keywords").trimEnd(),
    "---",
    "",
    body,
    "",
  ]
    .filter((line) => line !== "")
    .join("\n");

  if (!dryRun) fs.writeFileSync(destination, file.endsWith("\n") ? file : `${file}\n`);
  created += 1;
  console.log(`created ${post.slug}`);
}

console.log(`${dryRun ? "dry run " : ""}created ${created}, updated ${updated}, skipped ${skipped}`);
console.log("Review cover alts, then check the dev server. Posts still need a pull request. Do not commit them straight to main.");
