import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SkipLink } from "@/components/SkipLink";
import { personSchema, site } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.metaTitle, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Camden Burke",
    "CEO",
    "Founder",
    "AppVantix",
    "Artificial Intelligence",
    "Cybersecurity",
    "CompTIA Security+",
    "FormForge",
    "Graphic Information Technology",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    title: site.metaTitle,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_US",
    type: "profile",
    images: [
      { url: "/og-image.svg", width: 1200, height: 630, alt: site.metaTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.description,
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-dvh bg-void font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SkipLink />
        <ScrollProgress />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
