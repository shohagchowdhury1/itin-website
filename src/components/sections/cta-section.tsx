import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PRICING } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  showPrice?: boolean;
}

export function CTASection({
  title = "Ready to Get Your ITIN?",
  subtitle = "Join 2,400+ successful applicants from 150+ countries. Start your application today.",
  ctaText = "Apply for Your ITIN",
  ctaHref = "/itin-application/",
  showPrice = true,
}: CTASectionProps) {
  return (
    <section className="border-y border-border/50 bg-gradient-to-b from-surface to-background py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-teal-dark hover:shadow-lg hover:shadow-primary/20"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          {showPrice && (
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>
                <strong className="text-foreground">${PRICING.standard} total</strong> — 100% Money-Back Guarantee
              </span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
