"use client";

import { useMemo, useState } from "react";
import { serviceOptions, frequencyOptions } from "@/lib/site/lead-form-options";
import type { QuoteRequest } from "@/lib/forms/quote";

type QuoteFormProps = {
  sourcePage: string;
  title?: string;
  compact?: boolean;
};

const initialState: QuoteRequest = {
  firstName: "",
  lastName: "",
  address: "",
  services: [],
  frequency: "",
  phone: "",
  email: "",
  notes: "",
};

export function QuoteForm({ sourcePage, title = "Get your free quote", compact = false }: QuoteFormProps) {
  const [form, setForm] = useState<QuoteRequest>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

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

    try {
      const payload: QuoteRequest = {
        ...form,
        pagePath: sourcePage,
        referrer: typeof document !== "undefined" ? document.referrer : "",
        source: "wolf_pack_wash_website",
      };

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Quote request failed");
      }

      setStatus("success");
      setMessage("Quote request sent. We’ll follow up fast.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Fast quote</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/65">
          Mobile-first form, page attribution built in, and every lead routed into Healthy Home.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Input label="First Name" value={form.firstName} onChange={(value) => setForm((c) => ({ ...c, firstName: value }))} />
          <Input label="Last Name" value={form.lastName} onChange={(value) => setForm((c) => ({ ...c, lastName: value }))} />
        </div>

        <Input label="Property Address" value={form.address} onChange={(value) => setForm((c) => ({ ...c, address: value }))} />

        <div>
          <label className="mb-2 block text-sm font-medium text-white/85">Services Needed</label>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {serviceOptions.map((service) => {
              const active = form.services.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={[
                    "rounded-2xl border px-4 py-3 text-left text-sm transition",
                    active
                      ? "border-amber-300 bg-amber-300/10 text-white"
                      : "border-white/10 bg-black/30 text-white/70 hover:border-white/25",
                  ].join(" ")}
                >
                  {service}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/85">Frequency (optional)</label>
          <select
            value={form.frequency}
            onChange={(event) => setForm((c) => ({ ...c, frequency: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
          >
            <option value="">Select frequency</option>
            {frequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Input label="Phone" value={form.phone} onChange={(value) => setForm((c) => ({ ...c, phone: value }))} />
          <Input label="Email (optional)" value={form.email ?? ""} onChange={(value) => setForm((c) => ({ ...c, email: value }))} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/85">Notes (optional)</label>
          <textarea
            value={form.notes ?? ""}
            onChange={(event) => setForm((c) => ({ ...c, notes: event.target.value }))}
            rows={compact ? 3 : 4}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
            placeholder="Anything we should know about the property, urgency, or service needs?"
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit || status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Get Free Quote"}
        </button>

        {message ? <p className="text-sm text-white/70">{message}</p> : null}
      </form>
    </div>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function Input({ label, value, onChange }: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/85">{label}</label>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
      />
    </div>
  );
}
