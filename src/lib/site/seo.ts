import type { Metadata } from "next";
import { siteConfig } from "@/lib/site/config";

type SEOInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

const defaultKeywords = [
  "Wolf Pack Wash",
  "house washing",
  "window cleaning",
  "gutter cleaning",
  "pressure washing",
  "exterior cleaning",
  "Raleigh NC pressure washing",
  "Wake County exterior cleaning",
];

export function buildMetadata({ title, description, path, keywords = [] }: SEOInput): Metadata {
  const url = new URL(path, siteConfig.domain).toString();
  const mergedKeywords = [...new Set([...defaultKeywords, ...keywords])];

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
          url: "/logos/wolfpack_wash_shield_transparent.png",
          width: 1200,
          height: 1200,
          alt: "Wolf Pack Wash shield logo",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logos/wolfpack_wash_shield_transparent.png"],
    },
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.domain}/logos/wolfpack_wash_shield_transparent.png`,
    url: siteConfig.domain,
    telephone: siteConfig.phoneDisplay,
    areaServed: ["Raleigh", "Wake County", "Triangle"],
    serviceType: [
      "House Washing",
      "Window Cleaning",
      "Gutter Cleaning",
      "Concrete Cleaning",
      "Holiday Lights Installation",
      "Permanent Lighting",
    ],
    sameAs: [],
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
