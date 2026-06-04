import { Container } from "@/components/layout/container";
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "@/types";

interface FAQSectionProps {
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export function FAQSection({ title, subtitle, faqs }: FAQSectionProps) {
  return (
    <section className="py-20">
      <Container size="small">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className="mt-12">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
