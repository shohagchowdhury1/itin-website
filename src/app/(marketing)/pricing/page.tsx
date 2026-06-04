import Link from "next/link";
import { Check, X, Shield, CreditCard, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import {
  generateProductSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { PRICING, APP_URL } from "@/lib/constants";
import { pricingFAQs } from "@/data/faqs";

export const metadata = generatePageMetadata({
  title: "ITIN Application Pricing — $297 Flat Fee (2026)",
  description:
    "Transparent pricing for ITIN application services. $297 standard, $397 express. No hidden fees. 100% money-back guarantee. See exactly what you get.",
  path: "/pricing/",
});

const productSchema = generateProductSchema({
  name: "ITIN Application Service",
  description:
    "Complete ITIN application service with IRS-authorized CAA certification. $297 standard, $397 express.",
  url: `${APP_URL}/pricing/`,
  price: PRICING.standard,
  priceValidUntil: "2026-12-31",
  ratingValue: "4.9",
  reviewCount: "127",
});

const faqSchema = generateFAQSchema(pricingFAQs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "Pricing" },
]);

const plans = [
  {
    name: "Standard",
    price: PRICING.standard,
    description: "For most applicants who want a reliable, expert-prepared ITIN application.",
    features: [
      "W-7 form preparation & review",
      "Document review by IRS-authorized CAA",
      "CAA certification of identity documents",
      "IRS application submission",
      "Email status updates",
      "7-day application preparation",
      "1-year IRS correspondence support",
    ],
    notIncluded: ["Priority processing", "WhatsApp support", "FedEx tracking"],
    ctaText: "Get Started — $297",
    popular: false,
  },
  {
    name: "Express",
    price: PRICING.express,
    description: "For applicants who need their application prepared urgently.",
    features: [
      "Everything in Standard",
      "2-3 business day preparation",
      "Priority queue processing",
      "Dedicated WhatsApp support",
      "FedEx tracking for documents",
      "100% money-back guarantee",
      "Lifetime IRS issue support",
    ],
    notIncluded: [],
    ctaText: "Get Express — $397",
    popular: true,
  },
];

const comparisonFeatures = [
  { feature: "Price", itinso: `$${PRICING.standard}`, sprintax: "$100-300+", hrblock: "$200-400+", turbotax: "$150-300+" },
  { feature: "Flat Fee", itinso: true, sprintax: false, hrblock: false, turbotax: false },
  { feature: "CAA Certification", itinso: true, sprintax: false, hrblock: false, turbotax: false },
  { feature: "No Passport Mailing", itinso: true, sprintax: false, hrblock: false, turbotax: false },
  { feature: "WhatsApp Support", itinso: true, sprintax: false, hrblock: false, turbotax: false },
  { feature: "Money-Back Guarantee", itinso: true, sprintax: false, hrblock: false, turbotax: false },
  { feature: "7-Day Prep", itinso: true, sprintax: false, hrblock: false, turbotax: false },
];

function ComparisonCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-success" />
    ) : (
      <X className="mx-auto h-5 w-5 text-muted-foreground/40" />
    );
  }
  return <span className="font-medium text-foreground">{value}</span>;
}

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "Pricing" }]} />
      </Container>

      {/* Hero */}
      <section className="py-16">
        <Container className="text-center">
          <Badge variant="primary" className="mb-6">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            ITIN Application Pricing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            One flat fee. No hidden charges. No surprises. See exactly what you get before you pay.
          </p>
          <div className="mt-8">
            <span className="text-5xl font-bold text-primary">${PRICING.standard}</span>
            <span className="text-xl text-muted-foreground"> total</span>
          </div>
          <Link
            href="/itin-application/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-teal-dark"
          >
            Apply Now — ${PRICING.standard}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Container>
      </section>

      {/* What's Included */}
      <section className="border-y border-border/50 bg-surface py-20">
        <Container size="small">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Is Included?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every ITIN application includes these services.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { item: "W-7 Form Preparation", value: "$150" },
              { item: "Document Review by CAA", value: "$100" },
              { item: "CAA Certification", value: "$75" },
              { item: "IRS Submission", value: "$50" },
              { item: "Email Status Updates", value: "$25" },
              { item: "1-Year Support", value: "$100" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-4"
              >
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success" />
                  <span className="text-foreground">{item.item}</span>
                </div>
                <span className="text-sm text-muted-foreground line-through">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between rounded-xl bg-primary/5 p-6">
            <div>
              <p className="text-sm text-muted-foreground">Individual Value</p>
              <p className="text-lg text-muted-foreground line-through">$500</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-primary">Bundled Price</p>
              <p className="text-3xl font-bold text-primary">${PRICING.standard}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Choose Your Plan
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Standard for most applicants. Express when you need speed.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  plan.popular
                    ? "border-primary/50 shadow-lg shadow-primary/5"
                    : "border-border/50 bg-card/50"
                }`}
              >
                {plan.popular && (
                  <Badge variant="primary" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground"> flat fee</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li key={`not-${i}`} className="flex items-start gap-3 text-sm">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
                        <span className="text-muted-foreground/50">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/itin-application/"
                      className={`flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-teal-dark"
                          : "border border-border bg-card text-foreground hover:bg-muted"
                      }`}
                    >
                      {plan.ctaText}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Year 2+ Transparency */}
      <section className="border-y border-border/50 bg-surface py-20">
        <Container size="small">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Year 2+ Costs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No surprise fees. Know your ongoing costs upfront.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="text-lg">First-Time Application</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service Fee</span>
                    <span className="font-medium text-foreground">${PRICING.standard}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">IRS Filing Fee</span>
                    <span className="font-medium text-success">$0</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">Total Year 1</span>
                      <span className="font-bold text-primary">${PRICING.standard}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="text-lg">ITIN Renewal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Renewal Service Fee</span>
                    <span className="font-medium text-foreground">${PRICING.renewal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">IRS Filing Fee</span>
                    <span className="font-medium text-success">$0</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">Total Renewal</span>
                      <span className="font-bold text-primary">${PRICING.renewal}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            ITINs expire if not used on a tax return for three consecutive years. We recommend checking your status before filing.
          </p>
        </Container>
      </section>

      {/* 3-Year Comparison */}
      <section className="py-20">
        <Container size="small">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              3-Year Cost Comparison
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how much you save compared to other services.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-left text-sm font-medium text-muted-foreground">Service</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">Year 1</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">Year 2</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">Year 3</th>
                  <th className="pb-4 text-center text-sm font-bold text-primary">3-Year Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50 bg-primary/5">
                  <td className="py-4 font-semibold text-primary">itin.so</td>
                  <td className="py-4 text-center text-foreground">${PRICING.standard}</td>
                  <td className="py-4 text-center text-foreground">$0</td>
                  <td className="py-4 text-center text-foreground">$0</td>
                  <td className="py-4 text-center font-bold text-primary">${PRICING.standard}</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 text-foreground">Sprintax</td>
                  <td className="py-4 text-center text-muted-foreground">$200+</td>
                  <td className="py-4 text-center text-muted-foreground">$100+</td>
                  <td className="py-4 text-center text-muted-foreground">$100+</td>
                  <td className="py-4 text-center font-medium text-muted-foreground">$400+</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 text-foreground">H&R Block</td>
                  <td className="py-4 text-center text-muted-foreground">$300+</td>
                  <td className="py-4 text-center text-muted-foreground">$150+</td>
                  <td className="py-4 text-center text-muted-foreground">$150+</td>
                  <td className="py-4 text-center font-medium text-muted-foreground">$600+</td>
                </tr>
                <tr>
                  <td className="py-4 text-foreground">TurboTax + CPA</td>
                  <td className="py-4 text-center text-muted-foreground">$250+</td>
                  <td className="py-4 text-center text-muted-foreground">$125+</td>
                  <td className="py-4 text-center text-muted-foreground">$125+</td>
                  <td className="py-4 text-center font-medium text-muted-foreground">$500+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Feature Comparison */}
      <section className="border-y border-border/50 bg-surface py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Feature Comparison
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Compare features across ITIN service providers.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-left text-sm font-medium text-muted-foreground">Feature</th>
                  <th className="pb-4 text-center text-sm font-bold text-primary">itin.so</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">Sprintax</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">H&R Block</th>
                  <th className="pb-4 text-center text-sm font-medium text-muted-foreground">TurboTax</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border/50 transition-colors hover:bg-muted/30"
                  >
                    <td className="py-4 text-sm font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 text-center">
                      <ComparisonCell value={row.itinso} />
                    </td>
                    <td className="py-4 text-center">
                      <ComparisonCell value={row.sprintax} />
                    </td>
                    <td className="py-4 text-center">
                      <ComparisonCell value={row.hrblock} />
                    </td>
                    <td className="py-4 text-center">
                      <ComparisonCell value={row.turbotax} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Payment Options */}
      <section className="py-20">
        <Container size="small">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Payment Options
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pay securely with your preferred method.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: CreditCard, title: "Credit / Debit Card", desc: "Visa, Mastercard, Amex accepted" },
              { icon: Shield, title: "PayPal", desc: "Secure checkout via PayPal" },
              { icon: Check, title: "Bank Transfer", desc: "Wire transfer for large orders" },
            ].map((method, index) => (
              <Card key={index} className="border-border/50 bg-card/50 text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{method.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{method.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Guarantee */}
      <section className="border-y border-border/50 bg-surface py-20">
        <Container size="small">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
              100% Money-Back Guarantee
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              If your ITIN application is rejected due to an error in our preparation or documentation,
              you receive a full refund. No questions asked. This guarantee reflects our confidence in
              our expert review process.
            </p>
            <div className="mt-8 space-y-4 text-left">
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-muted-foreground">Full refund for preparation errors</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-muted-foreground">Free resubmission if IRS requests corrections</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-muted-foreground">50% refund if you cancel after preparation starts</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-muted-foreground">Full refund if you cancel before preparation begins</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Pricing FAQs"
        subtitle="Common questions about our pricing and fees."
        faqs={pricingFAQs}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Get Your ITIN?"
        subtitle="Transparent pricing. No hidden fees. Start your application today."
        ctaText="Apply Now — $297 Total"
      />
    </div>
  );
}
