"use client"

import { Button } from "@/components/ui/button"
import { Rocket, Cloud, Trophy } from "lucide-react"
import { GooglePlayIcon, AppStoreIcon } from "@/components/icons"
import { motion, animate, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

function AnimatedCounter({ from = 0, to, duration = 2, suffix = "", format = false }: { from?: number; to: number; duration?: number; suffix?: string; format?: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(nodeRef, { once: true })

  useEffect(() => {
    if (!inView) return
    const node = nodeRef.current
    if (!node) return

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        const rounded = Math.round(value)
        const formatted = format ? rounded.toLocaleString() : rounded
        node.textContent = `${formatted}${suffix}`
      },
    })

    return () => controls.stop()
  }, [from, to, duration, inView, suffix, format])

  return <span ref={nodeRef}>{format ? from.toLocaleString() : from}{suffix}</span>
}

function FloatingParticle({ delay, size, x, y }: { delay: number; size: number; x: number; y: number }) {
  return (
    <div
      className="absolute rounded-full bg-[#FF6536] animate-particle opacity-60"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        boxShadow: "0 0 10px rgba(255, 101, 54, 0.6)",
      }}
    />
  )
}

function MagToken({ delay, angle, distance }: { delay: number; angle: number; distance: number }) {
  return (
    <div
      className="absolute w-8 h-8 rounded-full shadow-lg border border-[#FF6536]/50 overflow-hidden"
      style={{
        animation: `orbit ${15 + delay * 2}s linear infinite`,
        animationDelay: `${delay}s`,
        left: "50%",
        top: "50%",
        marginLeft: "-16px",
        marginTop: "-16px",
        boxShadow: "0 0 15px rgba(255, 101, 54, 0.5), 0 0 30px rgba(255, 101, 54, 0.3)",
        transform: `rotate(${angle}deg) translateX(${distance}px) rotate(-${angle}deg)`,
      }}
    >
      <img src="/images/Token.jpeg" alt="MAG Token" className="w-full h-full object-cover" />
    </div>
  )
}

function PhoneMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      {/* Phone frame */}
      <div 
        className="relative w-[280px] md:w-[320px] rounded-[40px] bg-gradient-to-b from-zinc-800 to-zinc-900 p-2 shadow-2xl animate-float"
        style={{
          boxShadow: `
            0 0 60px rgba(255, 101, 54, 0.3),
            0 0 120px rgba(255, 101, 54, 0.15),
            0 25px 50px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `
        }}
      >
        {/* Screen */}
        <div className="relative w-full rounded-[32px] bg-[#18181b] overflow-hidden border-[4px] border-[#18181b]">
          {/* Phone mock overlay */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-3xl z-10 shadow-sm" />
          <img 
            src="/images/HomeScreen.jpeg" 
            alt="Marssurge App Home Screen"
            className="w-full h-auto block" 
          />
        </div>
      </div>
      
      {/* Orbital ring */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-[#FF6536]/20 animate-spin-slow"
        style={{ animationDuration: "40s" }}
      />
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[600px] md:h-[600px] rounded-full border border-[#FF6536]/10"
        style={{ 
          animation: "spin-slow 60s linear infinite reverse",
        }}
      />
      
      {/* Orbiting MAG tokens */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <MagToken delay={0} angle={0} distance={200} />
        <MagToken delay={3} angle={120} distance={200} />
        <MagToken delay={6} angle={240} distance={200} />
        <MagToken delay={1.5} angle={60} distance={250} />
        <MagToken delay={4.5} angle={180} distance={250} />
        <MagToken delay={7.5} angle={300} distance={250} />
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.3}
            size={Math.random() * 4 + 2}
            x={Math.random() * 100}
            y={Math.random() * 100}
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, #18181b 70%)"
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left column - Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF6536] animate-pulse" />
            <span className="text-sm text-zinc-300">Blockchain-Powered Mining</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance"
          >
            <span className="text-[#fafafa]">Think </span>
            <span className="text-[#FF6536] neon-text">Unlimited</span>
            <br />
            <span className="text-[#fafafa]">Possibilities</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-pretty"
          >
            Marssurge ($MAG) is a free mobile app for simulated mining, market intelligence, and community engagement. Join a growing blockchain ecosystem focused on transparency, security, and sustainable development.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button 
              size="lg" 
              className="bg-[#FF6536] hover:bg-[#D64A1F] text-[#18181b] font-semibold px-8 py-6 text-lg rounded-xl animate-pulse-glow"
              asChild
            >
              <a href="https://play.google.com/store/apps/details?id=com.marssurge.app" target="_blank" rel="noopener noreferrer">
                <GooglePlayIcon className="w-5 h-5 mr-2" />
                Google Play
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#FF6536]/30 text-[#fafafa] hover:bg-[#FF6536]/10 hover:border-[#FF6536] px-8 py-6 text-lg rounded-xl backdrop-blur-sm cursor-not-allowed opacity-60"
              disabled
            >
              <AppStoreIcon className="w-5 h-5 mr-2" />
              App Store (Coming Soon)
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-zinc-800"
          >
            {[
              { to: 50, suffix: "K+", label: "Active Miners" },
              { to: 5, suffix: "M", label: "Total $MAG Supply" },
              { to: 70, suffix: "%", label: "Community Allocation" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#FF6536]">
                  <AnimatedCounter to={stat.to} suffix={stat.suffix} duration={2} />
                </div>
                <div className="text-xs md:text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right column - Phone mockup */}
        <div className="flex justify-center order-1 lg:order-2">
          <PhoneMockup />
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#18181b] to-transparent pointer-events-none" />
    </section>
  )
}
