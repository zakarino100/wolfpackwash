import Link from "next/link";
import { siteConfig } from "@/lib/site/config";

const cards: Record<string, { href: string; body: string }> = {
  "House Washing": {
    href: "/house-washing",
    body: "Wash away pollen, algae, and grime so the house looks sharp again without risking damage to the siding.",
  },
  "Window Cleaning": {
    href: "/window-cleaning",
    body: "Get cleaner glass, better light, and a stronger overall presentation with a service that bundles easily.",
  },
  "Gutter Cleaning": {
    href: "/gutter-cleaning",
    body: "Keep water flowing, stop overflow headaches, and protect the house before small issues get expensive.",
  },
  "Concrete Cleaning": {
    href: "/concrete-pressure-washing",
    body: "Lift stains and dark buildup off driveways and walkways so the property looks maintained immediately.",
  },
  "Holiday Lights": {
    href: "/holiday-lights-installation",
    body: "Seasonal installs that look professional, save time, and keep the house from looking slapped together.",
  },
  "Permanent Lighting": {
    href: "/permanent-lighting",
    body: "A premium exterior upgrade that keeps the property looking dialed in year-round.",
  },
};

export function ServiceGrid() {
  return (
    <section className="bg-[#0a1520] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
<<<<<<< HEAD
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Core services</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Built to convert on mobile, still strong on desktop.</h2>
          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Keep the choices clear, keep the value obvious, and make the quote path frictionless.
=======
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Core services</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Choose the service you need, see the value fast, and get to a quote without friction.</h2>
          <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
            The homepage should steer visitors into the exact service they care about, make the result feel obvious, and remove hesitation on mobile.
>>>>>>> 50f7ab6 (Polish Wolf Pack Wash site, strengthen SEO, add blog and generated assets)
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {siteConfig.serviceCards.map((service) => (
            <Link
              key={service}
<<<<<<< HEAD
              href={hrefMap[service] ?? "/services"}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#C81920]/40 hover:bg-white/8"
=======
              href={cards[service]?.href ?? "/services"}
              className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:border-amber-300/40 hover:bg-white/[0.08]"
>>>>>>> 50f7ab6 (Polish Wolf Pack Wash site, strengthen SEO, add blog and generated assets)
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{service}</h3>
                <span className="text-[#C81920] transition group-hover:translate-x-1">→</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/74">
                {cards[service]?.body ?? "Get the right service fast, with a cleaner conversion path and stronger visual proof."}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
