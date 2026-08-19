"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site/config";
import { useFunnel } from "@/components/funnel/funnel-context";

/**
 * A1 Garage-style sticky bottom navigation (mobile).
 * Mirrors A1's bottom bar structure — Home / Services / Reviews / Call — and
 * adds a center "Free Quote" action that opens the shared service funnel.
 * Fixed to the viewport so it scrolls with the screen and stays reachable.
 */
export function MobileBottomNav() {
  const pathname = usePathname();
  const { openFunnel } = useFunnel();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const itemClass = (href: string) =>
    `flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] transition ${
      isActive(href) ? "text-[var(--accent)]" : "text-[var(--ink-muted)]"
    }`;

  return (
    <nav
      aria-label="Primary mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--hairline)] bg-[var(--surface-0)]/95 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-lg items-stretch">
        <Link href="/" className={itemClass("/")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 11l9-7 9 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 10v9h5v-5h4v5h5v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Home
        </Link>

        <Link href="/services" className={itemClass("/services")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
            <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
            <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
            <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          Services
        </Link>

        {/* Center emphasized quote action */}
        <button
          type="button"
          onClick={() => openFunnel()}
          className="relative flex flex-1 flex-col items-center justify-end gap-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]"
          aria-label="Get a free quote"
        >
          <span className="-mt-6 grid h-14 w-14 place-items-center rounded-full bg-[var(--accent)] text-white shadow-[0_10px_26px_rgba(200,25,32,0.45)]">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 20c2.5-9 5-13 8-13s5.5 4 8 13" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
              <path d="M9 7c0-2.2 1.3-4 3-4s3 1.8 3 4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
            </svg>
          </span>
          Quote
        </button>

        <Link href="/reviews" className={itemClass("/reviews")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9L12 3z" />
          </svg>
          Reviews
        </Link>

        <a href={siteConfig.phoneHref} className={itemClass("/__call")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 5c0 8.3 6.7 15 15 15 .9 0 1.6-.7 1.6-1.6v-2.4c0-.7-.5-1.4-1.2-1.5l-3-.6c-.6-.1-1.2.1-1.6.6l-.9 1.1a11.5 11.5 0 01-5-5l1.1-.9c.5-.4.7-1 .6-1.6l-.6-3C9.4 4.5 8.7 4 8 4H5.6C4.7 4 4 4.7 4 5.6z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          Call
        </a>
      </div>
    </nav>
  );
}
