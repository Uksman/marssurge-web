import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ScrollToTop } from '@/components/scroll-to-top'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Marssurge | Blockchain-Powered Mining & Community',
  description: 'Marssurge ($MAG) is a blockchain-based crypto mining infrastructure project. Join simulated mining, earn rewards, and engage with a growing community focused on transparency and security.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
