import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { PRICING } from "@/lib/constants";

export function PricingTable() {
  const plans = [
    {
      name: "Standard",
      price: PRICING.standard,
      description: "For most applicants who need a reliable, done-for-you service.",
      features: [
        "W-7 form preparation & review",
        "Document review by IRS-authorized CAA",
        "CAA certification of identity documents",
        "IRS application submission",
        "Email status updates",
        "7-day application preparation",
        "1 year support for IRS correspondence",
      ],
      notIncluded: ["Priority queue processing", "WhatsApp support", "FedEx tracking"],
      ctaText: "Get Started — $297",
      popular: false,
    },
    {
      name: "Express",
      price: PRICING.express,
      description: "For applicants who need their ITIN application prepared urgently.",
      features: [
        "Everything in Standard",
        "2-3 business day preparation",
        "Priority queue processing",
        "Dedicated WhatsApp support",
        "FedEx tracking for documents",
        "100% money-back guarantee",
        "Lifetime support for IRS issues",
      ],
      notIncluded: [],
      ctaText: "Get Express — $397",
      popular: true,
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One flat fee. No hidden charges. No surprises.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-primary/50 bg-card shadow-lg shadow-primary/5"
                  : "border-border/50 bg-card/50"
              }`}
            >
              {plan.popular && (
                <Badge
                  variant="primary"
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">
                    ${plan.price}
                  </span>
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
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
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
  );
}
