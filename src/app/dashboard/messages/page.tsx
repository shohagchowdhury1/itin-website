import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

export const metadata = {
  title: "Messages — itin.so Dashboard",
};

export default function MessagesPage() {
  const messages = [
    { id: 1, from: "itin.so Support", subject: "Document Review Update", preview: "Your passport copy has been verified successfully.", date: "2026-06-03", unread: false },
    { id: 2, from: "itin.so Support", subject: "Tax Return Required", preview: "Please upload your federal tax return to proceed with your application.", date: "2026-06-02", unread: true },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground">Communicate with our support team.</p>
      </div>

      <div className="space-y-4">
        {messages.map((msg) => (
          <Card key={msg.id} className={`border-border/50 ${msg.unread ? "bg-card" : "bg-card/50"}`}>
            <CardContent className="flex items-start gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground">{msg.subject}</p>
                  {msg.unread && <Badge variant="primary">New</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{msg.from} — {msg.date}</p>
                <p className="mt-1 text-sm text-muted-foreground">{msg.preview}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
