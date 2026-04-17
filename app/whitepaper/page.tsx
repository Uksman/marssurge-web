import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, Shield, Rocket, Users, Coins, TrendingUp, Target, AlertTriangle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Whitepaper | Marssurge Network",
  description: "Read the official Marssurge Network whitepaper. Learn about $MAG tokenomics, hyper-deflationary mining protocol, whale tracking, and our roadmap to the moon.",
}

const sections = [
  {
    id: "abstract",
    title: "1. Abstract",
    icon: FileText,
    content: `Marsurge Network is a decentralized mobile ecosystem designed to bridge the gap between passive crypto earning and active market intelligence.

Unlike traditional "click-to-mine" applications that offer inflationary tokens with no utility, Marsurge combines a hyper-deflationary mining protocol with real-time Whale Tracking tools and skill-based gaming.

Built on a scalable, high-performance blockchain infrastructure, Marsurge aims to empower the everyday user with institutional-grade market data while rewarding them with $MAG—a scarce, utility-driven asset.`
  },
  {
    id: "introduction",
    title: "2. Introduction & Problem",
    icon: Target,
    content: `### 2.1 The Current Landscape
The mobile crypto sector is saturated with "tap-to-earn" applications. These projects typically suffer from two fatal flaws:

**Hyper-Inflation:** Token supplies in the billions/trillions with negligible value.

**Lack of Utility:** Tokens serve no purpose other than selling pressure.

### 2.2 The Marsurge Solution
Marsurge redefines mobile participation through Proof of Active Participation (PoAP). The app serves as a hub for:

• **Market Intelligence:** Access to "Whale" movements.
• **Skill Gaming:** Skill-based rewards.
• **Education:** Quizzes and news.`
  },
  {
    id: "features",
    title: "3. Ecosystem Features",
    icon: Rocket,
    content: `### 3.1 Hyper-Deflationary Mining
Unique consensus mechanism rewarding consistency. Uses a 5-hour cycle to ensure tokens go to active contributors, not bot farms.

### 3.2 Whale Tracking
The core utility. Aggregates on-chain data to provide alerts on massive wallet movements.

### 3.3 GameFi & Skill Zone
Arcade integration. Model evolved from Play-to-Earn (P2E) into Skill-to-Earn.

### 3.4 Learn-to-Earn
Curated News feed and Daily Quizzes. Rewards for correct answers to incentivize education.`
  },
  {
    id: "tokenomics",
    title: "4. Tokenomics",
    icon: Coins,
    content: `**Token Name:** Marsurge
**Ticker:** $MAG
**Total Supply:** 5,000,000

### Distribution Strategy
70% reserved strictly for the community. Fair distribution earned through participation, not just capital.

| Allocation | Percentage | Tokens |
|------------|------------|--------|
| Community Mining | 70% | 3,500,000 $MAG |
| Marketing & Partners | 12% | 600,000 $MAG |
| Development Team | 10% | 500,000 $MAG |
| Liquidity & Treasury | 8% | 400,000 $MAG |`
  },
  {
    id: "roadmap",
    title: "5. Roadmap",
    icon: TrendingUp,
    content: `### Phase 1: Genesis (Q4 2025)
• Concept & Whitepaper
• Core Team Assembly
• Alpha App Development
• Website Launch

### Phase 2: The Surge (Q1 2026)
• App Beta Launch (Android/iOS)
• Mining Start (Genesis Block)
• KYC Compliance
• 50,000 Active Miners Target

### Phase 3: Utility Integration (Q2 2026)
• Whale Tracking Beta
• GameFi Mini-games Launch
• In-App Non-custodial Wallet

### Phase 4: TGE & DEX Launch (Q3 2026)
• $MAG Token Generation
• DEX Listing (Uniswap/Aerodrome)
• Withdrawals Open

### Phase 5: Global Expansion (Q4 2026)
• Tier 2 CEX Listings (MEXC, Gate)
• CoinGecko/CMC Listing
• Ecosystem Partnerships

### Phase 6: The Moon (2027+)
• Tier 1 CEX Listings (Binance, Coinbase)
• Marsurge DAO Governance
• Institutional API Tools`
  },
  {
    id: "disclaimer",
    title: "6. Disclaimer",
    icon: AlertTriangle,
    content: `This Whitepaper is for informational purposes only and does not constitute financial advice. Cryptocurrency investments carry inherent risks. The $MAG token is a utility token designed for the Marsurge ecosystem, not a security instrument.`
  },
]

function parseContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let tableRows: string[][] = []
  let inTable = false
  
  lines.forEach((line, index) => {
    // Table detection
    if (line.startsWith('|')) {
      if (!inTable) {
        inTable = true
        tableRows = []
      }
      const cells = line.split('|').filter(cell => cell.trim() !== '' && !cell.includes('---'))
      if (cells.length > 0 && !line.includes('---')) {
        tableRows.push(cells.map(c => c.trim()))
      }
      return
    } else if (inTable) {
      // End of table, render it
      elements.push(
        <div key={`table-${index}`} className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {tableRows[0]?.map((header, i) => (
                  <th key={i} className="text-left px-4 py-3 text-[#FF6536] font-semibold border-b border-zinc-700 bg-zinc-800/50">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 text-zinc-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      tableRows = []
      inTable = false
    }
    
    // H3 headers
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={index} className="text-lg font-semibold text-foreground mt-6 mb-3">
          {line.replace('### ', '')}
        </h3>
      )
      return
    }
    
    // Bold text with **
    if (line.includes('**')) {
      const parts = line.split(/\*\*(.*?)\*\*/g)
      elements.push(
        <p key={index} className="text-muted-foreground mb-2">
          {parts.map((part, i) => 
            i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
          )}
        </p>
      )
      return
    }
    
    // Bullet points
    if (line.startsWith('• ')) {
      elements.push(
        <li key={index} className="text-zinc-400 ml-4 mb-1.5 list-none flex items-start gap-2">
          <span className="text-[#FF6536] mt-1.5">&#8226;</span>
          <span>{line.replace('• ', '')}</span>
        </li>
      )
      return
    }
    
    // Empty lines
    if (line.trim() === '') {
      elements.push(<div key={index} className="h-3" />)
      return
    }
    
    // Regular paragraphs
    elements.push(
      <p key={index} className="text-muted-foreground mb-3 leading-relaxed">
        {line}
      </p>
    )
  })
  
  return elements
}

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Star field background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, white, transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 50px 160px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 90px 40px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 160px 120px, white, transparent),
            radial-gradient(1.5px 1.5px at 200px 200px, rgba(255,101,54,0.5), transparent),
            radial-gradient(1px 1px at 220px 50px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 250px 180px, white, transparent),
            radial-gradient(1px 1px at 280px 90px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 350px 250px, rgba(255,101,54,0.4), transparent),
            radial-gradient(1px 1px at 400px 100px, white, transparent)
          `,
          backgroundSize: "500px 500px",
          opacity: 0.4
        }}
      />
      
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-zinc-400 mb-6">
              <FileText className="w-4 h-4 text-[#FF6536]" />
              v1.0 • December 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-[#FF6536] neon-text">MARSSURGE</span> NETWORK
              <br />WHITEPAPER
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              A comprehensive guide to the Marssurge ecosystem, tokenomics, and our mission to revolutionize mobile crypto earning.
            </p>
          </div>
        </div>
      </section>
      
      {/* Table of Contents */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-6 md:p-8 rounded-2xl">
              <h2 className="text-xl font-semibold text-foreground mb-6">Table of Contents</h2>
              <nav className="grid md:grid-cols-2 gap-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-800/30 hover:bg-zinc-800/60 border border-zinc-700/30 hover:border-[#FF6536]/30 transition-all group"
                  >
                    <section.icon className="w-5 h-5 text-[#FF6536]" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {section.title}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Sections */}
      <section className="relative pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="glass-panel p-6 md:p-10 rounded-2xl scroll-mt-24"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6536]/10 border border-[#FF6536]/30 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-[#FF6536]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="prose prose-invert max-w-none">
                  {parseContent(section.content)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
