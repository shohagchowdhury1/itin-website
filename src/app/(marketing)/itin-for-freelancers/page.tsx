import { Briefcase, Check, Laptop, Wallet, Users } from "lucide-react";
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
  title: "ITIN for Freelancers — Upwork & Fiverr Tax ID (2026)",
  description:
    "Freelancers on Upwork, Fiverr, and remote platforms need an ITIN to report US income. $297 flat fee. IRS-authorized CAA service for independent contractors.",
  path: "/itin-for-freelancers/",
});

const pageFAQs = [
  {
    question: "Do freelancers need an ITIN?",
    answer:
      "Non-US citizen freelancers who earn income from US clients or platforms like Upwork and Fiverr need an ITIN to report that income to the IRS and file a US tax return. The ITIN serves as your taxpayer identification number.",
  },
  {
    question: "Can I work on Upwork without an ITIN?",
    answer:
      "Upwork allows you to create an account without an ITIN, but they will eventually require tax information. Without an ITIN or SSN, Upwork may withhold 30% of your earnings for tax purposes. An ITIN allows you to submit Form W-8BEN and claim treaty benefits.",
  },
  {
    question: "How does an ITIN help freelancers with taxes?",
    answer:
      "An ITIN allows you to file a US tax return and report your freelance income accurately. You can also claim tax treaty benefits that may reduce your tax liability. Many countries have tax treaties with the US that prevent double taxation.",
  },
  {
    question: "Can I open a business account as a freelancer with an ITIN?",
    answer:
      "Yes. With an ITIN, you can open US business bank accounts with Mercury, Relay, and Wise Business. This makes it easier to receive payments from US clients, manage finances, and build US credit history.",
  },
  {
    question: "What if I only have non-US clients?",
    answer:
      "If you do not earn US-sourced income, you may not need an ITIN. However, many freelancers find that having an ITIN opens opportunities for US clients and platforms. We can assess your situation during the application process.",
  },
];

const articleSchema = generateArticleSchema({
  title: "ITIN for Freelancers — Upwork & Fiverr Tax ID (2026)",
  description: "Freelancers on Upwork, Fiverr, and remote platforms need an ITIN to report US income.",
  url: `${APP_URL}/itin-for-freelancers/`,
  datePublished: "2025-01-01T00:00:00Z",
  dateModified: "2026-06-04T00:00:00Z",
  wordCount: 1700,
});

const faqSchema = generateFAQSchema(pageFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "ITIN for Freelancers" },
]);

export default function ITINForFreelancersPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "ITIN for Freelancers" }]} />
      </Container>

      <HeroSection
        title="ITIN for Freelancers"
        subtitle="Report US freelance income and access global platforms. $297 flat fee. IRS-authorized CAA service for Upwork, Fiverr, and remote workers."
        stats={[
          { label: "Price", value: `$${PRICING.standard}` },
          { label: "Prep Time", value: "7 Days" },
          { label: "Platform Ready", value: "Yes" },
        ]}
        ctaText="Apply for Your ITIN"
      />

      <section className="py-12">
        <Container size="small">
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            Freelancers on Upwork, Fiverr, and other platforms who earn US income need an ITIN to report taxes and avoid 30% withholding. Our IRS-authorized CAA service makes the process simple and secure.
          </p>
        </Container>
      </section>

      <section className="border-y border-border/50 bg-surface py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Freelancers Need an ITIN
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Laptop, title: "Platform Compliance", desc: "Submit tax forms to Upwork, Fiverr, and other freelance platforms." },
              { icon: Wallet, title: "Reduce Withholding", desc: "Claim treaty benefits to reduce or eliminate 30% tax withholding." },
              { icon: Users, title: "US Clients", desc: "Access higher-paying US clients who require proper tax documentation." },
              { icon: Briefcase, title: "Business Banking", desc: "Open US business accounts to receive payments and manage finances." },
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

      <FAQSection title="ITIN for Freelancer FAQs" faqs={pageFAQs} />
      <CTASection title="Get Your ITIN for Freelancing" ctaText="Apply Now — $297 Total" />
    </div>
  );
}
