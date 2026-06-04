import { Globe, Check, FileText, Plane, Building } from "lucide-react";
import { Container } from "@/components/layout/container";
import { HeroSection } from "@/components/sections/hero-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { PRICING, APP_URL } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "ITIN for Non-Residents — US Tax ID Without SSN (2026)",
  description:
    "Non-US citizens can get an ITIN without an SSN. $297 flat fee. IRS-authorized CAA service. No passport mailing required. Apply from 150+ countries.",
  path: "/itin-for-non-residents/",
});

const pageFAQs = [
  {
    question: "Can non-residents get an ITIN?",
    answer:
      "Yes. Non-US citizens and non-residents who need a US taxpayer identification number can apply for an ITIN. You do not need a US visa, green card, or SSN to qualify.",
  },
  {
    question: "Do I need to be in the US to apply?",
    answer:
      "No. Our online application process allows you to apply from anywhere in the world. Our IRS-authorized CAA certifies copies of your documents, so you never need to mail originals to the IRS.",
  },
  {
    question: "What countries do you serve?",
    answer:
      "We serve non-residents from over 150 countries including Bangladesh, India, Nigeria, Pakistan, Brazil, UK, Germany, UAE, Philippines, and Vietnam. As long as you have a valid passport, we can help.",
  },
  {
    question: "Can I use an ITIN instead of an SSN?",
    answer:
      "An ITIN is used for tax purposes only. It cannot be used for employment, Social Security benefits, or Earned Income Tax Credit. However, it works for filing taxes, opening bank accounts, and business formation.",
  },
  {
    question: "How do I receive my ITIN from outside the US?",
    answer:
      "The IRS mails your ITIN assignment letter to the address you provide on Form W-7. We recommend using a reliable US mailing address or forwarding service to ensure secure delivery.",
  },
];

const articleSchema = generateArticleSchema({
  title: "ITIN for Non-Residents — US Tax ID Without SSN (2026)",
  description: "Non-US citizens can get an ITIN without an SSN. $297 flat fee. IRS-authorized CAA service.",
  url: `${APP_URL}/itin-for-non-residents/`,
  datePublished: "2025-01-01T00:00:00Z",
  dateModified: "2026-06-04T00:00:00Z",
  wordCount: 1700,
});

const faqSchema = generateFAQSchema(pageFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "ITIN for Non-Residents" },
]);

export default function ITINForNonResidentsPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "ITIN for Non-Residents" }]} />
      </Container>

      <HeroSection
        title="ITIN for Non-Residents"
        subtitle="Get a US tax ID without an SSN. $297 flat fee. IRS-authorized CAA service. Apply from 150+ countries with no passport mailing."
        stats={[
          { label: "Price", value: `$${PRICING.standard}` },
          { label: "Countries", value: "150+" },
          { label: "No SSN Needed", value: "Yes" },
        ]}
        ctaText="Apply for Your ITIN"
      />

      <section className="py-12">
        <Container size="small">
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            Non-US citizens from over 150 countries can obtain an ITIN without a Social Security Number. Our IRS-authorized CAA service handles the entire process online, so you never need to mail your passport or visit a US embassy.
          </p>
        </Container>
      </section>

      <section className="border-y border-border/50 bg-surface py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Can You Do With an ITIN?
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FileText, title: "File US Taxes", desc: "Report US income and comply with IRS tax filing requirements." },
              { icon: Building, title: "Form an LLC", desc: "Create a US LLC and access the US business market." },
              { icon: Globe, title: "Open Bank Accounts", desc: "Access Mercury, Relay, and Wise Business accounts." },
              { icon: Plane, title: "Travel & Work", desc: "Establish US tax presence for business and travel purposes." },
            ].map((item, i) => (
              <Card key={i} className="border-border/50 bg-card/50">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection title="Non-Resident ITIN FAQs" faqs={pageFAQs} />
      <CTASection title="Get Your ITIN as a Non-Resident" ctaText="Apply Now — $297 Total" />
    </div>
  );
}
