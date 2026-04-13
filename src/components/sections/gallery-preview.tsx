import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const cards = [
  {
    label: "House wash — pollen and grime gone",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    label: "Window cleaning — streak-free finish",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
  },
  {
    label: "Driveway pressure wash — stains lifted",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    label: "Permanent lighting — year-round curb appeal",
    img: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80",
  },
];

export function GalleryPreview() {
  return (
    <section className="bg-[#0a1520] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Our work</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Real results on real properties across the Triangle.</h2>
            <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
              Every job we do is a before-and-after worth showing. House washing, windows, concrete, and lighting — see what a difference the right team makes.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
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
