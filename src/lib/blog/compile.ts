import "server-only";

import { cache } from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { remarkCallouts, remarkMidPostCta } from "@/lib/blog/remark";

export const compileMdx = cache(async (markdown: string) => {
  const compiled = await evaluate(markdown, {
    ...runtime,
    development: false,
    remarkPlugins: [remarkGfm, remarkCallouts, remarkMidPostCta],
    rehypePlugins: [rehypeSlug],
  });
  return compiled.default;
});
