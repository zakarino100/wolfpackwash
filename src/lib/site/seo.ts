import type { Metadata } from "next";
import { siteConfig } from "@/lib/site/config";

type SEOInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
};

const defaultKeywords = [
  "Wolf Pack Wash",
  "house washing Raleigh NC",
  "soft washing Raleigh NC",
  "pressure washing Raleigh NC",
  "exterior cleaning Raleigh",
  "window cleaning Raleigh NC",
  "gutter cleaning Raleigh NC",
  "pressure washing Cary NC",
  "pressure washing Apex NC",
  "pressure washing Holly Springs NC",
  "Wake County exterior cleaning",
  "Triangle NC pressure washing",
  "exterior cleaning Triangle area",
];

export function buildMetadata({ title, description, path, keywords = [], ogImage }: SEOInput): Metadata {
  const url = new URL(path, siteConfig.domain).toString();
  const mergedKeywords = [...new Set([...defaultKeywords, ...keywords])];
  const image = ogImage ?? "/logos/wolfpack_wash_shield_transparent.png";

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.domain}/#business`,
    name: siteConfig.name,
    alternateName: "Wolf Pack Wash NC",
    description:
      "Wolf Pack Wash is the Triangle's trusted exterior cleaning company offering house washing, soft washing, window cleaning, gutter cleaning, concrete pressure washing, driveway cleaning, deck washing, fence washing, sidewalk cleaning, holiday light installation, and permanent RGB lighting for homes across Raleigh, Cary, Apex, Holly Springs, and Wake County NC.",
    image: `${siteConfig.domain}/logos/wolfpack_wash_shield_transparent.png`,
    logo: `${siteConfig.domain}/logos/wolfpack_wash_shield_transparent.png`,
    url: siteConfig.domain,
    telephone: siteConfig.phoneDisplay,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Check",
    areaServed: [
      { "@type": "City", name: "Raleigh", sameAs: "https://en.wikipedia.org/wiki/Raleigh,_North_Carolina" },
      { "@type": "City", name: "Cary", sameAs: "https://en.wikipedia.org/wiki/Cary,_North_Carolina" },
      { "@type": "City", name: "Apex", sameAs: "https://en.wikipedia.org/wiki/Apex,_North_Carolina" },
      { "@type": "City", name: "Holly Springs", sameAs: "https://en.wikipedia.org/wiki/Holly_Springs,_North_Carolina" },
      { "@type": "City", name: "Morrisville" },
      { "@type": "City", name: "Fuquay-Varina" },
      { "@type": "City", name: "Garner" },
      { "@type": "City", name: "Durham" },
      { "@type": "AdministrativeArea", name: "Wake County, NC" },
      { "@type": "AdministrativeArea", name: "Triangle Area, NC" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Exterior Cleaning Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Washing", url: `${siteConfig.domain}/house-washing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soft Washing", url: `${siteConfig.domain}/soft-washing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Window Cleaning", url: `${siteConfig.domain}/window-cleaning` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Cleaning", url: `${siteConfig.domain}/gutter-cleaning` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Pressure Washing", url: `${siteConfig.domain}/concrete-pressure-washing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driveway Pressure Washing", url: `${siteConfig.domain}/driveway-pressure-washing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deck Pressure Washing", url: `${siteConfig.domain}/deck-pressure-washing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fence Pressure Washing", url: `${siteConfig.domain}/fence-pressure-washing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sidewalk Pressure Washing", url: `${siteConfig.domain}/sidewalk-pressure-washing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Holiday Light Installation", url: `${siteConfig.domain}/holiday-lights-installation` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Permanent RGB Lighting", url: `${siteConfig.domain}/permanent-lighting` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Care Plan", url: `${siteConfig.domain}/maintenance-plan` } },
      ],
    },
    sameAs: [
      "https://www.facebook.com/wolfpackwashnc",
      "https://www.instagram.com/wolfpackwashnc",
    ],
  };
}

export function buildServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: new URL(path, siteConfig.domain).toString(),
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.domain,
      telephone: siteConfig.phoneDisplay,
    },
    areaServed: "Raleigh, Cary, Apex, Holly Springs, and Wake County NC",
    serviceType: "Exterior Cleaning",
  };
}

export function buildFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function buildWebPageJsonLd({ title, description, path }: SEOInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: new URL(path, siteConfig.domain).toString(),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    about: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
    },
  };
}
