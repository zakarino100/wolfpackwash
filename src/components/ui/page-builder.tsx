import { PageTemplate } from "@/components/ui/page-template";
import { QuoteForm } from "@/components/ui/quote-form";
import { CtaBand } from "@/components/sections/content-sections";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { buildFaqJsonLd } from "@/lib/site/seo";

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
  sourcePage,
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
      <section className="bg-[#0a1520] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Why homeowners choose us</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-white/78 sm:text-base">
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
            <QuoteForm sourcePage={sourcePage} title="Request your free quote" compact />
          </Reveal>
        </div>

        {steps.length ? (
          <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A simple process from first contact to finished job.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.08}>
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05]">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[linear-gradient(135deg,rgba(200,25,32,0.12),rgba(255,255,255,0.04))]">
                      {step.image ? (
                        <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full items-end p-5 text-sm font-semibold uppercase tracking-[0.24em] text-white/50">Step {index + 1}</div>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C81920]">Step {index + 1}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/72">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        {gallery.length ? (
          <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Our work</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Real results from real jobs in the Triangle.</h2>
            </div>
            <div className={`grid gap-4 ${gallery.length >= 4 ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-2 xl:grid-cols-3"}`}>
              {gallery.map((item, index) => (
                <Reveal key={item.alt} delay={index * 0.07}>
                  <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 aspect-[4/3]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <p className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.alt}
                    </p>
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
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Answers to what homeowners ask most.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {faqs.map((faq, index) => (
                <Reveal key={faq.q} delay={index * 0.05}>
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                    <h3 className="text-base font-semibold text-white">{faq.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{faq.a}</p>
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
