"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fiveStarReviews } from "@/lib/site/reviews";

const SATISFACTION = 98.5;

function getSweepPath(p: number) {
  const cx = 120, cy = 120, r = 122;
  if (p <= 0) return `M${cx},${cy}Z`;
  if (p >= 1) return `M0,0H240V240H0Z`;
  const angle = p * 360 - 90;
  const rad = (angle * Math.PI) / 180;
  const ex = (cx + r * Math.cos(rad)).toFixed(3);
  const ey = (cy + r * Math.sin(rad)).toFixed(3);
  const large = p > 0.5 ? 1 : 0;
  return `M${cx},${cy}L${cx},${cy - r}A${r},${r} 0 ${large},1 ${ex},${ey}Z`;
}

const DEPTH_LAYERS = 18;

function PieChart3D({ inView }: { inView: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = Date.now();
    const duration = 1600;
    let raf: number;
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const raw = Math.min(elapsed / duration, 1);
      const eased = raw < 1 ? 1 - Math.pow(1 - raw, 3) : 1;
      setProgress(eased);
      if (raw < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const filled = (SATISFACTION / 100) * progress;
  const sweepFilled = getSweepPath(filled);
  const sweepAll   = getSweepPath(Math.min(progress + 0.001, 1));

  return (
    <div style={{ perspective: "700px", perspectiveOrigin: "50% 60%" }}>
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateX: 78, scale: 0.55, opacity: 0 }}
        animate={inView ? { rotateX: 44, scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.34, 1.1, 0.64, 1], delay: 0.15 }}
      >
        <div style={{ position: "relative", width: 240, height: 240 }}>
          {/* ── Background (unfilled) disc ── */}
          {Array.from({ length: DEPTH_LAYERS }).map((_, i) => (
            <div key={`bg-${i}`} style={{
              position: "absolute", top: DEPTH_LAYERS - i, left: 0,
              width: 240, height: 240, borderRadius: "50%",
              background: "rgba(255,255,255,0.04)",
              clipPath: `path("${sweepAll}")`,
              filter: `brightness(${0.3 + (i / DEPTH_LAYERS) * 0.5})`,
            }} />
          ))}
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: 240, height: 240, borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            clipPath: `path("${sweepAll}")`,
          }} />

          {/* ── Filled (red) disc ── */}
          {Array.from({ length: DEPTH_LAYERS }).map((_, i) => (
            <div key={`fill-${i}`} style={{
              position: "absolute", top: DEPTH_LAYERS - i, left: 0,
              width: 240, height: 240, borderRadius: "50%",
              background: "conic-gradient(from -90deg, #a8141a, #C81920, #e8232c, #C81920)",
              clipPath: `path("${sweepFilled}")`,
              filter: `brightness(${0.25 + (i / DEPTH_LAYERS) * 0.55})`,
            }} />
          ))}
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: 240, height: 240, borderRadius: "50%",
            background: "conic-gradient(from -90deg, #a8141a, #C81920, #e8232c, #C81920)",
            boxShadow: "0 0 52px rgba(200,25,32,0.4), 0 0 90px rgba(200,25,32,0.12)",
            clipPath: `path("${sweepFilled}")`,
          }} />

          {/* ── Center badge ── */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 96, height: 96, borderRadius: "50%",
            background: "radial-gradient(circle, #0d1e2d 60%, #07111b)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            zIndex: 10,
          }}>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Avg.</span>
            <span style={{ fontSize: 21, fontWeight: 700, color: "#C81920", lineHeight: 1.15 }}>
              {(SATISFACTION * progress).toFixed(1)}%
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="#C81920" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.049 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69L9.05 2.927z" />
    </svg>
  );
}

const doubled = [...fiveStarReviews, ...fiveStarReviews];

export function TriangleCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chartRef   = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px" });
  const chartInView = useInView(chartRef,  { once: true, margin: "-60px" });

  return (
    <section className="bg-[#07111b] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(200,25,32,0.12),transparent_50%),rgba(255,255,255,0.025)] overflow-hidden">

          {/* ── Main stat row ── */}
          <div ref={sectionRef} className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Triangle Proof</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                The numbers behind every driveway, roof, and window we touch.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                We track every job, every review, and every callback so we can keep these numbers honest. This is what showing up consistently looks like.
              </p>

              <div className="mt-8 inline-flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-6 text-center">
                <p className="text-5xl font-bold text-[#C81920] sm:text-6xl">{SATISFACTION}%</p>
                <p className="mt-2 text-sm font-medium text-white/60">Customer Satisfaction Rate</p>
                <p className="mt-1 text-xs text-white/35">Based on verified Google reviews across the Triangle</p>
              </div>
            </motion.div>

            <div ref={chartRef} className="flex items-center justify-center">
              <PieChart3D inView={chartInView} />
            </div>
          </div>

          {/* ── Scrolling reviews banner ── */}
          <div className="border-t border-white/[0.07] bg-white/[0.02] py-5 overflow-hidden">
            <style>{`
              @keyframes scroll-left {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .reviews-track {
                display: flex;
                width: max-content;
                animation: scroll-left 50s linear infinite;
              }
              .reviews-track:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="reviews-track">
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
          </div>

        </div>
      </div>
    </section>
  );
}
