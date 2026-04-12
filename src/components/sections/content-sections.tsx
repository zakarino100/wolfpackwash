import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site/config";
import { QuoteForm } from "@/components/ui/quote-form";

export function ServiceHighlights() {
  const items = [
    {
      title: "House Washing",
      body: "The flagship service. Sell the visual transformation, the safe wash process, and the fast curb-appeal win.",
      href: "/house-washing",
    },
    {
      title: "Window Cleaning",
      body: "Clean glass, better light, stronger presentation, and easy upsell potential on the route.",
      href: "/window-cleaning",
    },
    {
      title: "Gutter Cleaning",
      body: "Protection-focused service that pairs naturally with house washing and recurring exterior care.",
      href: "/gutter-cleaning",
    },
    {
      title: "Lighting",
      body: "Use both seasonal holiday lights and permanent lighting to widen perceived capability and average ticket.",
      href: "/holiday-lights-installation",
    },
  ];

  return (
    <section className="bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Positioning</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">The core offer stack should feel simple, premium, and easy to buy.</h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              Every service page should move fast, prove the outcome visually, and make the next step obvious.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Link href={item.href} className="block rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:border-[#C81920]/40 hover:bg-white/[0.07]">
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
    <section className="bg-neutral-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Why it converts</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Fast quote path, strong trust cues, and clear next steps.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              The site should feel official, easy to trust, and easy to act on. Clean layout, strong proof, and faster lead routing are the priority before anything fancy in the blog/editor system.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-3 text-sm text-white/75">
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">Lead form routes into Healthy Home</div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">Scout notifications ready to wire live</div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">SEO-safe route map preserved for launch</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#C81920]/20 bg-[linear-gradient(135deg,rgba(200,25,32,0.18),rgba(255,255,255,0.03))] px-6 py-10 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Ready when you are</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Get the quote, lock the date, and keep the property looking sharp.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Use the quick quote flow for pricing, route scheduling, and recurring-plan conversations without dragging the process out.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={siteConfig.primaryCta.href} className="inline-flex rounded-full bg-[#C81920] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a8141a]">
              {siteConfig.primaryCta.label}
            </Link>
            <Link href={siteConfig.secondaryCta.href} className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5">
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
    <section className="bg-black py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Get your quote</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Fast form, clean routing, no weird friction.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              This is the real lead-capture path for the rebuilt site. It is designed to work on mobile first, route into Healthy Home, and support clean attribution from paid, organic, and direct traffic.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/75">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">Tracks source page and referral context</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">Supports recurring-plan intent and bundled service interest</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">Ready to feed Healthy Home CRM and Scout notifications</div>
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
