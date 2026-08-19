import Link from "next/link";
import { QuoteCta } from "@/components/funnel/quote-cta";

type PageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function PageTemplate({
  eyebrow,
  title,
  description,
  image,
  primaryLabel = "Get Free Quote",
}: PageTemplateProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111b] py-20 text-white sm:py-28">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          {/* Legibility scrim: darker at the left/bottom where the text sits, clearing toward the top-right so the hero photo stays visible. */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#07111b]/80 via-[#07111b]/35 to-[#07111b]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111b]/70 via-transparent to-transparent" />
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-[var(--accent)]/12 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        </div>
      )}
      <div className="relative mx-auto max-w-4xl px-4 text-left sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5a60]">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/85">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <QuoteCta className="inline-flex items-center justify-center rounded-full bg-[#C81920] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(200,25,32,0.30)] transition hover:bg-[#a8141a]">
            {primaryLabel}
          </QuoteCta>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
