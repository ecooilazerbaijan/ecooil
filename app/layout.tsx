import type { Metadata, Viewport } from 'next'
import { Geist, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'EcoOil — Innovative Use and Protection of Solar Panels in Oil Production',
  description:
    'EcoOil is a clean-energy engineering prototype exploring the use and protection of solar panels in high-temperature environments through solar concentration, temperature monitoring and active cooling.',
  generator: 'v0.app',
  keywords: [
    'EcoOil',
    'solar panels',
    'clean energy',
    'engineering prototype',
    'thermal management',
    'Fresnel lens',
    'solar concentration',
  ],
  openGraph: {
    title: 'EcoOil — Innovative Use and Protection of Solar Panels in Oil Production',
    description:
      'A clean-energy engineering prototype for solar energy protection and thermal management.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
