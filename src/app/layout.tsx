import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";
import { JsonLd } from "@/components/shared/json-ld";
import { APP_NAME, APP_DESCRIPTION, APP_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME} — IRS-Authorized ITIN Application Service`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    "ITIN application",
    "ITIN number",
    "get ITIN",
    "ITIN for non-resident",
    "ITIN for LLC",
    "IRS CAA",
    "W-7 form",
    "ITIN for Amazon sellers",
    "ITIN for freelancers",
  ],
  authors: [{ name: "itin.so" }],
  creator: "itin.so",
  publisher: "itin.so",
  metadataBase: new URL(APP_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    title: `${APP_NAME} — IRS-Authorized ITIN Application Service`,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "itin.so — Get Your ITIN Number Fast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} — IRS-Authorized ITIN Application Service`,
    description: APP_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: APP_NAME,
  url: APP_URL,
  logo: {
    "@type": "ImageObject",
    url: `${APP_URL}/logo.png`,
    width: 600,
    height: 60,
  },
  description: APP_DESCRIPTION,
  foundingDate: "2020",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English"],
    url: `${APP_URL}/contact/`,
  },
  sameAs: [
    "https://twitter.com/itindotso",
    "https://linkedin.com/company/itindotso",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: APP_NAME,
  url: APP_URL,
  description: APP_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: APP_NAME,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${APP_URL}/blog/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
