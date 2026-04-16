"use client"

import { Coins, Flame, Users, Briefcase, LineChart, Megaphone } from "lucide-react"

const tokenDistribution = [
  { label: "Community Mining", percentage: 70, color: "#FF6536", amount: "3,500,000" },
  { label: "Marketing & Partners", percentage: 12, color: "#FF8F6B", amount: "600,000" },
  { label: "Development Team", percentage: 10, color: "#FFB59A", amount: "500,000" },
  { label: "Liquidity & Treasury", percentage: 8, color: "#D64A1F", amount: "400,000" },
]

const tokenHighlights = [
  { icon: Users, label: "Fair Distribution", desc: "70% to community" },
  { icon: Flame, label: "Hyper-Deflationary", desc: "Scarce utility token" },
  { icon: Briefcase, label: "5-Hour Cycles", desc: "Active participation" },
  { icon: LineChart, label: "Real Utility", desc: "Not just speculation" },
]

function TokenChart() {
  let cumulativePercentage = 0
  
  return (
    <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(255, 101, 54, 0.2) 0%, transparent 60%)"
        }}
      />
      
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        {tokenDistribution.map((item, index) => {
          const startPercentage = cumulativePercentage
          cumulativePercentage += item.percentage
          
          const startAngle = (startPercentage / 100) * 360
          const endAngle = (cumulativePercentage / 100) * 360
          const largeArcFlag = item.percentage > 50 ? 1 : 0
          
          const startX = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180)
          const startY = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180)
          const endX = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180)
          const endY = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180)
          
          return (
            <path
              key={index}
              d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
              fill={item.color}
              stroke="#18181b"
              strokeWidth="0.5"
              className="transition-all duration-300 hover:opacity-80"
              style={{
                filter: `drop-shadow(0 0 10px ${item.color}40)`
              }}
            />
          )
        })}
        
        {/* Inner circle */}
        <circle cx="50" cy="50" r="25" fill="#18181b" />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Coins className="w-8 h-8 text-[#FF6536] mb-2" />
        <span className="text-xl font-bold text-[#fafafa]">$MAG</span>
        <span className="text-xs text-zinc-500">5,000,000</span>
      </div>
    </div>
  )
}

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse at 20% 80%, rgba(255, 101, 54, 0.15) 0%, transparent 50%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <Coins className="w-4 h-4 text-[#FF6536]" />
            <span className="text-sm text-zinc-300">Token Economics</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-[#FF6536] neon-text">$MAG</span>
            <span className="text-[#fafafa]"> Tokenomics</span>
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-pretty">
            A hyper-deflationary token with real utility. Unlike inflationary tap-to-earn tokens, $MAG is scarce with only 5 million total supply. 70% reserved for community mining.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Chart */}
          <div className="flex justify-center">
            <TokenChart />
          </div>
          
          {/* Right - Distribution breakdown */}
          <div>
            <h3 className="text-2xl font-semibold text-[#fafafa] mb-6">Token Distribution</h3>
            
            <div className="space-y-4 mb-8">
              {tokenDistribution.map((item) => (
                <div key={item.label} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zinc-300">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-zinc-500">{item.amount} $MAG</span>
                      <span className="text-[#fafafa] font-semibold">{item.percentage}%</span>
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500 group-hover:shadow-lg"
                      style={{ 
                        width: `${item.percentage}%`,
                        backgroundColor: item.color,
                        boxShadow: `0 0 10px ${item.color}50`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4">
              {tokenHighlights.map((item, i) => (
                <div key={i} className="glass-panel rounded-xl p-4">
                  <item.icon className="w-5 h-5 text-[#FF6536] mb-2" />
                  <div className="text-sm font-semibold text-[#fafafa] mb-1">{item.label}</div>
                  <div className="text-xs text-zinc-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Token info bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Token Name", value: "Marssurge" },
            { label: "Ticker", value: "$MAG" },
            { label: "Total Supply", value: "5,000,000" },
            { label: "Mining Cycle", value: "5 Hours" },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-6 text-center">
              <div className="text-xs text-zinc-500 mb-2">{stat.label}</div>
              <div className="text-xl md:text-2xl font-bold text-[#FF6536]">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
