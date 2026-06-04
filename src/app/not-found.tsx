import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Search, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="rounded-full bg-primary/10 p-4">
        <Search className="h-10 w-10 text-primary" />
      </div>
      <h1 className="mt-6 text-6xl font-bold tracking-tight text-foreground">
        404
      </h1>
      <h2 className="mt-2 text-2xl font-semibold text-foreground">
        Page Not Found
      </h2>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved. Check out
        our most popular pages below.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-teal-dark"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/itin-application/"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Apply for ITIN
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { href: "/pricing/", label: "Pricing", desc: "See our transparent pricing" },
          { href: "/how-to-get-itin/", label: "How to Get an ITIN", desc: "Step-by-step guide" },
          { href: "/itin-for-llc/", label: "ITIN for LLC", desc: "ITIN for business owners" },
          { href: "/blog/", label: "Blog", desc: "Guides and resources" },
          { href: "/contact/", label: "Contact Us", desc: "Get in touch" },
          { href: "/about/", label: "About", desc: "Learn about our service" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/50 hover:bg-muted"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">{link.label}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
