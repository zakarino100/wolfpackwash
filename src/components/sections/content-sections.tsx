import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site/config";
import { QuoteForm } from "@/components/ui/quote-form";

export function ServiceHighlights() {
  const items = [
    {
      title: "House Washing",
      body: "Soft-wash away pollen, mildew, algae, and grime so your home looks sharp from the curb. Safe on all siding types — vinyl, brick, stucco, and wood.",
      href: "/house-washing",
    },
    {
      title: "Window Cleaning",
      body: "Streak-free glass inside and out, better natural light, and a noticeably cleaner look that pairs perfectly with a house wash.",
      href: "/window-cleaning",
    },
    {
      title: "Gutter Cleaning",
      body: "Clear gutters, moving water, and no overflow damage before the next heavy rain. Bundle it with a house wash and get the whole exterior handled in one visit.",
      href: "/gutter-cleaning",
    },
    {
      title: "Holiday & Permanent Lighting",
      body: "Professional lighting installs that make your home stand out. Seasonal holiday lights or permanent RGB lighting built to last year-round.",
      href: "/holiday-lights-installation",
    },
  ];

  return (
    <section className="bg-[#07111b] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">What we do</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Every service designed to make your property look better fast.</h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              One call covers the whole exterior. House washing, windows, gutters, concrete, lighting — handled by a team that shows up on time and gets it done right.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Link
                href={item.href}
                className="block rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.16)] transition duration-200 hover:-translate-y-0.5 hover:border-[#C81920]/40 hover:bg-white/[0.07]"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConversionBand() {
  return (
    <section className="bg-[#0a1520] py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.18)] sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Why homeowners choose us</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Fast response, clean results, and a team that actually shows up.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Wolf Pack Wash is built around reliability and results. We quote fast, schedule around you, and deliver a cleaner property every single visit.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-3 text-sm text-white/75">
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">Same-day quote response on most requests</div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">100% satisfaction guaranteed on every job</div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">Serving Raleigh, Cary, Apex, Holly Springs & beyond</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-[#07111b] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#C81920]/20 bg-[linear-gradient(135deg,rgba(200,25,32,0.18),rgba(255,255,255,0.03))] px-6 py-10 text-center shadow-[0_28px_80px_rgba(0,0,0,0.18)] sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Ready to get started?</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Get your free quote today — we'll follow up fast and get you scheduled.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Fill out the quick form, pick your services, and we'll get back to you the same day with pricing and availability. No pressure, no runaround.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={siteConfig.primaryCta.href}
              className="inline-flex rounded-full bg-[#C81920] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(200,25,32,0.30)] transition duration-200 hover:bg-[#a8141a] hover:shadow-[0_20px_48px_rgba(200,25,32,0.38)] active:scale-[0.99]"
            >
              {siteConfig.primaryCta.label}
            </Link>
            <Link
              href={siteConfig.secondaryCta.href}
              className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:border-white/30 hover:bg-white/5 active:scale-[0.99]"
            >
              {siteConfig.secondaryCta.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection({ sourcePage = "/" }: { sourcePage?: string }) {
  return (
    <section className="bg-[#07111b] py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Get your free quote</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Tell us what you need and we'll handle the rest.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Fill out the form and we'll reach out the same day with pricing and next steps. No waiting around, no confusing callbacks.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/75">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">Quick response — most quotes come back the same day</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">Bundle services and save — we cover the whole exterior</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">Flexible scheduling built around your timeline</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <QuoteForm sourcePage={sourcePage} title="Request your free quote" />
        </Reveal>
      </div>
    </section>
  );
}
