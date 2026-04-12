import { siteConfig } from "@/lib/site/config";

export function PlanSection() {
  return (
    <section className="bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Recurring revenue offer</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{siteConfig.recurringPlan.name}</h2>
          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Three tiers, clear value separation, and enough perceived spread that the middle package becomes the easy yes.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {siteConfig.recurringPlan.tiers.map((tier, index) => (
            <article
              key={tier.name}
              className={[
                "rounded-3xl border p-6",
                index === 1
                  ? "border-amber-300 bg-amber-300/10 shadow-[0_0_0_1px_rgba(252,211,77,0.2)]"
                  : "border-white/10 bg-white/5",
              ].join(" ")}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">{tier.name}</p>
              <p className="mt-3 text-lg font-medium text-white/85">{tier.positioning}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/75">
                {tier.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-1 text-amber-300">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-dashed border-white/15 px-4 py-3 text-sm text-white/55">
                Pricing placeholder, finalize after tier review.
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
