import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'ADGILI - Georgia\'s #1 Restaurant Booking App',
  description: 'Book your table in two clicks. Discover the best restaurants in Georgia with ADGILI.',
  keywords: ['restaurant booking', 'Georgia', 'dining', 'reservations', 'ADGILI'],
}

export const viewport = {
  themeColor: '#0f1a1c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0f1a1c]" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0f1a1c] text-[#f5f5f5]`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
