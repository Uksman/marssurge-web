"use client"

import { Button } from "@/components/ui/button"
import { Rocket, Cloud, Trophy } from "lucide-react"
import { GooglePlayIcon, AppStoreIcon } from "@/components/icons"

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
      className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6536] to-[#D64A1F] flex items-center justify-center text-[10px] font-bold text-[#18181b] shadow-lg"
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
      MAG
    </div>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div 
        className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] rounded-[40px] bg-gradient-to-b from-zinc-800 to-zinc-900 p-2 shadow-2xl animate-float"
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
        <div className="relative w-full h-full rounded-[32px] bg-[#18181b] overflow-hidden">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 z-10">
            <span className="text-xs text-zinc-400">9:41</span>
            <div className="w-24 h-6 bg-black rounded-full" />
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-zinc-400 rounded-sm" />
            </div>
          </div>
          
          {/* App content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            {/* Logo */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6536] to-[#D64A1F] flex items-center justify-center mb-4 animate-pulse-glow">
              <Rocket className="w-10 h-10 text-[#18181b]" />
            </div>
            
            <h3 className="text-xl font-bold text-[#fafafa] mb-1">MARSSURGE</h3>
            <p className="text-xs text-zinc-400 mb-6">Mine. Learn. Earn.</p>
            
            {/* Mining card */}
            <div className="w-full glass-card rounded-2xl p-4 mb-4">
              <p className="text-xs text-zinc-400 mb-1">Mining Balance</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#FF6536]">12,450</span>
                <span className="text-sm text-zinc-400">$MAG</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-400">Mining Active</span>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="glass-panel rounded-xl p-3 text-center">
                <Cloud className="w-5 h-5 text-[#FF6536] mx-auto mb-1" />
                <span className="text-xs text-zinc-300">Cloud Mine</span>
              </div>
              <div className="glass-panel rounded-xl p-3 text-center">
                <Trophy className="w-5 h-5 text-[#FF6536] mx-auto mb-1" />
                <span className="text-xs text-zinc-300">Leaderboard</span>
              </div>
            </div>
          </div>
          
          {/* Bottom nav */}
          <div className="absolute bottom-4 left-4 right-4 h-16 glass-panel rounded-2xl flex items-center justify-around">
            {[
              { name: "Home", active: true },
              { name: "Mine", active: false },
              { name: "Games", active: false },
              { name: "News", active: false },
            ].map((item) => (
              <div key={item.name} className={`flex flex-col items-center ${item.active ? "text-[#FF6536]" : "text-zinc-500"}`}>
                <div className={`w-6 h-6 rounded-lg ${item.active ? "bg-[#FF6536]/20" : ""} flex items-center justify-center`}>
                  <div className="w-3 h-3 rounded-sm bg-current" />
                </div>
                <span className="text-[10px] mt-1">{item.name}</span>
              </div>
            ))}
          </div>
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
    </div>
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
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF6536] animate-pulse" />
            <span className="text-sm text-zinc-300">Blockchain-Powered Mining</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            <span className="text-[#fafafa]">Think </span>
            <span className="text-[#FF6536] neon-text">Unlimited</span>
            <br />
            <span className="text-[#fafafa]">Possibilities</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-pretty">
            Marssurge ($MAG) is a free mobile app for simulated mining, market intelligence, and community engagement. Join a growing blockchain ecosystem focused on transparency, security, and sustainable development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-zinc-800">
            {[
              { value: "50K+", label: "Active Miners" },
              { value: "5M", label: "Total $MAG Supply" },
              { value: "70%", label: "Community Allocation" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#FF6536]">{stat.value}</div>
                <div className="text-xs md:text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
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
