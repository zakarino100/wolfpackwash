import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: [
    `${process.env.REPLIT_DEV_DOMAIN}`,
    "*.replit.dev",
    "*.janeway.replit.dev",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "wolfpackwashnc.com",
      },
    ],
  },
};

export default nextConfig;
