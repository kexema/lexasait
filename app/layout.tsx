import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { CookieNotice } from "@/components/CookieNotice";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Secure AI estate planning workspace`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: ["estate planning software", "AI document organization", "family legacy planning", "secure planning workspace"],
  authors: [{ name: site.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Secure AI estate planning workspace`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Secure AI estate planning workspace`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
