"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Starfield() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Slower parallax for background stars
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  // Medium parallax 
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])

  // Prevent hydration mismatch by using useMemo for server-side consistent render
  const stars1 = useMemo(() => [...Array(60)].map((_, i) => ({
    width: Math.random() * 2 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.4 + 0.1
  })), [])

  const stars2 = useMemo(() => [...Array(20)].map((_, i) => ({
    width: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.6 + 0.2
  })), [])

  const particles = useMemo(() => [...Array(15)].map((_, i) => ({
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5
  })), [])

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {mounted && (
        <>
          <motion.div 
            className="absolute inset-0"
            style={{ y: y1 }}
          >
            {stars1.map((star, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-white"
                style={{ 
                  width: star.width, 
                  height: star.width, 
                  left: star.left, 
                  top: star.top, 
                  opacity: star.opacity 
                }}
              />
            ))}
          </motion.div>
          
          <motion.div 
            className="absolute inset-0"
            style={{ y: y2 }}
          >
            {stars2.map((star, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-[#FF6536]"
                style={{ 
                  width: star.width, 
                  height: star.width, 
                  left: star.left, 
                  top: star.top, 
                  opacity: star.opacity,
                  boxShadow: "0 0 10px rgba(255,101,54,0.5)"
                }}
              />
            ))}
            {particles.map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#FF6536] animate-particle opacity-60"
                style={{
                  width: p.size,
                  height: p.size,
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  animationDelay: `${p.delay}s`,
                  boxShadow: "0 0 10px rgba(255, 101, 54, 0.6)",
                }}
              />
            ))}
          </motion.div>
        </>
      )}
    </div>
  )
}
