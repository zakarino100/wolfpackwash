import { QuoteForm } from "@/components/ui/quote-form";
import { Reveal } from "@/components/ui/reveal";

export function QuoteFormPreview() {
  return (
    <section className="bg-neutral-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Quote flow</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A real mobile-first quote form, not just a placeholder.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              This is where clean UX meets lead routing. It is set up to capture page attribution, push into Healthy Home, and notify Scout once the integration layer is wired live.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li>• Page-aware lead attribution</li>
              <li>• Healthy Home submission contract ready</li>
              <li>• Scout lead notification path ready</li>
              <li>• Recurring-plan intent supported from day one</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <QuoteForm sourcePage="/" compact />
        </Reveal>
      </div>
    </section>
  );
}
