import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import { buildLocalBusinessJsonLd } from "@/lib/site/seo";
import { ThemeProvider, ThemeNoFlashScript } from "@/components/theme/theme-provider";
import { FunnelProvider } from "@/components/funnel/funnel-context";

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
  title: {
    default: "Wolf Pack Wash | #1 Softwash & Home Services in Raleigh NC",
    template: "%s | Wolf Pack Wash",
  },
  description:
    "Wolf Pack Wash is the Triangle's trusted exterior cleaning company. House washing, soft washing, window cleaning, gutter cleaning, concrete, driveway, deck, fence, sidewalk pressure washing, holiday lights, and permanent lighting in Raleigh, Cary, Apex, Holly Springs, and Wake County NC. Same-day quotes.",
  keywords: [
    "Wolf Pack Wash",
    "softwash Raleigh NC",
    "house washing Raleigh NC",
    "soft washing Raleigh",
    "pressure washing Raleigh NC",
    "exterior cleaning Raleigh",
    "window cleaning Raleigh NC",
    "gutter cleaning Raleigh NC",
    "pressure washing Cary NC",
    "pressure washing Apex NC",
    "pressure washing Holly Springs NC",
    "Wake County exterior cleaning",
    "Triangle NC pressure washing",
    "driveway pressure washing Raleigh",
    "deck cleaning Raleigh NC",
    "holiday light installation Raleigh NC",
    "permanent lighting Raleigh NC",
  ],
  icons: {
    icon: [{ url: "/logos/wpw-emblem.png", type: "image/png" }],
    shortcut: ["/logos/wpw-emblem.png"],
    apple: [{ url: "/logos/wpw-emblem.png" }],
  },
  openGraph: {
    title: "Wolf Pack Wash | The Triangle's Best Softwash & Home Services",
    description:
      "House washing, windows, gutters, concrete, driveway, deck, and lighting in Raleigh, Cary, Apex, and Holly Springs NC. Fast quotes, same-day response, 100% satisfaction guaranteed.",
    url: "https://wolfpackwashnc.com",
    siteName: "Wolf Pack Wash",
    images: [
      {
        url: "/logos/wpw-og.png",
        width: 1200,
        height: 630,
        alt: "Wolf Pack Wash - Raleigh NC Home Services",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolf Pack Wash | The Triangle's Best Softwash & Home Services",
    description:
      "House washing, windows, gutters, concrete, driveway, deck, and lighting in Raleigh, Cary, Apex, and Holly Springs NC. Same-day quotes.",
    images: ["/logos/wpw-og.png"],
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
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://wolfpackwashnc.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <ThemeNoFlashScript />
      </head>
      <body className="min-h-full">
        <ThemeProvider />
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <ScrollToTop />
        <FunnelProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <MobileBottomNav />
        </FunnelProvider>
      </body>
    </html>
  );
}
