import { Reveal } from "@/components/ui/reveal";

const items = [
  "Same-day quote response on most requests",
  "Serving Raleigh, Cary, Apex, Holly Springs & the Triangle",
  "House washing, windows, gutters, concrete & lighting",
  "100% satisfaction guaranteed on every job",
];

export function ProofStrip() {
  return (
    <section className="border-y border-white/10 bg-[#09131d] py-6 text-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item, index) => (
          <Reveal key={item} delay={index * 0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/78">
              {item}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
