import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Away Tweaks | Premium PC Optimization',
  description: 'Unlock. Optimize. Dominate. Professional PC optimization services for maximum gaming performance. FPS boost, latency reduction, and system tweaks.',
  keywords: ['PC optimization', 'FPS boost', 'gaming performance', 'latency reduction', 'Windows tweaks', 'BIOS tuning'],
}

export const viewport: Viewport = {
  themeColor: '#7c3aed',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
