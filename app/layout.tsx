import type React from "react"
import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
const DESCRIPTION =
  "Cloud-certified full-stack developer building secure, scalable products with React, Node.js, and Python."
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Leo Nguyen - Portfolio",
  description: DESCRIPTION,
  generator: "v0.dev",
  openGraph: {
    title: "Leo Nguyen - Portfolio",
    description: DESCRIPTION,
    url: "/",
    siteName: "Leo Nguyen",
    type: "website",
    images: [{ url: "/placeholder-user.png", width: 200, height: 200, alt: "Leo Nguyen" }],
  },
  twitter: {
    card: "summary",
    title: "Leo Nguyen - Portfolio",
    description: DESCRIPTION,
    images: ["/placeholder-user.png"],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
