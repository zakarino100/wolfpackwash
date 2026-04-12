"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site/config";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
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
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster={siteConfig.heroVideo.poster}
        >
          <source src={siteConfig.heroVideo.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-[linear-gradient(180deg,rgba(98,197,255,0.35),rgba(98,197,255,0.06),transparent)] blur-2xl" />

      <div className="relative mx-auto flex min-h-[78svh] w-full max-w-7xl items-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300 sm:text-sm">
            Exterior cleaning that actually moves the needle
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Real Results. No Excuses. Wolf Pack Wash Delivers the Clean Your Property Deserves.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Fast quoting, strong service, and a team that shows up ready. House washing, windows, gutters,
            concrete, lighting, and recurring exterior care built for busy homeowners.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
            >
              {siteConfig.primaryCta.label}
            </Link>
            <Link
              href={siteConfig.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              {siteConfig.secondaryCta.label}
            </Link>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/75 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">100% satisfaction backed</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Mobile-optimized quote flow</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Recurring care built in</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
