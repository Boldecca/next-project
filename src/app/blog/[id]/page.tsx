import { notFound } from "next/navigation"

export const revalidate = 60 // ISR: revalidate every 60s

type ApiPost = { id: number; title: string; body: string; userId: number }
type ApiUser = { id: number; name: string; email: string }

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts: ApiPost[] = await res.json()
  return posts.slice(0, 12).map((p) => ({ id: String(p.id) }))
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    next: { revalidate },
  })
  if (!postRes.ok) return notFound()
  const post: ApiPost = await postRes.json()

  const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`, {
    next: { revalidate },
  })
  const author: ApiUser | null = userRes.ok ? await userRes.json() : null

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-balance">{post.title}</h1>
        {author && (
          <p className="text-sm text-muted-foreground">By {author.name} • {author.email}</p>
        )}
      </header>
      <div className="prose prose-invert max-w-none">
        <p>{post.body}</p>
      </div>
    </article>
  )
}
