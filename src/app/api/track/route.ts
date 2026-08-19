import { NextResponse } from "next/server";

/**
 * Lightweight event tracker. Currently used for business-card QR "scan" events
 * (someone opened /card). Posts a Discord embed to CARD_SCAN_WEBHOOK_URL when
 * configured (non-fatal no-op otherwise). Submit-stage logging is handled
 * separately by /api/quote → Scout, tagged with the lead source.
 */
type TrackBody = {
  event?: string;
  source?: string;
  pagePath?: string;
  referrer?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as TrackBody;

  const webhook = process.env.CARD_SCAN_WEBHOOK_URL;
  if (webhook && body?.event === "card_scan") {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "Wolf Pack Wash — Card Tracker",
          embeds: [
            {
              title: "📇 Business card scanned",
              description: [
                "Someone scanned a card and opened the free-quote page.",
                `Source: ${body.source || "business_card"}`,
                body.referrer ? `Referrer: ${body.referrer}` : null,
              ]
                .filter(Boolean)
                .join("\n"),
              color: 0xc81920,
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });
    } catch {
      // non-fatal
    }
  }

  return NextResponse.json({ ok: true, received: body });
}
