"use client"

import {
  useState,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react"

export function useScrollSpy(
  selectors: string[],
  options: { offset?: number } = {},
): [string | undefined, Dispatch<SetStateAction<string | undefined>>] {
  const [activeId, setActiveId] = useState<string>()
  useEffect(() => {
    const els = selectors
      .map((sel) => document.querySelector(sel))
      .filter(Boolean) as HTMLElement[]

    const offset = options.offset ?? 0.5

    function onScroll() {
      const fromTop = window.scrollY + window.innerHeight * offset
      let current: HTMLElement | undefined
      for (const el of els) {
        if (el.offsetTop <= fromTop) {
          current = el
        }
      }
      if (current) setActiveId(current.id)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [selectors, options.offset])

  return [activeId, setActiveId]
}
