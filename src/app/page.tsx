import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { ServiceGrid } from "@/components/sections/service-grid";
import { TriangleCounter } from "@/components/sections/triangle-counter";
import { PlanSection } from "@/components/sections/plan-section";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { ServiceHighlights, ConversionBand, ContactSection, CtaBand } from "@/components/sections/content-sections";
import { pageSeo } from "@/lib/site/page-seo";

export const metadata: Metadata = pageSeo.home;

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ServiceGrid />
      <TriangleCounter />
      <PlanSection />
      <ServiceHighlights />
      <GalleryPreview />
      <ConversionBand />
      <ContactSection sourcePage="/" />
      <CtaBand />
    </>
  );
}
