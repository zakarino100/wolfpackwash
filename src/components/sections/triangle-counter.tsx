"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const bars = [
  { label: "Customer Satisfaction", pct: 98 },
  { label: "5-Star Reviews", pct: 94 },
  { label: "On-Time Arrivals", pct: 96 },
  { label: "Repeat & Referral Customers", pct: 87 },
  { label: "Same-Day Quote Response", pct: 91 },
];

const stats = [
  { value: "1,200+", label: "Homes Cleaned" },
  { value: "13", label: "Cities Served" },
  { value: "4.9", label: "Avg. Star Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

function Bar({ label, pct, index }: { label: string; pct: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="group">
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium text-white/80">{label}</span>
        <motion.span
          className="text-sm font-semibold tabular-nums text-white"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.15 + index * 0.12 }}
        >
          {pct}%
        </motion.span>
      </div>
      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#a8141a,#C81920,#e8232c)]"
          initial={{ width: "0%" }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{
            duration: 1.1,
            delay: 0.1 + index * 0.12,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,transparent_60%,rgba(255,255,255,0.18))]"
          initial={{ width: "0%" }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{
            duration: 1.1,
            delay: 0.1 + index * 0.12,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </div>
  );
}

export function TriangleCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(sectionRef, { once: true, margin: "-60px" });

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

            <div className="flex flex-col justify-center gap-5">
              {bars.map((bar, i) => (
                <Bar key={bar.label} label={bar.label} pct={bar.pct} index={i} />
              ))}
              <p className="mt-1 text-xs text-white/35">
                Based on completed jobs and verified Google reviews across the Triangle.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
