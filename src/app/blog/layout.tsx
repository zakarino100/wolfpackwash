import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
