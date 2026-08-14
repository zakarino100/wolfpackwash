import { fiveStarReviews } from "@/lib/site/reviews";

const badges = [
  {
    label: "Licensed & Insured",
    sub: "Fully covered, every job",
    icon: (
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Satisfaction Guarantee",
    sub: "100% on every service",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "5-Star Rated",
    sub: "Trusted across the Triangle",
    icon: (
      <path
        d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Same-Day Quotes",
    sub: "Fast, no runaround",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[var(--accent)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 5.9 20l1.2-6.5L2.3 8.9 8.9 8 12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TrustBar() {
  const marquee = [...fiveStarReviews, ...fiveStarReviews];

  return (
    <section className="border-y border-[var(--hairline)] bg-[var(--surface-1)] py-10 text-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust badges */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-3 rounded-2xl border border-[var(--hairline)] bg-[var(--card)] px-4 py-4 themed-card"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {b.icon}
                </svg>
              </span>
              <span>
                <span className="block text-sm font-semibold text-[var(--ink-strong)]">{b.label}</span>
                <span className="block text-xs text-[var(--ink-faint)]">{b.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling reviews */}
      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-[linear-gradient(90deg,var(--surface-1),transparent)]" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-[linear-gradient(270deg,var(--surface-1),transparent)]" />
        <div className="flex w-max gap-4 animate-[wpw-marquee_48s_linear_infinite] hover:[animation-play-state:paused]">
          {marquee.map((review, i) => (
            <figure
              key={`${review.author}-${i}`}
              className="w-[320px] shrink-0 rounded-2xl border border-[var(--hairline)] bg-[var(--card)] p-5 themed-card"
            >
              <Stars />
              <blockquote className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-xs font-semibold text-[var(--ink-strong)]">
                {review.author}
                <span className="font-normal text-[var(--ink-faint)]"> — {review.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
