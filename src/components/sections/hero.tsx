"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site/config";
import { serviceOptions } from "@/lib/site/lead-form-options";
import { useFunnel } from "@/components/funnel/funnel-context";

const cities = [
  "Raleigh",
  "Cary",
  "Apex",
  "Holly Springs",
  "Wake Forest",
  "Garner",
  "Fuquay-Varina",
  "Durham",
  "Morrisville",
  "The Triangle",
];

function CityTicker() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % cities.length), 1800);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] sm:text-sm">
      <span className="text-white/70">Serving</span>
      <span className="relative inline-flex h-[1.3em] w-[190px] overflow-hidden align-bottom">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: "60%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-60%" }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 whitespace-nowrap text-[var(--accent)]"
          >
            {cities[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}

const trustBadges = [
  "Licensed & Insured",
  "100% Satisfaction Guarantee",
  "5-Star Rated Crew",
  "Same-Day Quotes",
];

/** The A1-style "Select Your Service" picker: dropdown -> opens the funnel modal. */
function ServicePicker() {
  const { openFunnel } = useFunnel();
  const [service, setService] = useState<string>("");

  return (
    <div className="w-full max-w-md rounded-2xl border border-[var(--hairline)] bg-[var(--card-strong)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.18)] themed-card">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
        Select Your Service
      </p>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-xl border border-[var(--hairline)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)]"
          aria-label="Select a service"
        >
          <option value="">What do you need cleaned?</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => openFunnel(service || undefined)}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(200,25,32,0.32)] transition hover:brightness-110 active:scale-[0.99]"
        >
          Get My Free Quote
        </button>
      </div>
      <p className="mt-2.5 text-xs text-[var(--ink-faint)]">
        No pushy sales. Same-day response with pricing and the next open date.
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111b] text-white">
      {/* Hero background video (pulled from the original Replit build) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/gallery-images/real-house-wash.webp"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-[#07111b]/78 via-[#07111b]/55 to-[#07111b]/35" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-14 pt-24 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-8 lg:pb-20 lg:pt-28">
        {/* Left: copy + funnel */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="max-w-2xl"
        >
          <CityTicker />
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[4.25rem]">
            The Triangle&apos;s Most Trusted Home Services.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-7 text-white/85">
            House washing, windows, gutters, concrete, and lighting — done right, every time.
            Pick your service and get a same-day quote.
          </p>

          <div className="mt-7">
            <ServicePicker />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={siteConfig.phoneHref}
              className="text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              Or call {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {trustBadges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-[var(--card)] px-3 py-1.5 text-xs font-medium text-[var(--ink-muted)]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-[var(--accent)]">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: truck cutout */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-x-6 bottom-6 h-10 rounded-[50%] bg-black/30 blur-2xl" />
          <Image
            src="/hero-images/chris-truck-final.webp"
            alt="Wolf Pack Wash service truck"
            width={1600}
            height={1088}
            priority
            className="relative w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
