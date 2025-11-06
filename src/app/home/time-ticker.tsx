"use client"

import { useEffect, useState } from "react"

export function TimeTicker() {
  const [now, setNow] = useState<string>(new Date().toLocaleString())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date().toLocaleString()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="rounded-md border border-border bg-card p-4 text-sm">
      <span className="font-medium">Current time:</span> {now}
    </div>
  )
}
