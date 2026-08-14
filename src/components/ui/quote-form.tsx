"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { serviceOptions, frequencyOptions } from "@/lib/site/lead-form-options";
import type { QuoteRequest } from "@/lib/forms/quote";

type QuoteFormProps = {
  sourcePage: string;
  title?: string;
  compact?: boolean;
};

const initialState: Omit<QuoteRequest, "pagePath" | "referrer" | "source" | "utmSource" | "utmMedium" | "utmCampaign" | "utmContent" | "utmTerm" | "landingPage" | "sessionId"> = {
  firstName: "",
  lastName: "",
  address: "",
  services: [],
  frequency: "",
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

function getStoredUtms() {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem("wpw_utms");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function QuoteForm({ sourcePage, title = "Get your free quote", compact = false }: QuoteFormProps) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const landingPageRef = useRef<string>("");
  const sessionIdRef = useRef<string>("");

  // Capture UTMs once on mount and persist to sessionStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    const hasUtm = utmKeys.some((k) => params.get(k));

    if (hasUtm) {
      const utms: Record<string, string> = {};
      utmKeys.forEach((k) => {
        const v = params.get(k);
        if (v) utms[k] = v;
      });
      sessionStorage.setItem("wpw_utms", JSON.stringify(utms));
    }

    // Store landing page once per session
    if (!sessionStorage.getItem("wpw_landing")) {
      sessionStorage.setItem("wpw_landing", window.location.pathname + window.location.search);
    }
    landingPageRef.current = sessionStorage.getItem("wpw_landing") || window.location.pathname;
    sessionIdRef.current = getOrCreateSessionId();
  }, []);

  const canSubmit = useMemo(() => {
    return Boolean(form.firstName && form.lastName && form.address && form.phone && form.services.length);
  }, [form]);

  function toggleService(service: string) {
    setForm((current) => {
      const services = current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service];
      return { ...current, services };
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");
    setMessage("");

    const utms = getStoredUtms();

    try {
      const payload: QuoteRequest = {
        ...form,
        pagePath: sourcePage,
        landingPage: landingPageRef.current,
        referrer: typeof document !== "undefined" ? document.referrer : "",
        source: "wolf_pack_wash_website",
        sessionId: sessionIdRef.current,
        utmSource: utms["utm_source"] || undefined,
        utmMedium: utms["utm_medium"] || undefined,
        utmCampaign: utms["utm_campaign"] || undefined,
        utmContent: utms["utm_content"] || undefined,
        utmTerm: utms["utm_term"] || undefined,
      };

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Quote request failed");

      setStatus("success");
      setMessage("Quote request sent. We'll follow up fast.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.24)] sm:p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] opacity-70" />
      <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-[#C81920]/8 blur-3xl transition duration-700 group-hover:bg-[#C81920]/12" />

      <div className="relative mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C81920]">Fast quote</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/65">
          Fill this out and we'll get back to you the same day with pricing and availability.
        </p>
      </div>

      {status === "success" ? (
        <div className="relative flex flex-col items-center justify-center gap-4 py-10 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C81920]/15 text-[#C81920]">
            <svg width="28" height="28" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">You're on the list.</p>
            <p className="mt-1 text-sm text-white/60">We'll follow up fast — usually same day.</p>
          </div>
          <button
            onClick={() => { setStatus("idle"); setMessage(""); }}
            className="mt-2 text-xs text-white/40 underline underline-offset-2 hover:text-white/60"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative space-y-4">
          {/* Name row */}
          <div className="grid gap-3 sm:grid-cols-2">
            <Input label="First Name" value={form.firstName} onChange={(v) => setForm((c) => ({ ...c, firstName: v }))} required autoComplete="given-name" />
            <Input label="Last Name" value={form.lastName} onChange={(v) => setForm((c) => ({ ...c, lastName: v }))} required autoComplete="family-name" />
          </div>

          <Input label="Property Address" value={form.address} onChange={(v) => setForm((c) => ({ ...c, address: v }))} required autoComplete="street-address" />

          {/* Services */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/85">Services Needed</label>
            <div className="grid grid-cols-2 gap-2">
              {serviceOptions.map((service) => {
                const active = form.services.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={[
                      "relative overflow-hidden rounded-2xl border px-3 py-3 text-left text-sm transition duration-200 active:scale-[0.985]",
                      active
                        ? "border-[#C81920] bg-[#C81920]/10 text-white shadow-[0_0_0_1px_rgba(200,25,32,0.20)]"
                        : "border-white/10 bg-black/30 text-white/70 hover:border-white/25 hover:bg-white/[0.04]",
                    ].join(" ")}
                  >
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] opacity-60" />
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Frequency */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/85">Frequency <span className="text-white/35">(optional)</span></label>
            <select
              value={form.frequency}
              onChange={(e) => setForm((c) => ({ ...c, frequency: e.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[#C81920] focus:bg-white/[0.04]"
            >
              <option value="">Select frequency</option>
              {frequencyOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          {/* Contact row */}
          <div className="grid gap-3 sm:grid-cols-2">
            <Input label="Phone" value={form.phone} onChange={(v) => setForm((c) => ({ ...c, phone: v }))} required autoComplete="tel" inputMode="tel" />
            <Input label="Email" value={form.email ?? ""} onChange={(v) => setForm((c) => ({ ...c, email: v }))} autoComplete="email" inputMode="email" optional />
          </div>

          {/* Notes */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/85">Notes <span className="text-white/35">(optional)</span></label>
            <textarea
              value={form.notes ?? ""}
              onChange={(e) => setForm((c) => ({ ...c, notes: e.target.value }))}
              rows={compact ? 3 : 4}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[#C81920] focus:bg-white/[0.04]"
              placeholder="Any details about your property or what you need done?"
            />
          </div>

          <button
            type="submit"
            disabled={!canSubmit || status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C81920] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(200,25,32,0.30)] transition duration-200 hover:bg-[#a8141a] hover:shadow-[0_20px_48px_rgba(200,25,32,0.38)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting...
              </>
            ) : "Get Free Quote →"}
          </button>

          {status === "error" && message && (
            <p className="text-sm text-red-400">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

function Input({ label, value, onChange, required, optional, autoComplete, inputMode }: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/85">
        {label} {optional && <span className="text-white/35">(optional)</span>}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[#C81920] focus:bg-white/[0.04]"
      />
    </div>
  );
}
