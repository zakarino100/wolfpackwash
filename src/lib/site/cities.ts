import type { Metadata } from "next";
import { buildMetadata } from "@/lib/site/seo";

/**
 * City landing pages.
 *
 * Add a town by writing a `cityPages` entry for a slug that already exists in
 * `cityCatalog`. The route, metadata, and sitemap pick up published entries
 * only. Catalog rows without copy are not routes.
 *
 * Durham is in the catalog because repo JSON-LD lists it. Live /contact and
 * /about-us do not. Do not publish /durham until that public copy is confirmed.
 */

export type CityLink = {
  href: string;
  label: string;
};

export type CityServiceGroup = {
  heading: string;
  paragraphs: string[];
  links: CityLink[];
};

export type CityStep = {
  title: string;
  body: string;
  image?: string;
};

export type CityFaq = {
  q: string;
  a: string;
};

export type CityPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type CityCatalogEntry = {
  slug: string;
  name: string;
  neighborSlugs: readonly string[];
};

export type CityPageContent = {
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  serviceType: string;
  intro: string[];
  /** Display names from the live /contact service-area line, excluding this city. */
  alsoServe: string[];
  serviceHeading: string;
  serviceIntro: string;
  serviceGroups: CityServiceGroup[];
  localHeading: string;
  localParagraphs: string[];
  localLinks: CityLink[];
  visitHeading: string;
  visitIntro: string;
  visitSteps: CityStep[];
  proofHeading: string;
  proofIntro: string;
  photos: CityPhoto[];
  proofLinks: CityLink[];
  faqs: CityFaq[];
  closingHeading: string;
  closingParagraphs: string[];
  relatedLinks: CityLink[];
};

export const cityCatalog = [
  { slug: "raleigh", name: "Raleigh", neighborSlugs: ["cary", "apex"] },
  { slug: "cary", name: "Cary", neighborSlugs: ["raleigh", "apex", "morrisville"] },
  { slug: "apex", name: "Apex", neighborSlugs: ["cary", "holly-springs"] },
  { slug: "holly-springs", name: "Holly Springs", neighborSlugs: ["apex", "fuquay-varina"] },
  { slug: "morrisville", name: "Morrisville", neighborSlugs: ["cary", "raleigh"] },
  { slug: "fuquay-varina", name: "Fuquay-Varina", neighborSlugs: ["holly-springs", "garner"] },
  { slug: "garner", name: "Garner", neighborSlugs: ["raleigh", "fuquay-varina"] },
  { slug: "durham", name: "Durham", neighborSlugs: ["raleigh", "morrisville"] },
] as const satisfies readonly CityCatalogEntry[];

export type CitySlug = (typeof cityCatalog)[number]["slug"];

const cityPages: Partial<Record<CitySlug, CityPageContent>> = {
  raleigh: {
    title: "House Washing & Exterior Cleaning in Raleigh, NC",
    description:
      "House washing Raleigh NC. Wolf Pack Wash soft-washes homes and handles roofs, gutters, windows, and concrete. Same-day quotes at (984) 600-7038.",
    keywords: [
      "house washing Raleigh NC",
      "soft wash Raleigh NC",
      "exterior cleaning Raleigh",
      "pressure washing Raleigh NC",
      "roof washing Raleigh NC",
      "gutter cleaning Raleigh NC",
    ],
    eyebrow: "Raleigh, NC",
    serviceType: "House washing",
    intro: [
      "Wolf Pack Wash does house washing and exterior cleaning in Raleigh, NC. We're not a franchise or a call center — we're a real local crew that stands behind every job we do.",
    ],
    alsoServe: ["Cary", "Apex", "Holly Springs", "Morrisville", "Fuquay-Varina", "Garner"],
    serviceHeading: "Exterior services we offer in Raleigh",
    serviceIntro:
      "House washing is the job most Raleigh homeowners call about. Soft washing is how we do it. The rest of the exterior can be quoted in the same visit.",
    serviceGroups: [
      {
        heading: "House washing and soft washing",
        paragraphs: [
          "House washing in Raleigh is a soft wash. We use low-pressure water, about what a garden hose puts out, and a biodegradable cleaning solution. It lifts pollen, algae, mold, and mildew off vinyl, brick, stucco, and wood siding.",
          "High pressure is the wrong tool for most siding. It can damage trim and painted surfaces. Soft washing treats the growth, so the result lasts longer than blasting the film off the surface.",
        ],
        links: [
          { href: "/house-washing", label: "House washing" },
          { href: "/soft-washing", label: "Soft washing" },
        ],
      },
      {
        heading: "Roof washing, gutters, and windows",
        paragraphs: [
          "Those black streaks on a roof are algae, not just shingles that got old. We soft-wash roofs. High pressure can blast the granules off the shingles, so we don't use it up there.",
          "Gutters are the other half of a wet season. Leaves pack the trough, then water spills onto fascia, siding, and the foundation. Window cleaning is what makes a house wash look finished from the street. Streaked glass keeps the front of the house looking undone.",
        ],
        links: [
          { href: "/roof-washing", label: "Roof washing" },
          { href: "/gutter-cleaning", label: "Gutter cleaning" },
          { href: "/window-cleaning", label: "Window cleaning" },
        ],
      },
      {
        heading: "Driveways, concrete, decks, and fences",
        paragraphs: [
          "Driveways, sidewalks, patios, decks, and fences are pressure-washing jobs. We lift oil stains, tire marks, algae, and weathered buildup. Book them with a house wash when you want the whole exterior handled in one visit. Bundle services and save.",
        ],
        links: [
          { href: "/driveway-pressure-washing", label: "Driveway pressure washing" },
          { href: "/concrete-pressure-washing", label: "Concrete pressure washing" },
          { href: "/sidewalk-pressure-washing", label: "Sidewalk pressure washing" },
          { href: "/deck-pressure-washing", label: "Deck pressure washing" },
          { href: "/fence-pressure-washing", label: "Fence pressure washing" },
          { href: "/fence-deck-cleaning", label: "Fence and deck cleaning" },
        ],
      },
      {
        heading: "Holiday lighting, permanent lighting, and the Exterior Care Plan",
        paragraphs: [
          "Holiday light installation is quoted on its own. Tell us what you want lit and we'll price the install. Permanent RGB lighting is a separate project if you want color on the house year-round.",
          "The Exterior Care Plan is how you stop chasing appointments every spring. Starter, Preferred, and Signature. Members get member-only pricing and priority scheduling. We walk through the exact scope when you sign up.",
        ],
        links: [
          { href: "/holiday-lights-installation", label: "Holiday light installation" },
          { href: "/permanent-lighting", label: "Permanent lighting" },
          { href: "/maintenance-plan", label: "Exterior Care Plan" },
        ],
      },
      {
        heading: "Exterior painting",
        paragraphs: [
          "We also paint exteriors. Siding, trim, doors, and shutters, with prep before the coating goes on.",
        ],
        links: [{ href: "/exterior-painting", label: "Exterior painting" }],
      },
    ],
    localHeading: "Why Raleigh homes need regular exterior care",
    localParagraphs: [
      "Raleigh homes sit under a lot of oak canopy. Spring pollen films siding, glass, and concrete. Humidity keeps shaded walls and north-facing siding damp, and that is where algae and mildew show up first. In fall, oak leaves fill gutters ahead of winter rain. Red clay from the yard tracks onto driveways and walkways and holds a stain.",
      "A house wash once a year is a solid baseline for many North Carolina homes, often after pollen season. Heavy tree cover or north-facing walls may need it more than once a year.",
    ],
    localLinks: [
      {
        href: "/blog/how-often-should-you-wash-your-house-in-north-carolina",
        label: "Read: How often should you wash your house in North Carolina?",
      },
    ],
    visitHeading: "How a visit works",
    visitIntro:
      "Show up on time, do the work right, and communicate clearly from the first quote to the finished job. That is the whole visit.",
    visitSteps: [
      {
        title: "Get a same-day quote",
        body: "Tell us the address and what you want done. Call (984) 600-7038 or use the quote form. We respond the same day with pricing and the next open date. No pushy sales.",
        image: "/step-images/get-quote.webp",
      },
      {
        title: "We walk the property",
        body: "The crew shows up on time, walks the house, and confirms the scope before the wash starts. Siding and roofs get a soft wash. Concrete, driveways, decks, fences, and sidewalks get pressure.",
        image: "/step-images/house-wash.webp",
      },
      {
        title: "You see the result",
        body: "Pollen, algae, and grime come off, and you can see the difference when we finish. If the job isn't right, we come back and fix it.",
        image: "/step-images/clean-result.webp",
      },
    ],
    proofHeading: "Proof from the Triangle",
    proofIntro:
      "These are Triangle jobs from our gallery. House washing, a roof, gutters, and a driveway.",
    photos: [
      {
        src: "/gallery-images/real-house-wash.webp",
        alt: "House wash on a Triangle home",
        caption: "House wash, Triangle",
      },
      {
        src: "/gallery-images/real-roof.webp",
        alt: "Roof soft wash on a Triangle home",
        caption: "Roof soft wash, Triangle",
      },
      {
        src: "/gallery-images/real-gutter.webp",
        alt: "Gutter cleaning on a Triangle home",
        caption: "Gutter cleaning, Triangle",
      },
      {
        src: "/gallery-images/real-driveway.jpg",
        alt: "Driveway pressure washing on a Triangle home",
        caption: "Driveway, Triangle",
      },
    ],
    proofLinks: [
      { href: "/gallery", label: "See the gallery" },
      {
        href: "/blog/why-gutter-cleaning-matters-more-than-most-homeowners-think",
        label: "Why gutter cleaning matters",
      },
      {
        href: "/blog/is-professional-window-cleaning-worth-it",
        label: "Is professional window cleaning worth it?",
      },
    ],
    faqs: [
      {
        q: "How does pricing work for house washing in Raleigh, NC?",
        a: "We don't publish a price list. Tell us the address and the services you want. Call (984) 600-7038 or use the quote form. We respond the same day with pricing and the next open date. No pushy sales.",
      },
      {
        q: "Do you soft wash or pressure wash houses in Raleigh?",
        a: "Houses get a soft wash: low pressure and a cleaning solution, safe for vinyl, brick, stucco, and wood siding. Concrete, driveways, decks, fences, and sidewalks get pressure washing. Roofs are soft-washed, because high pressure can blast granules off the shingles.",
      },
      {
        q: "How often should a Raleigh house be washed?",
        a: "Many North Carolina homes do well with a house wash once a year, often after pollen season. Heavy tree cover or north-facing siding may need it more than once a year.",
      },
      {
        q: "Can I bundle a house wash with other exterior work?",
        a: "Yes. Bundle services and save. House washing with window cleaning and gutter cleaning is a common combination. A driveway or a roof can be quoted in the same visit. We price the services you actually want.",
      },
      {
        q: "Can I stay on a schedule instead of booking every spring?",
        a: "Yes. The Exterior Care Plan has Starter, Preferred, and Signature tiers. Members get member-only pricing and priority scheduling. We walk through the exact scope when you sign up.",
      },
      {
        q: "What if the wash isn't right?",
        a: "If the job isn't right, we come back and fix it.",
      },
    ],
    closingHeading: "Ready for a same-day quote?",
    closingParagraphs: [
      "Send the address and the services you want. We'll reply the same day with pricing and the next open date.",
      "If you'd rather not rebook every spring, start with the Exterior Care Plan.",
    ],
    relatedLinks: [
      { href: "/house-washing", label: "House washing" },
      { href: "/soft-washing", label: "Soft washing" },
      { href: "/roof-washing", label: "Roof washing" },
      { href: "/gutter-cleaning", label: "Gutter cleaning" },
      { href: "/window-cleaning", label: "Window cleaning" },
      { href: "/driveway-pressure-washing", label: "Driveway pressure washing" },
      { href: "/holiday-lights-installation", label: "Holiday light installation" },
      { href: "/maintenance-plan", label: "Exterior Care Plan" },
      { href: "/contact", label: "Same-day quote" },
      { href: "/blog", label: "Blog" },
      { href: "/services", label: "All services" },
    ],
  },
};

export type PublishedCity = CityCatalogEntry & CityPageContent & { path: string };

function isCitySlug(slug: string): slug is CitySlug {
  return cityCatalog.some((entry) => entry.slug === slug);
}

export function getPublishedCity(slug: string): PublishedCity | undefined {
  if (!isCitySlug(slug)) return undefined;
  const area = cityCatalog.find((entry) => entry.slug === slug);
  const content = cityPages[slug];
  if (!area || !content) return undefined;
  return {
    slug: area.slug,
    name: area.name,
    neighborSlugs: area.neighborSlugs,
    ...content,
    path: `/${area.slug}`,
  };
}

export function getPublishedCities(): PublishedCity[] {
  return cityCatalog.flatMap((entry) => {
    const city = getPublishedCity(entry.slug);
    return city ? [city] : [];
  });
}

export function getPublishedNeighbors(city: PublishedCity): PublishedCity[] {
  return city.neighborSlugs.flatMap((slug) => {
    const neighbor = getPublishedCity(slug);
    return neighbor ? [neighbor] : [];
  });
}

export function buildCityMetadata(city: PublishedCity): Metadata {
  const metadata = buildMetadata({
    title: city.title,
    description: city.description,
    path: city.path,
    keywords: city.keywords,
  });
  const fullTitle = `${city.title} | Wolf Pack Wash`;

  return {
    ...metadata,
    title: { absolute: fullTitle },
    openGraph: {
      ...metadata.openGraph,
      title: fullTitle,
    },
    twitter: {
      ...metadata.twitter,
      card: "summary_large_image",
      title: fullTitle,
    },
  };
}
