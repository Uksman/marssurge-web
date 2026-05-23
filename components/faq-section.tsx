"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is Marssurge ($MAG)?",
    answer: "Marsurge Network is a decentralized mobile ecosystem designed to bridge the gap between passive crypto earning and active market intelligence. It combines a hyper-deflationary mining protocol with real-time Whale Tracking tools and skill-based gaming to reward users with $MAG—a scarce, utility-driven asset."
  },
  {
    question: "How does the mining process work?",
    answer: "Our mining system is built on a unique hyper-deflationary consensus mechanism that uses a 5-hour cycle. This frequent cycle ensures that tokens are rewarded to active, consistent contributors rather than bot farms."
  },
  {
    question: "What happens if I forget to restart my mining cycle?",
    answer: "If you miss a cycle, you won't earn $MAG for that period. However, you don't have to worry about constantly checking the clock! The Marssurge app features built-in push notifications to alert you the moment your 5-hour cycle ends, so you can easily tap and keep earning."
  },
  {
    question: "Do I need to pay or buy anything to start mining?",
    answer: "No, the Marssurge app is completely free to download and use. You do not need to invest capital to earn $MAG. It is distributed fairly to users based on their active participation."
  },
  {
    question: "What is the total supply of $MAG?",
    answer: "The total supply is strictly capped at 5,000,000 $MAG. 70% (3,500,000 $MAG) is reserved solely for community mining, ensuring a fair distribution earned through active participation rather than just capital."
  },
  {
    question: "What utility does the app offer?",
    answer: "Beyond mining, the app serves as a hub for Market Intelligence (real-time Whale Tracking alerts), Skill Gaming (Arcade integration evolving from P2E to Skill-to-Earn), and Education (Learn-to-Earn through daily quizzes and news)."
  },
  {
    question: "When can I withdraw or trade my $MAG tokens?",
    answer: "Withdrawals and DEX trading will become available during Phase 4 (TGE & DEX Launch) of our roadmap. For now, the focus is on community building and genesis block mining."
  }
]

function FAQItem({ faq, index, isOpen, toggleOpen }: { faq: typeof faqs[0], index: number, isOpen: boolean, toggleOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={toggleOpen}
        className={`w-full flex items-center justify-between p-6 text-left rounded-2xl transition-all duration-300 ${
          isOpen 
            ? "glass-card border-[#FF6536]/50 shadow-[0_0_20px_rgba(255,101,54,0.1)]" 
            : "bg-zinc-900/50 hover:bg-zinc-800/80 border border-zinc-800/50"
        }`}
      >
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? "text-[#FF6536]" : "text-[#fafafa]"}`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
          isOpen ? "bg-[#FF6536]/20 rotate-180" : "bg-zinc-800"
        }`}>
          <ChevronDown className={`w-4 h-4 ${isOpen ? "text-[#FF6536]" : "text-zinc-400"}`} />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-2 text-zinc-400 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-32 isolate">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "#FF6536" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#FF6536]/20 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-[#FF6536]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6536]/80">
              Got Questions?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-[#fafafa]">Frequently Asked </span>
            <span className="text-[#FF6536] neon-text">Questions</span>
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-pretty">
            Everything you need to know about Marssurge, mining $MAG, and our ecosystem.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              index={index} 
              isOpen={openIndex === index}
              toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
