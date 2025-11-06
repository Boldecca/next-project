import Link from "next/link"

type ApiPost = { id: number; title: string; body: string; userId: number }

export const dynamic = "force-static" // SSG

export default async function BlogIndexPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: false } })
  const posts: ApiPost[] = await res.json()
  const first = posts.slice(0, 12)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground mt-2">Static list fetched at build time (SSG)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {first.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="h-full">
            <div className="h-full hover:border-primary transition-colors cursor-pointer p-6 bg-card border border-border rounded-lg">
              <h3 className="font-bold line-clamp-2 text-lg mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3">{post.body}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-primary hover:underline">Back to Home</Link>
      </div>
    </div>
  )
}
