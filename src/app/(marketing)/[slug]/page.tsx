import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { APP_URL } from "@/lib/constants";
import { getAllMarkdownSlugs, getMarkdownPage } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllMarkdownSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getMarkdownPage(slug);
  if (!page) {
    return generatePageMetadata({
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
      path: `/${slug}/`,
    });
  }
  return generatePageMetadata({
    title: page.title,
    description: page.content.slice(0, 160).replace(/<[^>]*>/g, ""),
    path: `/${slug}/`,
  });
}

export default async function MarkdownPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getMarkdownPage(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", href: APP_URL },
    { name: page.title },
  ]);

  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: page.title }]} />
      </Container>

      <article className="py-16">
        <Container size="small">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {page.title}
          </h1>
          <div className="mt-8">
            <MarkdownContent content={page.content} />
          </div>
        </Container>
      </article>
    </div>
  );
}
