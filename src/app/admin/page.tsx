import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, DollarSign, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Admin Dashboard — itin.so",
};

export default function AdminDashboardPage() {
  const stats = [
    { label: "Total Applications", value: "2,437", icon: FileText, change: "+12%" },
    { label: "Active Clients", value: "186", icon: Users, change: "+8%" },
    { label: "Revenue (MTD)", value: "$58,443", icon: DollarSign, change: "+15%" },
    { label: "Approval Rate", value: "97.3%", icon: TrendingUp, change: "+2%" },
  ];

  const recentApplications = [
    { id: "APP-2437", name: "Ahmed K.", country: "UAE", status: "in-review", date: "2026-06-04" },
    { id: "APP-2436", name: "Priya S.", country: "India", status: "submitted", date: "2026-06-03" },
    { id: "APP-2435", name: "Rahim M.", country: "Bangladesh", status: "completed", date: "2026-06-02" },
    { id: "APP-2434", name: "Li W.", country: "China", status: "pending", date: "2026-06-01" },
    { id: "APP-2433", name: "Carlos R.", country: "Brazil", status: "in-review", date: "2026-05-30" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of applications, clients, and revenue.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="border-border/50 bg-card/50">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                  <span className="text-xs text-success">{stat.change}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 text-sm font-medium text-muted-foreground">ID</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Name</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Country</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((app) => (
                  <tr key={app.id} className="border-b border-border/50">
                    <td className="py-3 text-sm text-foreground">{app.id}</td>
                    <td className="py-3 text-sm text-foreground">{app.name}</td>
                    <td className="py-3 text-sm text-muted-foreground">{app.country}</td>
                    <td className="py-3">
                      <Badge
                        variant={
                          app.status === "completed"
                            ? "success"
                            : app.status === "in-review"
                            ? "warning"
                            : app.status === "submitted"
                            ? "primary"
                            : "secondary"
                        }
                      >
                        {app.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-sm text-muted-foreground">{app.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
