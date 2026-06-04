import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { APP_URL, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Contact itin.so — Get in Touch",
  description:
    "Contact itin.so for ITIN application support. WhatsApp, email, and contact form available. We respond within 24 hours.",
  path: "/contact/",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "Contact" },
]);

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "Contact" }]} />
      </Container>

      <section className="py-16">
        <Container className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Have questions about getting your ITIN? We are here to help. Reach out via WhatsApp, email, or our contact form.
          </p>
        </Container>
      </section>

      <section className="border-y border-border/50 bg-surface py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                desc: "Fastest response. Chat with our team directly.",
                action: `https://wa.me/${WHATSAPP_NUMBER}`,
                actionText: "Chat on WhatsApp",
              },
              {
                icon: Mail,
                title: "Email",
                desc: "For detailed questions and document submissions.",
                action: "mailto:support@itin.so",
                actionText: "Email Us",
              },
              {
                icon: MapPin,
                title: "Global Service",
                desc: "We serve clients in 150+ countries worldwide.",
                action: null,
                actionText: null,
              },
            ].map((method, i) => (
              <Card key={i} className="border-border/50 bg-card/50 text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{method.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{method.desc}</p>
                  {method.action && (
                    <a
                      href={method.action}
                      className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-teal-dark"
                    >
                      {method.actionText}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="small">
          <div className="rounded-xl border border-border/50 bg-card/50 p-8">
            <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground">Subject</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Tell us about your situation..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-teal-dark"
              >
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}
