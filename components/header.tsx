"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { FileText, Menu } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useMemo, useState } from "react"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { cn } from "@/lib/utils"

const navigationItems = [
  { label: "About", id: "hero" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Credentials", id: "credentials" },
]

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const selectors = useMemo(
    () => navigationItems.map((item) => `#${item.id}`),
    [],
  )
  const [activeId, setActiveId] = useScrollSpy(selectors, { offset: 0.35 })

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setActiveId(id)
    setIsSheetOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
              LN
            </span>
            <span className="font-bold">Leo Nguyen</span>
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-3">
          <nav className="hidden md:flex items-center gap-5">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  activeId === item.id
                    ? "text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex btn-ghost-wipe bg-transparent">
            <Link
              href="mailto:nanhtu297@gmail.com?subject=Resume%20Request"
              aria-label="Request resume via email"
            >
              <FileText className="mr-1.5 h-4 w-4" />
              Request Resume
            </Link>
          </Button>
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
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                  LN
                </span>
                <span className="font-bold">Leo Nguyen</span>
              </Link>
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className={cn(
                      "text-left transition-colors",
                      activeId === item.id ? "text-primary" : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                <Button asChild variant="outline" className="mt-2 justify-start btn-ghost-wipe bg-transparent">
                  <Link href="mailto:nanhtu297@gmail.com?subject=Resume%20Request">
                    <FileText className="mr-2 h-4 w-4" />
                    Request Resume
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
