import { NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import { LOCALES } from "@/locales";
import { supportedLocales } from "@/i18n/locales.mjs";
import "../globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { setRequestLocale } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://silence.codes'),
  title: {
    default: "Silence AI",
    template: "%s | Silence AI"
  },
  description: "AI-SOC and SLNC-env: AI security and sealed development cloud that keeps code, prompts, and builds inside your network.",
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Silence AI',
    description: 'AI-SOC and SLNC-env: AI security and sealed development cloud that keeps code, prompts, and builds inside your network.',
    url: 'https://silence.codes',
    siteName: 'Silence AI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/supreme_dashboard.jpeg',
        width: 1200,
        height: 630,
        alt: 'Silence AI Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silence AI',
    description: 'AI-SOC and SLNC-env: AI security and sealed development cloud that keeps code, prompts, and builds inside your network.',
    images: ['/supreme_dashboard.jpeg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ja': '/ja',
      'zh': '/zh',
      'ko': '/ko',
      'fr': '/fr',
      'de': '/de',
      'ru': '/ru',
      'is': '/is',
      'tr': '/tr',
      'pl': '/pl',
      'vi': '/vi',
    },
  },
  other: {
    verification: 'bms90c794rpwp6mwhst',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function RootLayout(props) {
  const params = await props.params;
  const { locale } = params;

  // Validate that the incoming `locale` parameter is valid
  // (this should be ensured by `generateStaticParams` but good for safety)
  if (!supportedLocales.includes(locale)) {
    return null; // Or notFound()
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = LOCALES[locale] ?? LOCALES['en'];

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        style={{ backgroundColor: "#01091C" }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutWrapper initialLanguage={locale}>{props.children}</LayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
