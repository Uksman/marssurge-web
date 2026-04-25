"use client"

import Image from "next/image"
import Link from "next/link"
import { XIcon, TelegramIcon, InstagramIcon, YoutubeIcon } from "@/components/icons"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Download App", href: "#" },
  ],
  resources: [
    { label: "Whitepaper", href: "/whitepaper" },
    { label: "Documentation", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Support", href: "#" },
  ],
  community: [
    { label: "X (Twitter)", href: "https://x.com/MSurge01" },
    { label: "Telegram", href: "https://t.me/MarsSurge" },
    { label: "Instagram", href: "https://www.instagram.com/invites/contact/?igsh=1r8ftnqpjxwzw&utm_content=yx5ss12" },
    { label: "YouTube", href: "https://youtube.com/@MarsSurge" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclaimer", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-800">
      {/* Top section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image 
                src="/images/marssurge-logo.png" 
                alt="Marssurge Logo" 
                width={40} 
                height={40} 
                className="rounded-xl"
              />
              <span className="text-xl font-bold text-[#fafafa]">MARSSURGE</span>
            </Link>
            <p className="text-zinc-400 mb-6 max-w-xs">
              Blockchain-based crypto mining infrastructure project, focused on transparency, security, and sustainable ecosystem development.
            </p>
            <div className="flex gap-3">
              <a
                href="https://x.com/MSurge01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-zinc-400 hover:text-[#FF6536] hover:border-[#FF6536]/30 transition-all"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/MarsSurge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-zinc-400 hover:text-[#FF6536] hover:border-[#FF6536]/30 transition-all"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?igsh=1r8ftnqpjxwzw&utm_content=yx5ss12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-zinc-400 hover:text-[#FF6536] hover:border-[#FF6536]/30 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@MarsSurge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-zinc-400 hover:text-[#FF6536] hover:border-[#FF6536]/30 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#fafafa] mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-[#FF6536] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-[#fafafa] mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-[#FF6536] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-[#fafafa] mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-[#FF6536] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-[#fafafa] mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-[#FF6536] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} Marssurge Network. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <span>This whitepaper is for informational purposes only and does not constitute financial advice.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
