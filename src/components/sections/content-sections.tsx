import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site/config";
import { QuoteCta } from "@/components/funnel/quote-cta";

export function ServiceHighlights() {
  const items = [
    {
      title: "House Washing",
      body: "Soft-wash away pollen, mildew, algae, and grime so your home looks sharp from the curb. Safe on all siding types - vinyl, brick, stucco, and wood.",
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
    <section className="bg-[var(--surface-0)] py-16 text-[var(--ink)] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">What we do</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">Every service designed to make your property look better fast.</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
              One call covers the whole exterior. House washing, windows, gutters, concrete, lighting - handled by a team that shows up on time and gets it done right.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Link
                href={item.href}
                className="block rounded-[2rem] border border-[var(--hairline)] bg-[var(--card)] p-6 shadow-[0_22px_60px_rgba(11,18,32,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#C81920]/40 themed-card"
              >
                <h3 className="text-2xl font-semibold text-[var(--ink-strong)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{item.body}</p>
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
    <section className="bg-[var(--surface-1)] py-16 text-[var(--ink)] sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-[var(--hairline)] bg-[var(--card)] px-6 py-8 shadow-[0_28px_80px_rgba(11,18,32,0.08)] sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center themed-card">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Why homeowners choose us</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">Fast response, clean results, and a team that actually shows up.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
              Wolf Pack Wash is built around reliability and results. We quote fast, schedule around you, and deliver a cleaner property every single visit.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-3 text-sm text-[var(--ink-muted)]">
            <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-0)] px-4 py-4">Same-day quote response on most requests</div>
            <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-0)] px-4 py-4">100% satisfaction guaranteed on every job</div>
            <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-0)] px-4 py-4">Serving Raleigh, Cary, Apex, Holly Springs & beyond</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-[var(--surface-0)] py-16 text-[var(--ink)] sm:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#C81920]/25 bg-[linear-gradient(135deg,rgba(200,25,32,0.16),rgba(200,25,32,0.03))] px-6 py-10 text-center shadow-[0_28px_80px_rgba(11,18,32,0.1)] sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Ready to get started?</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">Get your free quote today - we'll follow up fast and get you scheduled.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
            Pick your services and we'll get back to you the same day with pricing and availability. No pressure, no runaround.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteCta className="inline-flex rounded-full bg-[#C81920] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(200,25,32,0.30)] transition duration-200 hover:bg-[#a8141a] hover:shadow-[0_20px_48px_rgba(200,25,32,0.38)] active:scale-[0.99]">
              {siteConfig.primaryCta.label}
            </QuoteCta>
            <Link
              href={siteConfig.secondaryCta.href}
              className="inline-flex rounded-full border border-[var(--hairline)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition duration-200 hover:border-[var(--accent)]/40 hover:bg-[var(--card)] active:scale-[0.99]"
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
  void sourcePage;
  return (
    <section className="bg-[var(--surface-1)] py-16 text-[var(--ink)] sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Get your free quote</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">Tell us what you need and we'll handle the rest.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
              Tap below to open our quick quote builder. Pick your services, drop your address, and we'll reach out the same day with pricing and next steps.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-[var(--ink-muted)]">
              <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--card)] px-4 py-4 themed-card">Quick response - most quotes come back the same day</div>
              <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--card)] px-4 py-4 themed-card">Bundle services and save - we cover the whole exterior</div>
              <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--card)] px-4 py-4 themed-card">Flexible scheduling built around your timeline</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-col items-start gap-5 rounded-[2rem] border border-[var(--hairline)] bg-[var(--card)] p-7 shadow-[0_28px_80px_rgba(11,18,32,0.08)] themed-card sm:p-8">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--accent)]/12 text-[var(--accent)]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 20c2.5-9 5-13 8-13s5.5 4 8 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M9 7c0-2.2 1.3-4 3-4s3 1.8 3 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--ink-strong)]">Request your free quote</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--ink-muted)]">
                Our 3-step quote builder takes about 30 seconds. No pushy sales - just fast, honest pricing.
              </p>
            </div>
            <QuoteCta className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C81920] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(200,25,32,0.30)] transition duration-200 hover:bg-[#a8141a] active:scale-[0.99] sm:w-auto">
              Start my free quote
            </QuoteCta>
            <a
              href={siteConfig.phoneHref}
              className="text-sm font-semibold text-[var(--ink)] underline-offset-4 hover:underline"
            >
              Or call {siteConfig.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
