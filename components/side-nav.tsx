"use client"

import type React from "react"
import Link from "next/link"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { useIsMobile } from "@/components/ui/use-mobile"
import { cn } from "@/lib/utils"

interface Section {
  id: string
  label: string
}

interface SideNavProps {
  sections: Section[]
}

export function SideNav({ sections }: SideNavProps) {
  const sectionIds = sections.map((s) => `#${s.id}`)

  const isMobile = useIsMobile()

  // A section is considered "active" if its top edge is within the top 60% of the viewport.
  // The new hook logic correctly handles which section gets priority.
  const [activeId, setActiveId] = useScrollSpy(sectionIds, { offset: 0.5 })

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
    setActiveId(id)
  }

  if (isMobile) {
    return (
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-background/90 backdrop-blur border rounded-full px-4 py-2 shadow-lg">
        <ul className="flex items-center gap-6">
          {sections.map((section) => (
            <li key={section.id} className="relative">
              <Link
                href={`#${section.id}`}
                onClick={(e) => handleScroll(e, section.id)}
                className={cn(
                  "text-xs font-medium transition-colors px-1 py-2",
                  activeId === section.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <nav className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id} className="relative">
            <Link
              href={`#${section.id}`}
              onClick={(e) => handleScroll(e, section.id)}
              className={cn(
                "text-sm font-medium transition-colors",
                activeId === section.id ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
