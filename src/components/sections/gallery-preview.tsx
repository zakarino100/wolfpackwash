import { Reveal } from "@/components/ui/reveal";

const cards = [
  "House wash before and after",
  "Window cleaning detail shot",
  "Driveway transformation",
  "Lighting install feature",
];

export function GalleryPreview() {
  return (
    <section className="bg-[#0a1520] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Proof sells</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Before-and-after proof should make the decision feel easier.</h2>
            <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
              Wolf Pack Wash already has strong content. The site just needs a cleaner, faster way to show the transformation so people trust the result before they even ask for pricing.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <Reveal key={card} delay={index * 0.08}>
              <div className="flex aspect-[4/5] items-end rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(98,197,255,0.10),rgba(255,255,255,0.06))] p-5">
                <p className="text-sm font-medium text-white/80">{card}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
