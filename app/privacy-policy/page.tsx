import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Database, Share2, Lock, Baby, Trash2, RefreshCw, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Marssurge Network",
  description: "Read the Marssurge Privacy Policy to understand how we collect, use, and protect your personal information.",
}

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    icon: Database,
    subsections: [
      {
        heading: "1.1. Personal Data",
        content: "Personally identifiable information, such as your name and email address, that you voluntarily give to us when you register with the App.",
      },
      {
        heading: "1.2. Device Data (Crucial for Security)",
        content: "We automatically collect information about your device, including your mobile device ID (IMEI/UUID), model, manufacturer, operating system version, and IP address. We use this strictly to prevent fraud, detect bot farms, and ensure the \"One Person, One Account\" policy.",
      },
      {
        heading: "1.3. Derivative Data",
        content: "Information our servers automatically collect when you access the App, such as your native actions that are integral to the App, including liking posts, mining sessions, and referral interactions.",
      },
    ],
  },
  {
    id: "use-of-information",
    title: "2. Use of Your Information",
    icon: RefreshCw,
    intro: "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we use information collected about you via the App to:",
    bullets: [
      "Create and manage your account.",
      "Prevent fraudulent transactions, monitor against theft, and protect against criminal activity (Anti-Bot Systems).",
      "Compile anonymous statistical data and analysis for use internally.",
      "Notify you regarding updates to the App or the blockchain network.",
      "Request feedback and contact you about your use of the App.",
    ],
  },
  {
    id: "disclosure",
    title: "3. Disclosure of Your Information",
    icon: Share2,
    subsections: [
      {
        heading: "3.1. By Law or to Protect Rights",
        content: "If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.",
      },
      {
        heading: "3.2. Third-Party Service Providers",
        content: "We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, and customer service.",
      },
    ],
  },
  {
    id: "security",
    title: "4. Security of Your Information",
    icon: Lock,
    content: "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.",
  },
  {
    id: "children",
    title: "5. Policy for Children",
    icon: Baby,
    content: "We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.",
    extra: {
      heading: "Child Safety Standards",
      body: "Marssurge strictly prohibits child sexual abuse and exploitation (CSAE). This app is intended only for users aged 18 and older.",
      bullets: [
        "Any content or features involving minors in a sexual context",
        "Grooming, exploitation, or child sexual abuse material",
        "Any activity that could harm children",
      ],
      footer: "Any violation will result in immediate removal of content/accounts and reporting to authorities. To report child safety concerns: email marssurge01@gmail.com",
    },
  },
  {
    id: "deletion",
    title: "6. Deletion of Data",
    icon: Trash2,
    content: "You have the right to request the deletion of your Marssurge account and all associated personal data at any time.",
    extra: {
      heading: "How to Request Deletion",
      body: "Email us at marssurge01@gmail.com with the subject line \"Account Deletion Request\". Please include for verification: your username, your registered email address, and a screenshot of your account/profile page inside the app. Our support team will verify your request and process it as quickly as possible. You will receive a confirmation email when it is complete.",
      warning: "Account deletion is permanent and irreversible. All mined tokens will be lost forever. Your mining progress, referrals, wallet balance, and all account data will be permanently deleted. We cannot recover anything after deletion.",
    },
  },
]

export default function PrivacyPolicyPage() {
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
              <Shield className="w-4 h-4 text-[#FF6536]" />
              Last Updated: 9 March 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-[#FF6536] neon-text">PRIVACY</span> POLICY
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Marssurge respects the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application.
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

                {/* Simple content */}
                {"content" in section && section.content && (
                  <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>
                )}

                {/* Intro + bullets */}
                {"intro" in section && section.intro && (
                  <p className="text-muted-foreground leading-relaxed mb-4">{section.intro}</p>
                )}
                {"bullets" in section && section.bullets && (
                  <ul className="space-y-2 mb-4">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-400">
                        <span className="text-[#FF6536] mt-1.5">&#8226;</span>
                        <span>{b}</span>
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

                {/* Extra block (Child safety / Deletion warning) */}
                {"extra" in section && section.extra && (
                  <div className="mt-6 rounded-xl border border-[#FF6536]/20 bg-[#FF6536]/5 p-5 space-y-3">
                    <h3 className="text-base font-semibold text-[#FF6536]">{section.extra.heading}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">{section.extra.body}</p>
                    {"bullets" in section.extra && section.extra.bullets && (
                      <>
                        <p className="text-zinc-400 text-sm font-medium">We do not allow:</p>
                        <ul className="space-y-1.5">
                          {section.extra.bullets.map((b: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                              <span className="text-[#FF6536] mt-1">&#8226;</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {"footer" in section.extra && section.extra.footer && (
                      <p className="text-zinc-400 text-sm">{section.extra.footer}</p>
                    )}
                    {"warning" in section.extra && section.extra.warning && (
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                        <p className="text-red-400 text-sm font-medium">⚠️ Important Notice</p>
                        <p className="text-zinc-400 text-sm mt-1">{section.extra.warning}</p>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}

            {/* Changes & Contact */}
            <article className="glass-panel p-6 md:p-10 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FF6536]/10 border border-[#FF6536]/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#FF6536]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Changes & Contact</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last Updated&quot; date at the bottom of this page. We encourage you to review this Privacy Policy periodically.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:{" "}
                <a
                  href="mailto:marssurge01@gmail.com"
                  className="text-[#FF6536] hover:underline"
                >
                  marssurge01@gmail.com
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
