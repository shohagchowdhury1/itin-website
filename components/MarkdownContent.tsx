interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <article
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
