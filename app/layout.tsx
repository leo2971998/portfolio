import type React from "react"
import type { Metadata, Viewport } from "next"
// import { Lora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

// Fallback font configuration - using system fonts instead of Google Fonts for now
// const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" })

export const metadata: Metadata = {
  title: "Leo Nguyen — Portfolio",
  description: "Full-stack developer & cloud enthusiast",
  generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans"> {/* Using system fonts as fallback */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
