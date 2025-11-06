import { getBlogPosts } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog/blog-card"

export function LatestPosts() {
  const posts = getBlogPosts().slice(0, 3)

  return (
    <section className="container mx-auto px-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <p className="text-muted-foreground">Recent articles across rendering strategies</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} variant="full" />
        ))}
      </div>
    </section>
  )
}
