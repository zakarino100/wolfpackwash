import Link from "next/link";

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
  primaryHref = "/contact",
  primaryLabel = "Get Free Quote",
}: PageTemplateProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111b] py-20 text-white sm:py-28">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07111b]/60 via-[#07111b]/50 to-[#07111b]" />
        </>
      )}
      <div className="relative mx-auto max-w-4xl px-4 text-left sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/78">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-full bg-[#C81920] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(200,25,32,0.30)] transition hover:bg-[#a8141a]"
          >
            {primaryLabel}
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
