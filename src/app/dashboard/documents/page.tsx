import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Upload, Check } from "lucide-react";

export const metadata = {
  title: "Documents — itin.so Dashboard",
};

export default function DocumentsPage() {
  const documents = [
    { name: "Passport Copy", status: "verified", date: "2026-05-15" },
    { name: "Tax Return (Form 1040)", status: "pending", date: "2026-05-20" },
    { name: "Proof of Foreign Status", status: "verified", date: "2026-05-15" },
    { name: "W-7 Supporting Documents", status: "required", date: null },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Documents</h1>
        <p className="text-muted-foreground">Upload and manage your ITIN application documents.</p>
      </div>

      <div className="grid gap-4">
        {documents.map((doc, i) => (
          <Card key={i} className="border-border/50 bg-card/50">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{doc.name}</p>
                  {doc.date && <p className="text-xs text-muted-foreground">Uploaded {doc.date}</p>}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge
                  variant={
                    doc.status === "verified"
                      ? "success"
                      : doc.status === "pending"
                      ? "warning"
                      : "secondary"
                  }
                >
                  {doc.status === "verified" && <Check className="mr-1 h-3 w-3" />}
                  {doc.status}
                </Badge>
                {doc.status === "required" && (
                  <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                    <Upload className="h-4 w-4" />
                    Upload
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
