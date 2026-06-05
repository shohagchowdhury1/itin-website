import fs from 'fs'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const CONTENT_DIR = process.cwd()

export interface PageData {
  slug: string
  title: string
  content: string
}

export function getAllMarkdownSlugs(): string[] {
  const files = fs.readdirSync(CONTENT_DIR)
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
    .sort()
}

export function getMarkdownPage(slug: string): PageData | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }
  
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  
  // Extract title from first h1
  const titleMatch = rawContent.match(/^#\s+(.+)$/m)
  const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ')
  
  // Convert markdown to HTML
  const result = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .processSync(rawContent)
  
  const content = String(result)
  
  return {
    slug,
    title,
    content,
  }
}

export function getAllPages(): PageData[] {
  const slugs = getAllMarkdownSlugs()
  return slugs
    .map((slug) => getMarkdownPage(slug))
    .filter((page): page is PageData => page !== null)
}
