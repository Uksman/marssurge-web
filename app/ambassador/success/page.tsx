"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Home } from "lucide-react"
import { motion } from "framer-motion"
import { Starfield } from "@/components/starfield"
import Link from "next/link"

export default function AmbassadorSuccessPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <Navigation />
      
      <section className="relative pt-44 pb-24 md:pt-52 md:pb-32 flex-grow flex items-center justify-center overflow-hidden">
        <Starfield />
        
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 0%, var(--background) 70%)" }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF6536] blur-2xl opacity-20 rounded-full" />
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF6536]/20 to-[#FF6536]/5 rounded-3xl flex items-center justify-center border border-[#FF6536]/30 relative z-10">
                <CheckCircle2 className="w-12 h-12 text-[#FF6536]" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-[#fafafa]"
          >
            Application <span className="text-[#FF6536] neon-text">Received</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Thank you for applying to the Marssurge Ambassador Program! We've received your application and our team will be reviewing it shortly. Keep an eye on your email for updates.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto bg-[#FF6536] hover:bg-[#D64A1F] text-[#18181b] font-semibold px-8 py-6 text-lg rounded-xl animate-pulse-glow" asChild>
              <Link href="/">
                <Home className="mr-2 w-5 h-5" /> Return Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#FF6536]/30 text-[#fafafa] hover:bg-[#FF6536]/10 hover:border-[#FF6536] px-8 py-6 text-lg rounded-xl transition-all glass-panel" asChild>
              <Link href="/ambassador">
                Program Details <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
