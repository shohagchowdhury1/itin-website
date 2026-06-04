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
  title: "ITIN Renewal — Revalidate Your Expired ITIN (2026)",
  description:
    "ITINs expire after 3 years of non-use. Renew your ITIN for $197 with our IRS-authorized CAA service. Fast preparation, no passport mailing.",
  path: "/itin-renewal/",
});

const pageFAQs = [
  {
    question: "When do ITINs expire?",
    answer:
      "ITINs expire if not used on a federal tax return for three consecutive years. The IRS also expires ITINs issued before 2013 on a rolling basis. Check your ITIN assignment letter for the expiration date.",
  },
  {
    question: "How do I know if my ITIN has expired?",
    answer:
      "The IRS sends a notice CP48 when your ITIN is scheduled to expire. You can also check by attempting to file a tax return — if your ITIN is expired, the IRS will reject the return. We offer free ITIN status checks.",
  },
  {
    question: "What is the ITIN renewal process?",
    answer:
      "ITIN renewal follows the same process as a new application. You complete Form W-7, provide current identity documents, and submit the application. Our renewal service handles all of this for you.",
  },
  {
    question: "How much does ITIN renewal cost?",
    answer:
      "Our ITIN renewal service costs $197. This includes status checking, W-7 form preparation, CAA document certification, and IRS submission. There is no IRS filing fee for renewal.",
  },
  {
    question: "Can I renew my ITIN before it expires?",
    answer:
      "Yes. You can renew your ITIN up to one year before it expires. We recommend starting the renewal process at least 3 months before you need to file taxes to avoid delays.",
  },
];

const articleSchema = generateArticleSchema({
  title: "ITIN Renewal — Revalidate Your Expired ITIN (2026)",
  description: "ITINs expire after 3 years of non-use. Renew your ITIN for $197 with our IRS-authorized CAA service.",
  url: `${APP_URL}/itin-renewal/`,
  datePublished: "2025-01-01T00:00:00Z",
  dateModified: "2026-06-04T00:00:00Z",
  wordCount: 1600,
});

const faqSchema = generateFAQSchema(pageFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "ITIN Renewal" },
]);

export default function ITINRenewalPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "ITIN Renewal" }]} />
      </Container>

      <HeroSection
        title="ITIN Renewal"
        subtitle="Revalidate your expired ITIN. $197 renewal fee. IRS-authorized CAA service. No passport mailing required."
        stats={[
          { label: "Renewal Price", value: `$${PRICING.renewal}` },
          { label: "Prep Time", value: "7 Days" },
          { label: "IRS Time", value: "6-11 wks" },
        ]}
        ctaText="Renew Your ITIN"
      />

      <section className="py-12">
        <Container size="small">
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            ITINs expire if not used on a federal tax return for three consecutive years. Renewing your ITIN ensures you can continue filing taxes, maintaining bank accounts, and keeping your business compliant. Our renewal service handles the entire process for $197.
          </p>
        </Container>
      </section>

      <section className="border-y border-border/50 bg-surface py-20">
        <Container size="small">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Renew Your ITIN?
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "File Taxes", desc: "An expired ITIN causes the IRS to reject your tax return. Renewal ensures timely filing." },
              { title: "Avoid Withholding", desc: "Banks and platforms may withhold taxes if your ITIN is expired. Stay compliant." },
              { title: "Bank Account Access", desc: "Some banks freeze accounts linked to expired ITINs. Renewal prevents disruptions." },
            ].map((item, i) => (
              <Card key={i} className="border-border/50 bg-card/50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection title="ITIN Renewal FAQs" faqs={pageFAQs} />
      <CTASection title="Renew Your ITIN Today" ctaText="Renew Now — $197 Total" />
    </div>
  );
}
