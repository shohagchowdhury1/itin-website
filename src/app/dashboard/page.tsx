import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCheck, Clock, MessageSquare, CreditCard } from "lucide-react";

export const metadata = {
  title: "Dashboard — itin.so",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Track your ITIN application progress.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Application Status", value: "In Review", icon: FileCheck, variant: "warning" as const },
          { label: "Documents", value: "3 of 4", icon: FileCheck, variant: "success" as const },
          { label: "Messages", value: "2 unread", icon: MessageSquare, variant: "primary" as const },
          { label: "Payment", value: "Paid", icon: CreditCard, variant: "success" as const },
        ].map((stat, i) => (
          <Card key={i} className="border-border/50 bg-card/50">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-lg font-semibold text-foreground">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress */}
      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle>Application Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { step: "Application Submitted", status: "completed" },
              { step: "Documents Uploaded", status: "completed" },
              { step: "Document Review", status: "in-progress" },
              { step: "W-7 Form Preparation", status: "pending" },
              { step: "CAA Certification", status: "pending" },
              { step: "IRS Submission", status: "pending" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                    item.status === "completed"
                      ? "bg-success text-success-foreground"
                      : item.status === "in-progress"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <span className="text-sm text-foreground">{item.step}</span>
                <Badge
                  variant={
                    item.status === "completed"
                      ? "success"
                      : item.status === "in-progress"
                      ? "primary"
                      : "secondary"
                  }
                  className="ml-auto"
                >
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
