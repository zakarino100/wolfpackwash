"use client";

import { useFunnel } from "@/components/funnel/funnel-context";

/**
 * A button that opens the shared "Select Your Service" funnel modal.
 * Replaces the old standalone lead form site-wide.
 */
export function QuoteCta({
  children,
  className,
  preselect,
}: {
  children: React.ReactNode;
  className?: string;
  preselect?: string | string[];
}) {
  const { openFunnel } = useFunnel();
  return (
    <button type="button" onClick={() => openFunnel(preselect)} className={className}>
      {children}
    </button>
  );
}
