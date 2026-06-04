import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Settings — itin.so Admin",
};

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage site configuration and preferences.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/50 bg-card/50">
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Site Name</label>
              <input
                type="text"
                defaultValue="itin.so"
                className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Support Email</label>
              <input
                type="email"
                defaultValue="support@itin.so"
                className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">WhatsApp Number</label>
              <input
                type="text"
                defaultValue="+1234567890"
                className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50">
          <CardHeader>
            <CardTitle>Pricing Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Standard Price</label>
              <input
                type="number"
                defaultValue={297}
                className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Express Price</label>
              <input
                type="number"
                defaultValue={397}
                className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Renewal Price</label>
              <input
                type="number"
                defaultValue={197}
                className="mt-1 block w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
