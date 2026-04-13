import Link from "next/link";
import { siteConfig } from "@/lib/site/config";

const cards: Record<string, { href: string; body: string }> = {
  "House Washing": {
    href: "/house-washing",
    body: "Remove pollen, algae, mildew, and grime with a soft-wash process that's safe on siding and delivers immediate curb appeal.",
  },
  "Roof Washing": {
    href: "/roof-washing",
    body: "Safely remove algae, black streaks, and lichen from your roof with soft washing - protecting your shingles and extending roof life.",
  },
  "Window Cleaning": {
    href: "/window-cleaning",
    body: "Streak-free windows inside and out, more natural light, and a noticeably sharper look on every visit.",
  },
  "Gutter Cleaning": {
    href: "/gutter-cleaning",
    body: "Keep water moving and protect your home from overflow damage, fascia rot, and foundation issues.",
  },
  "Fence & Deck Cleaning": {
    href: "/fence-deck-cleaning",
    body: "Restore both surfaces in a single visit - removing mold, mildew, and weathered buildup from fences and decks so your outdoor space looks sharp again.",
  },
  "Concrete Cleaning": {
    href: "/concrete-pressure-washing",
    body: "Pressure wash driveways, walkways, and patios clean so the whole property feels maintained and sharp.",
  },
  "Holiday Lights": {
    href: "/holiday-lights-installation",
    body: "Professional holiday lighting installs that look polished, save you hours on a ladder, and come down cleanly when the season ends.",
  },
  "Permanent Lighting": {
    href: "/permanent-lighting",
    body: "Permanent RGB exterior lighting that keeps your home looking dialed in 365 days a year - any color, any occasion.",
  },
};

export function ServiceGrid() {
  return (
    <section className="bg-[#0a1520] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Our services</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Everything your home's exterior needs - under one roof.</h2>
          <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
            Pick one service or bundle several. We keep the quote process fast and the scheduling flexible so you can get it done without the hassle.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {siteConfig.serviceCards.map((service) => (
            <Link
              key={service}
              href={cards[service]?.href ?? "/services"}
              className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:border-[#C81920]/40 hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{service}</h3>
                <span className="text-[#C81920] transition group-hover:translate-x-1">→</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/74">
                {cards[service]?.body ?? "Get the job done right with a clear quote and fast scheduling."}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
