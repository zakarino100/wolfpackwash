import type { QuoteRequest } from "@/lib/forms/quote";

/**
 * Server-side lead ping to a Discord channel via incoming webhook.
 * No-op (but non-fatal) when DISCORD_LEAD_WEBHOOK_URL is not configured.
 * Set the env var to the channel webhook URL to turn this on.
 */
export async function notifyDiscordOfLead(payload: QuoteRequest) {
  const webhookUrl = process.env.DISCORD_LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return { ok: true, notified: false, reason: "DISCORD_LEAD_WEBHOOK_URL not configured" };
  }

  const name = [payload.firstName, payload.lastName].filter(Boolean).join(" ") || "Unknown";
  const lines = [
    `New lead: ${name}`,
    `Phone: ${payload.phone || "n/a"}`,
    payload.email ? `Email: ${payload.email}` : null,
    `Address: ${payload.address || "n/a"}`,
    `Services: ${payload.services?.join(", ") || "n/a"}`,
    payload.stories ? `Stories: ${payload.stories}` : null,
    payload.approxSqft ? `Approx sqft: ${payload.approxSqft}` : null,
    payload.frequency ? `Frequency: ${payload.frequency}` : null,
    payload.notes ? `Notes: ${payload.notes}` : null,
    `Source: ${payload.source || "wolf_pack_wash_website"}`,
  ].filter(Boolean);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Wolf Pack Wash Leads",
        embeds: [
          {
            title: "New Website Lead",
            description: lines.join("\n"),
            color: 0xc81920,
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });
    return { ok: response.ok, notified: true, status: response.status };
  } catch (error) {
    return { ok: false, notified: true, error: String(error) };
  }
}
