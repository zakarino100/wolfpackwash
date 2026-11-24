import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: [
    `${process.env.REPLIT_DEV_DOMAIN}`,
    "*.replit.dev",
    "*.janeway.replit.dev",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 480, 640, 768, 1024, 1280, 1600, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    qualities: [60, 75],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "wolfpackwashnc.com" },
    ],
  },
  compress: true,
  async redirects() {
    return [
      // Legacy WordPress numeric post IDs → home
      { source: "/:id(\\d+)", destination: "/", permanent: true },
      // Old blog posts → blog
      { source: "/3-reasons-why-hiring-professional-window-cleaners", destination: "/blog", permanent: true },
      { source: "/diy-gutter-cleaning-why-you-should-reconsider", destination: "/blog", permanent: true },
      { source: "/why-you-should-reconsider", destination: "/blog", permanent: true },
      { source: "/a-core-belief-at-wolf-pack-wash", destination: "/blog", permanent: true },
      { source: "/like-wolf-pack-wash-is-a-great-idea", destination: "/blog", permanent: true },
      { source: "/the-value-of-customer-service-and-experience-a-core-belief", destination: "/blog", permanent: true },
      // Old /pressure-washing slug → house-washing (closest match)
      { source: "/pressure-washing", destination: "/house-washing", permanent: true },
      // Old navigation page
      { source: "/navigation", destination: "/", permanent: true },
      // WP media/attachment sub-paths under known pages → parent page
      { source: "/house-washing/:path+", destination: "/house-washing", permanent: true },
      { source: "/services/:path+", destination: "/services", permanent: true },
      { source: "/commercial/:path+", destination: "/commercial", permanent: true },
      { source: "/residential/:path+", destination: "/residential", permanent: true },
      { source: "/contact/:path+", destination: "/contact", permanent: true },
      { source: "/sidewalk-pressure-washing/:path+", destination: "/sidewalk-pressure-washing", permanent: true },
      { source: "/wolfpack-training-academy/:path+", destination: "/wolfpack-training-academy", permanent: true },
      { source: "/about-us/:path+", destination: "/about-us", permanent: true },
      // Misc orphan WP slugs → relevant pages
      { source: "/scene-4-crew-at-work-shot-4", destination: "/gallery", permanent: true },
      { source: "/scene-4-crew-at-work-shot-5", destination: "/gallery", permanent: true },
      { source: "/astra/:path+", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*\\.webp)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
