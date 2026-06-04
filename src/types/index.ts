export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  outcome: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  image: string;
  faqs: FAQItem[];
}

export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  notIncluded?: string[];
  popular?: boolean;
  ctaText: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface SchemaFAQ {
  question: string;
  answer: string;
}

export interface HowToStep {
  position: number;
  name: string;
  text: string;
  url?: string;
}
