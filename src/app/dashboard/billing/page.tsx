import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download } from "lucide-react";

export const metadata = {
  title: "Billing — itin.so Dashboard",
};

export default function BillingPage() {
  const invoices = [
    { id: "INV-001", description: "ITIN Application Service", amount: 297, status: "paid", date: "2026-05-15" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Billing</h1>
        <p className="text-muted-foreground">View your payment history and invoices.</p>
      </div>

      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CreditCard className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-foreground">Visa ending in 4242</p>
              <p className="text-sm text-muted-foreground">Expires 12/27</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-foreground">{inv.description}</p>
                  <p className="text-sm text-muted-foreground">{inv.id} — {inv.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium text-foreground">${inv.amount}</span>
                  <Badge variant="success">{inv.status}</Badge>
                  <button className="text-primary hover:text-teal-light">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
