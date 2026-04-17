import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, Cpu, UserCheck, Ban, Copyright, Settings, AlertTriangle, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Marssurge Network",
  description: "Read the Marssurge Terms of Service. Understand the rules, eligibility requirements, and your rights when using the Marssurge app.",
}

const sections = [
  {
    id: "agreement",
    title: "1. Agreement to Terms",
    icon: FileText,
    content: `These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Marssurge ("we," "us," or "our"), concerning your access to and use of the Marssurge mobile application and related services (the "App").

By accessing the App, you acknowledge that you have read, understood, and agree to be bound by all of these Terms. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, YOU ARE EXPRESSLY PROHIBITED FROM USING THE APP AND MUST DISCONTINUE USE IMMEDIATELY.`,
  },
  {
    id: "nature-of-services",
    title: "2. Nature of the Services (Mining)",
    icon: Cpu,
    subsections: [
      {
        heading: "2.1. Simulated Mining",
        content: `The "mining" process within the Marssurge App is a simulated distribution of tokens based on user engagement and contribution to the network. It does NOT utilize your device's CPU/GPU computing power for Proof-of-Work (PoW) and does not drain your battery or consume excessive data.`,
      },
      {
        heading: "2.2. No Monetary Value",
        content: `"Marssurge Tokens" (MAG) are currently digital points within the App. They hold NO monetary value, cannot be exchanged for fiat currency (USD, EUR, etc.), and are not investment products. We make no guarantees that these tokens will ever have monetary value or be listed on external exchanges.`,
      },
    ],
  },
  {
    id: "eligibility",
    title: "3. Eligibility & Registration",
    icon: UserCheck,
    subsections: [
      {
        heading: "3.1. Age Requirement",
        content: "You must be at least 18 years of age (or of legal age in your jurisdiction) to use the App.",
      },
      {
        heading: "3.2. One Account Policy",
        content: `"One Person, One Account." You are strictly prohibited from creating multiple accounts. Any attempt to create multiple accounts, whether through multiple devices, emulators, or scripts, will result in the permanent suspension of ALL associated accounts.`,
      },
      {
        heading: "3.3. KYC Compliance",
        content: `In the future, to withdraw or exchange tokens, you may be required to complete "Know Your Customer" (KYC) verification (e.g., Passport/ID submission) to prove you are a real human being. Failure to pass KYC will result in the forfeiture of unverified tokens.`,
      },
    ],
  },
  {
    id: "prohibited",
    title: "4. Prohibited Activities",
    icon: Ban,
    intro: "You agree not to use the App to:",
    bullets: [
      `Use any automated system, including "robots," "spiders," "scripts," or "autoclickers" to access the App or mine tokens.`,
      "Run the App on emulators, virtual machines, or rooted/jailbroken devices designed to bypass security checks.",
      "Sell, trade, or transfer your account or tokens to another individual before the official mainnet launch and authorization by Marssurge.",
      `Engage in "Sybil attacks" or manipulate the referral system by creating fake accounts.`,
    ],
  },
  {
    id: "ip-rights",
    title: "5. Intellectual Property Rights",
    icon: Copyright,
    content: `Unless otherwise indicated, the App is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the App (collectively, the "Content") are owned or controlled by us and are protected by copyright and trademark laws.`,
  },
  {
    id: "modifications",
    title: "6. Service Modifications & Termination",
    icon: Settings,
    subsections: [
      {
        heading: "6.1. Right to Modify",
        content: "We reserve the right to change, modify, or remove the contents of the App at any time or for any reason at our sole discretion without notice.",
      },
      {
        heading: "6.2. Account Termination",
        content: "We reserve the right to suspend or terminate your account without warning if we detect suspicious activity, bot usage, or violation of these Terms. In such events, all accumulated tokens will be burned (destroyed).",
      },
    ],
  },
  {
    id: "disclaimer",
    title: "7. Disclaimer of Warranties",
    icon: AlertTriangle,
    content: `THE APP IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. YOU AGREE THAT YOUR USE OF THE APP WILL BE AT YOUR SOLE RISK. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE APP AND YOUR USE THEREOF.`,
    isWarning: true,
  },
  {
    id: "governing-law",
    title: "8. Governing Law",
    icon: Globe,
    content: "These Terms shall be governed by and defined following the laws of the jurisdiction in which the Marssurge Project is registered. You irrevocably consent that the courts of said jurisdiction shall have exclusive authority to resolve any dispute which may arise in connection with these terms.",
  },
]

export default function TermsOfServicePage() {
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
          opacity: 0.4,
        }}
      />

      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-zinc-400 mb-6">
              <FileText className="w-4 h-4 text-[#FF6536]" />
              Last Updated: December 24, 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-[#FF6536] neon-text">TERMS</span> OF SERVICE
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Please read these Terms carefully before using the Marssurge app. By accessing the App, you agree to be bound by these Terms.
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
                    <section.icon className="w-5 h-5 text-[#FF6536] flex-shrink-0" />
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
          <div className="max-w-4xl mx-auto space-y-10">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="glass-panel p-6 md:p-10 rounded-2xl scroll-mt-24"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6536]/10 border border-[#FF6536]/30 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-[#FF6536]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{section.title}</h2>
                </div>

                {/* Plain content */}
                {"content" in section && section.content && (
                  <div
                    className={`leading-relaxed whitespace-pre-line ${
                      "isWarning" in section && section.isWarning
                        ? "text-zinc-300 font-medium tracking-wide"
                        : "text-muted-foreground"
                    }`}
                  >
                    {section.content}
                  </div>
                )}

                {/* Intro + bullets */}
                {"intro" in section && section.intro && (
                  <p className="text-muted-foreground leading-relaxed mb-4">{section.intro}</p>
                )}
                {"bullets" in section && section.bullets && (
                  <ul className="space-y-3">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400">
                        <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 text-xs font-bold">
                          ✕
                        </span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Subsections */}
                {"subsections" in section && section.subsections && (
                  <div className="space-y-5">
                    {section.subsections.map((sub, i) => (
                      <div key={i}>
                        <h3 className="text-base font-semibold text-foreground mb-2">{sub.heading}</h3>
                        <p className="text-muted-foreground leading-relaxed">{sub.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
