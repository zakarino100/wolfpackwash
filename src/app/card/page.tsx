"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { QuoteCta } from "@/components/funnel/quote-cta";

const BENEFITS = [
  "Instant text-back quote",
  "Before & after photos",
  "Flexible scheduling",
  "Local Raleigh crew",
];

/**
 * Dedicated business-card landing page. The QR on the card points here.
 * - Tags the lead source as `business_card` (stored where the quote funnel reads it)
 *   so submissions show the source in Discord / HH.
 * - Fires a one-time "card_scan" track event on load for scan-stage logging.
 */
export default function CardLandingPage() {
  useEffect(() => {
    // Tag the funnel so a submission from here is attributed to the card.
    try {
      sessionStorage.setItem(
        "wpw_utms",
        JSON.stringify({
          utm_source: "business_card",
          utm_medium: "qr",
          utm_campaign: "d2d_cards",
        }),
      );
    } catch {
      // ignore storage failures
    }

    // Fire a scan event once per session so we don't double-count re-renders.
    try {
      if (!sessionStorage.getItem("wpw_card_scanned")) {
        sessionStorage.setItem("wpw_card_scanned", "1");
        void fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "card_scan",
            source: "business_card",
            pagePath: "/card",
            referrer: typeof document !== "undefined" ? document.referrer : "",
          }),
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-14 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(200,25,32,0.22),transparent_60%)]"
      />
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <Image
          src="/logos/wolfpack_wash_shield_transparent.png"
          alt="Wolf Pack Wash"
          width={120}
          height={120}
          className="mb-6 drop-shadow-[0_0_28px_rgba(200,25,32,0.35)]"
          priority
        />
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C81920]">
          Raleigh, NC · Home Services
        </p>
        <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          Get Your Free Quote in Minutes
        </h1>
        <p className="mt-4 text-base text-white/70">
          Tell us about your home and we&apos;ll text you a price the same day.
          No waiting, no runaround.
        </p>

        <QuoteCta className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#C81920] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_40px_rgba(200,25,32,0.35)] transition hover:bg-[#a8141a]">
          Get My Free Quote
        </QuoteCta>

        <ul className="mt-8 grid w-full grid-cols-2 gap-3 text-left">
          {BENEFITS.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-white/85">
              <span className="mt-0.5 text-[#C81920]">✓</span>
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-center gap-1 text-sm">
          <a
            href="tel:+19846007038"
            className="text-lg font-bold text-white transition hover:text-[#C81920]"
          >
            (984) 600-7038
          </a>
          <span className="text-white/40">Licensed &amp; Insured · Satisfaction Guaranteed</span>
          <Link href="/gallery" className="mt-3 text-white/60 underline underline-offset-4 transition hover:text-white">
            See our recent work
          </Link>
        </div>
      </div>
    </main>
  );
}
