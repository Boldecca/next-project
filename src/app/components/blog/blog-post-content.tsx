import type { BlogPost } from "@/lib/blog-data"

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <article className="space-y-6">
      <header className="space-y-4">
        <div className="flex gap-2">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            {post.renderingMethod}
          </span>
          <span className="inline-block px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-balance">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </header>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg text-muted-foreground">{post.excerpt}</p>

        <div className="space-y-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-bold mb-4">Share this post</h3>
          <div className="flex gap-4">
            <a href="#" className="text-primary hover:underline text-sm">
              Twitter
            </a>
            <a href="#" className="text-primary hover:underline text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-primary hover:underline text-sm">
              Copy link
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
