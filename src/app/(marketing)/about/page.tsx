import { Shield, Award, Globe, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { APP_URL } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "About itin.so — IRS-Authorized CAA Service",
  description:
    "Learn about itin.so, an IRS-authorized Certifying Acceptance Agent service. 2,400+ ITIN applications submitted. Serving 150+ countries since 2020.",
  path: "/about/",
});

const articleSchema = generateArticleSchema({
  title: "About itin.so — IRS-Authorized CAA Service",
  description: "Learn about itin.so, an IRS-authorized Certifying Acceptance Agent service.",
  url: `${APP_URL}/about/`,
  datePublished: "2025-01-01T00:00:00Z",
  dateModified: "2026-06-04T00:00:00Z",
  wordCount: 1200,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "About" },
]);

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "About" }]} />
      </Container>

      <section className="py-16">
        <Container className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About itin.so
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            IRS-authorized Certifying Acceptance Agent service helping non-US citizens get their ITIN
            number fast, safely, and affordably.
          </p>
        </Container>
      </section>

      <section className="border-y border-border/50 bg-surface py-20">
        <Container size="small">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Story</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              itin.so was founded in 2020 with a simple mission: make it easy for non-US citizens to
              obtain an ITIN number without the stress, confusion, and risk of the DIY process.
            </p>
            <p>
              We saw that international entrepreneurs, freelancers, and Amazon sellers were struggling
              with the IRS W-7 form, mailing their passports overseas, and facing high rejection rates.
              As an IRS-authorized Certifying Acceptance Agent (CAA), we built a service that handles
              everything for them.
            </p>
            <p>
              Today, we have submitted over 2,400 ITIN applications for clients in 150+ countries.
              Our team of specialists ensures every application is accurate, complete, and submitted
              correctly the first time.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, label: "IRS Authorized", value: "CAA Status" },
              { icon: Award, label: "Applications", value: "2,400+" },
              { icon: Globe, label: "Countries", value: "150+" },
              { icon: Users, label: "Response Time", value: "24 Hours" },
            ].map((stat, i) => (
              <Card key={i} className="border-border/50 bg-card/50 text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Ready to Work With Us?" ctaText="Apply for Your ITIN" />
    </div>
  );
}
