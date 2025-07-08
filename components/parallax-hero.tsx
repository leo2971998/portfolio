"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ParallaxHeroProps {
  imageUrl: string
  children: React.ReactNode
}

export function ParallaxHero({ imageUrl, children }: ParallaxHeroProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section ref={ref} className="relative w-full h-[60vh] overflow-hidden grid place-items-center">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div className="relative z-10 text-center text-white p-4">{children}</div>
    </section>
  )
}
