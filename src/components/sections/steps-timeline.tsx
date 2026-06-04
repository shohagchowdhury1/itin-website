import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

interface Step {
  number: string;
  title: string;
  description: string;
  duration?: string;
}

interface StepsTimelineProps {
  title: string;
  subtitle?: string;
  steps: Step[];
}

export function StepsTimeline({ title, subtitle, steps }: StepsTimelineProps) {
  return (
    <section className="border-y border-border/50 bg-surface py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-12 hidden h-full w-px bg-border lg:block" />
              )}
              <div className="flex flex-col items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                  {step.duration && (
                    <Badge variant="outline" className="mt-1">
                      {step.duration}
                    </Badge>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
