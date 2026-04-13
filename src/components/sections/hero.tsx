"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site/config";

const badges = [
  {
    label: "Same-day quote response on most requests",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    animate: {
      initial: { rotate: -15, scale: 0.7, opacity: 0 },
      animate: { rotate: 0, scale: 1, opacity: 1 },
      transition: { type: "spring", stiffness: 280, damping: 18, delay: 0.55 },
    },
  },
  {
    label: "Serving Raleigh, Cary, Apex, Holly Springs & the Triangle",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path
          d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    animate: {
      initial: { y: -8, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.65 },
    },
  },
  {
    label: "House washing, windows, gutters, concrete & lighting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path
          d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1v-9.5z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 7.5v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    animate: {
      initial: { scale: 0.6, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.75 },
    },
  },
  {
    label: "100% satisfaction guaranteed on every job",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path
          d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4l-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    animate: {
      initial: { scale: 0.5, rotate: 20, opacity: 0 },
      animate: { scale: 1, rotate: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.85 },
    },
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111b] text-white">
      <motion.div
        initial={{ opacity: 0.9, scale: 1.04 }}
        animate={{ opacity: 0, scale: 1.15 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,25,32,0.18),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(200,25,32,0.10),transparent_22%),radial-gradient(circle_at_50%_0%,rgba(200,25,32,0.14),transparent_34%)] blur-2xl" />
      </motion.div>

      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-center opacity-78"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={siteConfig.heroVideo.poster}
        >
          <source src={siteConfig.heroVideo.mobileSrc ?? siteConfig.heroVideo.src} media="(max-width: 767px)" type="video/mp4" />
          <source src={siteConfig.heroVideo.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,27,0.42),rgba(7,17,27,0.18)_38%,rgba(7,17,27,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,25,32,0.10),transparent_38%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-[linear-gradient(180deg,rgba(200,25,32,0.20),rgba(200,25,32,0.05),transparent)] blur-2xl" />

      <div className="relative mx-auto flex min-h-[82svh] w-full max-w-7xl items-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:min-h-[86svh] lg:items-center lg:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 bg-[radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.06),transparent_34%)] lg:block" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#C81920] sm:text-sm">
            Raleigh · Cary · Apex · Holly Springs · Triangle NC
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            The Triangle's Best Softwash Team.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-7 text-white/85">
            House washing, windows, gutters, concrete, and lighting — done right, every time. Fast quote, same-day response.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.primaryCta.href}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#C81920] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(200,25,32,0.30)] transition duration-200 hover:bg-[#a8141a] hover:shadow-[0_20px_48px_rgba(200,25,32,0.38)] active:scale-[0.99]"
            >
              <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]" />
              {siteConfig.primaryCta.label}
            </Link>
            <Link
              href={siteConfig.secondaryCta.href}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition duration-200 hover:border-white/30 hover:bg-white/5 active:scale-[0.99]"
            >
              <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)] opacity-80" />
              {siteConfig.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.5 + i * 0.1 }}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-sm transition duration-200 hover:border-[#C81920]/30 hover:bg-white/[0.11]"
              >
                <motion.span
                  className="text-[#C81920]"
                  {...badge.animate}
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 380, damping: 14 }}
                >
                  {badge.icon}
                </motion.span>
                <span className="text-xs leading-snug text-white/82 sm:text-[13px]">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
