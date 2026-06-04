import { Container } from "@/components/layout/container";
import { HeroSection } from "@/components/sections/hero-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { PRICING, APP_URL } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "ITIN vs EIN — What's the Difference? (2026)",
  description:
    "Understand the difference between ITIN and EIN. Which one do you need? Non-resident guide to US tax IDs. $297 ITIN application service.",
  path: "/itin-vs-ein/",
});

const pageFAQs = [
  {
    question: "What is the difference between ITIN and EIN?",
    answer:
      "An ITIN (Individual Taxpayer Identification Number) is for individuals who need a US tax ID but cannot get an SSN. An EIN (Employer Identification Number) is for businesses and identifies a business entity for tax purposes. You may need both.",
  },
  {
    question: "Do I need an ITIN or EIN for my LLC?",
    answer:
      "Your LLC needs an EIN for banking and tax purposes. As a non-resident LLC owner, you personally need an ITIN to file your individual tax return and report your share of LLC income. Most non-residents need both.",
  },
  {
    question: "Can I get an EIN without an ITIN?",
    answer:
      "Yes. Non-residents can apply for an EIN using Form SS-4 without an SSN or ITIN by indicating 'Foreign' in the SSN field. However, having an ITIN makes subsequent tax filing and banking easier.",
  },
  {
    question: "Which should I get first — ITIN or EIN?",
    answer:
      "Most non-residents apply for an EIN first to open their LLC bank account, then apply for an ITIN before tax season. However, you can apply for both concurrently. We recommend assessing your timeline and business needs.",
  },
  {
    question: "Can I use an EIN instead of an ITIN?",
    answer:
      "No. An EIN is for businesses only. You cannot use an EIN to file a personal tax return, open a personal bank account, or substitute for an individual tax ID. Each serves a distinct purpose.",
  },
];

const articleSchema = generateArticleSchema({
  title: "ITIN vs EIN — What's the Difference? (2026)",
  description: "Understand the difference between ITIN and EIN. Which one do you need?",
  url: `${APP_URL}/itin-vs-ein/`,
  datePublished: "2025-01-01T00:00:00Z",
  dateModified: "2026-06-04T00:00:00Z",
  wordCount: 1800,
});

const faqSchema = generateFAQSchema(pageFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "ITIN vs EIN" },
]);

export default function ITINvsEINPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "ITIN vs EIN" }]} />
      </Container>

      <HeroSection
        title="ITIN vs EIN"
        subtitle="Which US tax ID do you need? Understand the difference and get the right one for your situation."
        stats={[
          { label: "ITIN Price", value: `$${PRICING.standard}` },
          { label: "EIN from IRS", value: "Free" },
          { label: "Both Needed?", value: "Often" },
        ]}
        ctaText="Apply for ITIN"
      />

      <section className="py-12">
        <Container size="small">
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            ITIN and EIN are two different US tax identification numbers. An ITIN is for individuals who cannot get an SSN. An EIN is for businesses. Many non-US residents need both to operate a business and file taxes in the United States.
          </p>
        </Container>
      </section>

      <section className="border-y border-border/50 bg-surface py-20">
        <Container size="small">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ITIN vs EIN Comparison
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-left text-sm font-medium text-muted-foreground">Feature</th>
                  <th className="pb-4 text-center text-sm font-bold text-primary">ITIN</th>
                  <th className="pb-4 text-center text-sm font-bold text-primary">EIN</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Full Name", itin: "Individual Taxpayer Identification Number", ein: "Employer Identification Number" },
                  { feature: "Who Needs It", itin: "Non-resident individuals", ein: "Businesses & employers" },
                  { feature: "Purpose", itin: "File personal taxes", ein: "Business taxes & banking" },
                  { feature: "SSN Required", itin: "No", ein: "No" },
                  { feature: "IRS Fee", itin: "$0 (free)", ein: "$0 (free)" },
                  { feature: "Processing Time", itin: "6-11 weeks", ein: "1-2 weeks" },
                  { feature: "Used For", itin: "Personal tax returns", ein: "LLC, Corp, Partnership" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-4 text-sm font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 text-center text-sm text-muted-foreground">{row.itin}</td>
                    <td className="py-4 text-center text-sm text-muted-foreground">{row.ein}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <FAQSection title="ITIN vs EIN FAQs" faqs={pageFAQs} />
      <CTASection title="Need an ITIN? We Can Help" ctaText="Apply Now — $297 Total" />
    </div>
  );
}
