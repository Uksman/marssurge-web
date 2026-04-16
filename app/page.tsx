import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#18181b] overflow-x-hidden">
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
      <HeroSection />
      <FeaturesSection />
      <TokenomicsSection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </main>
  )
}
