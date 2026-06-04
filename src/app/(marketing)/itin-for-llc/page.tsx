import { Building2, Check, FileCheck, Banknote, Shield } from "lucide-react";
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
  title: "ITIN for LLC Owners — US Business Tax ID (2026)",
  description:
    "Get an ITIN to form a US LLC, open a business bank account, and file taxes. $297 flat fee. IRS-authorized CAA service for non-resident LLC owners.",
  path: "/itin-for-llc/",
});

const pageFAQs = [
  {
    question: "Do I need an ITIN to form a US LLC?",
    answer:
      "No, you do not need an ITIN to form a US LLC. You can form an LLC with just your passport. However, you need an ITIN to open a US business bank account, file taxes, and obtain an EIN if you do not have an SSN.",
  },
  {
    question: "Can I get an EIN without an ITIN?",
    answer:
      "Non-residents without an SSN can apply for an EIN using Form SS-4 and indicating 'Foreign' in the SSN field. However, some banks and platforms require an ITIN in addition to an EIN for account verification.",
  },
  {
    question: "Which banks accept an ITIN for business accounts?",
    answer:
      "Mercury, Relay, and Wise Business accept ITINs for non-resident LLC owners. Some traditional banks like Chase and Bank of America may also accept ITINs with proper documentation including your Articles of Organization and Operating Agreement.",
  },
  {
    question: "What tax forms does a foreign-owned LLC need to file?",
    answer:
      "Foreign-owned single-member LLCs must file IRS Form 5472 (information return) and a pro-forma Form 1120 annually. The LLC must also file a Beneficial Ownership Information report with FinCEN within 90 days of formation.",
  },
  {
    question: "How long does it take to get an ITIN for my LLC?",
    answer:
      "We prepare your ITIN application within 7 business days. IRS processing takes 6-11 weeks. We recommend applying for your ITIN before or concurrently with LLC formation to avoid delays in opening bank accounts.",
  },
];

const articleSchema = generateArticleSchema({
  title: "ITIN for LLC Owners — US Business Tax ID (2026)",
  description: "Get an ITIN to form a US LLC, open a business bank account, and file taxes.",
  url: `${APP_URL}/itin-for-llc/`,
  datePublished: "2025-01-01T00:00:00Z",
  dateModified: "2026-06-04T00:00:00Z",
  wordCount: 1800,
});

const faqSchema = generateFAQSchema(pageFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "ITIN for LLC" },
]);

export default function ITINForLLCPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "ITIN for LLC" }]} />
      </Container>

      <HeroSection
        title="ITIN for LLC Owners"
        subtitle="Form a US LLC, open a business bank account, and file taxes with an ITIN. $297 flat fee. IRS-authorized CAA service."
        stats={[
          { label: "Price", value: `$${PRICING.standard}` },
          { label: "Prep Time", value: "7 Days" },
          { label: "Bank Ready", value: "Yes" },
        ]}
        ctaText="Apply for Your ITIN"
      />

      <section className="py-12">
        <Container size="small">
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            Non-US citizens who own a US LLC need an ITIN to open business bank accounts, file taxes, and comply with IRS requirements. Our IRS-authorized CAA service handles your ITIN application so you can focus on growing your business.
          </p>
        </Container>
      </section>

      <section className="border-y border-border/50 bg-surface py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Does Your LLC Need an ITIN?
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Banknote, title: "Open Bank Accounts", desc: "Mercury, Relay, and Wise Business accept ITINs for non-resident LLC owners." },
              { icon: FileCheck, title: "File Taxes", desc: "File Form 5472 and pro-forma Form 1120 for your foreign-owned LLC." },
              { icon: Shield, title: "EIN Alternative", desc: "Use your ITIN where an SSN is required for EIN applications." },
              { icon: Building2, title: "Business Compliance", desc: "Meet IRS and FinCEN reporting requirements for your LLC." },
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

      <section className="py-20">
        <Container size="small">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Do You Need for an LLC + ITIN?
          </h2>
          <div className="mt-8 space-y-4">
            {[
              "Valid passport or national ID",
              "US LLC Articles of Organization",
              "Federal tax return or exception documentation",
              "Proof of foreign status",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4">
                <Check className="h-5 w-5 text-success" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection title="ITIN for LLC FAQs" faqs={pageFAQs} />
      <CTASection title="Get Your ITIN for Your LLC" ctaText="Apply Now — $297 Total" />
    </div>
  );
}
