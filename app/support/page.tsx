import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, MessageCircle, HelpCircle, AlertTriangle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support & Help Center | Marssurge Network",
  description: "Get support for the Marssurge App. Contact our team, report issues, or find answers to frequently asked questions.",
}

const supportMethods = [
  {
    id: "email",
    title: "Email Support",
    icon: Mail,
    description: "For account issues, data deletion requests, or direct assistance from our support team.",
    actionText: "marssurge01@gmail.com",
    actionLink: "mailto:marssurge01@gmail.com",
  },
  {
    id: "community",
    title: "Community Support",
    icon: MessageCircle,
    description: "Join our Telegram community to chat with other users and moderators for quick questions.",
    actionText: "Join Telegram",
    actionLink: "https://t.me/MarsSurge",
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    icon: HelpCircle,
    description: "Find quick answers about mining, tokenomics, and account security.",
    actionText: "Read FAQ",
    actionLink: "/#faq",
  },
]

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-[#FF6536] neon-text">SUPPORT</span> & HELP
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Need assistance with your Marssurge account? We're here to help. Choose the best support method below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {supportMethods.map((method) => (
                <div key={method.id} className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#FF6536]/10 border border-[#FF6536]/30 flex items-center justify-center mb-6">
                    <method.icon className="w-8 h-8 text-[#FF6536]" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3">{method.title}</h2>
                  <p className="text-zinc-400 text-sm mb-6 flex-grow">{method.description}</p>
                  <a
                    href={method.actionLink}
                    target={method.actionLink.startsWith("http") ? "_blank" : "_self"}
                    rel={method.actionLink.startsWith("http") ? "noopener noreferrer" : ""}
                    className="w-full inline-flex justify-center items-center px-4 py-3 rounded-xl bg-[#FF6536]/10 text-[#FF6536] font-semibold hover:bg-[#FF6536] hover:text-white transition-all"
                  >
                    {method.actionText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="relative pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-100 mb-2">Security Notice</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Marssurge support will <strong>never</strong> ask for your passwords, private keys, or seed phrases. 
                    Please be cautious of impersonators on social media platforms. Only communicate through our official channels listed above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
