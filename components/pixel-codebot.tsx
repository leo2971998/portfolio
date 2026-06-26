import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

export type CodeBotMode = "idle" | "point" | "present"

type PixelCodeBotProps = {
  mode?: CodeBotMode
  className?: string
  scale?: number
}

export function PixelCodeBot({ mode = "idle", className, scale = 2.4 }: PixelCodeBotProps) {
  return (
    <figure
      className={cn("codebot-mascot", className)}
      data-mode={mode}
      style={{ "--codebot-scale": scale } as CSSProperties}
      aria-hidden="true"
    >
      <div className="codebot-platform">
        <div className="codebot-scanline" />
        <div className="codebot-sprite" />
      </div>
    </figure>
  )
}
