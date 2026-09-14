"use client";

import { useState } from "react";
import Image from "next/image";

export default function FeedbackPage() {
  const [name, setName] = useState(
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("name") ?? ""
      : ""
  );
  const [feedbackText, setFeedbackText] = useState("");
  const [contactOk, setContactOk] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const getParam = (key: string) =>
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get(key) ?? ""
      : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: getParam("phone"),
          rating: getParam("rating"),
          token: getParam("token"),
          feedback_text: feedbackText,
          contact_ok: contactOk,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <div style={styles.brand}>
            <Image
              src="/wpw-logo.png"
              alt="Wolf Pack Wash"
              width={48}
              height={48}
              style={{ borderRadius: 8, objectFit: "contain" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div>
              <div style={styles.brandName}>Wolf Pack Wash</div>
              <div style={styles.brandSub}>Power Washing</div>
            </div>
          </div>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🙏</div>
          <h1 style={styles.heading}>Thank you for your feedback</h1>
          <p style={styles.subtext}>
            We appreciate your honesty. We&apos;ll use it to get better, and if
            you asked us to follow up, we&apos;ll be in touch soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Brand header */}
        <div style={styles.brand}>
          <Image
            src="/wpw-logo.png"
            alt="Wolf Pack Wash"
            width={48}
            height={48}
            style={{ borderRadius: 8, objectFit: "contain", flexShrink: 0 }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div>
            <div style={styles.brandName}>Wolf Pack Wash</div>
            <div style={styles.brandSub}>Power Washing</div>
          </div>
        </div>

        <h1 style={styles.heading}>We want to make it right</h1>
        <p style={styles.subtext}>
          Your experience matters. Tell us what happened and we&apos;ll follow
          up personally.
        </p>

        <hr style={styles.divider} />

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Your name</label>
          <input
            style={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            required
          />

          <label style={styles.label}>What could we have done better?</label>
          <textarea
            style={{ ...styles.input, minHeight: 110, resize: "vertical" }}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Tell us what happened..."
            required
          />

          <label style={styles.label}>Can we reach out to make this right?</label>
          <div style={styles.toggleRow}>
            <label style={styles.toggleWrap}>
              <input
                type="checkbox"
                checked={contactOk}
                onChange={(e) => setContactOk(e.target.checked)}
                style={{ display: "none" }}
              />
              <div
                style={{
                  ...styles.slider,
                  background: contactOk ? "#D51714" : "#333",
                }}
                onClick={() => setContactOk(!contactOk)}
              >
                <div
                  style={{
                    ...styles.sliderThumb,
                    transform: contactOk ? "translateX(20px)" : "translateX(0)",
                  }}
                />
              </div>
            </label>
            <span style={{ fontSize: ".88rem", color: "#ccc" }}>
              Yes, please follow up with me
            </span>
          </div>

          {error && (
            <p style={{ color: "#ff6b6b", fontSize: ".85rem", marginBottom: 12 }}>
              Something went wrong. Please try again.
            </p>
          )}

          <button type="submit" style={styles.button} disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  card: {
    background: "#141414",
    border: "1px solid #2a2a2a",
    borderRadius: 16,
    padding: "2rem",
    width: "100%",
    maxWidth: 460,
    boxShadow: "0 4px 32px rgba(0,0,0,.6)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: ".75rem",
    marginBottom: "1.5rem",
    padding: ".75rem 1rem",
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 12,
  },
  brandName: {
    fontSize: "1rem",
    fontWeight: 800,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "#ffffff",
  },
  brandSub: {
    fontSize: ".7rem",
    fontWeight: 700,
    letterSpacing: ".15em",
    textTransform: "uppercase",
    color: "#D51714",
    marginTop: 2,
  },
  heading: {
    fontSize: "1.15rem",
    color: "#ffffff",
    marginBottom: ".4rem",
    fontWeight: 700,
  },
  subtext: {
    fontSize: ".88rem",
    color: "#999",
    marginBottom: "1.5rem",
    lineHeight: 1.5,
  },
  divider: {
    border: "none",
    borderTop: "1px solid #2a2a2a",
    margin: "1.25rem 0",
  },
  label: {
    display: "block",
    fontSize: ".82rem",
    fontWeight: 600,
    color: "#cccccc",
    marginBottom: ".3rem",
  },
  input: {
    width: "100%",
    padding: ".65rem .85rem",
    background: "#1f1f1f",
    border: "1px solid #333",
    borderRadius: 8,
    fontSize: ".95rem",
    color: "#ffffff",
    marginBottom: "1rem",
    outline: "none",
    boxSizing: "border-box",
  },
  toggleRow: {
    display: "flex",
    alignItems: "center",
    gap: ".75rem",
    marginBottom: "1.5rem",
  },
  toggleWrap: {
    cursor: "pointer",
  },
  slider: {
    position: "relative",
    width: 44,
    height: 24,
    borderRadius: 24,
    cursor: "pointer",
    transition: "background .2s",
    flexShrink: 0,
  },
  sliderThumb: {
    position: "absolute",
    height: 18,
    width: 18,
    left: 3,
    top: 3,
    background: "#fff",
    borderRadius: "50%",
    transition: "transform .2s",
  },
  button: {
    width: "100%",
    padding: ".8rem",
    background: "#D51714",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: ".03em",
  },
};
