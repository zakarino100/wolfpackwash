export type QuoteRequest = {
  firstName: string;
  lastName: string;
  address: string;
  services: string[];
  frequency?: string;
  phone: string;
  email?: string;
  notes?: string;
  source?: string;
  pagePath?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
};

export const quoteDefaults = {
  source: "wolf_pack_wash_website",
} as const;
