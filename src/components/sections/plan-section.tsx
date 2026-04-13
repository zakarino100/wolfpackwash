import { siteConfig } from "@/lib/site/config";

export function PlanSection() {
  return (
    <section className="bg-[#07111b] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
<<<<<<< HEAD
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Recurring revenue offer</p>
=======
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Stay ahead of the buildup</p>
>>>>>>> 50f7ab6 (Polish Wolf Pack Wash site, strengthen SEO, add blog and generated assets)
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{siteConfig.recurringPlan.name}</h2>
          <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
            Position recurring care as the smart homeowner move. Fewer surprise problems, easier upkeep, priority scheduling, and less grime stacking up between cleanings.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {siteConfig.recurringPlan.tiers.map((tier, index) => (
            <article
              key={tier.name}
              className={[
                "rounded-3xl border p-6",
                index === 1
                  ? "border-[#C81920] bg-[#C81920]/10 shadow-[0_0_0_1px_rgba(200,25,32,0.2)]"
                  : "border-white/10 bg-white/5",
              ].join(" ")}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C81920]">{tier.name}</p>
              <p className="mt-3 text-lg font-medium text-white/85">{tier.positioning}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/75">
                {tier.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-1 text-[#C81920]">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-dashed border-white/15 px-4 py-3 text-sm text-white/55">
                Final pricing can be added later, but the value stack should already make the middle tier feel like the easy yes.
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
