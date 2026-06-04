import { ShoppingCart, Check, Truck, CreditCard, Globe } from "lucide-react";
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
  title: "ITIN for Amazon Sellers — FBA Tax ID (2026)",
  description:
    "Amazon FBA sellers need an ITIN to sell on Amazon.com and report US income. $297 flat fee. IRS-authorized CAA service. Get compliant fast.",
  path: "/itin-for-amazon-sellers/",
});

const pageFAQs = [
  {
    question: "Do Amazon sellers need an ITIN?",
    answer:
      "Non-US citizen Amazon sellers who earn US income need an ITIN to report taxes to the IRS. Amazon may also request tax information for account verification, and an ITIN serves as your US taxpayer identification number.",
  },
  {
    question: "Can I sell on Amazon without an ITIN?",
    answer:
      "You can initially create an Amazon seller account without an ITIN, but Amazon will eventually require tax information. Without an ITIN or SSN, Amazon may withhold 30% of your earnings for tax purposes and could suspend your account.",
  },
  {
    question: "How does an ITIN help with Amazon tax reporting?",
    answer:
      "With an ITIN, you can file US tax returns and claim treaty benefits that may reduce or eliminate withholding tax. You can also submit Form W-8BEN to Amazon to establish your tax status and avoid unnecessary withholding.",
  },
  {
    question: "Can I use an ITIN for Stripe or PayPal?",
    answer:
      "Yes. Stripe and PayPal Business accounts accept ITINs for non-US residents. An ITIN allows you to verify your identity, withdraw funds, and comply with tax reporting requirements on these platforms.",
  },
  {
    question: "How long does it take to get an ITIN for Amazon selling?",
    answer:
      "We prepare your application in 7 business days. IRS processing takes 6-11 weeks. We recommend applying as soon as you start selling to avoid account holds and tax withholding issues.",
  },
];

const articleSchema = generateArticleSchema({
  title: "ITIN for Amazon Sellers — FBA Tax ID (2026)",
  description: "Amazon FBA sellers need an ITIN to sell on Amazon.com and report US income.",
  url: `${APP_URL}/itin-for-amazon-sellers/`,
  datePublished: "2025-01-01T00:00:00Z",
  dateModified: "2026-06-04T00:00:00Z",
  wordCount: 1700,
});

const faqSchema = generateFAQSchema(pageFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "ITIN for Amazon Sellers" },
]);

export default function ITINForAmazonSellersPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "ITIN for Amazon Sellers" }]} />
      </Container>

      <HeroSection
        title="ITIN for Amazon Sellers"
        subtitle="Sell on Amazon.com with a US tax ID. $297 flat fee. IRS-authorized CAA service for FBA and FBM sellers worldwide."
        stats={[
          { label: "Price", value: `$${PRICING.standard}` },
          { label: "Prep Time", value: "7 Days" },
          { label: "Amazon Ready", value: "Yes" },
        ]}
        ctaText="Apply for Your ITIN"
      />

      <section className="py-12">
        <Container size="small">
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            Amazon FBA and FBM sellers from outside the US need an ITIN to report income, avoid 30% tax withholding, and keep their seller accounts in good standing. Our CAA service gets you compliant fast.
          </p>
        </Container>
      </section>

      <section className="border-y border-border/50 bg-surface py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Amazon Sellers Need an ITIN
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShoppingCart, title: "Avoid Account Holds", desc: "Prevent Amazon from suspending your account due to missing tax information." },
              { icon: CreditCard, title: "Reduce Withholding", desc: "File Form W-8BEN to claim treaty benefits and reduce 30% tax withholding." },
              { icon: Truck, title: "FBA Compliance", desc: "Stay compliant with Amazon's tax reporting requirements for FBA sellers." },
              { icon: Globe, title: "Payment Platforms", desc: "Use your ITIN to verify Stripe, PayPal, and other payment accounts." },
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

      <FAQSection title="ITIN for Amazon Seller FAQs" faqs={pageFAQs} />
      <CTASection title="Get Your ITIN for Amazon Selling" ctaText="Apply Now — $297 Total" />
    </div>
  );
}
