import type { QuoteRequest } from "@/lib/forms/quote";

function buildHealthyHomePayload(payload: QuoteRequest) {
  return {
    first_name: payload.firstName,
    last_name: payload.lastName,
    address: payload.address,
    phone: payload.phone,
    email: payload.email || null,
    service_interest: payload.services,
    notes: payload.notes || null,
    preferred_contact: payload.phone ? "sms" : null,
    utm_source: payload.utmSource || payload.source || "wolf_pack_wash_website",
    utm_medium: payload.utmMedium || null,
    utm_campaign: payload.utmCampaign || null,
    utm_content: payload.utmContent || null,
    page_path: payload.pagePath || null,
    referrer: payload.referrer || null,
    frequency: payload.frequency || null,
  };
}

export async function submitQuoteToHealthyHome(payload: QuoteRequest) {
  const endpoint = process.env.HH_FORM_ENDPOINT;
  const token = process.env.HH_FORM_TOKEN;
  const normalized = buildHealthyHomePayload(payload);

  if (!endpoint) {
    return {
      ok: true,
      forwarded: false,
      reason: "HH_FORM_ENDPOINT not configured",
      payload: normalized,
    };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { "X-HH-Token": token } : {}),
    },
    body: JSON.stringify(normalized),
  });

  const json = await response.json().catch(() => null);

  return {
    ok: response.ok,
    forwarded: true,
    status: response.status,
    payload: normalized,
    response: json,
  };
}
