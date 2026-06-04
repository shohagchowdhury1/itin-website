"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Users,
  PenTool,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const adminNav = [
  { href: "/admin/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/applications/", label: "Applications", icon: FileText },
  { href: "/admin/clients/", label: "Clients", icon: Users },
  { href: "/admin/blog/", label: "Blog", icon: PenTool },
  { href: "/admin/settings/", label: "Settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <button
        className="fixed left-4 top-20 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 border-r border-border bg-card pt-20 transition-transform lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4">
          <div className="mb-4 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Admin Panel
          </div>
          <nav className="space-y-1">
            {adminNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 p-4 pt-20 lg:p-8">{children}</main>
    </div>
  );
}
