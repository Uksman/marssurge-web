import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ScrollToTop } from '@/components/scroll-to-top'
import { CustomCursor } from '@/components/custom-cursor'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marssurge.io'),
  title: {
    default: 'Marssurge | Blockchain-Powered Mining & Community',
    template: '%s | Marssurge Network',
  },
  description: 'Marssurge ($MAG) is a blockchain-based crypto mining infrastructure project. Join simulated mining, earn rewards, and engage with a growing community focused on transparency and security.',
  keywords: ['Marssurge', 'MAG token', 'crypto mining app', 'mobile mining', 'Web3', 'blockchain', 'whale tracking'],
  authors: [{ name: 'Marssurge Team' }],
  creator: 'Marssurge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.marssurge.io',
    title: 'Marssurge | Blockchain-Powered Mining',
    description: 'Marssurge ($MAG) is a free mobile app for simulated mining, market intelligence, and community engagement.',
    siteName: 'Marssurge Network',
    images: [{
      url: '/images/marssurge_banner.jpeg',
      width: 1200,
      height: 630,
      alt: 'Marssurge Network Preview',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marssurge | Blockchain-Powered Mining',
    description: 'Join simulated mining, earn rewards, and engage with a growing community focused on transparency and security.',
    images: ['/images/marssurge_banner.jpeg'],
    creator: '@MSurge01',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'OeKR3cL_fEZLP22MRrgM_0O57EuKrBn5sxX6YMlhiFQ',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased cursor-auto md:cursor-none">
        <CustomCursor />
        {children}
        <ScrollToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
