import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import FloatingContactCTA from "@/components/layout/FloatingContactCTA";
import Script from 'next/script'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-C223CLWYFR'

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.brandmindz.com'),
  verification: {
    google: "a55gBWr0MHNf8959SEre1QJYxhdr0roTW4B6zPfJMtY",
  },
  title: {
    default: 'Brand Mindz',
    template: '%s | Brand Mindz',
  },
  description: 'Build stunning animated websites with SEO best practices. Professional web development solutions for modern businesses.',
  keywords: ['web development', 'animations', 'SEO', 'Next.js', 'React', 'motion design'],
  authors: [{ name: 'Brand Mindz' }],
  creator: 'Brand Mindz',
  publisher: 'Brand Mindz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brandmindz.com',
    siteName: 'Brand Mindz',
    title: 'Brand Mindz',
    description: 'Build stunning animated websites with SEO best practices.',
    images: [
      {
        url: '/assets/logo/triangle.jpg',
        width: 1200,
        height: 630,
        alt: 'Brand Mindz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Mindz - Digital Marketing & Web Development Agency',
    description: 'Brand Mindz helps businesses grow with modern websites, branding, SEO, and digital marketing solutions.',
    images: ['/assets/logo/triangle.jpg'],
    creator: '@BrandMindz',
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
    icon: '/logo.png',
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
        {/* Google Analytics - loads after page is interactive to avoid blocking render */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <Analytics />
        <FloatingContactCTA/>
      </body>
    </html>
  )
}
