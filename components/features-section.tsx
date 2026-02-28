"use client"

import { motion } from "framer-motion"
import { Zap, ShieldCheck, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Lightning Fast",
    description:
      "Experience unparalleled speed and performance, ensuring your operations run smoothly and efficiently without any lag.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: "Built Secure",
    description:
      "Your data is protected with enterprise-grade security, giving you peace of mind and robust compliance.",
  },
  {
    icon: <Code className="h-8 w-8 text-white" />,
    title: "Developer Friendly",
    description: "Integrate seamlessly with our clean, well-documented API designed for developers, by developers.",
  },
]

// Variants for the main container to orchestrate animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger the animation of children
    },
  },
}

// Variants for each feature card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

// Variants for the kinetic typography
const kineticVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function FeaturesSection() {
  const title = "Our Features"

  return (
    <section className="w-full py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={kineticVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-gray-900 border-gray-800 h-full flex flex-col">
                <CardHeader>
                  <motion.div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-500"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-center text-2xl font-bold text-violet-400">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
