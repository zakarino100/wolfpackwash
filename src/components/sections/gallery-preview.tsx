import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const cards = [
  {
    label: "House wash before and after",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    label: "Window cleaning detail shot",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
  },
  {
    label: "Driveway transformation",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    label: "Lighting install feature",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
  },
];

export function GalleryPreview() {
  return (
    <section className="bg-[#0a1520] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
<<<<<<< HEAD
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Our work</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Heavy proof, clean presentation.</h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              Real results from real jobs across the Triangle. Every clean is a before-and-after worth showing.
=======
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Proof sells</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Before-and-after proof should make the decision feel easier.</h2>
            <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
              Wolf Pack Wash already has strong content. The site just needs a cleaner, faster way to show the transformation so people trust the result before they even ask for pricing.
>>>>>>> 50f7ab6 (Polish Wolf Pack Wash site, strengthen SEO, add blog and generated assets)
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
<<<<<<< HEAD
            <Reveal key={card.label} delay={index * 0.08}>
              <div className="group relative flex aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src={card.img}
                  alt={card.label}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white/90">{card.label}</p>
=======
            <Reveal key={card} delay={index * 0.08}>
              <div className="flex aspect-[4/5] items-end rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(98,197,255,0.10),rgba(255,255,255,0.06))] p-5">
                <p className="text-sm font-medium text-white/80">{card}</p>
>>>>>>> 50f7ab6 (Polish Wolf Pack Wash site, strengthen SEO, add blog and generated assets)
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#C81920]/40 hover:bg-white/5"
            >
              View full gallery →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
