import { StickyCTA } from "@/components/shared/sticky-cta";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <StickyCTA />
    </>
  );
}
