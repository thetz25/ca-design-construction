import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Header } from '@/components/Header'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'CA Design + Construction | Premium Design & Build Services',
  description: 'CA Design + Construction specializes in architectural design, construction management, and luxury residential & commercial builds. Building dreams with precision and excellence.',
  keywords: ['construction', 'design', 'architecture', 'renovation', 'remodeling', 'custom builds'],
  authors: [{ name: 'CA Design + Construction' }],
  openGraph: {
    title: 'CA Design + Construction',
    description: 'Premium Design & Build Services',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-white text-gray-900`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
