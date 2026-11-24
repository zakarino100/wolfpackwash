/**
 * Real Wolf Pack Wash profiles.
 * Source: sameAs in src/lib/site/seo.ts, also present in the JSON-LD on
 * https://wolfpackwashnc.com/ . The site footer does not link any other profile.
 * No YouTube, TikTok, LinkedIn, X, Nextdoor, Yelp, Pinterest, or Threads URL
 * was found in the repo or on those pages.
 */
export const socialProfiles = [
  { name: "Facebook", href: "https://www.facebook.com/wolfpackwashnc" },
  { name: "Instagram", href: "https://www.instagram.com/wolfpackwashnc" },
] as const;

export function shareLinks(canonical: string, title: string) {
  const url = encodeURIComponent(canonical);
  const text = encodeURIComponent(title);
  return [
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { name: "X", href: `https://twitter.com/intent/tweet?url=${url}&text=${text}` },
    { name: "Email", href: `mailto:?subject=${text}&body=${url}` },
  ] as const;
}
