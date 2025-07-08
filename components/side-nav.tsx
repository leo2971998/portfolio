"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
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
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-background/90 backdrop-blur border rounded-full px-4 py-2 shadow-lg"
      >
        <ul className="flex items-center gap-6">
          {sections.map((section, idx) => (
            <motion.li
              key={section.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <Link
                href={`#${section.id}`}
                onClick={(e) => handleScroll(e, section.id)}
                className={cn(
                  "text-xs font-medium transition-colors px-1 py-2",
                  activeId === section.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {section.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    )
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="hidden md:block fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-background/90 backdrop-blur border rounded-full px-6 py-2 shadow-lg"
    >
      <ul className="flex gap-6">
        {sections.map((section, idx) => (
          <motion.li
            key={section.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
          >
            <Link
              href={`#${section.id}`}
              onClick={(e) => handleScroll(e, section.id)}
              className={cn(
                "text-sm font-medium transition-colors px-1 py-2",
                activeId === section.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {section.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}
