"use client"

import { motion } from "framer-motion"
import Image, { type ImageProps } from "next/image"

export function AnimatedImage(props: ImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Image {...props} />
    </motion.div>
  )
}
