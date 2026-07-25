import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SkipLink } from "@/components/SkipLink";
import { jsonLd, site } from "@/lib/content";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

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
    "LifeVault",
    "Artificial Intelligence",
    "Cybersecurity",
    "CompTIA Security+",
    "FormForge",
    "Graphic Information Technology",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.legal,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.metaTitle,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_US",
    type: "profile",
    firstName: "Camden",
    lastName: "Burke",
    username: "camdenburke",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.ogImageAlt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        alt: site.ogImageAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-dvh bg-mist font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <ScrollProgress />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
