export type TrackEventName =
  | "hero_cta_click"
  | "quote_cta_click"
  | "call_click"
  | "form_started"
  | "form_submitted"
  | "blog_cta_click"
  | "service_cta_click";

export type TrackEventPayload = {
  event: TrackEventName;
  pagePath?: string;
  referrer?: string;
  source?: string;
  meta?: Record<string, string | number | boolean | null | undefined>;
};
