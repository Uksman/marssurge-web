"use client"

import { Check, Circle, Rocket, Zap, Globe, Crown, Target, Gem } from "lucide-react"
import { motion } from "framer-motion"

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Genesis",
    quarter: "Q4 2025",
    status: "completed",
    icon: Rocket,
    items: [
      { text: "Concept & Whitepaper", completed: true },
      { text: "Core Team Assembly", completed: true },
      { text: "Alpha App Development", completed: true },
      { text: "Website Launch", completed: true },
    ]
  },
  {
    phase: "Phase 2",
    title: "The Surge",
    quarter: "Q1 2026",
    status: "current",
    icon: Zap,
    items: [
      { text: "App Beta Launch (Android/iOS)", completed: true },
      { text: "Mining Start (Genesis Block)", completed: true },
      { text: "KYC Compliance", completed: false },
      { text: "10,000 Active Miners Target", completed: false },
    ]
  },
  {
    phase: "Phase 3",
    title: "Utility Integration",
    quarter: "Q2 2026",
    status: "upcoming",
    icon: Target,
    items: [
      { text: "Whale Tracking Beta", completed: false },
      { text: "GameFi Mini-games Launch", completed: false },
      { text: "In-App Non-custodial Wallet", completed: false },
      { text: "Community Expansion", completed: false },
    ]
  },
  {
    phase: "Phase 4",
    title: "TGE & DEX Launch",
    quarter: "Q3 2026",
    status: "upcoming",
    icon: Gem,
    items: [
      { text: "$MAG Token Generation Event", completed: false },
      { text: "DEX Listing (Uniswap/Aerodrome)", completed: false },
      { text: "Withdrawals Open", completed: false },
      { text: "Trading Goes Live", completed: false },
    ]
  },
  {
    phase: "Phase 5",
    title: "Global Expansion",
    quarter: "Q4 2026",
    status: "upcoming",
    icon: Globe,
    items: [
      { text: "Tier 2 CEX Listings (MEXC, Gate)", completed: false },
      { text: "CoinGecko/CMC Listing", completed: false },
      { text: "Ecosystem Partnerships", completed: false },
      { text: "Global Marketing Campaign", completed: false },
    ]
  },
  {
    phase: "Phase 6",
    title: "The Moon",
    quarter: "2027+",
    status: "upcoming",
    icon: Crown,
    items: [
      { text: "Tier 1 CEX Listings (Binance, Coinbase)", completed: false },
      { text: "Marssurge DAO Governance", completed: false },
      { text: "Institutional API Tools", completed: false },
      { text: "Ecosystem Dominance", completed: false },
    ]
  },
]

function PhaseCard({ phase, index }: { phase: typeof roadmapPhases[0]; index: number }) {
  const Icon = phase.icon
  const isCompleted = phase.status === "completed"
  const isCurrent = phase.status === "current"
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className={`glass-card rounded-2xl p-6 relative transition-all duration-300 hover:-translate-y-1 ${
        isCurrent ? "border-[#FF6536]/50 neon-glow" : ""
      }`}
    >
      {/* Phase indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            isCompleted 
              ? "bg-green-500/20 text-green-400" 
              : isCurrent 
                ? "bg-[#FF6536]/20 text-[#FF6536]" 
                : "bg-zinc-800 text-zinc-500"
          }`}>
            {phase.phase}
          </span>
          <span className="text-xs text-zinc-500">{phase.quarter}</span>
        </div>
        
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          isCompleted 
            ? "bg-green-500/20" 
            : isCurrent 
              ? "bg-[#FF6536]/20 animate-pulse" 
              : "bg-zinc-800"
        }`}>
          <Icon className={`w-5 h-5 ${
            isCompleted 
              ? "text-green-400" 
              : isCurrent 
                ? "text-[#FF6536]" 
                : "text-zinc-500"
          }`} />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-[#fafafa] mb-4">{phase.title}</h3>
      
      <ul className="space-y-3">
        {phase.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              item.completed 
                ? "bg-green-500/20" 
                : "bg-zinc-800"
            }`}>
              {item.completed ? (
                <Check className="w-3 h-3 text-green-400" />
              ) : (
                <Circle className="w-2 h-2 text-zinc-600" />
              )}
            </div>
            <span className={`text-sm ${
              item.completed ? "text-zinc-300" : "text-zinc-500"
            }`}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      
      {/* Progress indicator for current phase */}
      {isCurrent && (
        <div className="mt-4 pt-4 border-t border-zinc-800">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-zinc-500">Progress</span>
            <span className="text-[#FF6536] font-semibold">50%</span>
          </div>
          <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#FF6536] to-[#FF8F6B]"
              style={{ width: "50%" }}
            />
          </div>
        </div>
      )}
    </motion.div>
  )
}

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse at 80% 20%, rgba(255, 101, 54, 0.15) 0%, transparent 50%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6536]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6536]/80">
              Project Roadmap
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-[#fafafa]">Mission </span>
            <span className="text-[#FF6536] neon-text">Roadmap</span>
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-pretty">
            From genesis to the moon. Follow our journey as we build sustainable blockchain infrastructure for the community.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapPhases.map((phase, i) => (
            <PhaseCard key={phase.phase} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
