"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HH_API = "https://healthy-home-backend.replit.app/api/booking";

interface BookingData {
  name: string;
  phone: string;
  lastService: string | null;
  honoredPrice: string | null;
  address: string | null;
  alreadyBooked: boolean;
}

export default function ConfirmPage() {
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<BookingData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<"loading" | "confirm" | "form" | "done" | "error">("loading");
  const [preferredDays, setPreferredDays] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Extract token from URL on client
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("t");
    setToken(t);
    if (!t) { setError("No booking token found in link."); setStep("error"); return; }

    // Hit backend — marks clicked_link_at
    fetch(`${HH_API}/${t}`)
      .then(r => r.json())
      .then((d: BookingData | { error: string }) => {
        if ("error" in d) { setError((d as any).error); setStep("error"); return; }
        setData(d as BookingData);
        setStep((d as BookingData).alreadyBooked ? "done" : "confirm");
      })
      .catch(() => { setError("Couldn't load your booking. Try again or call us at (919) 899-7856."); setStep("error"); });
  }, []);

  const handleStartForm = () => {
    if (!token) return;
    // Mark form_started_at
    fetch(`${HH_API}/${token}/start`, { method: "POST" }).catch(() => {});
    setStep("form");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || submitting) return;
    setSubmitting(true);
    try {
      const r = await fetch(`${HH_API}/${token}/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preferredDays, notes }),
      });
      const result = await r.json();
      if (result.ok) setStep("done");
      else setError("Something went wrong. Please call us at (919) 899-7856.");
    } catch {
      setError("Couldn't submit. Please call us at (919) 899-7856.");
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#07111b] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logos/wolfpack_wash_shield_transparent.webp"
            alt="Wolf Pack Wash"
            width={80} height={80}
            className="object-contain"
          />
        </div>

        {/* Loading */}
        {step === "loading" && (
          <div className="text-center text-white/60 text-sm animate-pulse">Loading your booking...</div>
        )}

        {/* Error */}
        {step === "error" && (
          <div className="bg-red-950/40 border border-red-800/40 rounded-2xl p-6 text-center">
            <div className="text-2xl mb-2">⚠️</div>
            <p className="text-white/80">{error}</p>
            <a href="tel:+19198997856" className="mt-4 block text-[#C81920] font-semibold">(919) 899-7856</a>
          </div>
        )}

        {/* Confirm step */}
        {step === "confirm" && data && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">👋</div>
            <h1 className="text-xl font-bold mb-1">Hey {data.name}!</h1>
            <p className="text-white/60 text-sm mb-6">
              Matthew from Wolf Pack Wash here. Ready to lock in your service?
              {data.honoredPrice && (
                <span className="block mt-2 text-yellow-400 font-semibold">
                  We're honoring last year's price — no increases.
                </span>
              )}
            </p>
            {data.address && (
              <p className="text-white/50 text-xs mb-4">📍 {data.address}</p>
            )}
            <button
              onClick={handleStartForm}
              className="w-full bg-[#C81920] hover:bg-[#a8141a] text-white font-semibold py-3 rounded-full transition"
            >
              Yes, book my spot →
            </button>
            <a
              href="tel:+19198997856"
              className="block mt-3 text-white/40 text-sm hover:text-white/60 transition"
            >
              Or call us: (919) 899-7856
            </a>
          </div>
        )}

        {/* Form step */}
        {step === "form" && data && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h1 className="text-xl font-bold mb-1 text-center">Confirm Your Service</h1>
            <p className="text-white/50 text-sm text-center mb-6">We'll reach out to lock in the exact date.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/60 mb-1">Preferred days to schedule</label>
                <input
                  type="text"
                  value={preferredDays}
                  onChange={e => setPreferredDays(e.target.value)}
                  placeholder="e.g. Mon/Tue, any weekday, weekends..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-1">Anything we should know? <span className="text-white/30">(optional)</span></label>
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Gate code, dog in yard, different address, etc."
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:border-white/40 resize-none"
                />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#C81920] hover:bg-[#a8141a] disabled:opacity-50 text-white font-semibold py-3 rounded-full transition"
              >
                {submitting ? "Submitting..." : "Confirm my booking →"}
              </button>
            </form>
          </div>
        )}

        {/* Done */}
        {step === "done" && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">✅</div>
            <h1 className="text-xl font-bold mb-2">You're on the schedule!</h1>
            <p className="text-white/60 text-sm">
              Matthew will text you to confirm your exact date and time.
              Looking forward to seeing you.
            </p>
            <p className="mt-4 text-white/30 text-xs">Wolf Pack Wash · (919) 899-7856</p>
          </div>
        )}
      </div>
    </div>
  );
}
