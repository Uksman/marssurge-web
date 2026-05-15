"use client"

import { useEffect, useState } from "react"

export function GlobalBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[-1] bg-[#18181b]"
      style={{
        backgroundImage: `
          radial-gradient(1.5px 1.5px at 20px 30px, white, transparent),
          radial-gradient(1.5px 1.5px at 40px 70px, rgba(255,255,255,0.8), transparent),
          radial-gradient(2px 2px at 90px 40px, rgba(255,101,54,0.3), transparent),
          radial-gradient(2px 2px at 160px 120px, white, transparent),
          radial-gradient(2.5px 2.5px at 200px 200px, rgba(255,101,54,0.2), transparent),
          radial-gradient(2px 2px at 300px 80px, white, transparent)
        `,
        backgroundSize: "400px 400px",
        opacity: 0.25
      }}
    />
  )
}
