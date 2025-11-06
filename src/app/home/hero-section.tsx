import Link from "next/link"

export function HeroSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-balance">Master Next.js Rendering Techniques</h1>
        <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
          Learn Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), and
          Client-Side Rendering (CSR) with practical examples.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/blog" className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90">
            Read Blog Posts
          </Link>
          <Link href="/about" className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-md border border-border hover:bg-muted">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
