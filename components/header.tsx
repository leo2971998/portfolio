"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"

import { profile } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"

// Root-relative hashes so the links also work from other routes.
const navigationItems = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // The header outlives route changes, so look sections up on every pass instead of observing them once.
    // Active = last section whose top has crossed the middle of the viewport; nothing is active over the hero.
    let frame = 0
    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 8)
      const middle = window.innerHeight / 2
      let current: string | null = null
      for (const { id } of navigationItems) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= middle) current = id
      }
      setActiveId(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    // Re-check once the page transition in app/template.tsx (0.4s) has swapped the content.
    const settle = window.setTimeout(update, 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(settle)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled || open ? "border-b border-stone-200/80 bg-background/95 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/#hero"
          onClick={() => setOpen(false)}
          className="inline-flex shrink-0 items-center gap-2.5 rounded-lg font-display text-lg font-bold tracking-tight text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <span aria-hidden className="grid size-8 place-items-center rounded-lg bg-orange-700 font-sans text-xs font-bold tracking-normal text-white">
            LN
          </span>
          <span>{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-4 md:flex lg:gap-6">
          {navigationItems.map(({ id, label }) => (
            <Link
              key={id}
              href={`/#${id}`}
              aria-current={activeId === id ? "location" : undefined}
              className={cn(
                "relative rounded-sm py-2 text-sm font-medium transition-colors hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
                activeId === id ? "text-orange-700" : "text-stone-600",
              )}
            >
              {label}
              <span
                aria-hidden
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-orange-600 transition-opacity",
                  activeId === id ? "opacity-100" : "opacity-0",
                )}
              />
            </Link>
          ))}
          <a
            href={profile.resumeHref}
            className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-800 transition-colors hover:border-orange-400 hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Request résumé
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 grid size-10 place-items-center rounded-lg text-stone-900 transition-colors hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-stone-200/80 px-5 pb-6 pt-2 md:hidden">
          {navigationItems.map(({ id, label }) => (
            <Link
              key={id}
              href={`/#${id}`}
              onClick={() => setOpen(false)}
              aria-current={activeId === id ? "location" : undefined}
              className={cn(
                "block border-b py-3 font-display text-xl font-semibold transition-colors hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
                activeId === id ? "border-orange-600 text-orange-700" : "border-stone-200/70 text-stone-900",
              )}
            >
              {label}
            </Link>
          ))}
          <a
            href={profile.resumeHref}
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-orange-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Request résumé
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </nav>
      )}
    </header>
  )
}
