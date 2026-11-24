import Link from "next/link";
import { QuoteCta } from "@/components/funnel/quote-cta";
import { siteConfig } from "@/lib/site/config";

type QuoteBandProps = {
  compact?: boolean;
  preselect?: string;
  showPlan?: boolean;
};

export function QuoteBand({ compact = false, preselect, showPlan = false }: QuoteBandProps) {
  return (
    <aside className={`blog-cta rounded-[1.5rem] border border-[var(--hairline)] bg-[var(--card)] themed-card ${compact ? "p-5" : "p-7"}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C81920]">Same-day quote</p>
      <p className={compact ? "mt-2 text-lg font-semibold text-[var(--ink-strong)]" : "mt-2 text-2xl font-semibold leading-tight text-[var(--ink-strong)]"}>
        {compact ? "Want this done at your place?" : "Ready for this at your home?"}
      </p>
      <p className="mt-2 text-sm leading-7 text-[var(--ink-muted)]">
        Tell us the service and the address. We reply the same day with pricing and the next open date.
      </p>
      <div className="mt-4 flex flex-col items-start gap-3">
        <QuoteCta
          preselect={preselect}
          className="inline-flex items-center justify-center rounded-full bg-[#C81920] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(200,25,32,0.28)] transition hover:bg-[#a8141a]"
        >
          Get a same-day quote
        </QuoteCta>
        <a className="blog-quiet text-sm font-semibold" href={siteConfig.phoneHref}>
          Call {siteConfig.phoneDisplay}
        </a>
        {showPlan ? (
          <Link className="blog-quiet text-sm font-semibold" href="/maintenance-plan">
            See the Exterior Care Plan
          </Link>
        ) : null}
      </div>
    </aside>
  );
}

export function MidPostCta() {
  return <QuoteBand compact />;
}
