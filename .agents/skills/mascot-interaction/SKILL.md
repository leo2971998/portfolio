---
name: mascot-interaction
description: Design and implement decorative mascot, sprite, robot, Rive, or game-character interactions for the portfolio. Use when the user asks for bots, mascots, sprites, characters, pointing animations, section companions, project carousel reactions, or game-like UI helpers without making the mascots part of the content.
---

# Mascot Interaction

Use this skill for the portfolio's robot/sprite mascot system. The mascot supports the work; it is not the work.

## Core Rules

- Treat mascots as decorative UI helpers unless the user explicitly asks for character content.
- Do not write visible copy that promotes mascot names, lore, or roles.
- Do not add screen-reader-only labels like "Pixel mascot presenting..." for decorative art.
- Use `aria-hidden="true"` for decorative mascot figures.
- Keep portfolio copy focused on projects, experience, skills, and credentials.
- Prefer one clear interaction per surface: idle, point, present, react, or celebrate.

## Interaction Model

Use mascot states to support user orientation:

- **idle:** ambient presence while the section is static.
- **point:** user hovers a project, clicks next/previous, or a section target changes.
- **present:** user expands details or opens a focused project panel.
- **react:** rare feedback after a meaningful action, not every tiny hover.

For project cards, place the mascot near the project media or controls so pointing has a visible target. Avoid placing it only in a section header where sticky nav or scrolling can clip it.

## Implementation Guidance

- For pixel sprites, keep fixed frame dimensions and use `image-rendering: pixelated`.
- For Rive, drive state machines from React state or explicit event handlers.
- Animate with `transform` and `opacity`; avoid layout-property animation.
- Add reduced-motion handling for loops, beams, scanlines, and orbit effects.
- Keep mascot overlays `pointer-events: none` unless the mascot itself is a control.
- Ensure overlay z-index does not block carousel buttons, links, or text selection.

## Verification

Before finishing:

- Check rendered text for mascot names/lore leaking into page copy.
- Verify decorative mascot elements are `aria-hidden`.
- Capture desktop and mobile screenshots of the mascot surface.
- Test the trigger: next/previous project image, hover/focus, expand details, or section change.
- Check there is no horizontal overflow after positioning overlays.

## Copy Guard

Bad: "CodeBot guides the project deck" or "DataMote backend scout working".

Good: "Selected work", "Tools behind the builds", "APIs and data".
