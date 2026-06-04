import { Container } from "@/components/layout/container";
import { Check, X, Minus } from "lucide-react";
import { PRICING } from "@/lib/constants";

interface ComparisonFeature {
  feature: string;
  itinso: boolean | string;
  sprintax: boolean | string;
  hrblock: boolean | string;
  turbotax: boolean | string;
}

const comparisons: ComparisonFeature[] = [
  { feature: "Flat Fee Pricing", itinso: true, sprintax: false, hrblock: false, turbotax: false },
  { feature: "CAA Document Certification", itinso: true, sprintax: false, hrblock: false, turbotax: false },
  { feature: "No Passport Mailing Required", itinso: true, sprintax: false, hrblock: false, turbotax: false },
  { feature: "WhatsApp Support", itinso: true, sprintax: false, hrblock: false, turbotax: false },
  { feature: "7-Day Application Prep", itinso: true, sprintax: false, hrblock: false, turbotax: false },
  { feature: "100% Money-Back Guarantee", itinso: true, sprintax: false, hrblock: false, turbotax: false },
  { feature: "Price", itinso: `$${PRICING.standard}`, sprintax: "$100-300+", hrblock: "$200-400+", turbotax: "$150-300+" },
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

export function ComparisonTable() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose itin.so?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how we compare to other ITIN services.
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
              {comparisons.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-border/50 transition-colors hover:bg-muted/30"
                >
                  <td className="py-4 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
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
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Prices verified {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
          Competitor pricing is estimated based on publicly available information.
        </p>
      </Container>
    </section>
  );
}
