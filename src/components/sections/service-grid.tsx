import Link from "next/link";
import { siteConfig } from "@/lib/site/config";

const hrefMap: Record<string, string> = {
  "House Washing": "/house-washing",
  "Window Cleaning": "/window-cleaning",
  "Gutter Cleaning": "/gutter-cleaning",
  "Concrete Cleaning": "/concrete-pressure-washing",
  "Holiday Lights": "/holiday-lights-installation",
  "Permanent Lighting": "/permanent-lighting",
};

export function ServiceGrid() {
  return (
    <section className="bg-neutral-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Core services</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Built to convert on mobile, still strong on desktop.</h2>
          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Keep the choices clear, keep the value obvious, and make the quote path frictionless.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {siteConfig.serviceCards.map((service) => (
            <Link
              key={service}
              href={hrefMap[service] ?? "/services"}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-amber-300/40 hover:bg-white/8"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{service}</h3>
                <span className="text-amber-300 transition group-hover:translate-x-1">→</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Cleaner positioning, better visuals, stronger trust cues, and direct quote intent.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
