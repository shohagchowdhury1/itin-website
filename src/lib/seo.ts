import { Metadata } from "next";
import { APP_NAME, APP_URL } from "@/lib/constants";

interface PageMetadataProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  keywords?: string[];
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/og-image.jpg",
  ogType = "article",
  keywords = [],
  noIndex = false,
}: PageMetadataProps): Metadata {
  const url = `${APP_URL}${path}`;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${APP_URL}${ogImage}`;

  return {
    title: `${title} | ${APP_NAME}`,
    description,
    keywords: [
      "ITIN",
      "ITIN application",
      "IRS",
      "CAA",
      "non-resident",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: ogType,
      locale: "en_US",
      url,
      title: `${title} | ${APP_NAME}`,
      description,
      siteName: APP_NAME,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${APP_NAME}`,
      description,
      images: [fullOgImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export const defaultKeywords = [
  "ITIN number",
  "apply for ITIN",
  "how to get ITIN",
  "ITIN application",
  "ITIN for non resident",
  "ITIN for LLC",
  "ITIN for Amazon sellers",
  "ITIN for freelancers",
  "ITIN without SSN",
  "ITIN renewal",
  "IRS W-7 form",
  "certifying acceptance agent",
  "CAA ITIN",
];
