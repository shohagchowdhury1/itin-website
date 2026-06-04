import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { generateBlogPostingSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo";
import { APP_URL } from "@/lib/constants";
import { getBlogPostBySlug, getAllBlogPosts } from "@/data/blog-posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = generateBlogPostingSchema({
    title: post.title,
    description: post.excerpt,
    url: `${APP_URL}/blog/${post.slug}/`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    authorName: post.author,
    wordCount: post.content.length,
  });

  const faqSchema = generateFAQSchema(post.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", href: APP_URL },
    { name: "Blog", href: `${APP_URL}/blog/` },
    { name: post.title },
  ]);

  const contentHtml = post.content
    .split("\n")
    .map((line) => {
      if (line.startsWith("## ")) {
        return `<h2 class="text-2xl font-bold text-foreground mt-12 mb-4">${line.replace("## ", "")}</h2>`;
      }
      if (line.startsWith("### ")) {
        return `<h3 class="text-xl font-semibold text-foreground mt-8 mb-3">${line.replace("### ", "")}</h3>`;
      }
      if (line.startsWith("- ")) {
        return `<li class="ml-6 text-muted-foreground">${line.replace("- ", "")}</li>`;
      }
      if (line.trim() === "") {
        return "";
      }
      return `<p class="text-muted-foreground leading-relaxed mb-4">${line}</p>`;
    })
    .join("\n");

  return (
    <div className="flex flex-col">
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <Breadcrumbs items={[{ name: "Blog", href: "/blog/" }, { name: post.title }]} />
      </Container>

      <article className="py-16">
        <Container size="small">
          <Badge variant="primary">{post.category}</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.datePublished).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>

          <div
            className="prose prose-invert mt-12 max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <div className="mt-12">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-teal-light"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </Container>
      </article>

      <FAQSection title="Frequently Asked Questions" faqs={post.faqs} />
      <CTASection />
    </div>
  );
}
