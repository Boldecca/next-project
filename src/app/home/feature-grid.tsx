export function FeaturesGrid() {
  const features = [
    {
      title: "Server-Side Rendering",
      description: "HTML rendered on the server for each request. Best for dynamic content.",
      shortCode: "SSR",
    },
    {
      title: "Static Site Generation",
      description: "Pre-rendered HTML at build time. Fastest for static content.",
      shortCode: "SSG",
    },
    {
      title: "Incremental Static Regeneration",
      description: "Re-generate pages at runtime. Perfect for mostly static content that updates occasionally.",
      shortCode: "ISR",
    },
    {
      title: "Client-Side Rendering",
      description: "Render content in the browser with interactive features.",
      shortCode: "CSR",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <div
            key={feature.shortCode}
            className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <div className="mb-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold group-hover:bg-primary/20 transition-colors">
                {feature.shortCode}
              </div>
            </div>
            <h3 className="font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
