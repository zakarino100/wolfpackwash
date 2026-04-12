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
      </section>
      <CtaBand />
    </>
  );
}
