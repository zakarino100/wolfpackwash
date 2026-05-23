import { NextRequest, NextResponse } from "next/server";

const HH_BACKEND = "https://healthy-home-backend-production.up.railway.app";
const SCOUT_BOT_TOKEN = process.env.SCOUT_BOT_TOKEN ?? "";
const SCOUT_FEEDBACK_CHANNEL = process.env.DISCORD_LEADS_CHANNEL_ID ?? "";

async function notifyScout(content: string) {
  if (!SCOUT_BOT_TOKEN || !SCOUT_FEEDBACK_CHANNEL) return;
  await fetch(`https://discord.com/api/v10/channels/${SCOUT_FEEDBACK_CHANNEL}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bot ${SCOUT_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  }).catch((err) => console.error("[feedback] Discord notify failed:", err));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, rating, token, feedback_text, contact_ok } = body;

    if (!feedback_text?.trim()) {
      return NextResponse.json({ error: "feedback_text required" }, { status: 400 });
    }

    // Forward to HH Backend for storage + workflow tracking
    try {
      await fetch(`${HH_BACKEND}/feedback/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name:          name ?? "",
          phone:         phone ?? "",
          rating:        rating ?? "",
          feedback_text: feedback_text ?? "",
          contact_ok:    contact_ok ? "yes" : "no",
          ...(token ? { token } : {}),
        }),
        redirect: "manual",
      });
    } catch (err) {
      console.error("[feedback] HH Backend relay failed:", err);
      // Non-fatal — still notify Scout
    }

    // Discord alert to Scout
    const stars = rating ? "⭐".repeat(Math.min(parseInt(rating, 10) || 0, 5)) : "?";
    const snippet = (feedback_text ?? "").slice(0, 150);
    await notifyScout(
      `⚠️ **WPW Negative Feedback** — ${name ?? "Unknown"} ${stars}\n` +
      `💬 "${snippet}"\n` +
      `📞 ${phone ?? "—"}\n` +
      `${contact_ok ? "✅ Wants follow-up" : "❌ No follow-up requested"}`
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[feedback] route error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
