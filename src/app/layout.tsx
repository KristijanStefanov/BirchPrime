import type { Metadata } from "next";
import { Source_Serif_4, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://birchprime.mk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Birch Prime — Шперплоча од бреза за градежништво, транспорт и мебел",
    template: "%s | Birch Prime",
  },
  description:
    "Специјализиран дистрибутер на висококвалитетни плочи од бела бреза. Оплата, противлизгачки плочи и мебелски плочи со брза испорака и технички лист за секоја испорака.",
  applicationName: "Birch Prime",
  keywords: [
    "шперплоча",
    "шперплоча од бреза",
    "оплата",
    "оплата за бетон",
    "противлизгачка плоча",
    "ламинирана шперплоча",
    "мебелска плоча",
    "плочи за градежништво",
    "Birch Prime",
  ],
  openGraph: {
    type: "website",
    locale: "mk_MK",
    url: siteUrl,
    siteName: "Birch Prime",
    title: "Birch Prime — Создадено да трае",
    description:
      "Шперплоча од бреза за градежништво, транспорт и производство.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mk" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SmoothScrollProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
