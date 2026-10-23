import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";
import "./globals.css";

// DejaVu Sans is the typeface used in the design review; subset to Latin.
const dejaVuSans = localFont({
  src: [
    { path: "./fonts/DejaVuSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/DejaVuSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Verdana", "Segoe UI", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: siteConfig.allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1461d1",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={dejaVuSans.variable}>
      <body>{children}</body>
    </html>
  );
}
