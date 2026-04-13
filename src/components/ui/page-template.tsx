import Image from "next/image";
import Link from "next/link";

type PageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  image?: string;
};

export function PageTemplate({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Get Free Quote",
  image,
}: PageTemplateProps) {
  return (
<<<<<<< HEAD
    <section className="relative isolate overflow-hidden bg-black text-white">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
      )}
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-left sm:px-6 sm:py-32 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">{eyebrow}</p>
=======
    <section className="bg-[#07111b] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-left sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">{eyebrow}</p>
>>>>>>> 50f7ab6 (Polish Wolf Pack Wash site, strengthen SEO, add blog and generated assets)
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/78">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-full bg-[#C81920] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a8141a]"
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
