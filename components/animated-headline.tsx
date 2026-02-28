"use client"

import { motion } from "framer-motion"

interface AnimatedHeadlineProps {
  text: string
  className?: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export function AnimatedHeadline({ text, className }: AnimatedHeadlineProps) {
  return (
    <motion.h1 className={className} variants={containerVariants} initial="hidden" animate="visible" aria-label={text}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
