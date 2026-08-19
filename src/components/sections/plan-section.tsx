import Link from "next/link";
import { siteConfig } from "@/lib/site/config";

export function PlanSection() {
  return (
    <section className="bg-[var(--surface-0)] py-16 text-[var(--ink)] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Recurring exterior care</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--ink-strong)] sm:text-4xl">{siteConfig.recurringPlan.name}</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
            Stop chasing appointments every spring. Our recurring care plans keep your home clean year-round with priority scheduling, member pricing, and no buildup between visits.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {siteConfig.recurringPlan.tiers.map((tier, index) => (
            <article
              key={tier.name}
              className={[
                "rounded-3xl border p-6",
                index === 1
                  ? "border-[#C81920] bg-[#C81920]/10 shadow-[0_0_0_1px_rgba(200,25,32,0.20)]"
                  : "border-[var(--hairline)] bg-[var(--card)] themed-card",
              ].join(" ")}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C81920]">{tier.name}</p>
              <p className="mt-3 text-lg font-medium text-[var(--ink-strong)]">{tier.positioning}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--ink-muted)]">
                {tier.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-1 text-[#C81920]">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/maintenance-plan"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-[var(--hairline)] px-4 py-3 text-sm font-medium text-[var(--ink-muted)] transition hover:border-[#C81920]/40 hover:text-[var(--ink)]"
                >
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
