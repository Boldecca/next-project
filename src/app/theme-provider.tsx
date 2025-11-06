"use client"

import { createContext } from "react"
import type React from "react"

import { useEffect, useState } from "react"

export const ThemeContext = createContext<{
  theme: "light" | "dark"
  toggleTheme: () => void
} | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme") as "light" | "dark" | null
    const initial = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const applyTheme = (t: "light" | "dark") => {
    const root = document.documentElement
    if (t === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  return (
    <div suppressHydrationWarning>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    </div>
  )
}
