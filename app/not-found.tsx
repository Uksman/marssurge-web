"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, Radar, Target } from "lucide-react"
import { motion } from "framer-motion"
import { Starfield } from "@/components/starfield"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <Navigation />
      
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 flex-grow flex items-center justify-center overflow-hidden">
        <Starfield />
        
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 0%, var(--background) 70%)" }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center max-w-3xl">
          
          {/* The Huge 404 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="flex items-center justify-center font-bold tracking-tighter text-[10rem] md:text-[14rem] lg:text-[18rem] leading-none mb-8"
          >
            <span className="text-[#fafafa] drop-shadow-2xl">4</span>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="relative mx-2 md:mx-6 text-[#FF6536]"
            >
              <div className="absolute inset-0 bg-[#FF6536] blur-[60px] opacity-40 rounded-full" />
              <Target className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 relative z-10" strokeWidth={1} />
            </motion.div>
            <span className="text-[#fafafa] drop-shadow-2xl">4</span>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa]">Page Not Found</h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed text-pretty">
              The coordinates you entered seem to be uncharted. This sector of the Marssurge ecosystem doesn't exist or has been relocated.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto bg-[#FF6536] hover:bg-[#D64A1F] text-[#18181b] font-semibold px-8 py-6 text-lg rounded-xl animate-pulse-glow" asChild>
              <Link href="/">
                <Home className="mr-2 w-5 h-5" /> Return to Base
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#FF6536]/30 text-[#fafafa] hover:bg-[#FF6536]/10 hover:border-[#FF6536] px-8 py-6 text-lg rounded-xl transition-all glass-panel" asChild>
              <button onClick={() => window.history.back()}>
                Go Back
              </button>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
