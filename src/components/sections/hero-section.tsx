import Link from "next/link";
import { ArrowRight, Shield, Clock, Globe } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { UPDATED_DATE, PRICING } from "@/lib/constants";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  stats?: { label: string; value: string; icon?: React.ReactNode }[];
  ctaText?: string;
  ctaHref?: string;
  secondaryCta?: { text: string; href: string };
  badge?: string;
}

export function HeroSection({
  title,
  subtitle,
  stats = [
    { label: "Flat Fee", value: `$${PRICING.standard}`, icon: <Shield className="h-4 w-4" /> },
    { label: "Prep Time", value: "7 Days", icon: <Clock className="h-4 w-4" /> },
    { label: "Countries", value: "150+", icon: <Globe className="h-4 w-4" /> },
  ],
  ctaText = "Apply for Your ITIN",
  ctaHref = "/itin-application/",
  secondaryCta,
  badge = "IRS-Authorized CAA Service",
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-background to-surface py-20 lg:py-28">
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">
            {badge}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {subtitle}
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-teal-dark hover:shadow-lg hover:shadow-primary/20"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-muted"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Updated {UPDATED_DATE} — 100% Money-Back Guarantee
          </p>
        </div>
      </Container>
    </section>
  );
}
