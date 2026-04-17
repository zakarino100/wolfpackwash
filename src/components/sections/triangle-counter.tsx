"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const SLICES = [
  { label: "Customer Satisfaction", value: 98, color: "#C81920" },
  { label: "5-Star Reviews",        value: 94, color: "#e8404a" },
  { label: "On-Time Arrivals",      value: 96, color: "#8a1018" },
  { label: "Repeat & Referral",     value: 87, color: "#f07078" },
  { label: "Same-Day Response",     value: 91, color: "#5c090e" },
];

const stats = [
  { value: "1,200+", label: "Homes Cleaned" },
  { value: "13",     label: "Cities Served" },
  { value: "4.9",    label: "Avg. Star Rating" },
  { value: "100%",   label: "Satisfaction Guarantee" },
];

const total = SLICES.reduce((s, sl) => s + sl.value, 0);

function buildConicGradient(slices: typeof SLICES) {
  let cum = 0;
  const stops = slices.map((sl) => {
    const start = (cum / total) * 100;
    cum += sl.value;
    const end = (cum / total) * 100;
    const gapStart = start + 0.6;
    const gapEnd   = end   - 0.6;
    return `transparent ${start.toFixed(2)}% ${gapStart.toFixed(2)}%, ${sl.color} ${gapStart.toFixed(2)}% ${gapEnd.toFixed(2)}%, transparent ${gapEnd.toFixed(2)}% ${end.toFixed(2)}%`;
  });
  return `conic-gradient(from -90deg, ${stops.join(", ")})`;
}

const conicGradient = buildConicGradient(SLICES);

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

const DEPTH_LAYERS = 20;

function PieChart3D({ inView }: { inView: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = Date.now();
    const duration = 1500;
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

  const sweepPath = getSweepPath(progress);

  return (
    <div style={{ perspective: "700px", perspectiveOrigin: "50% 60%" }}>
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateX: 75, scale: 0.6, opacity: 0 }}
        animate={inView ? { rotateX: 46, scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.34, 1.1, 0.64, 1], delay: 0.1 }}
      >
        <div style={{ position: "relative", width: 240, height: 240 }}>
          {Array.from({ length: DEPTH_LAYERS }).map((_, i) => {
            const offset = DEPTH_LAYERS - i;
            const brightness = 0.2 + (i / DEPTH_LAYERS) * 0.5;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: offset,
                  left: 0,
                  width: 240,
                  height: 240,
                  borderRadius: "50%",
                  background: conicGradient,
                  filter: `brightness(${brightness})`,
                  clipPath: `path("${sweepPath}")`,
                }}
              />
            );
          })}
          <div
            style={{
              position: "relative",
              width: 240,
              height: 240,
              borderRadius: "50%",
              background: conicGradient,
              boxShadow: "0 0 48px rgba(200,25,32,0.35), 0 0 80px rgba(200,25,32,0.12)",
              clipPath: `path("${sweepPath}")`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 88,
              height: 88,
              borderRadius: "50%",
              background: "radial-gradient(circle, #0d1c28 60%, #07111b)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Avg.</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#C81920", lineHeight: 1.1 }}>
              {(progress * 93.2).toFixed(0)}%
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function TriangleCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chartRef   = useRef<HTMLDivElement>(null);
  const statsInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const chartInView = useInView(chartRef,   { once: true, margin: "-60px" });

  return (
    <section className="bg-[#07111b] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(200,25,32,0.12),transparent_50%),rgba(255,255,255,0.025)] p-6 sm:p-10 lg:p-12">

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Triangle Proof</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                The numbers behind every driveway, roof, and window we touch.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                We track every job, every review, and every callback so we can keep these numbers honest. This is what showing up consistently looks like.
              </p>

              <div ref={sectionRef} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center"
                  >
                    <p className="text-2xl font-semibold text-[#C81920] sm:text-3xl">{s.value}</p>
                    <p className="mt-1 text-xs leading-tight text-white/55">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div ref={chartRef} className="flex flex-col items-center justify-center gap-7">
              <PieChart3D inView={chartInView} />

              <div className="w-full max-w-xs space-y-2.5">
                {SLICES.map((sl, i) => (
                  <motion.div
                    key={sl.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={chartInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.1, ease: "easeOut" }}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                        style={{ background: sl.color }}
                      />
                      <span className="text-sm text-white/70">{sl.label}</span>
                    </div>
                    <span className="text-sm font-semibold tabular-nums text-white">{sl.value}%</span>
                  </motion.div>
                ))}
                <p className="pt-1 text-xs text-white/30">
                  Based on completed jobs and verified Google reviews.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
