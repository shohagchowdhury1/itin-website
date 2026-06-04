export const APP_NAME = "itin.so";
export const APP_DESCRIPTION =
  "Get your ITIN number fast with our IRS-authorized CAA service. $297 flat fee, 7-day prep, no passport mailing required. 2,400+ applications submitted. 100% money-back guarantee.";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://itin.so";
export const WHATSAPP_NUMBER = "+1234567890";
export const UPDATED_DATE = "June 2026";

export const PRICING = {
  standard: 297,
  express: 397,
  renewal: 197,
};

export const STATS = {
  applicationsSubmitted: 2400,
  countriesServed: 150,
  responseTimeHours: 24,
  moneyBackGuarantee: 100,
  prepTimeDays: 7,
  irsProcessingWeeks: "6-11",
};

export const NAV_LINKS = [
  { href: "/itin-application/", label: "ITIN Application" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export const FOOTER_LINKS = {
  services: [
    { href: "/itin-application/", label: "ITIN Application" },
    { href: "/itin-for-llc/", label: "ITIN for LLC" },
    { href: "/itin-for-amazon-sellers/", label: "ITIN for Amazon Sellers" },
    { href: "/itin-for-freelancers/", label: "ITIN for Freelancers" },
    { href: "/itin-renewal/", label: "ITIN Renewal" },
  ],
  resources: [
    { href: "/blog/", label: "Blog" },
    { href: "/how-to-get-itin/", label: "How to Get an ITIN" },
    { href: "/itin-vs-ein/", label: "ITIN vs EIN" },
    { href: "/itin-processing-time/", label: "Processing Time" },
  ],
  company: [
    { href: "/about/", label: "About Us" },
    { href: "/contact/", label: "Contact" },
    { href: "/pricing/", label: "Pricing" },
  ],
  legal: [
    { href: "/privacy/", label: "Privacy Policy" },
    { href: "/terms/", label: "Terms of Service" },
  ],
};

export const TESTIMONIALS = [
  {
    quote:
      "Got my ITIN in 3 weeks without mailing my passport. The WhatsApp support answered all my questions within hours. Best $297 I spent for my business.",
    name: "Ahmed K.",
    location: "UAE",
    outcome: "Opened Mercury bank account",
    rating: 5,
  },
  {
    quote:
      "I was rejected by the IRS twice trying to apply myself. itin.so got it right the first time. Their CAA certification saved me from sending my passport overseas.",
    name: "Priya S.",
    location: "India",
    outcome: "ITIN approved on first submission",
    rating: 5,
  },
  {
    quote:
      "As an Amazon seller from Bangladesh, I needed an ITIN to keep my seller account active. The team handled everything and I had my number in under a month.",
    name: "Rahim M.",
    location: "Bangladesh",
    outcome: "Amazon seller account compliant",
    rating: 5,
  },
];

export const TRUST_BADGES = [
  { label: "100%", description: "Money-Back Guarantee" },
  { label: "24h", description: "Response Time" },
  { label: "2,400+", description: "Applications Submitted" },
  { label: "150+", description: "Countries Served" },
];
