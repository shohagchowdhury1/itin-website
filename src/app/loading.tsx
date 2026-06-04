import { Container } from "@/components/layout/container";

export default function Loading() {
  return (
    <Container className="py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="h-10 w-2/3 animate-pulse rounded-lg bg-muted" />
          <div className="h-5 w-full animate-pulse rounded-lg bg-muted" />
          <div className="h-5 w-5/6 animate-pulse rounded-lg bg-muted" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 animate-pulse rounded-xl bg-muted" />
          ))}
        </div>
      </div>
    </Container>
  );
}
