import { SchemaFAQ, BreadcrumbItem, HowToStep } from "@/types";
import { APP_NAME, APP_URL } from "@/lib/constants";

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  authorUrl?: string;
  imageUrl?: string;
  wordCount?: number;
}

export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "itin.so Team",
  authorUrl = `${APP_URL}/about/`,
  imageUrl = `${APP_URL}/og-image.jpg`,
  wordCount,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
      jobTitle: "ITIN Application Specialist",
      sameAs: [
        "https://linkedin.com/company/itindotso",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: APP_NAME,
      url: APP_URL,
      logo: {
        "@type": "ImageObject",
        url: `${APP_URL}/logo.png`,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    ...(wordCount && { wordCount }),
    inLanguage: "en",
  };
}

export function generateBlogPostingSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "itin.so Team",
  authorUrl = `${APP_URL}/about/`,
  imageUrl = `${APP_URL}/og-image.jpg`,
  wordCount,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: APP_NAME,
      url: APP_URL,
      logo: {
        "@type": "ImageObject",
        url: `${APP_URL}/logo.png`,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    ...(wordCount && { wordCount }),
    inLanguage: "en",
  };
}

export function generateFAQSchema(faqs: SchemaFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href && { item: item.href }),
    })),
  };
}

export function generateProductSchema({
  name,
  description,
  url,
  price,
  priceValidUntil,
  ratingValue,
  reviewCount,
}: {
  name: string;
  description: string;
  url: string;
  price: number;
  priceValidUntil: string;
  ratingValue?: string;
  reviewCount?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: {
      "@type": "Brand",
      name: APP_NAME,
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      price: String(price),
      priceValidUntil,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: APP_NAME,
      },
    },
  };

  if (ratingValue && reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: "5",
      worstRating: "1",
    };
  }

  return schema;
}

export function generateHowToSchema({
  name,
  description,
  totalTime,
  estimatedCost,
  supplies,
  tools,
  steps,
}: {
  name: string;
  description: string;
  totalTime: string;
  estimatedCost?: { currency: string; value: string };
  supplies?: string[];
  tools?: string[];
  steps: HowToStep[];
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      position: step.position,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
    })),
  };

  if (estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    };
  }

  if (supplies && supplies.length > 0) {
    schema.supply = supplies.map((supply) => ({
      "@type": "HowToSupply",
      name: supply,
    }));
  }

  if (tools && tools.length > 0) {
    schema.tool = tools.map((tool) => ({
      "@type": "HowToTool",
      name: tool,
    }));
  }

  return schema;
}

export function generateServiceSchema({
  name,
  description,
  url,
  price,
}: {
  name: string;
  description: string;
  url: string;
  price: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: APP_NAME,
      url: APP_URL,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      price: String(price),
      availability: "https://schema.org/InStock",
    },
  };
}
