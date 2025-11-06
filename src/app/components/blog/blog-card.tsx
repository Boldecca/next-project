import Link from "next/link"

interface BlogCardProps {
  post: {
    slug: string
    title: string
    excerpt: string
    date: string
    category: string
    renderingMethod: string
  }
  variant?: "compact" | "full"
}

export function BlogCard({ post, variant = "compact" }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="h-full hover:border-primary transition-colors cursor-pointer p-6 bg-card border border-border rounded-lg">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
              {post.renderingMethod}
            </span>
            <span className="inline-block px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs font-medium">
              {post.category}
            </span>
          </div>
          <div>
            <h3 className="font-bold line-clamp-2 text-lg">{post.title}</h3>
            {variant === "full" && <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{post.excerpt}</p>}
          </div>
          <p className="text-xs text-muted-foreground mt-auto">{post.date}</p>
        </div>
      </div>
    </Link>
  )
}
