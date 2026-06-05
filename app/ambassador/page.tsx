"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Zap, Gift, Users, Star, Megaphone, CheckCircle2 } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Starfield } from "@/components/starfield"

// Feature Card with 3D tilt effect matching Marssurge UI
function PerkCard({ title, description, icon: Icon, index }: any) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative glass-card rounded-2xl p-6 md:p-8 hover:border-[#FF6536]/30 transition-all duration-300"
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: "radial-gradient(circle at center, rgba(255, 101, 54, 0.1) 0%, transparent 70%)" }}
        />
        
        {/* Icon */}
        <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6536]/20 to-[#FF6536]/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-[#FF6536]" />
          <div className="absolute inset-0 rounded-xl border border-[#FF6536]/20 group-hover:border-[#FF6536]/40 transition-colors" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold text-[#fafafa] mb-3 group-hover:text-[#FF6536] transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function AmbassadorPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-24 md:pt-52 md:pb-32 flex-grow flex items-center justify-center overflow-hidden">
        <Starfield />
        
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 0%, var(--background) 70%)" }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6536]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6536]/80">
              Applications Now Open
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance text-[#fafafa]"
          >
            Become a <span className="text-[#FF6536] neon-text">Marssurge</span> Ambassador
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Join our elite group of community leaders, content creators, and blockchain enthusiasts. Drive the growth of the Marssurge ecosystem and earn exclusive rewards.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto bg-[#FF6536] hover:bg-[#D64A1F] text-[#18181b] font-semibold px-8 py-6 text-lg rounded-xl animate-pulse-glow" asChild>
              <a href="https://tally.so/r/MeMZLk">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            {/* <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#FF6536]/30 text-[#fafafa] hover:bg-[#FF6536]/10 hover:border-[#FF6536] px-8 py-6 text-lg rounded-xl transition-all glass-panel">
              Read the Guidelines
            </Button> */}
          </motion.div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-24 md:py-32 relative isolate border-t border-zinc-800/50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(255, 101, 54, 0.15) 0%, transparent 50%)" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#fafafa]">
              Exclusive <span className="text-[#FF6536] neon-text">Benefits</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-pretty">
              We highly value our ambassadors and provide them with the best resources, direct team access, and lucrative incentives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Gift, title: "$MAG Token Rewards", description: "Earn monthly token allocations based on your performance and contribution to the ecosystem." },
              { icon: Star, title: "VIP Status", description: "Get a special role in our Discord, early access to new app features, and beta testing opportunities." },
              { icon: Users, title: "Direct Team Access", description: "Join private calls with the core Marssurge development team and influence the roadmap." },
              { icon: Zap, title: "Network Growth", description: "Grow your own personal brand by co-hosting AMAs and spaces with the official Marssurge accounts." },
              { icon: Megaphone, title: "Marketing Budget", description: "Top performing ambassadors can request budgets for hosting local meetups or giveaways." }
            ].map((perk, i) => (
              <PerkCard key={i} index={i} {...perk} />
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-24 md:py-32 relative z-10 border-t border-zinc-800/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(255, 101, 54, 0.2) 0%, transparent 60%)" }} />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#fafafa]">Who Can Apply?</h2>
                <p className="text-lg text-zinc-400">
                  We are looking for passionate individuals who understand Web3 and want to help us grow.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Content Creators (YouTube, TikTok, Twitter) with a crypto/tech audience.",
                  "Community Managers and Discord Moderators who know how to foster engagement.",
                  "Translators and local leaders who want to bring Marssurge to their region.",
                  "Blockchain enthusiasts who genuinely love the product and want to spread the word."
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-4 p-5 rounded-2xl glass-panel group hover:border-[#FF6536]/30 transition-all"
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#FF6536] group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-[#fafafa] md:text-lg leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative z-10 border-t border-zinc-800/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#fafafa]">Ready to Lead the <span className="text-[#FF6536] neon-text">Surge?</span></h2>
            <p className="text-xl text-zinc-400 mb-10 text-pretty">
              Applications are reviewed on a rolling basis. Spots are limited to ensure a high-quality program for all participants.
            </p>
            <Button size="lg" className="bg-[#FF6536] hover:bg-[#D64A1F] text-[#18181b] font-semibold px-10 py-7 text-xl rounded-xl animate-pulse-glow" asChild>
              <a href="https://tally.so/r/MeMZLk">
                Submit Your Application
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
