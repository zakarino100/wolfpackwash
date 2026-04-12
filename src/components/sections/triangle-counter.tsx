import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";

export function TriangleCounter() {
  return (
    <section className="bg-[#080808] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(252,211,77,0.08),transparent_45%),rgba(255,255,255,0.03)] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Triangle proof</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Homes across the Triangle cleaned with systems built to scale.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                This section is meant to feel earned, not noisy. The number animates only when the user reaches it, so the page stays calm on load and dynamic as they scroll.
              </p>
            </div>
            <div className="rounded-[2rem] border border-amber-300/20 bg-black/40 p-6 text-center shadow-[0_0_60px_rgba(252,211,77,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Homes cleaned</p>
              <div className="mt-4 text-5xl font-semibold text-amber-300 sm:text-7xl">
                <AnimatedCounter value={1200} suffix="+" />
              </div>
              <p className="mt-4 text-sm text-white/60">Raleigh, Cary, Apex, Holly Springs, and beyond.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
