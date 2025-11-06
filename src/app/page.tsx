import { HeroSection } from "./home/hero-section"
import { FeaturesGrid } from "./home/feature-grid"
import { LatestPosts } from "./home/latest-posts"
import { TimeTicker } from "./home/time-ticker"

export default function Home() {
  return (
    <div className="space-y-16 py-12">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Welcome to DevBlog</h1>
        <p className="text-muted-foreground mb-4">Explore Next.js rendering techniques with clear examples.</p>
        <TimeTicker />
      </section>
      <HeroSection />
      <FeaturesGrid />
      <LatestPosts />
    </div>
  )
}
