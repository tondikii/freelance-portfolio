import { siteConfig } from "@/content/site";

export function waLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waDisplayNumber = "+62 838-9778-1157";