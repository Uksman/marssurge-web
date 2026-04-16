"use client"

import { 
  Cloud, 
  Users, 
  Gamepad2, 
  Brain, 
  Trophy, 
  Newspaper,
  Rocket,
  Eye
} from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Cloud,
    title: "Cloud Mining",
    description: "Effortless $MAG accumulation without hardware. Our hyper-deflationary mining protocol uses a 5-hour cycle to reward active participants.",
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "The social heart of Marssurge where you post, like, and share. Connect with fellow miners and build your network.",
  },
  {
    icon: Gamepad2,
    title: "Mini Games",
    description: "Turn your downtime into earning time. Skill-based arcade games evolved from Play-to-Earn into Skill-to-Earn rewards.",
  },
  {
    icon: Brain,
    title: "Crypto Quiz",
    description: "Level up your knowledge and your wallet. Curated Learn-to-Earn quizzes reward correct answers to incentivize education.",
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    description: "Track your rank among the global community. Compete with miners worldwide and climb to the top of the charts.",
  },
  {
    icon: Newspaper,
    title: "News Center",
    description: "Real-time intel on the $MAG ecosystem. Stay updated with curated news feed and market movements.",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative glass-card rounded-2xl p-6 md:p-8 hover:border-[#FF6536]/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 101, 54, 0.1) 0%, transparent 70%)"
        }}
      />
      
      {/* Icon */}
      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6536]/20 to-[#FF6536]/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-[#FF6536]" />
        <div className="absolute inset-0 rounded-xl border border-[#FF6536]/20 group-hover:border-[#FF6536]/40 transition-colors" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold text-[#fafafa] mb-3 group-hover:text-[#FF6536] transition-colors">
        {feature.title}
      </h3>
      <p className="text-zinc-400 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse at 70% 30%, rgba(255, 101, 54, 0.15) 0%, transparent 50%)"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Rocket className="w-4 h-4 text-[#FF6536]" />
            <span className="text-sm text-zinc-300">Ecosystem Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-[#fafafa]">Everything You Need to </span>
            <span className="text-[#FF6536] neon-text">Surge</span>
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-pretty">
            A complete mobile ecosystem combining passive mining, market intelligence, skill-based gaming, and community engagement.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
        
        {/* Whale Tracking highlight */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: "radial-gradient(ellipse at 80% 50%, rgba(255, 101, 54, 0.2) 0%, transparent 60%)"
              }}
            />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6536]/20 text-[#FF6536] text-sm font-medium mb-4"
                >
                  <Eye className="w-4 h-4" />
                  Core Utility
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold text-[#fafafa] mb-4"
                >
                  Whale Tracking
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-zinc-400 leading-relaxed mb-6"
                >
                  The core utility of Marssurge. Aggregates on-chain data to provide alerts on massive wallet movements. Access institutional-grade market data that empowers everyday users with the same intelligence the whales have.
                </motion.p>
                <div className="flex flex-wrap gap-3">
                  {["Real-time Alerts", "On-chain Data", "Smart Money Signals"].map((tag, idx) => (
                    <motion.span 
                      key={tag} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                      className="px-3 py-1.5 rounded-full glass-panel text-xs text-zinc-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative w-48 h-48"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF6536]/20 to-transparent animate-pulse" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#FF6536]/30 to-transparent animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#FF6536]/40 to-transparent animate-pulse" style={{ animationDelay: "1s" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye className="w-16 h-16 text-[#FF6536]" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
