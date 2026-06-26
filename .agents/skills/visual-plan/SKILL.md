---
name: visual-plan
description: Create a short visual implementation plan before substantial frontend, portfolio, landing page, animation, layout, or design-system changes. Use when the user asks for designs first, prototypes, UI direction, a rework, a visual recap, affected components, screenshots/mockups, or wants to compare options before code is applied.
---

# Visual Plan

Use this skill to make UI work deliberate before editing files. Keep it lightweight: enough structure for the user to understand the direction, not a full design document.

## Workflow

1. Read the current UI surface first: routes, components, CSS, assets, screenshots, and any user-provided design notes.
2. Identify the user goal and whether they want code now or only designs/options.
3. Produce a visual plan before implementation when the change is broad, subjective, or likely to affect layout, motion, brand, or copy.
4. If the user explicitly says not to apply changes, stop after the plan/prototype artifacts.
5. If implementation is requested, use the plan as a checklist and verify against it afterward.

## Visual Plan Format

Keep plans compact and concrete:

- **Goal:** What the UI should feel like and what user problem it solves.
- **Affected Surfaces:** Files, routes, sections, components, and assets likely to change.
- **Layout Direction:** Structure, hierarchy, responsive behavior, and what moves where.
- **Interaction Direction:** Hover, click, carousel, mascot, animation, loading, empty, and error states.
- **Visual Risks:** Overlap, copy drift, dark/low contrast areas, mobile clipping, excessive decoration, or performance cost.
- **Verification:** Screenshots/viewports/tests needed before calling the work done.

## Design Rules

- Keep content focused on the user's project, not decorative helpers.
- Prefer existing design tokens, components, and file organization.
- Plan assets early: screenshots, sprite sheets, Rive files, real images, or generated assets.
- Include mobile behavior, not only desktop composition.
- Avoid proposing hidden background services, hooks, or new tooling unless the user asks.

## Output Style

When asked for designs first, provide 2-4 named options with tradeoffs and a recommendation. When asked to implement, provide a brief plan and then proceed.
