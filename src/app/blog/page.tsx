import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { APP_URL } from "@/lib/constants";
import { getAllBlogPosts, getBlogCategories } from "@/data/blog-posts";

export const metadata = generatePageMetadata({
  title: "ITIN Blog — Guides, Tips & Resources (2026)",
  description:
    "Expert guides on ITIN applications, US taxes, banking, and business setup for non-residents. Learn how to get your ITIN and grow your US business.",
  path: "/blog/",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", href: APP_URL },
  { name: "Blog" },
]);

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const categories = getBlogCategories();

  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "Blog" }]} />
      </Container>

      <section className="py-16">
        <Container className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            ITIN Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Expert guides on ITIN applications, US taxes, banking, and business setup for non-residents.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border/50 bg-surface py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="group">
                <Card className="h-full border-border/50 bg-card/50 transition-colors hover:border-primary/30 hover:bg-card">
                  <CardContent className="flex flex-col p-6">
                    <Badge variant="primary" className="w-fit">
                      {post.category}
                    </Badge>
                    <h2 className="mt-4 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.datePublished).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readingTime}
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
