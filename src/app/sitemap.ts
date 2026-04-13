import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site/config";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: RouteConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.95, changeFrequency: "monthly" },
  { path: "/services", priority: 0.95, changeFrequency: "monthly" },
  { path: "/house-washing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/soft-washing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/window-cleaning", priority: 0.9, changeFrequency: "monthly" },
  { path: "/gutter-cleaning", priority: 0.9, changeFrequency: "monthly" },
  { path: "/concrete-pressure-washing", priority: 0.88, changeFrequency: "monthly" },
  { path: "/driveway-pressure-washing", priority: 0.88, changeFrequency: "monthly" },
  { path: "/deck-pressure-washing", priority: 0.85, changeFrequency: "monthly" },
  { path: "/fence-pressure-washing", priority: 0.85, changeFrequency: "monthly" },
  { path: "/sidewalk-pressure-washing", priority: 0.85, changeFrequency: "monthly" },
  { path: "/holiday-lights-installation", priority: 0.88, changeFrequency: "monthly" },
  { path: "/permanent-lighting", priority: 0.88, changeFrequency: "monthly" },
  { path: "/maintenance-plan", priority: 0.88, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.85, changeFrequency: "weekly" },
  { path: "/reviews", priority: 0.85, changeFrequency: "weekly" },
  { path: "/residential", priority: 0.82, changeFrequency: "monthly" },
  { path: "/commercial", priority: 0.82, changeFrequency: "monthly" },
  { path: "/about-us", priority: 0.80, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.80, changeFrequency: "weekly" },
  { path: "/podcast", priority: 0.60, changeFrequency: "monthly" },
  { path: "/wolfpack-training-academy", priority: 0.60, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.30, changeFrequency: "yearly" },
  { path: "/terms-of-service", priority: 0.30, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
