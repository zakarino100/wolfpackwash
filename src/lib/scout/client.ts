import type { QuoteRequest } from "@/lib/forms/quote";

function buildScoutPayload(payload: QuoteRequest) {
  return {
    name: [payload.firstName, payload.lastName].filter(Boolean).join(" ") || null,
    phone: payload.phone || null,
    email: payload.email || null,
    address: payload.address || null,
    services: payload.services,
    source: payload.source || "wolf_pack_wash_website",
    notes: payload.notes || null,
    pagePath: payload.pagePath || null,
    frequency: payload.frequency || null,
  };
}

export async function notifyScoutOfLead(payload: QuoteRequest) {
  const webhookUrl = process.env.SCOUT_LEAD_WEBHOOK_URL;
  const normalized = buildScoutPayload(payload);

  if (!webhookUrl) {
    return {
      ok: true,
      notified: false,
      reason: "SCOUT_LEAD_WEBHOOK_URL not configured",
      payload: normalized,
    };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(normalized),
  });

  const json = await response.json().catch(() => null);

  return {
    ok: response.ok,
    notified: true,
    status: response.status,
    payload: normalized,
    response: json,
  };
}
