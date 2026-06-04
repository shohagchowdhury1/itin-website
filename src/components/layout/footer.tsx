import Link from "next/link";
import { FOOTER_LINKS, APP_NAME, APP_URL } from "@/lib/constants";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface">
      <div className="container px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-foreground">{APP_NAME}</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              IRS-authorized CAA service helping non-US citizens get their ITIN
              number fast. $297 flat fee, 7-day preparation, no passport mailing
              required.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>WhatsApp support available</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@itin.so</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Serving 150+ countries worldwide</span>
              </div>
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(FOOTER_LINKS).map(([key, links]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {key}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              {APP_NAME} is an IRS-Authorized Certifying Acceptance Agent (CAA).
              This site is for informational purposes and does not constitute
              legal or tax advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
