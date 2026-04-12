"use client";

import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function AnimatedCounter({ value, suffix = "", duration = 1.8 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(() => Math.round(motionValue.get()));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [duration, isInView, motionValue, value]);

  return <span ref={ref}>{rounded.get()}{suffix}</span>;
}
