"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRICING } from "@/lib/constants";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 transform border-t border-border bg-card/95 backdrop-blur-md transition-transform duration-300 md:bottom-auto md:top-0",
        isVisible ? "translate-y-0" : "translate-y-full md:-translate-y-full"
      )}
    >
      <div className="container flex items-center justify-between gap-4 px-4 py-3">
        <div className="hidden items-center gap-4 md:flex">
          <span className="text-lg font-bold text-primary">
            ${PRICING.standard} Total
          </span>
          <span className="text-sm text-muted-foreground">
            ITIN Application — 7-Day Prep
          </span>
        </div>
        <div className="flex flex-1 items-center justify-between gap-4 md:flex-none">
          <span className="text-sm font-medium text-foreground md:hidden">
            ITIN — ${PRICING.standard}
          </span>
          <Link
            href="/itin-application/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-teal-dark"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
