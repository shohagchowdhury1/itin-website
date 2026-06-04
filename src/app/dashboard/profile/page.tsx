import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Profile — itin.so Dashboard",
};

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings.</p>
      </div>

      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Full Name</label>
              <p className="text-foreground">John Doe</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Email</label>
              <p className="text-foreground">john@example.com</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Phone</label>
              <p className="text-foreground">+1 234 567 890</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Country</label>
              <p className="text-foreground">United Kingdom</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
