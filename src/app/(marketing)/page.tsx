import Link from "next/link";
import {
  Shield,
  Clock,
  MessageCircle,
  DollarSign,
  Globe,
  Award,
  FileCheck,
  Building2,
  ShoppingCart,
  Briefcase,
  Users,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { HeroSection } from "@/components/sections/hero-section";
import { BenefitsGrid } from "@/components/sections/benefits-grid";
import { StepsTimeline } from "@/components/sections/steps-timeline";
import { PricingTable } from "@/components/sections/pricing-table";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/shared/json-ld";
import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import {
  TESTIMONIALS,
  PRICING,
  STATS,
  APP_NAME,
  APP_URL,
} from "@/lib/constants";
import { homeFAQs } from "@/data/faqs";

export const metadata = generatePageMetadata({
  title: "Get Your ITIN Number Fast — IRS-Authorized CAA Service",
  description:
    "Apply for your ITIN with itin.so. $297 flat fee, 7-day prep, no passport mailing. IRS-authorized CAA with 2,400+ applications submitted. 100% money-back guarantee.",
  path: "/",
  ogType: "website",
});

const articleSchema = generateArticleSchema({
  title: "Get Your ITIN Number Fast — IRS-Authorized CAA Service",
  description:
    "Apply for your ITIN with itin.so. $297 flat fee, 7-day prep, no passport mailing. IRS-authorized CAA with 2,400+ applications submitted.",
  url: APP_URL,
  datePublished: "2025-01-01T00:00:00Z",
  dateModified: "2026-06-04T00:00:00Z",
  wordCount: 1200,
});

const faqSchema = generateFAQSchema(homeFAQs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
]);

const serviceSchema = generateServiceSchema({
  name: "ITIN Application Service",
  description:
    "IRS-authorized CAA service for non-US citizens to obtain an ITIN number. $297 flat fee, 7-day preparation.",
  url: `${APP_URL}/itin-application/`,
  price: PRICING.standard,
});

const heroStats = [
  { label: "Flat Fee", value: `$${PRICING.standard}`, icon: <DollarSign className="h-4 w-4" /> },
  { label: "Prep Time", value: `${STATS.prepTimeDays} Days`, icon: <Clock className="h-4 w-4" /> },
  { label: "Applications", value: `${STATS.applicationsSubmitted.toLocaleString()}+`, icon: <FileCheck className="h-4 w-4" /> },
];

const benefits = [
  {
    icon: Shield,
    title: "No Passport Mailing",
    description:
      "Our IRS-authorized CAA certifies copies of your documents. Your original passport stays safely with you.",
  },
  {
    icon: Clock,
    title: "7-Day Application Prep",
    description:
      "We prepare and review your ITIN application within 7 business days. Express service available in 2-3 days.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description:
      "Get real-time answers to your questions via WhatsApp. Our team responds within 24 hours.",
  },
  {
    icon: DollarSign,
    title: "$297 Flat Fee",
    description:
      "One transparent price with no hidden fees. Includes W-7 preparation, CAA certification, and IRS submission.",
  },
  {
    icon: Award,
    title: "100% Money-Back Guarantee",
    description:
      "If your application is rejected due to our error, you get a full refund. We stand behind our work.",
  },
  {
    icon: Globe,
    title: "150+ Countries Served",
    description:
      "We help non-US citizens from over 150 countries get their ITIN. No matter where you are, we can help.",
  },
];

const steps = [
  {
    number: "1",
    title: "Apply Online",
    description:
      "Complete our simple online application and upload your documents securely.",
    duration: "10 minutes",
  },
  {
    number: "2",
    title: "We Review",
    description:
      "Our team reviews your documents and prepares your W-7 form for accuracy.",
    duration: "7 business days",
  },
  {
    number: "3",
    title: "CAA Certification",
    description:
      "An IRS-authorized CAA certifies your documents so originals stay with you.",
    duration: "Same day",
  },
  {
    number: "4",
    title: "IRS Submission",
    description:
      "We submit your complete application to the IRS and track its progress.",
    duration: "6-11 weeks IRS time",
  },
];

const audienceCards = [
  {
    icon: ShoppingCart,
    title: "Amazon Sellers",
    description: "Get your ITIN to keep your Amazon seller account compliant and access US payment platforms.",
    href: "/itin-for-amazon-sellers/",
  },
  {
    icon: Briefcase,
    title: "Freelancers",
    description: "Upwork, Fiverr, and independent contractors need an ITIN to report US income and open business accounts.",
    href: "/itin-for-freelancers/",
  },
  {
    icon: Building2,
    title: "LLC Owners",
    description: "Form a US LLC, open a business bank account, and file taxes with an ITIN.",
    href: "/itin-for-llc/",
  },
  {
    icon: Users,
    title: "Non-Residents",
    description: "Any non-US citizen earning US income or needing a US tax ID can apply for an ITIN.",
    href: "/itin-for-non-residents/",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Schema */}
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      {/* 1. Hero */}
      <HeroSection
        title="Get Your ITIN Number Fast"
        subtitle="IRS-authorized CAA service for non-US citizens. $297 flat fee, 7-day prep, no passport mailing required. 2,400+ applications submitted with a 100% money-back guarantee."
        stats={heroStats}
        ctaText="Apply for Your ITIN"
        ctaHref="/itin-application/"
        secondaryCta={{ text: "See How It Works", href: "#how-it-works" }}
        badge="IRS-Authorized CAA Service"
      />

      {/* 2. Overview */}
      <section className="py-12">
        <Container size="small">
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            An ITIN (Individual Taxpayer Identification Number) is a tax processing number issued by the IRS for non-US citizens who need to file US taxes, open bank accounts, or form LLCs but do not qualify for a Social Security Number. Our IRS-authorized CAA service handles the entire W-7 application process for you.
          </p>
        </Container>
      </section>

      {/* 3. Benefits */}
      <BenefitsGrid
        title="Why Choose itin.so?"
        subtitle="The fastest, safest way for non-US citizens to get an ITIN."
        benefits={benefits}
      />

      {/* 4. How It Works */}
      <div id="how-it-works">
        <StepsTimeline
          title="How It Works"
          subtitle="Four simple steps to your ITIN. We handle the complexity."
          steps={steps}
        />
      </div>

      {/* 5. Who Needs an ITIN */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Who Needs an ITIN?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Non-US citizens who earn US income or need a US tax ID.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audienceCards.map((card, index) => (
              <Link key={index} href={card.href} className="group">
                <Card className="h-full border-border/50 bg-card/50 transition-colors hover:border-primary/30 hover:bg-card">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <card.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Pricing */}
      <PricingTable />

      {/* 7. Requirements */}
      <section className="border-y border-border/50 bg-surface py-20">
        <Container size="small">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Do You Need to Apply?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three simple requirements to get started.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {[
              "Valid passport or national ID with photo",
              "Federal income tax return or exception documentation",
              "Proof of foreign status (birth certificate or foreign ID)",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            We provide a complete checklist and guide you through every document after you start your application.
          </p>
        </Container>
      </section>

      {/* 8. Comparison */}
      <ComparisonTable />

      {/* 9. Social Proof */}
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Join 2,400+ successful ITIN applicants from 150+ countries."
        testimonials={TESTIMONIALS}
      />

      {/* 10. Trust Badges */}
      <section className="py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { label: "2,400+", desc: "Applications Submitted" },
              { label: "150+", desc: "Countries Served" },
              { label: "100%", desc: "Money-Back Guarantee" },
              { label: "24h", desc: "Response Time" },
            ].map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary">{badge.label}</div>
                <div className="text-sm text-muted-foreground">{badge.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 11. FAQ */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about getting your ITIN."
        faqs={homeFAQs}
      />

      {/* 12. Final CTA */}
      <CTASection />
    </div>
  );
}
