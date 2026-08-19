"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site/config";
import { useFunnel } from "@/components/funnel/funnel-context";

const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const { openFunnel } = useFunnel();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-[var(--surface-0)]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/wpw-emblem.png"
            alt="Wolf Pack Wash logo"
            width={64}
            height={64}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            priority
          />
          <span className="leading-tight">
            <span className="block text-[13px] font-bold uppercase tracking-[0.22em] text-[var(--ink-strong)] sm:text-[14px]">
              Wolf Pack Wash
            </span>
            <span className="block text-[9px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-[10px]">
              Home Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.phoneHref}
            className="hidden rounded-full border border-[var(--hairline)] px-4 py-2 text-sm font-medium text-[var(--ink)] transition hover:border-[var(--accent)]/50 sm:inline-flex"
          >
            {siteConfig.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => openFunnel()}
            className="inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(200,25,32,0.3)] transition hover:brightness-110"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}
