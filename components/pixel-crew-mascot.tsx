import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

export type CrewMascotModel = "scientist" | "bug"
export type CrewMascotMode = "idle" | "action" | "present"

type PixelCrewMascotProps = {
  model: CrewMascotModel
  mode?: CrewMascotMode
  className?: string
  scale?: number
}

export function PixelCrewMascot({
  model,
  mode = "idle",
  className,
  scale = 1.75,
}: PixelCrewMascotProps) {
  return (
    <figure
      className={cn("crew-mascot", className)}
      data-model={model}
      data-mode={mode}
      style={{ "--crew-scale": scale } as CSSProperties}
      aria-hidden="true"
    >
      <div className="crew-platform">
        <div className="crew-orbit" />
        <div className="crew-sprite" />
      </div>
    </figure>
  )
}
