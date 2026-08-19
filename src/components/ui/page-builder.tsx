import { PageTemplate } from "@/components/ui/page-template";
import { ServiceGallery } from "@/components/sections/service-gallery";
import { CtaBand } from "@/components/sections/content-sections";
import { QuoteCta } from "@/components/funnel/quote-cta";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { buildFaqJsonLd } from "@/lib/site/seo";
import { siteConfig } from "@/lib/site/config";

type PageBuilderProps = {
  eyebrow: string;
  title: string;
  description: string;
  sourcePage: string;
  image?: string;
  bullets?: string[];
  steps?: { title: string; body: string; image?: string }[];
  gallery?: { src: string; alt: string }[];
  faqs?: { q: string; a: string }[];
};

export function PageBuilder({
  eyebrow,
  title,
  description,
  image,
  bullets = [],
  steps = [],
  gallery = [],
  faqs = [],
}: PageBuilderProps) {
  return (
    <>
      {faqs.length > 0 && <JsonLd data={buildFaqJsonLd(faqs)} />}
      <PageTemplate eyebrow={eyebrow} title={title} description={description} image={image} />
      <ServiceGallery items={gallery} />
      <section className="bg-[var(--surface-1)] py-16 text-[var(--ink)] sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Why homeowners choose us</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
                <p>{description}</p>
                {bullets.length ? (
                  <ul className="space-y-3">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 shrink-0 text-[#C81920]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
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
                  Our 3-step quote builder takes about 30 seconds. Pick your services, drop your address, and we'll respond the same day with pricing.
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

        {steps.length ? (
          <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">A simple process from first contact to finished job.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.08}>
                  <div className="overflow-hidden rounded-[1.75rem] border border-[var(--hairline)] bg-[var(--card)] themed-card">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[linear-gradient(135deg,rgba(200,25,32,0.12),var(--surface-2))]">
                      {step.image ? (
                        <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full items-end p-5 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--ink-faint)]">Step {index + 1}</div>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C81920]">Step {index + 1}</p>
                      <h3 className="mt-2 text-xl font-semibold text-[var(--ink-strong)]">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        {faqs.length ? (
          <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Common questions</p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">Answers to what homeowners ask most.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {faqs.map((faq, index) => (
                <Reveal key={faq.q} delay={index * 0.05}>
                  <div className="rounded-[1.75rem] border border-[var(--hairline)] bg-[var(--card)] p-6 themed-card">
                    <h3 className="text-base font-semibold text-[var(--ink-strong)]">{faq.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </section>
      <CtaBand />
    </>
  );
}
