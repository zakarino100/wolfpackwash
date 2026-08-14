"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFunnel } from "./funnel-context";
import { serviceOptions, frequencyOptions } from "@/lib/site/lead-form-options";
import type { QuoteRequest } from "@/lib/forms/quote";

type Step = 0 | 1 | 2;

const STEP_LABELS = ["Service", "Property", "Contact"] as const;

const storyOptions = ["1 story", "2 stories", "3+ stories"] as const;

const emptyForm = {
  services: [] as string[],
  frequency: "",
  address: "",
  stories: "",
  approxSqft: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  notes: "",
};

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  const key = "wpw_sid";
  let sid = sessionStorage.getItem(key);
  if (!sid) {
    sid = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    sessionStorage.setItem(key, sid);
  }
  return sid;
}

function getStoredUtms(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem("wpw_utms");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function ServicePickerModal() {
  const { open, preselected, closeFunnel } = useFunnel();
  const [step, setStep] = useState<Step>(0);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);

  // Seed preselected service each time the modal opens.
  useEffect(() => {
    if (open) {
      setStep(0);
      setStatus("idle");
      setForm((c) => ({ ...emptyForm, services: preselected.length ? [...preselected] : c.services }));
    }
  }, [open, preselected]);

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFunnel();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, closeFunnel]);

  function toggleService(service: string) {
    setForm((c) => ({
      ...c,
      services: c.services.includes(service)
        ? c.services.filter((s) => s !== service)
        : [...c.services, service],
    }));
  }

  const canAdvance = useMemo(() => {
    if (step === 0) return form.services.length > 0;
    if (step === 1) return form.address.trim().length > 3 && form.stories.length > 0;
    if (step === 2) return Boolean(form.firstName && form.lastName && form.phone.trim().length >= 7);
    return false;
  }, [step, form]);

  async function submit() {
    if (!canAdvance) return;
    setStatus("submitting");

    const utms = getStoredUtms();
    const detailBits = [
      form.stories && `Stories: ${form.stories}`,
      form.approxSqft && `Approx sqft: ${form.approxSqft}`,
      form.notes && `Notes: ${form.notes}`,
    ].filter(Boolean);

    const payload: QuoteRequest = {
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      services: form.services,
      frequency: form.frequency || undefined,
      stories: form.stories || undefined,
      approxSqft: form.approxSqft || undefined,
      phone: form.phone,
      email: form.email || undefined,
      notes: detailBits.join(" | ") || undefined,
      source: "wolf_pack_wash_service_funnel",
      pagePath: typeof window !== "undefined" ? window.location.pathname : "/",
      landingPage: typeof window !== "undefined" ? sessionStorage.getItem("wpw_landing") || window.location.pathname : "/",
      referrer: typeof document !== "undefined" ? document.referrer : "",
      sessionId: getOrCreateSessionId(),
      utmSource: utms["utm_source"] || undefined,
      utmMedium: utms["utm_medium"] || undefined,
      utmCampaign: utms["utm_campaign"] || undefined,
      utmContent: utms["utm_content"] || undefined,
      utmTerm: utms["utm_term"] || undefined,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const progressPct = status === "success" ? 100 : ((step + 1) / 3) * 100;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-modal="true"
          role="dialog"
          aria-label="Select your service"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeFunnel}
          />

          <motion.div
            ref={dialogRef}
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-[1.75rem] border border-[var(--hairline)] bg-[var(--surface-1)] text-[var(--ink)] shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:rounded-[1.75rem]"
          >
            {/* Header + progress bar */}
            <div className="relative border-b border-[var(--hairline)] px-6 pb-4 pt-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  Free Quote
                </p>
                <button
                  onClick={closeFunnel}
                  aria-label="Close"
                  className="grid h-8 w-8 place-items-center rounded-full border border-[var(--hairline)] text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <h2 className="mt-2 text-xl font-semibold text-[var(--ink-strong)]">
                {status === "success" ? "You're all set" : "Select your service"}
              </h2>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--hairline)]">
                  <motion.div
                    className="h-full rounded-full bg-[var(--accent)]"
                    initial={false}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  />
                </div>
                {status !== "success" && (
                  <div className="mt-2 flex justify-between text-[11px] font-medium uppercase tracking-[0.14em]">
                    {STEP_LABELS.map((label, i) => (
                      <span
                        key={label}
                        className={i <= step ? "text-[var(--accent)]" : "text-[var(--ink-faint)]"}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {status === "success" ? (
                <SuccessPanel services={form.services} />
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.22 }}
                  >
                    {step === 0 && (
                      <div>
                        <p className="mb-3 text-sm text-[var(--ink-muted)]">
                          Pick everything you want cleaned. Bundle more and we sharpen the price.
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {serviceOptions.map((service) => {
                            const active = form.services.includes(service);
                            return (
                              <button
                                key={service}
                                type="button"
                                onClick={() => toggleService(service)}
                                className={[
                                  "rounded-xl border px-3 py-3 text-left text-sm transition",
                                  active
                                    ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--ink-strong)]"
                                    : "border-[var(--hairline)] bg-[var(--card)] text-[var(--ink-muted)] hover:border-[var(--accent)]/40",
                                ].join(" ")}
                              >
                                {service}
                              </button>
                            );
                          })}
                        </div>
                        <div className="mt-4">
                          <FieldLabel>How often? (optional)</FieldLabel>
                          <Select
                            value={form.frequency}
                            onChange={(v) => setForm((c) => ({ ...c, frequency: v }))}
                            placeholder="One-time or recurring"
                            options={[...frequencyOptions]}
                          />
                        </div>
                      </div>
                    )}

                    {step === 1 && (
                      <div className="space-y-4">
                        <div>
                          <FieldLabel>Property address</FieldLabel>
                          <Text
                            value={form.address}
                            onChange={(v) => setForm((c) => ({ ...c, address: v }))}
                            placeholder="123 Main St, Raleigh NC"
                            autoComplete="street-address"
                          />
                        </div>
                        <div>
                          <FieldLabel>How many stories?</FieldLabel>
                          <div className="grid grid-cols-3 gap-2">
                            {storyOptions.map((opt) => {
                              const active = form.stories === opt;
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => setForm((c) => ({ ...c, stories: opt }))}
                                  className={[
                                    "rounded-xl border px-2 py-3 text-sm transition",
                                    active
                                      ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--ink-strong)]"
                                      : "border-[var(--hairline)] bg-[var(--card)] text-[var(--ink-muted)] hover:border-[var(--accent)]/40",
                                  ].join(" ")}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        <div>
                          <FieldLabel>Approx. square footage (optional)</FieldLabel>
                          <Text
                            value={form.approxSqft}
                            onChange={(v) => setForm((c) => ({ ...c, approxSqft: v }))}
                            placeholder="e.g. 2,400"
                            inputMode="numeric"
                          />
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <FieldLabel>First name</FieldLabel>
                            <Text
                              value={form.firstName}
                              onChange={(v) => setForm((c) => ({ ...c, firstName: v }))}
                              autoComplete="given-name"
                            />
                          </div>
                          <div>
                            <FieldLabel>Last name</FieldLabel>
                            <Text
                              value={form.lastName}
                              onChange={(v) => setForm((c) => ({ ...c, lastName: v }))}
                              autoComplete="family-name"
                            />
                          </div>
                        </div>
                        <div>
                          <FieldLabel>Phone</FieldLabel>
                          <Text
                            value={form.phone}
                            onChange={(v) => setForm((c) => ({ ...c, phone: v }))}
                            placeholder="(919) 555-0123"
                            autoComplete="tel"
                            inputMode="tel"
                          />
                        </div>
                        <div>
                          <FieldLabel>Email (optional)</FieldLabel>
                          <Text
                            value={form.email}
                            onChange={(v) => setForm((c) => ({ ...c, email: v }))}
                            autoComplete="email"
                            inputMode="email"
                          />
                        </div>
                        {status === "error" && (
                          <p className="text-sm text-[var(--accent)]">
                            Something went wrong. Please try again or call us directly.
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Footer actions */}
            {status !== "success" && (
              <div className="flex items-center justify-between gap-3 border-t border-[var(--hairline)] px-6 py-4">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => (s - 1) as Step)}
                    className="rounded-full border border-[var(--hairline)] px-5 py-2.5 text-sm font-medium text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
                  >
                    Back
                  </button>
                ) : (
                  <span className="text-xs text-[var(--ink-faint)]">Step {step + 1} of 3</span>
                )}

                {step < 2 ? (
                  <button
                    type="button"
                    disabled={!canAdvance}
                    onClick={() => setStep((s) => (s + 1) as Step)}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(200,25,32,0.3)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={!canAdvance || status === "submitting"}
                    onClick={submit}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(200,25,32,0.3)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending..." : "Get My Free Quote"}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SuccessPanel({ services }: { services: string[] }) {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--accent)]/12 text-[var(--accent)]">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="text-lg font-semibold text-[var(--ink-strong)]">Request received</p>
        <p className="mt-1 text-sm text-[var(--ink-muted)]">
          Your quote for {services.length ? services.join(", ") : "your service"} is in. We respond the same
          day with pricing and the next open date.
        </p>
      </div>
      <a
        href="tel:+19197385394"
        className="mt-1 inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition hover:border-[var(--accent)]/50"
      >
        Prefer to talk now? Call (919) 738-5394
      </a>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="mb-1.5 block text-sm font-medium text-[var(--ink)]">{children}</label>;
}

function Text({
  value,
  onChange,
  placeholder,
  autoComplete,
  inputMode,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      inputMode={inputMode}
      className="w-full rounded-xl border border-[var(--hairline)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--ink-faint)] focus:border-[var(--accent)]"
    />
  );
}

function Select({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-[var(--hairline)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)]"
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
