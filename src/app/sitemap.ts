import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site/config";

const routes = [
  "/",
  "/about-us",
  "/services",
  "/residential",
  "/commercial",
  "/contact",
  "/house-washing",
  "/window-cleaning",
  "/gutter-cleaning",
  "/concrete-pressure-washing",
  "/deck-pressure-washing",
  "/driveway-pressure-washing",
  "/fence-pressure-washing",
  "/sidewalk-pressure-washing",
  "/holiday-lights-installation",
  "/permanent-lighting",
  "/maintenance-plan",
  "/gallery",
  "/reviews",
  "/blog",
  "/podcast",
  "/wolfpack-training-academy",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/services" || route === "/contact" ? 0.9 : 0.8,
  }));
}
