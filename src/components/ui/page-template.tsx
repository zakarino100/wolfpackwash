import Link from "next/link";

type PageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function PageTemplate({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Get Free Quote",
}: PageTemplateProps) {
  return (
    <section className="bg-black py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-left sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
          >
            {primaryLabel}
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
