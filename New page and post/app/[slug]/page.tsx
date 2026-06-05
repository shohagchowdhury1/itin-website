import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllMarkdownSlugs, getMarkdownPage } from '@/lib/markdown'
import MarkdownContent from '@/components/MarkdownContent'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllMarkdownSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getMarkdownPage(params.slug)
  if (!page) {
    return { title: 'Page Not Found' }
  }
  return {
    title: `${page.title} | ITIN.so`,
    description: page.content.slice(0, 160).replace(/<[^>]*>/g, ''),
  }
}

export default function MarkdownPage({ params }: PageProps) {
  const page = getMarkdownPage(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <div className="bg-white">
      <div className="bg-itin-light border-b border-itin-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="text-sm text-itin-gray mb-4">
            <a href="/" className="hover:text-itin-blue">Home</a>
            <span className="mx-2">/</span>
            <span className="text-itin-dark">{page.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-itin-dark">
            {page.title}
          </h1>
        </div>
      </div>
      <MarkdownContent content={page.content} />
    </div>
  )
}
