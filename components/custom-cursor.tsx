"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const mainX = useSpring(cursorX, springConfig)
  const mainY = useSpring(cursorY, springConfig)
  
  const ringX = useSpring(cursorX, { damping: 30, stiffness: 200, mass: 1 })
  const ringY = useSpring(cursorY, { damping: 30, stiffness: 200, mass: 1 })

  useEffect(() => {
    setMounted(true)
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button'
        
      setIsHovered(!!isInteractive)
    }

    const hideCursor = () => setIsVisible(false)
    const showCursor = () => setIsVisible(true)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", () => setIsHovered(false))
    document.addEventListener("mouseleave", hideCursor)
    document.addEventListener("mouseenter", showCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseleave", hideCursor)
      document.removeEventListener("mouseenter", showCursor)
    }
  }, [cursorX, cursorY, isVisible])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FF6536] rounded-full"
        style={{
          x: mainX,
          y: mainY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#FF6536]/30"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 60 : 32,
          height: isHovered ? 60 : 32,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered ? "rgba(255, 101, 54, 0.05)" : "transparent",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.8 }}
      >
        {/* Subtle glow inside ring */}
        <div className="absolute inset-0 rounded-full bg-[#FF6536]/5 blur-sm" />
      </motion.div>
      
      {/* Lagging light aura */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-[#FF6536]/5 rounded-full blur-2xl"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.3 : 0,
        }}
      />
    </div>
  )
}
