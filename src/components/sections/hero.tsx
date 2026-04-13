"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site/config";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111b] text-white">
      <motion.div
        initial={{ opacity: 0.9, scale: 1.04 }}
        animate={{ opacity: 0, scale: 1.15 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_50%_0%,rgba(70,180,255,0.22),transparent_34%)] blur-2xl" />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(98,197,255,0.16),transparent_38%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-[linear-gradient(180deg,rgba(98,197,255,0.35),rgba(98,197,255,0.06),transparent)] blur-2xl" />

      <div className="relative mx-auto flex min-h-[82svh] w-full max-w-7xl items-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:min-h-[86svh] lg:items-center lg:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 bg-[radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.10),transparent_34%)] lg:block" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300 sm:text-sm">
            Fast quotes, cleaner homes, stronger curb appeal
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Make your home look sharp again without chasing contractors or dragging the process out.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/88 sm:text-lg">
            Wolf Pack Wash helps homeowners get house washing, windows, gutters, concrete cleaning, and lighting handled fast, with clear communication, strong results, and an easy quote process that works on mobile.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.primaryCta.href}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_16px_40px_rgba(245,158,11,0.22)] transition duration-200 hover:bg-amber-300 hover:shadow-[0_20px_48px_rgba(245,158,11,0.28)] active:scale-[0.99]"
            >
              <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.7),transparent)]" />
              {siteConfig.primaryCta.label}
            </Link>
            <Link
              href={siteConfig.secondaryCta.href}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:border-white/30 hover:bg-white/5 active:scale-[0.99]"
            >
              <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)] opacity-80" />
              {siteConfig.secondaryCta.label}
            </Link>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.08)] px-4 py-3">Fast follow-up and simple scheduling</div>
            <div className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.08)] px-4 py-3">Built for mobile-first quote conversion</div>
            <div className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.08)] px-4 py-3">House washing, windows, gutters, and more</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
