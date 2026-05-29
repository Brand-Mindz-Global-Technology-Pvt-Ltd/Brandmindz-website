import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://motioncraft.dev'),
  title: {
    default: 'Brandmindz',
    template: '%s | MotionCraft',
  },
  description: 'Build stunning animated websites with SEO best practices. Professional web development solutions for modern businesses.',
  keywords: ['web development', 'animations', 'SEO', 'Next.js', 'React', 'motion design'],
  authors: [{ name: 'MotionCraft' }],
  creator: 'MotionCraft',
  publisher: 'MotionCraft',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://motioncraft.dev',
    siteName: 'MotionCraft',
    title: 'Brandmindz',
    description: 'Build stunning animated websites with SEO best practices.',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Brandmindz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandMindz - Digital Marketing & Web Development Agency',
    description: 'BrandMindz helps businesses grow with modern websites, branding, SEO, and digital marketing solutions.',
    images: ['/og-image.jpg'],
    creator: '@motioncraft',
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
  icons: {
    icon: [
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
    apple: '/logo.png',
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}
import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
