import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    `${process.env.REPLIT_DEV_DOMAIN}`,
    "*.replit.dev",
    "*.janeway.replit.dev",
  ],
};

export default nextConfig;
