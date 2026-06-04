import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const metadata = {
  title: "Applications — itin.so Admin",
};

export default function AdminApplicationsPage() {
  const applications = [
    { id: "APP-2437", name: "Ahmed K.", email: "ahmed@example.com", country: "UAE", status: "in-review", date: "2026-06-04", plan: "Standard" },
    { id: "APP-2436", name: "Priya S.", email: "priya@example.com", country: "India", status: "submitted", date: "2026-06-03", plan: "Express" },
    { id: "APP-2435", name: "Rahim M.", email: "rahim@example.com", country: "Bangladesh", status: "completed", date: "2026-06-02", plan: "Standard" },
    { id: "APP-2434", name: "Li W.", email: "li@example.com", country: "China", status: "pending", date: "2026-06-01", plan: "Standard" },
    { id: "APP-2433", name: "Carlos R.", email: "carlos@example.com", country: "Brazil", status: "in-review", date: "2026-05-30", plan: "Express" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Applications</h1>
          <p className="text-muted-foreground">Manage and track ITIN applications.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search applications..." className="pl-10" />
        </div>
      </div>

      <Card className="border-border/50 bg-card/50">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">ID</th>
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Name</th>
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Email</th>
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Country</th>
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Plan</th>
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="border-b border-border/50 transition-colors hover:bg-muted/30">
                    <td className="px-6 py-4 text-sm text-foreground">{app.id}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{app.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{app.email}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{app.country}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{app.plan}</td>
                    <td className="px-6 py-4">
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
                    <td className="px-6 py-4 text-sm text-muted-foreground">{app.date}</td>
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
