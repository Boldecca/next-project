export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  renderingMethod: "SSR" | "SSG" | "ISR" | "CSR"
}

export function getBlogPosts(): BlogPost[] {
  return [
    {
      slug: "ssr-dynamic-content",
      title: "Server-Side Rendering for Dynamic Content",
      excerpt: "Learn when and how to use SSR for real-time data that changes with each request.",
      date: "November 5, 2025",
      category: "Next.js",
      renderingMethod: "SSR",
      content: `
        <p>Server-Side Rendering (SSR) is the process of rendering your application on the server and sending fully rendered HTML to the browser.</p>
        
        <h3>When to use SSR:</h3>
        <ul>
          <li>Content that changes frequently</li>
          <li>Personalized data based on user input</li>
          <li>SEO-critical pages with dynamic content</li>
          <li>Real-time data that can't be pre-rendered</li>
        </ul>

        <h3>Example Use Cases:</h3>
        <ul>
          <li>User dashboards with personalized information</li>
          <li>E-commerce product pages with inventory</li>
          <li>Social media feeds</li>
          <li>Stock tickers or real-time data displays</li>
        </ul>

        <p>In Next.js 16, you can implement SSR by creating server components (the default) that fetch data directly from your database or API.</p>
      `,
    },
    {
      slug: "ssg-static-pages",
      title: "Static Site Generation for Maximum Performance",
      excerpt: "Master SSG for ultra-fast page loads with pre-rendered static HTML.",
      date: "November 4, 2025",
      category: "Performance",
      renderingMethod: "SSG",
      content: `
        <p>Static Site Generation (SSG) pre-renders pages at build time, creating static HTML files that are served to users.</p>
        
        <h3>Benefits of SSG:</h3>
        <ul>
          <li>Fastest page loads - pure HTML and CSS</li>
          <li>CDN friendly - static files cache perfectly</li>
          <li>Reduced server load</li>
          <li>Better SEO with instant rendering</li>
        </ul>

        <h3>Best For:</h3>
        <ul>
          <li>Blog posts and documentation</li>
          <li>Landing pages</li>
          <li>Marketing sites</li>
          <li>Any content that updates infrequently</li>
        </ul>

        <p>Use Next.js generateStaticParams() to specify which pages to pre-render at build time.</p>
      `,
    },
    {
      slug: "isr-best-both-worlds",
      title: "ISR: The Best of Both Worlds",
      excerpt: "Combine static performance with dynamic updates using Incremental Static Regeneration.",
      date: "November 3, 2025",
      category: "Next.js",
      renderingMethod: "ISR",
      content: `
        <p>Incremental Static Regeneration (ISR) allows you to regenerate static pages in the background after deployment, without needing a full rebuild.</p>
        
        <h3>How ISR Works:</h3>
        <ul>
          <li>Initial request is served as static HTML</li>
          <li>If revalidation time has passed, regenerate in background</li>
          <li>Stale content served while regenerating</li>
          <li>Fresh content served to next visitors</li>
        </ul>

        <h3>Perfect For:</h3>
        <ul>
          <li>News articles and blog posts</li>
          <li>Product catalogs that update weekly</li>
          <li>Documentation that changes occasionally</li>
          <li>Any content with semi-regular updates</li>
        </ul>

        <p>Configure revalidation time in your route segment config or use revalidateTag() in Server Actions.</p>
      `,
    },
    {
      slug: "csr-interactive-features",
      title: "Client-Side Rendering for Interactivity",
      excerpt: "Build dynamic, interactive UIs with CSR and modern JavaScript frameworks.",
      date: "November 2, 2025",
      category: "React",
      renderingMethod: "CSR",
      content: `
        <p>Client-Side Rendering (CSR) runs JavaScript in the browser to render your application, allowing for dynamic interactivity.</p>
        
        <h3>When to Use CSR:</h3>
        <ul>
          <li>Highly interactive features (forms, filters)</li>
          <li>Real-time updates and live data</li>
          <li>Heavy client-side logic</li>
          <li>Rich interactive dashboards</li>
        </ul>

        <h3>Considerations:</h3>
        <ul>
          <li>Slower initial page load (must download and parse JavaScript)</li>
          <li>SEO challenges (no pre-rendered HTML)</li>
          <li>Higher CPU usage on user devices</li>
          <li>Better for authenticated/user-specific content</li>
        </ul>

        <p>In Next.js, use 'use client' directive to mark components as client components with interactive features.</p>
      `,
    },
    {
      slug: "hybrid-rendering-strategy",
      title: "Building Hybrid Rendering Strategies",
      excerpt: "Combine multiple rendering techniques for optimal performance and user experience.",
      date: "November 1, 2025",
      category: "Architecture",
      renderingMethod: "SSR",
      content: `
        <p>Modern web applications often use a hybrid approach, combining different rendering strategies for different parts of the page.</p>
        
        <h3>Hybrid Architecture Example:</h3>
        <ul>
          <li>Static header and footer (SSG)</li>
          <li>Pre-rendered product listing (SSG/ISR)</li>
          <li>Dynamic shopping cart (CSR)</li>
          <li>Real-time inventory (SSR)</li>
        </ul>

        <h3>Benefits:</h3>
        <ul>
          <li>Fast initial page load</li>
          <li>Dynamic features where needed</li>
          <li>Optimal resource usage</li>
          <li>Better user experience overall</li>
        </ul>

        <p>Next.js 16 makes it easy to combine rendering strategies in a single application.</p>
      `,
    },
    {
      slug: "rendering-performance-tips",
      title: "Performance Tips for All Rendering Methods",
      excerpt: "Optimize your applications regardless of which rendering technique you choose.",
      date: "October 31, 2025",
      category: "Performance",
      renderingMethod: "SSG",
      content: `
        <p>Performance is crucial for all rendering techniques. Here are tips to optimize any rendering strategy.</p>
        
        <h3>Universal Performance Tips:</h3>
        <ul>
          <li>Use image optimization (Next.js Image component)</li>
          <li>Implement code splitting and lazy loading</li>
          <li>Minify and compress assets</li>
          <li>Use CDN for static assets</li>
          <li>Monitor Core Web Vitals</li>
          <li>Optimize database queries</li>
        </ul>

        <h3>Rendering-Specific Tips:</h3>
        <ul>
          <li>SSR: Cache database queries, use server-side pagination</li>
          <li>SSG: Use incremental regeneration, batch builds</li>
          <li>ISR: Set appropriate revalidation times</li>
          <li>CSR: Use React.memo, implement proper caching</li>
        </ul>

        <p>Always measure performance and iterate based on real user data.</p>
      `,
    },
  ]
}
