---
name: web-visual-qa
description: Review rendered web UI screenshots and live pages for visual bugs, responsive issues, text overflow, clipping, accessibility-visible problems, bad spacing, broken assets, mascot placement, or design drift. Use after frontend changes, before final responses for UI work, or when the user asks whether the page looks right.
---

# Web Visual QA

Use this skill to judge the rendered page, not just the code. Screenshots are evidence.

## Workflow

1. Start or reuse the local dev server only when needed.
2. Capture the relevant viewports. Default to desktop around 1440px wide and mobile around 390px wide.
3. Capture the actual state being changed: hero, projects, carousel, modal, section, hover state, dark mode, or mobile menu.
4. Inspect screenshots directly with `view_image` or browser tooling. Do not rely only on DOM checks.
5. Check the DOM for overflow and obvious hidden text leaks when relevant.
6. Report issues first if anything looks wrong; otherwise state what was verified.

## Checklist

- No horizontal overflow on mobile or desktop.
- No text clipped, hidden behind sticky nav, or overflowing buttons/cards.
- No incoherent overlap between UI, mascots, project images, controls, or navigation.
- Images and sprite sheets load and are framed correctly.
- Hover/focus/click states do not shift layout unexpectedly.
- Responsive layout preserves hierarchy and touch targets.
- Motion is not required to understand content and respects reduced motion where applicable.
- Copy visible on the page matches the user's intent.

## Evidence To Collect

For UI implementation work, prefer:

- One desktop screenshot of the changed surface.
- One mobile screenshot of the same surface.
- A short DOM check for `document.documentElement.scrollWidth > window.innerWidth`.
- A note about any command or browser check that could not run.

## Verdict Format

Use:

- **Pass:** no blocking visual issues found.
- **Warning:** cosmetic or polish issue remains.
- **Fail:** overlap, clipping, unreadable text, broken asset, or behavior mismatch.

Keep the final response concise and include screenshot paths only when useful.
