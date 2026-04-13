export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const siteConfig = {
  name: "Wolf Pack Wash",
  domain: "https://wolfpackwashnc.com",
  phoneDisplay: "(919) 738-5394",
  phoneHref: "tel:+19197385394",
  primaryCta: {
    label: "Get Free Quote",
    href: "/contact",
  },
  secondaryCta: {
    label: "Call Now",
    href: "tel:+19197385394",
  },
  heroVideo: {
    src: "https://wolfpackwashnc.com/wp-content/uploads/2025/05/Scene-4-Crew-at-Work-Shot-5.mp4",
    mobileSrc: "https://wolfpackwashnc.com/wp-content/uploads/2025/05/Scene-4-Crew-at-Work-Shot-5.mp4",
    poster: "/images/hero-poster.jpg",
  },
  nav: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "House Washing", href: "/house-washing" },
        { label: "Window Cleaning", href: "/window-cleaning" },
        { label: "Gutter Cleaning", href: "/gutter-cleaning" },
        { label: "Concrete Pressure Washing", href: "/concrete-pressure-washing" },
        { label: "Deck Pressure Washing", href: "/deck-pressure-washing" },
        { label: "Driveway Pressure Washing", href: "/driveway-pressure-washing" },
        { label: "Fence Pressure Washing", href: "/fence-pressure-washing" },
        { label: "Sidewalk Pressure Washing", href: "/sidewalk-pressure-washing" },
        { label: "Soft Washing", href: "/soft-washing" },
        { label: "Holiday Lights", href: "/holiday-lights-installation" },
        { label: "Permanent Lighting", href: "/permanent-lighting" },
        { label: "Exterior Care Plan", href: "/maintenance-plan" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "About", href: "/about-us" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  serviceCards: [
    "House Washing",
    "Window Cleaning",
    "Gutter Cleaning",
    "Concrete Cleaning",
    "Holiday Lights",
    "Permanent Lighting",
  ],
  recurringPlan: {
    name: "Exterior Care Plan",
    tiers: [
      {
        name: "Starter",
        positioning: "Low-friction entry point",
        highlights: ["Seasonal maintenance reminders", "Member-only pricing access", "Easy annual upkeep"],
      },
      {
        name: "Preferred",
        positioning: "Best value for most homes",
        highlights: ["Priority scheduling", "Broader service savings", "Built for repeat exterior upkeep"],
      },
      {
        name: "Signature",
        positioning: "Premium care and priority treatment",
        highlights: ["Top-tier scheduling priority", "Highest service savings", "White-glove recurring care"],
      },
    ],
  },
} as const;
