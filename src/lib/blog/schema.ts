import { z } from "zod";

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD");

export const RESERVED_SLUGS = new Set(["page", "category", "tag", "feed", "rss"]);

const ALLOWED_COVER_HOSTS = new Set([
  "images.unsplash.com",
  "wolfpackwashnc.com",
  "www.wolfpackwashnc.com",
]);

export const postFrontmatterSchema = z
  .object({
    title: z.string().trim().min(8).max(140),
    description: z.string().trim().min(20).max(300),
    date: isoDate,
    updated: isoDate,
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase words separated by hyphens"),
    category: z.string().trim().min(2).max(48),
    tags: z.array(z.string().trim().min(2).max(40)).min(1).max(8),
    cover: z.string().trim().min(1),
    coverAlt: z.string().trim().min(8).max(180),
    author: z.string().trim().min(2).max(80),
    draft: z.boolean().default(false),
    keywords: z.array(z.string().trim().min(2).max(80)).max(12).default([]),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (value.updated < value.date) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["updated"],
        message: "updated cannot be earlier than date",
      });
    }
    if (RESERVED_SLUGS.has(value.slug)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["slug"],
        message: `"${value.slug}" is reserved`,
      });
    }
    if (value.cover === "brand") return;
    if (value.cover.startsWith("/")) {
      if (value.cover.includes("..") || value.cover.includes("\\")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["cover"],
          message: "cover path cannot contain ..",
        });
      }
      return;
    }
    if (value.cover.startsWith("https://")) {
      try {
        const host = new URL(value.cover).hostname;
        if (!ALLOWED_COVER_HOSTS.has(host)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["cover"],
            message: `cover host ${host} is not allowed`,
          });
        }
      } catch {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["cover"],
          message: "cover URL is invalid",
        });
      }
      return;
    }
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["cover"],
      message: 'cover must be a /public path, an https URL on an allowed host, or "brand"',
    });
  });

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;
