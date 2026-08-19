import Link from "next/link";
import { siteConfig } from "@/lib/site/config";

const cards: Record<string, { href: string; body: string; image: string }> = {
  "House Washing": {
    href: "/house-washing",
    body: "Remove pollen, algae, mildew, and grime with a soft-wash process that's safe on siding and delivers immediate curb appeal.",
    image: "/service-images/house-washing.webp",
  },
  "Exterior Painting": {
    href: "/exterior-painting",
    body: "Durable exterior repaints - siding, trim, doors, and shutters - with proper prep and premium coatings that make your home look new again.",
    image: "/service-images/exterior-painting.jpg",
  },
  "Roof Washing": {
    href: "/roof-washing",
    body: "Safely remove algae, black streaks, and lichen from your roof with soft washing - protecting your shingles and extending roof life.",
    image: "/service-images/roof-washing.webp",
  },
  "Window Cleaning": {
    href: "/window-cleaning",
    body: "Streak-free windows inside and out, more natural light, and a noticeably sharper look on every visit.",
    image: "/service-images/window-cleaning.webp",
  },
  "Gutter Cleaning": {
    href: "/gutter-cleaning",
    body: "Keep water moving and protect your home from overflow damage, fascia rot, and foundation issues.",
    image: "/service-images/gutter-cleaning.webp",
  },
  "Fence & Deck Cleaning": {
    href: "/fence-deck-cleaning",
    body: "Restore both surfaces in a single visit - removing mold, mildew, and weathered buildup so your outdoor space looks sharp again.",
    image: "/service-images/fence-deck-cleaning.webp",
  },
  "Concrete Cleaning": {
    href: "/concrete-pressure-washing",
    body: "Pressure wash driveways, walkways, and patios clean so the whole property feels maintained and sharp.",
    image: "/service-images/concrete-cleaning.webp",
  },
  "Holiday Lights": {
    href: "/holiday-lights-installation",
    body: "Professional holiday lighting installs that look polished, save you hours on a ladder, and come down cleanly when the season ends.",
    image: "/service-images/holiday-lights.webp",
  },
  "Permanent Lighting": {
    href: "/permanent-lighting",
    body: "Permanent RGB exterior lighting that keeps your home looking dialed in 365 days a year - any color, any occasion.",
    image: "/service-images/permanent-lighting.webp",
  },
};

export function ServiceGrid() {
  return (
    <section className="bg-[var(--surface-0)] py-16 text-[var(--ink)] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Our services</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">Everything your home's exterior needs - under one roof.</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
            Pick one service or bundle several. We keep the quote process fast and the scheduling flexible so you can get it done without the hassle.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {siteConfig.serviceCards.map((service) => {
            const card = cards[service];
            return (
              <Link
                key={service}
                href={card?.href ?? "/services"}
                className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-3xl border border-[var(--hairline)] transition duration-300 hover:-translate-y-0.5 hover:border-[#C81920]/60 hover:shadow-[0_12px_36px_rgba(200,25,32,0.22)]"
              >
                {card?.image && (
                  <img
                    src={card.image}
                    alt={service}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,17,27,0.96)_0%,rgba(7,17,27,0.70)_45%,rgba(7,17,27,0.18)_100%)]" />
                <div className="relative p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-snug text-white">{service}</h3>
                    <span className="mt-0.5 shrink-0 text-[#C81920] transition duration-200 group-hover:translate-x-1">→</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    {card?.body ?? "Get the job done right with a clear quote and fast scheduling."}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
