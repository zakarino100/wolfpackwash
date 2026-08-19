"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryItem = { src: string; alt: string; stage?: "before" | "progress" | "after" };

const STAGE_LABEL: Record<string, string> = { before: "Before", progress: "In Progress", after: "After" };
const STAGE_COLOR: Record<string, string> = {
  before: "bg-black/70",
  progress: "bg-amber-500",
  after: "bg-[#C81920]",
};

export function ServiceGallery({
  items,
  heading = "See the results for yourself.",
}: {
  items: GalleryItem[];
  heading?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: number) => setLightbox((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  // Keyboard nav + scroll-lock while the lightbox is open.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, close, step]);

  if (!items?.length) return null;

  const scroll = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 640), behavior: "smooth" });
  };

  const Arrow = ({ dir, className }: { dir: -1 | 1; className: string }) => (
    <button
      type="button"
      aria-label={dir === -1 ? "Scroll left" : "Scroll right"}
      onClick={() => scroll(dir)}
      className={className}
    >
      {dir === -1 ? "‹" : "›"}
    </button>
  );

  const active = lightbox === null ? null : items[lightbox];

  return (
    <section className="bg-[var(--surface-0)] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Real results</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--ink-strong)] sm:text-3xl">{heading}</h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <Arrow dir={-1} className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline)] text-lg text-[var(--ink)] transition hover:border-[#C81920] hover:text-[#C81920]" />
            <Arrow dir={1} className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline)] text-lg text-[var(--ink)] transition hover:border-[#C81920] hover:text-[#C81920]" />
          </div>
        </div>

        <div className="relative">
          <Arrow dir={-1} className="absolute left-1 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-xl text-white backdrop-blur transition hover:bg-[#C81920] sm:hidden" />
          <div
            ref={scroller}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, i) => (
              <figure
                key={i}
                className="group relative w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[var(--hairline)] sm:w-[47%] lg:w-[31.5%]"
              >
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={`Enlarge ${item.alt}`}
                  className="block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-[var(--card)]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </button>
                {item.stage && (
                  <figcaption
                    className={`pointer-events-none absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white ${STAGE_COLOR[item.stage] || "bg-black/70"}`}
                  >
                    {STAGE_LABEL[item.stage] || item.stage}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
          <Arrow dir={1} className="absolute right-1 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-xl text-white backdrop-blur transition hover:bg-[#C81920] sm:hidden" />
        </div>
      </div>

      {/* Lightbox — click a photo to enlarge in-page (never a raw browser tab). */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-[#C81920]"
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-[#C81920]"
          >
            ‹
          </button>
          <figure className="max-h-[88vh] max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="max-h-[80vh] w-auto rounded-xl object-contain" />
            <figcaption className="mt-3 flex items-center justify-center gap-3 text-sm text-white/80">
              {active.stage && (
                <span className={`rounded-full px-3 py-1 text-xs font-bold text-white ${STAGE_COLOR[active.stage] || "bg-black/70"}`}>
                  {STAGE_LABEL[active.stage] || active.stage}
                </span>
              )}
              <span>{active.alt}</span>
              <span className="text-white/40">{(lightbox ?? 0) + 1} / {items.length}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-[#C81920]"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
