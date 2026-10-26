# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Visual preservation
Preserve the approved original homepage artwork and composition. Remove white casts through targeted edits, not replacement scenes or redesigned layouts. Keep cards and image panels straight throughout scrolling; no decorative rotation.

## Approved identity
Use the Contour P symbol and outlined HazardPath wordmark in public/brand. This replaces the old mountain mark. Preserve its three contour bands, proportions and transparent channels; keep marks upright. Use the provided favicon assets.

## Footer direction
Use the pale-blue Contour footer with visible Product, Platform, Resources and Company groups, clear contact and policy links, and a readable concept-status note. Preserve all footer destinations on small screens.

## Site-wide motion
Keep Lenis and GSAP ownership in src/motion.js. Use upright directional reveals, small card staggers and subtle desktop parallax. Preserve native touch scrolling, reduced-motion preferences, keyboard focus visibility and form/nested-scroll behavior. Recalculate triggers after images, fonts, disclosure toggles and dynamic content.

## Intro lifetime
Remove the intro from document flow after completion, skipping, or scrolling past it. No replay button or scroll-back access after dismissal. Internal navigation should not replay it; a fresh entry or reload may play it again. Preserve a jump-free hero handoff and reduced-motion still.
