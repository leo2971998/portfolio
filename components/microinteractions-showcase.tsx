"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function MicrointeractionsShowcase() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h3 className="font-semibold mb-2">Button Microinteraction</h3>
        <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
          <Button>Click Me</Button>
        </motion.div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Input Field Microinteraction</h3>
        <motion.div
          className="relative"
          whileFocus={{
            boxShadow: "0 0 0 2px hsl(var(--primary))",
            borderRadius: "var(--radius)",
          }}
          transition={{ duration: 0.2 }}
        >
          <Input placeholder="Focus me for a glow" />
        </motion.div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Toggle/Switch Microinteraction</h3>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
        {/* Note: The bounce effect for the switch handle is best configured
            within the Switch component itself using Framer Motion's layout animations,
            but this demonstrates the concept. */}
      </div>
    </div>
  )
}
