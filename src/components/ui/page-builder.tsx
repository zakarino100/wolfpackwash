import { PageTemplate } from "@/components/ui/page-template";
import { QuoteForm } from "@/components/ui/quote-form";
import { CtaBand } from "@/components/sections/content-sections";
import { Reveal } from "@/components/ui/reveal";

type PageBuilderProps = {
  eyebrow: string;
  title: string;
  description: string;
  sourcePage: string;
  bullets?: string[];
<<<<<<< HEAD
  image?: string;
};

export function PageBuilder({ eyebrow, title, description, sourcePage, bullets = [], image }: PageBuilderProps) {
  return (
    <>
      <PageTemplate eyebrow={eyebrow} title={title} description={description} image={image} />
      <section className="bg-neutral-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">What we deliver</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-white/75 sm:text-base">
=======
  steps?: { title: string; body: string; image?: string }[];
};

export function PageBuilder({ eyebrow, title, description, sourcePage, bullets = [], steps = [] }: PageBuilderProps) {
  return (
    <>
      <PageTemplate eyebrow={eyebrow} title={title} description={description} />
      <section className="bg-[#0a1520] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Why homeowners book</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-white/78 sm:text-base">
>>>>>>> 50f7ab6 (Polish Wolf Pack Wash site, strengthen SEO, add blog and generated assets)
                <p>{description}</p>
                {bullets.length ? (
                  <ul className="space-y-3">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 text-[#C81920]">•</span>
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
          <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A clean process that feels easy from the first click to the finished result.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.08}>
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05]">
                    <div className="aspect-[4/3] w-full bg-[linear-gradient(135deg,rgba(98,197,255,0.20),rgba(255,255,255,0.04))]">
                      {step.image ? (
                        <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full items-end p-5 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Step {index + 1}</div>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Step {index + 1}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/72">{step.body}</p>
                    </div>
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
