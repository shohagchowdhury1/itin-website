import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const metadata = {
  title: "Clients — itin.so Admin",
};

export default function AdminClientsPage() {
  const clients = [
    { id: "CLI-0186", name: "Ahmed K.", email: "ahmed@example.com", country: "UAE", applications: 2, status: "active" },
    { id: "CLI-0185", name: "Priya S.", email: "priya@example.com", country: "India", applications: 1, status: "active" },
    { id: "CLI-0184", name: "Rahim M.", email: "rahim@example.com", country: "Bangladesh", applications: 3, status: "active" },
    { id: "CLI-0183", name: "Li W.", email: "li@example.com", country: "China", applications: 1, status: "inactive" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Clients</h1>
          <p className="text-muted-foreground">Manage client accounts and history.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search clients..." className="pl-10" />
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
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Applications</th>
                  <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id} className="border-b border-border/50 transition-colors hover:bg-muted/30">
                    <td className="px-6 py-4 text-sm text-foreground">{client.id}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{client.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{client.email}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{client.country}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{client.applications}</td>
                    <td className="px-6 py-4">
                      <Badge variant={client.status === "active" ? "success" : "secondary"}>
                        {client.status}
                      </Badge>
                    </td>
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
