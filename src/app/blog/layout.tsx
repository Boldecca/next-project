import type React from "react"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside className="md:col-span-1">
          <BlogSidebar />
        </aside>
        <main className="md:col-span-2">{children}</main>
      </div>
    </div>
  )
}
