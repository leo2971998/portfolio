"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu, Rocket } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useState } from "react"

const navigationItems = [
  { label: "About", id: "hero" },
  { label: "Professional Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education & Certifications", id: "credentials" },
]

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsSheetOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Rocket className="h-6 w-6 bg-primary text-primary-foreground rounded-sm p-1" />
            <span className="font-bold">Portfolio</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Rocket className="h-6 w-6" />
                <span className="font-bold">Portfolio</span>
              </Link>
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="text-left transition-colors hover:text-primary"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
