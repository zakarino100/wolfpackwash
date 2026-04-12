import { NextResponse } from "next/server";
import { submitQuoteToHealthyHome } from "@/lib/hh-backend/client";
import { notifyScoutOfLead } from "@/lib/scout/client";
import { quoteDefaults, type QuoteRequest } from "@/lib/forms/quote";

export async function POST(request: Request) {
  const body = (await request.json()) as QuoteRequest;
  const payload = {
    ...quoteDefaults,
    ...body,
  };

  const [hhResult, scoutResult] = await Promise.all([
    submitQuoteToHealthyHome(payload),
    notifyScoutOfLead(payload),
  ]);

  return NextResponse.json({
    ok: true,
    hhResult,
    scoutResult,
  });
}
