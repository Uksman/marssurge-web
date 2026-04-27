"use client"

import { Button } from "@/components/ui/button"
import { Rocket, Cloud, Trophy } from "lucide-react"
import { GooglePlayIcon, AppStoreIcon } from "@/components/icons"
import { motion, animate, useInView, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Starfield } from "@/components/starfield"

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

function MagToken({ delay, angle, distance }: { delay: number; angle: number; distance: number }) {
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, -100])
  const parallaxX = useTransform(scrollY, [0, 500], [0, 50])

  return (
    <motion.div
      className="absolute w-8 h-8 rounded-full shadow-lg border border-[#FF6536]/50 overflow-hidden"
      style={{
        left: "50%",
        top: "50%",
        marginLeft: "-16px",
        marginTop: "-16px",
        boxShadow: "0 0 15px rgba(255, 101, 54, 0.5), 0 0 30px rgba(255, 101, 54, 0.3)",
        y: parallaxY,
        x: parallaxX,
      }}
    >
      <motion.div
        className="w-full h-full"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 15 + delay,
          repeat: Infinity,
          ease: "linear",
          delay: -delay,
        }}
        style={{
          transformStyle: "preserve-3d",
          transform: `rotate(${angle}deg) translateX(${distance}px) rotate(-${angle}deg)`,
        }}
      >
        <img src="/images/Token.jpeg" alt="MAG Token" className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  )
}

const MOCKUP_IMAGES = [
  "/images/HomeScreen.jpeg",
  "/images/WalletScreen.jpeg",
  "/images/LeaderboardScreen.jpg",
  "/images/ArcadeScreen.jpg",
  "/images/CommunityScreen.jpg",
  "/images/InviteScreen.jpg",
]

function PhoneMockup() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number }[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % MOCKUP_IMAGES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = e.clientX - rect.left
    const cy = e.clientY - rect.top
    setBursts(b => [...b, { id: Date.now() + Math.random(), x: cx, y: cy }])
  }

  return (
    <div 
      className="relative [perspective:1000px] cursor-pointer w-full h-[500px] md:h-[600px] flex items-center justify-center" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Orbital rings behind the 3D phone */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-[#FF6536]/20 animate-spin-slow pointer-events-none"
        style={{ animationDuration: "40s" }}
      />
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[600px] md:h-[600px] rounded-full border border-[#FF6536]/10 pointer-events-none"
        style={{ 
          animation: "spin-slow 60s linear infinite reverse",
        }}
      />
      
      {/* Orbiting MAG tokens securely placed behind the 3D context */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <MagToken delay={0} angle={0} distance={200} />
        <MagToken delay={3} angle={120} distance={200} />
        <MagToken delay={6} angle={240} distance={200} />
        <MagToken delay={1.5} angle={60} distance={250} />
        <MagToken delay={4.5} angle={180} distance={250} />
        <MagToken delay={7.5} angle={300} distance={250} />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 pointer-events-none"
      >
        {/* Phone frame */}
        <div 
          className="relative w-[280px] md:w-[320px] rounded-[40px] bg-gradient-to-b from-zinc-800 to-zinc-900 p-2 shadow-2xl animate-float pointer-events-auto"
          style={{
            boxShadow: `
              0 0 60px rgba(255, 101, 54, 0.3),
              0 0 120px rgba(255, 101, 54, 0.15),
              0 25px 50px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(0, 0, 0, 0.1)
            `
          }}
        >
          {/* Screen */}
          <div className="relative w-full rounded-[32px] bg-background overflow-hidden border-[4px] border-background aspect-[9/19.5]">
            {/* Phone mock overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-3xl z-20 shadow-sm" />
            
            <AnimatePresence>
              <motion.img 
                key={MOCKUP_IMAGES[currentImageIndex]}
                src={MOCKUP_IMAGES[currentImageIndex]} 
                alt="Marssurge App Screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-fill" 
              />
            </AnimatePresence>
          </div>
        </div>
        
        {/* Click Bursts */}
        {bursts.map(b => (
          <motion.div
             key={b.id}
             initial={{ opacity: 1, scale: 0.5, y: b.y, x: b.x }}
             animate={{ opacity: 0, scale: 1.5, y: b.y - 100, x: b.x + (Math.random() * 40 - 20) }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="absolute pointer-events-none z-50 text-[#FF6536] font-bold text-xl drop-shadow-[0_0_10px_rgba(255,101,54,0.8)]"
             onAnimationComplete={() => setBursts(prev => prev.filter(p => p.id !== b.id))}
          >
            +$MAG
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Starfield Parallax background */}
      <Starfield />

      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, var(--background) 70%)"
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left column - Text */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={wordVariants} className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6536]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6536]/80">
              Blockchain-Powered Mining
            </span>
          </motion.div>
          
          <motion.h1 
            variants={containerVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance"
          >
            <motion.span variants={wordVariants} className="text-foreground">Think </motion.span>
            <motion.span 
              variants={wordVariants} 
              className="text-[#FF6536] neon-text inline-block"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 101, 54, 0.5)",
                  "0 0 20px rgba(255, 101, 54, 0.8)",
                  "0 0 10px rgba(255, 101, 54, 0.5)",
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Unlimited
            </motion.span>
            <br />
            <motion.span variants={wordVariants} className="text-foreground">Possibilities</motion.span>
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
              { to: 10, suffix: "K+", label: "Active Miners" },
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
