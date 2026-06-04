import Link from "next/link";
import {
  Shield,
  Clock,
  FileCheck,
  MessageCircle,
  DollarSign,
  Award,
  Check,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { HeroSection } from "@/components/sections/hero-section";
import { BenefitsGrid } from "@/components/sections/benefits-grid";
import { StepsTimeline } from "@/components/sections/steps-timeline";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateProductSchema,
  generateHowToSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import {
  TESTIMONIALS,
  PRICING,
  APP_URL,
} from "@/lib/constants";
import { applicationFAQs } from "@/data/faqs";

export const metadata = generatePageMetadata({
  title: "ITIN Application Service — $297 All-Inclusive (2026)",
  description:
    "IRS-authorized CAA ITIN application service. $297 flat fee includes W-7 preparation, document certification, and IRS submission. No passport mailing required. 100% money-back guarantee.",
  path: "/itin-application/",
});

const articleSchema = generateArticleSchema({
  title: "ITIN Application Service — $297 All-Inclusive (2026)",
  description:
    "IRS-authorized CAA ITIN application service. $297 flat fee includes W-7 preparation, document certification, and IRS submission.",
  url: `${APP_URL}/itin-application/`,
  datePublished: "2025-01-01T00:00:00Z",
  dateModified: "2026-06-04T00:00:00Z",
  wordCount: 2800,
});

const faqSchema = generateFAQSchema(applicationFAQs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "ITIN Application" },
]);

const productSchema = generateProductSchema({
  name: "ITIN Application Service",
  description:
    "Complete ITIN application service with IRS-authorized CAA certification. Includes W-7 form preparation, document review, and IRS submission.",
  url: `${APP_URL}/itin-application/`,
  price: PRICING.standard,
  priceValidUntil: "2026-12-31",
  ratingValue: "4.9",
  reviewCount: "127",
});

const howToSchema = generateHowToSchema({
  name: "How to Apply for an ITIN with itin.so",
  description:
    "Step-by-step guide to applying for an ITIN through our IRS-authorized CAA service.",
  totalTime: "P7D",
  estimatedCost: { currency: "USD", value: "297" },
  supplies: [
    "Valid passport or national ID",
    "Federal income tax return",
    "Proof of foreign status",
  ],
  steps: [
    {
      position: 1,
      name: "Complete Online Application",
      text: "Fill out our simple online form with your personal information and upload scanned copies of your identity documents through our secure portal.",
    },
    {
      position: 2,
      name: "Document Review",
      text: "Our team reviews your documents for accuracy and completeness. We verify that everything meets IRS requirements.",
    },
    {
      position: 3,
      name: "W-7 Form Preparation",
      text: "We accurately complete your W-7 form using the information you provide, ensuring all fields are filled correctly to avoid rejection.",
    },
    {
      position: 4,
      name: "CAA Certification",
      text: "An IRS-authorized Certifying Acceptance Agent reviews and certifies copies of your documents, so you never mail originals.",
    },
    {
      position: 5,
      name: "IRS Submission",
      text: "We submit your complete application package to the IRS and provide you with tracking information.",
    },
  ],
});

const benefits = [
  {
    icon: Shield,
    title: "No Passport Mailing",
    description:
      "Our IRS-authorized CAA certifies copies of your identity documents. Your original passport never leaves your possession.",
  },
  {
    icon: Clock,
    title: "7-Day Preparation",
    description:
      "Your application is prepared and reviewed within 7 business days. Express service available in 2-3 days.",
  },
  {
    icon: FileCheck,
    title: "Error-Free Filing",
    description:
      "DIY applicants face a 30-40% rejection rate. Our expert review catches errors before submission.",
  },
  {
    icon: MessageCircle,
    title: "Dedicated Support",
    description:
      "Get answers via WhatsApp and email. Our team responds within 24 hours to all your questions.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "$297 flat fee with no hidden charges. You know exactly what you pay before you start.",
  },
  {
    icon: Award,
    title: "Money-Back Guarantee",
    description:
      "If your application is rejected due to our error, you receive a full refund. No questions asked.",
  },
];

const steps = [
  {
    number: "1",
    title: "Apply Online",
    description: "Complete our secure online application and upload your documents.",
    duration: "10 minutes",
  },
  {
    number: "2",
    title: "Document Review",
    description: "We review your documents and verify they meet IRS requirements.",
    duration: "1-2 days",
  },
  {
    number: "3",
    title: "W-7 Preparation",
    description: "We accurately complete your W-7 form with all required information.",
    duration: "2-3 days",
  },
  {
    number: "4",
    title: "CAA Certification",
    description: "Our IRS-authorized CAA certifies your documents for submission.",
    duration: "1 day",
  },
  {
    number: "5",
    title: "IRS Submission",
    description: "We submit your application and track its progress with the IRS.",
    duration: "6-11 weeks IRS",
  },
];

const includedItems = [
  { item: "W-7 Form Preparation", value: "$150" },
  { item: "Document Review by CAA", value: "$100" },
  { item: "CAA Certification", value: "$75" },
  { item: "IRS Application Submission", value: "$50" },
  { item: "Email Status Updates", value: "$25" },
  { item: "1-Year IRS Correspondence Support", value: "$100" },
];

const totalValue = includedItems.reduce((sum, item) => sum + parseInt(item.value.replace(/[$,]/g, "")), 0);

export default function ITINApplicationPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={howToSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "ITIN Application" }]} />
      </Container>

      <HeroSection
        title="ITIN Application Service"
        subtitle="IRS-authorized CAA service. $297 all-inclusive. No passport mailing. 100% money-back guarantee."
        stats={[
          { label: "Price", value: `$${PRICING.standard}`, icon: <DollarSign className="h-4 w-4" /> },
          { label: "Prep Time", value: "7 Days", icon: <Clock className="h-4 w-4" /> },
          { label: "Guarantee", value: "100%", icon: <Award className="h-4 w-4" /> },
        ]}
        ctaText="Start Your Application"
        secondaryCta={{ text: "Learn More", href: "#whats-included" }}
        badge="2026 ITIN Application Guide"
      />

      {/* Overview */}
      <section className="py-12">
        <Container size="small">
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            Our done-for-you ITIN application service handles every step of the W-7 process. An IRS-authorized Certifying Acceptance Agent reviews your documents, certifies copies so your originals stay safe, and submits your application to the IRS. You get your ITIN without the stress, confusion, or risk of mailing your passport overseas.
          </p>
        </Container>
      </section>

      {/* Benefits */}
      <BenefitsGrid
        title="What Makes Our Service Different"
        subtitle="We have refined our process through 2,400+ applications."
        benefits={benefits}
      />

      {/* How It Works */}
      <StepsTimeline
        title="How Does the ITIN Application Process Work?"
        subtitle="Five steps from application to IRS submission. We handle the complexity."
        steps={steps}
      />

      {/* What's Included */}
      <section id="whats-included" className="py-20">
        <Container size="small">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="primary" className="mb-4">Value Breakdown</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Is Included in the $297 Fee?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need for a successful ITIN application.
            </p>
          </div>
          <Card className="mt-12 border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="space-y-4">
                {includedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-success" />
                      <span className="text-foreground">{item.item}</span>
                    </div>
                    <span className="text-muted-foreground line-through">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-xl bg-primary/5 p-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-lg text-muted-foreground line-through">${totalValue}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">Your Price</p>
                  <p className="text-3xl font-bold text-primary">${PRICING.standard}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Cost Breakdown */}
      <section className="border-y border-border/50 bg-surface py-20">
        <Container size="small">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ITIN Application Cost Breakdown
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Transparent pricing with no hidden fees.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-left text-sm font-medium text-muted-foreground">Service</th>
                  <th className="pb-4 text-right text-sm font-medium text-muted-foreground">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-4 text-foreground">itin.so Service Fee</td>
                  <td className="py-4 text-right font-medium text-foreground">${PRICING.standard}</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 text-foreground">IRS W-7 Filing Fee</td>
                  <td className="py-4 text-right font-medium text-success">$0 (Free)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 text-foreground">CAA Certification</td>
                  <td className="py-4 text-right font-medium text-success">Included</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 text-foreground">Document Review</td>
                  <td className="py-4 text-right font-medium text-success">Included</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-foreground">Total First-Time Cost</td>
                  <td className="py-4 text-right text-xl font-bold text-primary">${PRICING.standard}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-xl border border-border/50 bg-card/50 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Year 2+ ITIN Renewal</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  ITINs expire if not used on a tax return for three consecutive years. Our renewal service costs{" "}
                  <strong className="text-foreground">${PRICING.renewal}</strong> and includes status checking,
                  renewal preparation, and CAA certification.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <Container size="small">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Documents Do You Need?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three categories of documents required by the IRS.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Identity Document",
                items: ["Valid passport (best option)", "National ID card with photo", "Driver's license + Visa"],
              },
              {
                title: "Tax Return or Exception",
                items: [
                  "Federal income tax return",
                  "Exception documentation",
                  "We help determine which you need",
                ],
              },
              {
                title: "Foreign Status Proof",
                items: ["Birth certificate", "Foreign voter ID", "Citizenship certificate"],
              },
            ].map((category, index) => (
              <Card key={index} className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 shrink-0 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Compliance */}
      <section className="border-y border-border/50 bg-surface py-20">
        <Container size="small">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              IRS Compliance and Processing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What to expect from the IRS after we submit your application.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="text-lg font-semibold text-foreground">IRS Processing Time</h3>
              <p className="mt-2 text-muted-foreground">
                As of 2026, the IRS processes ITIN applications in{" "}
                <strong className="text-foreground">6-11 weeks</strong> from the date of receipt. Processing
                times may be longer during peak tax season (January-April). We submit your application promptly
                to minimize wait time.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="text-lg font-semibold text-foreground">CAA Certification Benefits</h3>
              <p className="mt-2 text-muted-foreground">
                Working with an IRS-authorized Certifying Acceptance Agent (CAA) means your identity documents
                are certified at the source. The IRS trusts CAA-certified copies, so you do not need to mail
                original documents. This eliminates the risk of loss, damage, or delay in international mail.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6">
              <h3 className="text-lg font-semibold text-foreground">Your Money-Back Guarantee</h3>
              <p className="mt-2 text-muted-foreground">
                If your ITIN application is rejected due to an error in our preparation or documentation, you
                receive a <strong className="text-foreground">100% refund</strong>. This guarantee reflects our
                confidence in our process. Note: The guarantee covers preparation errors, not IRS discretionary
                decisions or incomplete information provided by the applicant.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <Container size="small">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              itin.so vs DIY Application
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Why most applicants choose our service over doing it themselves.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-left text-sm font-medium text-muted-foreground">Factor</th>
                  <th className="pb-4 text-center text-sm font-bold text-primary">itin.so</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">DIY</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-4 text-foreground">Rejection Risk</td>
                  <td className="py-4 text-center font-medium text-success">Low (expert review)</td>
                  <td className="py-4 text-center text-error">30-40% rejection rate</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 text-foreground">Passport Mailing</td>
                  <td className="py-4 text-center font-medium text-success">Not required (CAA)</td>
                  <td className="py-4 text-center text-error">Required to IRS</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 text-foreground">Form Preparation</td>
                  <td className="py-4 text-center font-medium text-success">Done for you</td>
                  <td className="py-4 text-center text-muted-foreground">Self-completed</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 text-foreground">Support</td>
                  <td className="py-4 text-center font-medium text-success">WhatsApp + Email</td>
                  <td className="py-4 text-center text-muted-foreground">None</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 text-foreground">Time to Prepare</td>
                  <td className="py-4 text-center font-medium text-success">7 days</td>
                  <td className="py-4 text-center text-muted-foreground">Weeks of research</td>
                </tr>
                <tr>
                  <td className="py-4 text-foreground">Guarantee</td>
                  <td className="py-4 text-center font-medium text-success">100% money-back</td>
                  <td className="py-4 text-center text-muted-foreground">None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Social Proof */}
      <TestimonialsSection
        title="Trusted by 2,400+ Applicants"
        subtitle="Real results from real clients around the world."
        testimonials={TESTIMONIALS}
      />

      {/* FAQ */}
      <FAQSection
        title="ITIN Application FAQs"
        subtitle="Common questions about our ITIN application service."
        faqs={applicationFAQs}
      />

      {/* Final CTA */}
      <CTASection
        title="Start Your ITIN Application Today"
        subtitle="Join thousands of successful applicants. Get started in under 10 minutes."
        ctaText="Apply Now — $297 Total"
      />
    </div>
  );
}
