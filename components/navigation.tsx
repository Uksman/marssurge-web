"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, FileText } from "lucide-react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Whitepaper", href: "/whitepaper", icon: FileText },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-panel py-3" 
          : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/images/marssurge-logo.png" 
              alt="Marssurge Logo" 
              width={40} 
              height={40} 
              className="rounded-xl group-hover:animate-pulse-glow transition-all"
            />
            <span className="text-xl font-bold text-[#fafafa] tracking-tight">
              MARSSURGE
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-[#FF6536] transition-colors relative group flex items-center gap-1.5"
              >
                {link.icon && <link.icon className="w-3.5 h-3.5" />}
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6536] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              className="bg-[#FF6536] hover:bg-[#D64A1F] text-[#18181b] font-semibold"
              asChild
            >
              <a href="https://play.google.com/store/apps/details?id=com.marssurge.app" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-[#fafafa]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-zinc-800 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-400 hover:text-[#FF6536] transition-colors py-2 flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-zinc-800">
                <Button 
                  className="bg-[#FF6536] hover:bg-[#D64A1F] text-[#18181b] font-semibold"
                  asChild
                >
                  <a href="https://play.google.com/store/apps/details?id=com.marssurge.app" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download App
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
