export default async function AboutPage() {
  // SSR: fetch on each request
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", { cache: "no-store" })
  const author = await res.json()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About This Project</h1>
          <p className="text-lg text-muted-foreground">
            Understanding Next.js rendering techniques through practical examples
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Author (SSR)</h2>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold">{author.name}</p>
              <p className="text-sm text-muted-foreground">{author.email}</p>
              <p className="text-sm text-muted-foreground">{author.company?.name}</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Rendering Techniques</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>SSR on this page (author info)</li>
              <li>SSG on Blog index</li>
              <li>ISR on Blog detail</li>
              <li>CSR ticker on Home</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
