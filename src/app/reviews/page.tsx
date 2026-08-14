"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fiveStarReviews } from "@/lib/site/reviews";
import { CtaBand } from "@/components/sections/content-sections";
import { Reveal } from "@/components/ui/reveal";

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill={filled ? "#C81920" : "rgba(255,255,255,0.12)"} aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.049 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69L9.05 2.927z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

const TOTAL_REVIEWS = 127;
const RATING = "4.9";
const SATISFACTION = "98.5%";

const doubled = [...fiveStarReviews, ...fiveStarReviews];

export default function ReviewsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-40px" });

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#07111b] pb-12 pt-20 text-white sm:pb-16 sm:pt-28">
        <div ref={heroRef} className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300"
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Real reviews · Real customers
          </motion.p>
          <motion.h1
            className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07 }}
          >
            The Triangle trusts Wolf Pack Wash.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-base leading-8 text-white/72"
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.13 }}
          >
            Every review below is from a real homeowner in Raleigh, Cary, Apex, Holly Springs, or the surrounding Triangle area. We don't edit, filter, or cherry-pick — this is the actual feedback we've earned.
          </motion.p>

          {/* ── Stats bar ── */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <div>
                <p className="text-xl font-bold text-white">{RATING} <span className="text-sm font-normal text-white/50">/ 5.0</span></p>
                <p className="text-xs text-white/45">Average rating</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <GoogleIcon />
              <div>
                <p className="text-xl font-bold text-white">{TOTAL_REVIEWS}+</p>
                <p className="text-xs text-white/45">Google reviews</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <span className="text-[#C81920]">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </span>
              <div>
                <p className="text-xl font-bold text-white">{SATISFACTION}</p>
                <p className="text-xs text-white/45">Customer satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Scrolling marquee strip ── */}
      <section className="bg-[#07111b] pb-4 overflow-hidden">
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .reviews-marquee {
            display: flex;
            width: max-content;
            animation: scroll-left 55s linear infinite;
          }
          .reviews-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="reviews-marquee">
          {doubled.map((r, i) => (
            <div
              key={i}
              className="mx-3 flex w-72 flex-shrink-0 flex-col gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => <StarIcon key={s} />)}
              </div>
              <p className="line-clamp-2 text-xs leading-relaxed text-white/70">{r.text}</p>
              <p className="text-xs font-medium text-white/50">{r.author} &middot; {r.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Full review grid ── */}
      <section className="bg-[#0a1520] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">All reviews</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Every word from homeowners across the Triangle.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
              Hover any card to pause the scroll above. These are unedited reviews from verified customers.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fiveStarReviews.map((review, index) => (
              <Reveal key={review.author} delay={index * 0.04}>
                <div className="flex h-full flex-col gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => <StarIcon key={s} />)}
                    </div>
                    <GoogleIcon />
                  </div>
                  <p className="flex-1 text-sm leading-7 text-white/75">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center justify-between border-t border-white/[0.07] pt-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{review.author}</p>
                      <p className="text-xs text-white/45">{review.location}</p>
                    </div>
                    <p className="text-xs text-white/35">{review.date}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leave a review CTA ── */}
      <section className="bg-[#07111b] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(200,25,32,0.12),transparent_55%),rgba(255,255,255,0.025)] p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Had a great experience?</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Share it on Google — it helps your neighbors find us.</h2>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  We earn every review one job at a time. If Wolf Pack Wash showed up, worked hard, and left your property looking great — a quick review makes a big difference for a local crew.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col lg:shrink-0">
                <a
                  href="https://g.page/r/CVeCBRNnDF0_EBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C81920] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a8141a]"
                >
                  <GoogleIcon />
                  Leave a Google Review
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Get your free quote
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
