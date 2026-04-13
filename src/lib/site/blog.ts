export const blogPosts = [
  {
    slug: "how-often-should-you-wash-your-house-in-north-carolina",
    title: "How Often Should You Wash Your House in North Carolina?",
    description:
      "A practical guide for homeowners dealing with pollen, humidity, algae, and grime buildup in North Carolina.",
    category: "House Washing",
    readTime: "4 min read",
    publishedAt: "2026-04-12",
    body: [
      "North Carolina homes deal with pollen, humidity, algae, and seasonal grime that can build up fast. For many homeowners, a professional house wash once a year is a strong baseline. Homes with more shade, more moisture, or visible green buildup may need service sooner.",
      "The right timing depends on how quickly the siding starts looking dull, dirty, or streaked. If the home is already showing algae or dark buildup, waiting usually does not make the problem cheaper or easier to solve.",
      "The biggest goal is not just appearance. Routine washing also helps protect surfaces, reduce buildup, and keep the property looking maintained instead of neglected.",
    ],
  },
  {
    slug: "why-gutter-cleaning-matters-more-than-most-homeowners-think",
    title: "Why Gutter Cleaning Matters More Than Most Homeowners Think",
    description:
      "Overflow, drainage problems, and preventable exterior damage often start with neglected gutters.",
    category: "Gutter Cleaning",
    readTime: "3 min read",
    publishedAt: "2026-04-12",
    body: [
      "Gutter cleaning is easy to ignore until water starts spilling over the edge during a storm. By that point, the system is already failing to move water the way it should.",
      "Clogged gutters can contribute to overflow, staining, drainage issues, and extra wear on parts of the home that are supposed to stay protected. That is why regular cleaning is often less about convenience and more about prevention.",
      "For many homeowners, bundling gutter cleaning with house washing or another exterior service is the simplest way to stay ahead of the problem without adding more scheduling headaches.",
    ],
  },
  {
    slug: "is-professional-window-cleaning-worth-it",
    title: "Is Professional Window Cleaning Worth It?",
    description:
      "What homeowners actually get from professional window cleaning beyond just cleaner glass.",
    category: "Window Cleaning",
    readTime: "3 min read",
    publishedAt: "2026-04-12",
    body: [
      "Professional window cleaning does more than make the glass look nicer for a day. It improves natural light, sharpens the look of the whole property, and helps the home feel cleaner overall.",
      "For many homeowners, the real value is convenience. Instead of treating window cleaning like a separate project to keep putting off, it becomes an easy add-on during a broader exterior refresh.",
      "When the process is simple and the result is obvious, window cleaning becomes one of the easiest services to justify because the payoff is visible almost immediately.",
    ],
  },
] as const;

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
