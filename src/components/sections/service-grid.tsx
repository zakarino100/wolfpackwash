import Link from "next/link";
import { siteConfig } from "@/lib/site/config";

const cards: Record<string, { href: string; body: string; image: string }> = {
  "House Washing": {
    href: "/house-washing",
    body: "Remove pollen, algae, mildew, and grime with a soft-wash process that's safe on siding and delivers immediate curb appeal.",
    image: "/service-images/house-washing.png",
  },
  "Roof Washing": {
    href: "/roof-washing",
    body: "Safely remove algae, black streaks, and lichen from your roof with soft washing - protecting your shingles and extending roof life.",
    image: "/service-images/roof-washing.png",
  },
  "Window Cleaning": {
    href: "/window-cleaning",
    body: "Streak-free windows inside and out, more natural light, and a noticeably sharper look on every visit.",
    image: "/service-images/window-cleaning.png",
  },
  "Gutter Cleaning": {
    href: "/gutter-cleaning",
    body: "Keep water moving and protect your home from overflow damage, fascia rot, and foundation issues.",
    image: "/service-images/gutter-cleaning.png",
  },
  "Fence & Deck Cleaning": {
    href: "/fence-deck-cleaning",
    body: "Restore both surfaces in a single visit - removing mold, mildew, and weathered buildup so your outdoor space looks sharp again.",
    image: "/service-images/fence-deck-cleaning.png",
  },
  "Concrete Cleaning": {
    href: "/concrete-pressure-washing",
    body: "Pressure wash driveways, walkways, and patios clean so the whole property feels maintained and sharp.",
    image: "/service-images/concrete-cleaning.png",
  },
  "Holiday Lights": {
    href: "/holiday-lights-installation",
    body: "Professional holiday lighting installs that look polished, save you hours on a ladder, and come down cleanly when the season ends.",
    image: "/service-images/holiday-lights.png",
  },
  "Permanent Lighting": {
    href: "/permanent-lighting",
    body: "Permanent RGB exterior lighting that keeps your home looking dialed in 365 days a year - any color, any occasion.",
    image: "/service-images/permanent-lighting.png",
  },
};

export function ServiceGrid() {
  return (
    <section className="bg-[#07111b] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Our services</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Everything your home's exterior needs - under one roof.</h2>
          <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
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
                className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 transition duration-300 hover:border-[#C81920]/50 hover:shadow-[0_8px_32px_rgba(200,25,32,0.18)]"
              >
                {card?.image && (
                  <img
                    src={card.image}
                    alt={service}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,17,27,0.97)_0%,rgba(7,17,27,0.72)_48%,rgba(7,17,27,0.28)_100%)] transition duration-300 group-hover:opacity-90" />

                <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(to_bottom,rgba(7,17,27,0.48),transparent)]" />

                <div className="relative p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-snug text-white">{service}</h3>
                    <span className="mt-0.5 shrink-0 text-[#C81920] transition duration-200 group-hover:translate-x-1">→</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/72 transition duration-300 group-hover:text-white/88">
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
