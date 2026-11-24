# Publishing a blog post

Posts are one Markdown file each in `content/blog`. The public pages, sitemap, and RSS feed read that folder at build time. Nothing in the post body is shipped to the blog index.

Open a branch, add the file in a pull request, and wait for review. Do not commit a post straight to `main`.

## File

Create `content/blog/<slug>.mdx`. The slug is the filename and the URL: `content/blog/house-wash-after-pollen.mdx` becomes `/blog/house-wash-after-pollen`.

```mdx
---
title: "House washing after pollen season in Raleigh"
description: "What Triangle homeowners can look for on siding once the yellow pollen drops, and when a house wash is worth scheduling."
date: 2026-11-24
updated: 2026-11-24
slug: house-wash-after-pollen
category: House Washing
tags:
  - pollen
  - raleigh
cover: /blog/house-wash-after-pollen.webp
coverAlt: "Crew member rinsing pollen from brick siding."
author: Wolf Pack Wash
draft: true
---

First paragraph.

## A real heading

The table of contents appears once a post has at least two headings.

> A pull quote looks like this.

> [!note]
> A callout looks like this.
```

`date` and `updated` are `YYYY-MM-DD`. `updated` cannot be earlier than `date`. `draft: true` keeps the file out of the index, sitemap, RSS, and production URLs. Set `draft: false` when it is ready for review. The build rejects a slug that does not match the filename, a missing cover, or an unknown frontmatter key.

Write in Markdown. Do not import React components or add `<script>` tags. Links like `[house washing](/house-washing)` stay inside the server render. Images in the body use `next/image` when the path starts with `/` or `https://`.

## Images

Put covers in `public/blog/` and point `cover` at `/blog/your-file.webp`.

- 1600×1200 WebP (4:3). The card and hero frames are 4:3, so other shapes get cropped.
- Keep the file well under 400KB. AVIF and WebP delivery is already enabled in `next.config.ts`.
- `coverAlt` describes what is actually in the picture.
- Reuse a photo already in `public/gallery-images` or `public/service-images` when it shows the service. Do not drop in stock art that implies a job we did not do.
- `cover: brand` uses the Wolf Pack Wash emblem on a red-and-navy panel when a post has no photo.

Only the index hero and the post cover are marked priority. Every other image lazy-loads.

## Copy

Do not add star ratings, review counts, prices, discounts, guarantees, or made-up stats. The quote box only says we reply the same day with pricing and the next open date, and it links to `(984) 600-7038` and, for cleaning topics, the Exterior Care Plan.

## Review

1. Branch from `main`.
2. Add the `.mdx` file and its image.
3. Open a pull request. `npm run build` checks the frontmatter.
4. A person reviews and merges. That merge is what publishes the post.

## Railway

The production service runs a Railpack image. There is no content volume. Markdown in git is not on the server until a new image is built.

A merged pull request to the branch Railway deploys (normally `main`) still starts a build. `generateStaticParams` includes the new file in that build, so the post is static when the new container starts. On-demand revalidation does not publish a file that is not in the running image.

`POST /api/revalidate` is for the hosts where content can change without a rebuild, and for busting the page cache after a process already has the files. It refuses every request unless `REVALIDATE_SECRET` is set to at least 16 characters. Send `Authorization: Bearer <secret>`. An empty JSON body revalidates `/blog` (the layout, so post, category, and tag pages), `/feed.xml`, and `/sitemap.xml`. You can also send `{ "paths": ["/blog/your-slug"] }`. Paths outside the blog are rejected.

Today that endpoint does not replace the merge-and-build flow on Railway.

## Posts still in `src/lib/site/blog.ts`

[PR #2](https://github.com/zakarino100/wolfpackwash/pull/2) adds three posts to the old module, and it appends one paragraph to the existing gutter post. This branch does not copy those in, so the two pulls can land in either order.

If that branch merges first, or a merge conflict puts the old array back into `src/lib/site/blog.ts`, the build fails and names the missing slugs. Convert them with:

```bash
node scripts/import-legacy-blog.mjs path/to/blog.ts
```

The script reads whatever `blogPosts` array is in that file, including posts that were not in the file when this branch was written. It writes `content/blog/<slug>.mdx` for slugs that are not there yet, and it keeps existing files. Pass `--update-body` when you also want the rewritten body (the extra gutter paragraph, and the `[label](/path)` links) dropped into files that already exist. Frontmatter on those files stays as it is. Pass `--dry-run` to print the plan.

Then delete the array from `src/lib/site/blog.ts` and open the usual review pull request. Do not push the result straight to `main`.

To time a larger folder locally without committing it:

```bash
node scripts/sample-posts.mjs --count=100
npm run build
node scripts/sample-posts.mjs --clean
```
