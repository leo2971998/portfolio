---
name: ui-guard-pass
description: Run a second-pass review before finishing frontend/UI changes. Use after implementing website, portfolio, React, Next.js, CSS, animation, mascot, component, or layout changes to catch regressions in scope, accessibility, responsive behavior, copy, motion, performance, and verification.
---

# UI Guard Pass

Use this as a separate finishing pass after UI edits. The goal is to catch mistakes the implementation pass may have normalized.

## Review Order

1. **Scope:** Confirm changed files match the user request. Do not bless unrelated churn.
2. **Content:** Check that visible copy promotes the user/project, not implementation details or decorative elements.
3. **Accessibility:** Check semantic elements, meaningful image alt text, decorative `aria-hidden`, focus states, and keyboard controls.
4. **Responsive Layout:** Check mobile and desktop for overflow, clipping, nav overlap, and touch target size.
5. **Motion:** Check that animations use transform/opacity where possible, are interruptible, and respect reduced motion.
6. **Assets:** Check image paths, sprite sheets, generated assets, and fallback behavior.
7. **Performance:** Watch for excessive client-only work, heavy libraries, permanent `will-change`, huge images, or repeated timers.
8. **Verification:** Run typecheck/build/lint where appropriate and inspect rendered screenshots for UI work.

## Common Portfolio Failure Modes

- Mascots, bots, or decorative labels becoming portfolio content.
- Screen-reader-only captions leaking implementation copy.
- Sticky nav covering section headers after anchor scroll.
- Desktop-only polish with broken mobile stacking.
- Dark UI with too-low contrast body text.
- Carousel controls covering important project screenshots.
- Decorative animation that distracts from projects.

## Output

If reviewing your own diff, fix small issues immediately. In the final answer, mention only the meaningful guard results:

- what was checked
- what was fixed
- what could not be verified

If asked for a pure review, list findings first with file and line references.
