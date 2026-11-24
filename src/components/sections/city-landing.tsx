import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site/config";
import {
  getPublishedCities,
  getPublishedNeighbors,
  type CityLink,
  type PublishedCity,
} from "@/lib/site/cities";
import { buildCityJsonLd, buildFaqJsonLd } from "@/lib/site/seo";

function TextLinks({ links }: { links: CityLink[] }) {
  if (!links.length) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`}>
          <Link href={link.href} className="text-sm font-semibold text-[#C81920] underline underline-offset-4">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ServiceAreaLine({ city }: { city: PublishedCity }) {
  const publishedByName = new Map(getPublishedCities().map((entry) => [entry.name.toLowerCase(), entry.path]));
  const neighbors = getPublishedNeighbors(city);

  return (
    <div className="mt-4 space-y-3 text-base leading-8 text-white/85">
      <p>
        We also serve{" "}
        {city.alsoServe.map((name, index) => {
          const href = publishedByName.get(name.toLowerCase());
          const separator =
            index === city.alsoServe.length - 1 ? "" : index === city.alsoServe.length - 2 ? ", and " : ", ";
          return (
            <span key={name}>
              {href ? (
                <Link href={href} className="font-semibold text-white underline-offset-4 hover:underline">
                  {name}
                </Link>
              ) : (
                name
              )}
              {separator}
            </span>
          );
        })}
        , plus the broader Triangle area.
      </p>
      {neighbors.length ? (
        <p>
          Nearby city pages:{" "}
          {neighbors.map((neighbor, index) => (
            <span key={neighbor.slug}>
              {index > 0 ? ", " : null}
              <Link href={neighbor.path} className="font-semibold text-white underline-offset-4 hover:underline">
                {neighbor.name}
              </Link>
            </span>
          ))}
          .
        </p>
      ) : null}
    </div>
  );
}

export function CityLanding({ city }: { city: PublishedCity }) {
  const jsonLd = buildCityJsonLd({
    name: city.title,
    description: city.description,
    path: city.path,
    cityName: city.name,
    serviceType: city.serviceType,
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={buildFaqJsonLd(city.faqs)} />

      <section className="relative isolate overflow-hidden bg-[#07111b] py-20 text-white sm:py-28">
        <Image
          src="/hero-images/house-washing.webp"
          alt="Soft-washed home exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#07111b]/80 via-[#07111b]/35 to-[#07111b]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111b]/70 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-left sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5a60]">{city.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">{city.title}</h1>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-8 text-white/85">
            {city.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              No pushy sales. Call{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-white underline-offset-4 hover:underline">
                {siteConfig.phoneDisplay}
              </a>{" "}
              or{" "}
              <Link href={siteConfig.primaryCta.href} className="font-semibold text-white underline-offset-4 hover:underline">
                request a same-day quote
              </Link>
              . We respond the same day with pricing and the next open date.
            </p>
          </div>
          <ServiceAreaLine city={city} />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#C81920] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(200,25,32,0.30)] transition hover:bg-[#a8141a]"
            >
              {siteConfig.primaryCta.label}
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-0)] py-16 text-[var(--ink)] sm:py-20" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Services</p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">{city.serviceHeading}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)] sm:text-base">{city.serviceIntro}</p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {city.serviceGroups.map((group, index) => (
              <Reveal key={group.heading} delay={index * 0.05}>
                <article className="h-full rounded-[1.75rem] border border-[var(--hairline)] bg-[var(--card)] p-6 themed-card sm:p-7">
                  <h3 className="text-2xl font-semibold text-[var(--ink-strong)]">{group.heading}</h3>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-[var(--ink-muted)]">
                    {group.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <TextLinks links={group.links} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-1)] py-16 text-[var(--ink)] sm:py-20" id="local">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Local care</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">{city.localHeading}</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
              {city.localParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <TextLinks links={city.localLinks} />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--surface-0)] py-16 text-[var(--ink)] sm:py-20" id="visit">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">The visit</p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">{city.visitHeading}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)] sm:text-base">{city.visitIntro}</p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {city.visitSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="h-full overflow-hidden rounded-[1.75rem] border border-[var(--hairline)] bg-[var(--card)] themed-card">
                  {step.image ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--surface-2)]">
                      <Image src={step.image} alt={step.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                    </div>
                  ) : null}
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C81920]">Step {index + 1}</p>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--ink-strong)]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{step.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-1)] py-16 text-[var(--ink)] sm:py-20" id="proof">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Our work</p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">{city.proofHeading}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)] sm:text-base">{city.proofIntro}</p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {city.photos.map((photo, index) => (
              <Reveal key={photo.src} delay={index * 0.05}>
                <figure className="overflow-hidden rounded-[1.5rem] border border-[var(--hairline)] bg-[var(--card)] themed-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-[var(--ink-muted)]">{photo.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <TextLinks links={city.proofLinks} />
        </div>
      </section>

      <section className="bg-[var(--surface-0)] py-16 text-[var(--ink)] sm:py-20" id="faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Common questions</p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">FAQ</h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {city.faqs.map((faq, index) => (
              <Reveal key={faq.q} delay={index * 0.05}>
                <article className="h-full rounded-[1.75rem] border border-[var(--hairline)] bg-[var(--card)] p-6 themed-card">
                  <h3 className="text-base font-semibold text-[var(--ink-strong)]">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{faq.a}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-1)] py-16 text-[var(--ink)] sm:py-20" id="related">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[var(--ink-strong)]">Related pages</h2>
          <TextLinks links={city.relatedLinks} />
        </div>
      </section>

      <section className="bg-[var(--surface-0)] py-16 text-[var(--ink)] sm:py-20" id="quote">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#C81920]/25 bg-[linear-gradient(135deg,rgba(200,25,32,0.16),rgba(200,25,32,0.03))] px-6 py-10 text-center shadow-[0_28px_80px_rgba(11,18,32,0.1)] sm:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Next step</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">{city.closingHeading}</h2>
            <div className="mx-auto mt-4 max-w-2xl space-y-3 text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
              {city.closingParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={siteConfig.primaryCta.href}
                className="inline-flex rounded-full bg-[#C81920] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(200,25,32,0.30)] transition duration-200 hover:bg-[#a8141a]"
              >
                {siteConfig.primaryCta.label}
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex rounded-full border border-[var(--hairline)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition duration-200 hover:border-[var(--accent)]/40 hover:bg-[var(--card)]"
              >
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
            <p className="mt-6 text-sm text-[var(--ink-muted)]">
              <Link href="/maintenance-plan" className="font-semibold text-[#C81920] underline underline-offset-4">
                Exterior Care Plan
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
