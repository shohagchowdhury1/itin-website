import { Container } from "@/components/layout/container";
import { HeroSection } from "@/components/sections/hero-section";
import { StepsTimeline } from "@/components/sections/steps-timeline";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { PRICING, APP_URL } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "How to Get an ITIN — Step-by-Step Guide (2026)",
  description:
    "Complete guide to getting an ITIN number as a non-US citizen. Step-by-step process, required documents, and timeline. Apply with an IRS-authorized CAA for $297.",
  path: "/how-to-get-itin/",
});

const pageFAQs = [
  {
    question: "What is the first step to getting an ITIN?",
    answer:
      "The first step is determining your eligibility and gathering required documents. You need proof of identity (passport), proof of foreign status, and either a federal tax return or exception documentation. Our service guides you through this.",
  },
  {
    question: "How do I fill out Form W-7?",
    answer:
      "Form W-7 requires personal information including your name, mailing address, foreign address, birth information, and the reason you are applying. Our service completes this form for you using the information you provide, ensuring accuracy.",
  },
  {
    question: "Where do I send my ITIN application?",
    answer:
      "If applying through our CAA service, we handle submission for you. If applying yourself, you mail your application to the IRS ITIN Operation in Austin, Texas. You must include original documents or certified copies.",
  },
  {
    question: "Can I apply for an ITIN online?",
    answer:
      "The IRS does not accept online ITIN applications directly. However, our IRS-authorized CAA service allows you to complete the entire process online. We handle the physical submission to the IRS on your behalf.",
  },
  {
    question: "How do I check my ITIN application status?",
    answer:
      "You can call the IRS ITIN hotline at 1-800-908-9982 for status updates. When you use our service, we track your application and provide you with regular email updates on its progress.",
  },
];

const articleSchema = generateArticleSchema({
  title: "How to Get an ITIN — Step-by-Step Guide (2026)",
  description: "Complete guide to getting an ITIN number as a non-US citizen.",
  url: `${APP_URL}/how-to-get-itin/`,
  datePublished: "2025-01-01T00:00:00Z",
  dateModified: "2026-06-04T00:00:00Z",
  wordCount: 2200,
});

const howToSchema = generateHowToSchema({
  name: "How to Get an ITIN as a Non-US Citizen",
  description: "Step-by-step guide to obtaining an ITIN number through an IRS-authorized CAA.",
  totalTime: "P11W",
  estimatedCost: { currency: "USD", value: "297" },
  supplies: ["Valid passport", "Tax return or exception docs", "Proof of foreign status"],
  steps: [
    { position: 1, name: "Gather Required Documents", text: "Collect your passport, tax return or exception documentation, and proof of foreign status." },
    { position: 2, name: "Complete Form W-7", text: "Fill out the IRS W-7 form with accurate personal and contact information." },
    { position: 3, name: "Attach Tax Return or Exception", text: "Include your federal tax return or documentation supporting an exception." },
    { position: 4, name: "Submit Application", text: "Submit your complete application package to the IRS directly or through a CAA." },
    { position: 5, name: "Wait for Processing", text: "The IRS processes applications in 6-11 weeks and mails your ITIN assignment letter." },
  ],
});

const faqSchema = generateFAQSchema(pageFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "How to Get an ITIN" },
]);

export default function HowToGetITINPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={articleSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "How to Get an ITIN" }]} />
      </Container>

      <HeroSection
        title="How to Get an ITIN"
        subtitle="Complete step-by-step guide to obtaining your ITIN number as a non-US citizen. Documents, timeline, and process explained."
        stats={[
          { label: "Steps", value: "5" },
          { label: "Timeline", value: "6-11 wks" },
          { label: "Price", value: `$${PRICING.standard}` },
        ]}
        ctaText="Apply with itin.so"
      />

      <section className="py-12">
        <Container size="small">
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            Getting an ITIN as a non-US citizen involves completing IRS Form W-7, gathering identity documents, and either mailing your application or using an IRS-authorized CAA. This guide walks you through every step of the process.
          </p>
        </Container>
      </section>

      <StepsTimeline
        title="How Do You Get an ITIN?"
        subtitle="Five steps from gathering documents to receiving your ITIN."
        steps={[
          { number: "1", title: "Gather Documents", description: "Collect your passport, tax return, and proof of foreign status.", duration: "1-2 days" },
          { number: "2", title: "Complete W-7 Form", description: "Fill out the IRS Form W-7 with your personal information.", duration: "30 minutes" },
          { number: "3", title: "Attach Tax Return", description: "Include your federal tax return or exception documentation.", duration: "10 minutes" },
          { number: "4", title: "Submit Application", description: "Mail to IRS or submit through an IRS-authorized CAA.", duration: "Same day" },
          { number: "5", title: "Receive ITIN", description: "The IRS processes your application and mails your ITIN letter.", duration: "6-11 weeks" },
        ]}
      />

      <FAQSection title="ITIN Application FAQs" faqs={pageFAQs} />
      <CTASection title="Skip the Complexity — Apply with itin.so" ctaText="Apply Now — $297 Total" />
    </div>
  );
}
