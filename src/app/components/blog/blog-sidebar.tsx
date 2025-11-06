"use client"

import type React from "react"
import { useState } from "react"
import { getBlogPosts } from "@/lib/blog-data"

interface BlogSidebarProps {
  onCategoryChange?: (category: string | null) => void
}

export function BlogSidebar({ onCategoryChange }: BlogSidebarProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const posts = getBlogPosts()

  const categories = Array.from(new Set(posts.map((p) => p.category)))
  const renderingMethods = Array.from(new Set(posts.map((p) => p.renderingMethod)))

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
    onCategoryChange?.(category)
  }

  return (
    <div className="sticky top-20 space-y-6">
      {/* Search */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="font-bold mb-4">Search</h3>
        <input
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="w-full px-3 py-2 rounded-md bg-background border border-border text-sm outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Categories */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="font-bold mb-4">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
              selectedCategory === null ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === category ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Rendering Methods */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="font-bold mb-4">Rendering Methods</h3>
        <div className="space-y-2">
          {renderingMethods.map((method) => {
            const count = posts.filter((p) => p.renderingMethod === method && p.title.toLowerCase().includes(query.toLowerCase())).length
            return (
              <div key={method} className="flex items-center justify-between px-3 py-2 rounded-md bg-muted/50">
                <span className="text-sm font-medium">{method}</span>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{count}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="font-bold mb-4">Statistics</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Posts</span>
            <span className="font-semibold">{posts.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Categories</span>
            <span className="font-semibold">{categories.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Methods</span>
            <span className="font-semibold">{renderingMethods.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
