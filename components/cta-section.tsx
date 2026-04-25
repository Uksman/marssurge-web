"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import { GooglePlayIcon, AppStoreIcon, XIcon, TelegramIcon, InstagramIcon, YoutubeIcon } from "@/components/icons"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section id="whitepaper" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(255, 101, 54, 0.2) 0%, transparent 50%)"
          }}
        />
        {/* Animated rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#FF6536]/10 animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#FF6536]/5" style={{ animation: "spin-slow 60s linear infinite reverse" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-500/80">
              Beta Now Live
            </span>
          </div>
          
          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance"
          >
            <span className="text-[#fafafa]">Join the </span>
            <span className="text-[#FF6536] neon-text">Mars Mission</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto text-pretty"
          >
            Download Marssurge today and start your mining journey. Join a growing community of miners building the future of decentralized finance together.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button 
              size="lg" 
              className="bg-[#FF6536] hover:bg-[#D64A1F] text-[#18181b] font-semibold px-8 py-6 text-lg rounded-xl animate-pulse-glow"
              asChild
            >
              <a href="https://play.google.com/store/apps/details?id=com.marssurge.app" target="_blank" rel="noopener noreferrer">
                <GooglePlayIcon className="w-5 h-5 mr-2" />
                Google Play
                <ArrowRight className="w-5 h-5 ml-2" />
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
          
          {/* Whitepaper button */}
          <div className="mb-12">
            <Button 
              variant="ghost" 
              className="text-zinc-400 hover:text-[#FF6536] hover:bg-[#FF6536]/10"
              asChild
            >
              <a href="/whitepaper">
                <FileText className="w-4 h-4 mr-2" />
                Read Whitepaper
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
          
          {/* Social links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="text-sm text-zinc-500">Join the community:</span>
            {[
              { href: "https://x.com/MSurge01", icon: XIcon, label: "X (Twitter)" },
              { href: "https://t.me/MarsSurge", icon: TelegramIcon, label: "Telegram" },
              { href: "https://www.instagram.com/invites/contact/?igsh=1r8ftnqpjxwzw&utm_content=yx5ss12", icon: InstagramIcon, label: "Instagram" },
              { href: "https://youtube.com/@MarsSurge", icon: YoutubeIcon, label: "YouTube" }
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-zinc-400 hover:text-[#FF6536] hover:border-[#FF6536]/30 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
