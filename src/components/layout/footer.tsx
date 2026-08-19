import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site/config";

export function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[var(--surface-0)] text-[var(--ink)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logos/wpw-emblem.png" alt="Wolf Pack Wash logo" width={56} height={56} className="h-14 w-14 object-contain" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--ink-strong)]">Wolf Pack Wash</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[var(--accent)]">Home Services</p>
            </div>
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--ink-strong)]">Fast quotes, real proof, and exterior cleaning that makes the property look better quickly.</h2>
          <p className="mt-3 max-w-xl text-sm text-[var(--ink-muted)]">
            Trusted exterior cleaning across the Triangle, with mobile-friendly quoting, clear communication, and services that are easy to book and easy to believe.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ink-strong)]">Top pages</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--ink-muted)]">
            {siteConfig.nav.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--ink)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ink-strong)]">Contact</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--ink-muted)]">
            <Link href={siteConfig.phoneHref} className="transition hover:text-[var(--ink)]">
              {siteConfig.phoneDisplay}
            </Link>
            <Link href="/contact" className="transition hover:text-[var(--ink)]">
              Get a free quote
            </Link>
            <Link href="/maintenance-plan" className="transition hover:text-[var(--ink)]">
              Explore Exterior Care Plan
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 border-t border-[var(--hairline)] px-4 py-5 pb-24 sm:px-6 lg:px-8 lg:pb-5">
        <p className="text-xs text-[var(--ink-faint)]">&copy; {new Date().getFullYear()} Wolf Pack Wash. All rights reserved.</p>
        <div className="flex gap-5 text-xs text-[var(--ink-faint)]">
          <Link href="/privacy-policy" className="transition hover:text-[var(--ink)]">Privacy Policy</Link>
          <Link href="/terms-of-service" className="transition hover:text-[var(--ink)]">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
