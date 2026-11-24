import { serviceOptions } from "@/lib/site/lead-form-options";

export function quotePreselect(category: string): string | undefined {
  return (serviceOptions as readonly string[]).includes(category) ? category : undefined;
}
