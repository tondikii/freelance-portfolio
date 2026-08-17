import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/content/site";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — Jasa Pembuatan Website Profesional untuk Bisnis`,
    template: `%s — ${siteConfig.shortName}`,
  },
  description:
    "Freelance fullstack developer dengan 4+ tahun pengalaman. Landing page siap pakai untuk bisnismu — mulai dari demo yang sudah jadi, tinggal kustomisasi.",
  keywords: [
    "jasa pembuatan website",
    "landing page murah",
    "freelance web developer",
    "website UMKM",
    "jasa website indonesia",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: `${siteConfig.name} — Jasa Pembuatan Website Profesional untuk Bisnis`,
    description:
      "Landing page siap pakai untuk bisnismu — pilih dari 3 demo (klinik kecantikan, spa, wedding organizer), tinggal kustomisasi.",
    siteName: siteConfig.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
