import { siteConfig } from "@/lib/site/config";
import type { PostSummary } from "@/lib/blog/posts";

function absolute(src: string): string {
  if (src.startsWith("https://")) return src;
  const path = src === "brand" ? "/logos/wpw-emblem.png" : src;
  return new URL(path, siteConfig.domain).toString();
}

export function blogPostingJsonLd(post: PostSummary, canonicalPath: string) {
  const url = new URL(canonicalPath, siteConfig.domain).toString();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: [absolute(post.cover)],
        datePublished: post.date,
        dateModified: post.updated,
        author: {
          "@type": "Organization",
          name: post.author,
          url: siteConfig.domain,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.domain,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.domain}/logos/wpw-emblem.png`,
          },
        },
        mainEntityOfPage: url,
        articleSection: post.category,
        keywords: post.tags.map((tag) => tag.name).join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Blog", item: `${siteConfig.domain}/blog` },
          {
            "@type": "ListItem",
            position: 2,
            name: post.category,
            item: `${siteConfig.domain}/blog/category/${post.categorySlug}`,
          },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}
