import { NextResponse } from "next/server";
import type { TrackEventPayload } from "@/lib/analytics/events";

export async function POST(request: Request) {
  const body = (await request.json()) as TrackEventPayload;

  return NextResponse.json({
    ok: true,
    received: body,
  });
}
