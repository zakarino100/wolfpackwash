import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import { buildLocalBusinessJsonLd } from "@/lib/site/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wolfpackwashnc.com"),
  title: "Wolf Pack Wash | House Washing, Window Cleaning, Gutters, and Exterior Cleaning",
  description: "Wolf Pack Wash helps homeowners with house washing, window cleaning, gutter cleaning, concrete cleaning, and exterior lighting with fast quotes and strong local service.",
  icons: {
    icon: [
      { url: "/logos/wolfpack_wash_shield_logo_transparent.svg", type: "image/svg+xml" },
      { url: "/logos/wolfpack_wash_shield_transparent.png", type: "image/png" },
    ],
    shortcut: ["/logos/wolfpack_wash_shield_transparent.png"],
    apple: [{ url: "/logos/wolfpack_wash_shield_transparent.png" }],
  },
  openGraph: {
    title: "Wolf Pack Wash | Exterior Cleaning",
    description: "Fast quotes, clean systems, and strong exterior results across the Triangle.",
    url: "https://wolfpackwashnc.com",
    siteName: "Wolf Pack Wash",
    images: [
      {
        url: "/logos/wolfpack_wash_shield_transparent.png",
        width: 1200,
        height: 1200,
        alt: "Wolf Pack Wash shield logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolf Pack Wash | Exterior Cleaning",
    description: "Fast quotes, clean systems, and strong exterior results across the Triangle.",
    images: ["/logos/wolfpack_wash_shield_transparent.png"],
  },
  keywords: [
    "Wolf Pack Wash",
    "house washing",
    "window cleaning",
    "gutter cleaning",
    "pressure washing Raleigh NC",
    "exterior cleaning Wake County",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#07111b] text-white">
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
