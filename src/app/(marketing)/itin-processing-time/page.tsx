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
  title: "ITIN Processing Time — How Long Does It Take? (2026)",
  description:
    "ITIN processing takes 6-11 weeks with the IRS. Our CAA prepares your application in 7 days. Learn the full timeline and how to avoid delays.",
  path: "/itin-processing-time/",
});

const pageFAQs = [
  {
    question: "How long does ITIN processing take in 2026?",
    answer:
      "As of 2026, the IRS processes ITIN applications in 6-11 weeks from the date of receipt. Processing times may extend to 12-14 weeks during peak tax season from January to April.",
  },
  {
    question: "How long does itin.so take to prepare my application?",
    answer:
      "We prepare and review your ITIN application within 7 business days. Our Express service prepares your application in 2-3 business days. This is significantly faster than the weeks of research and preparation required for a DIY application.",
  },
  {
    question: "Why do some ITIN applications take longer?",
    answer:
      "Applications take longer when documents are missing, Form W-7 has errors, or the IRS requests additional information. Peak season (January-April) also causes delays. Our expert review catches errors before submission to avoid these issues.",
  },
  {
    question: "Can I expedite ITIN processing with the IRS?",
    answer:
      "The IRS does not offer expedited ITIN processing. All applications are processed in the order received. The best way to get your ITIN faster is to submit an error-free application and avoid peak season.",
  },
  {
    question: "How will I know when my ITIN is ready?",
    answer:
      "The IRS mails your ITIN assignment letter to the address on your W-7 form. When you use our service, we track your application and notify you when we confirm the IRS has processed it.",
  },
];

const articleSchema = generateArticleSchema({
  title: "ITIN Processing Time — How Long Does It Take? (2026)",
  description: "ITIN processing takes 6-11 weeks with the IRS. Our CAA prepares your application in 7 days.",
  url: `${APP_URL}/itin-processing-time/`,
  datePublished: "2025-01-01T00:00:00Z",
  dateModified: "2026-06-04T00:00:00Z",
  wordCount: 1600,
});

const faqSchema = generateFAQSchema(pageFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "ITIN Processing Time" },
]);

export default function ITINProcessingTimePage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "ITIN Processing Time" }]} />
      </Container>

      <HeroSection
        title="ITIN Processing Time"
        subtitle="How long does it take to get an ITIN? Complete timeline from application to receiving your number."
        stats={[
          { label: "Our Prep", value: "7 Days" },
          { label: "IRS Processing", value: "6-11 wks" },
          { label: "Express Prep", value: "2-3 Days" },
        ]}
        ctaText="Start Your Application"
      />

      <section className="py-12">
        <Container size="small">
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            The total time to get an ITIN depends on two factors: how quickly your application is prepared and how long the IRS takes to process it. Our CAA service prepares applications in 7 days, and the IRS typically processes them in 6-11 weeks.
          </p>
        </Container>
      </section>

      <section className="border-y border-border/50 bg-surface py-20">
        <Container size="small">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ITIN Timeline Breakdown
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Application Prep", time: "7 days", desc: "We review your documents, prepare Form W-7, and certify everything." },
              { title: "IRS Processing", time: "6-11 weeks", desc: "The IRS reviews your application and issues your ITIN." },
              { title: "Mail Delivery", time: "1-2 weeks", desc: "Your ITIN assignment letter arrives by postal mail." },
            ].map((phase, i) => (
              <Card key={i} className="border-border/50 bg-card/50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary">{phase.time}</div>
                  <h3 className="mt-2 font-semibold text-foreground">{phase.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{phase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection title="ITIN Processing FAQs" faqs={pageFAQs} />
      <CTASection title="Get Your ITIN Started Today" ctaText="Apply Now — $297 Total" />
    </div>
  );
}
