# Contour Awakening implementation QA

Final result: passed

## Visual truth and evidence

Source: `../hazardpath-intro-directions/01-contour-awakening.png` (1536 × 1024 four-panel storyboard). The approved symbol is the website's existing Contour P SVG.
Implementation: `out/hazardpath-intro.mp4` (1600 × 900, 300 frames at 30 fps), `out/hazardpath-intro-mobile.mp4` (900 × 1200, 300 frames at 30 fps).
Rendered reveal: `public/check-reveal.jpg`; portrait final: `public/check-mobile.jpg`.
Browser screenshot: `public/qa-handoff.png` (775 × 804 pixels, CSS viewport 775 × 804, density 1).

The storyboard panels were compared as compositions rather than as a pixel overlay: the sheet includes labels and different panel proportions. Desktop frames were viewed at their native aspect ratio. Portrait is an intentional responsive re-composition. Browser evidence covers the post-video hero state.

## Required surfaces

- Typography: actual site Cormorant Garamond and DM Sans files loaded before rendering. Display title and brand lockup remain legible, with intentional italic emphasis. Portrait copy fits in its upper panel.
- Layout: distinct trace, gather, masked reveal and final brand states. Desktop final uses left copy/right landscape; portrait stacks copy and landscape. Site controls remain outside the encoded composition.
- Colors: existing matcha, olive and forest palette; no white haze over terrain. Opaque copy panel protects contrast.
- Assets: actual approved Contour geometry and original homepage terrain. The outline field uses the approved outer contour path; no replacement logo or replacement homepage image. The generated storyboard's sculptural depth is simplified to clean vector tracing for consistent animation.
- Copy: “Every place has a path.”, “From complexity to clarity”, “A clearer path forward.”, and “People. Places. Essential services.” match the chosen direction without adding product claims.

Focused inspection: P mask edges, terrain within the P, type at the final portrait state, and navbar/hero alignment at handoff. The terrain mask now renders correctly; the copy no longer ghosts behind the large P.

## Comparison history

1. P1: SVG image clip did not render the landscape inside the P. Replaced it with the approved symbol as a CSS mask. Post-fix evidence: `public/check-reveal.jpg`.
2. P2: Final brand copy appeared too early behind the central P. Delayed its fade to 7–8.5 seconds; verified at 6 seconds in the same frame.
3. P2: Element-based Lenis target compounded CSS scroll padding, leaving a 100px gap. Switched to a calculated numeric scroll position. Post-fix browser observation: scrollY 804, hero top 82px, navbar top 0px and opacity 1. Evidence: `public/qa-handoff.png`.

## Interaction and technical checks

- Muted inline autoplay completed at 10 seconds and automatically reached the hero.
- Navbar hidden during intro; visible and aligned after handoff.
- Replay and Pause verified: paused true at 0.2566 seconds.
- Skip verified: hero top 82px and video paused.
- Browser console errors: none in the observed run.
- TypeScript: passed.
- Vite production build and Sites preparation: passed.
- Existing packaging/worker tests: 4 passed, 0 failed.
- Both videos successfully encoded after resolving temporary disk pressure.

Residual coverage: reduced-motion, visibility-change and touch interruption branches were reviewed in code, not tested using OS preference emulation or a physical touch device. Portrait composition was visually checked from the rendered video; narrow-phone hardware playback was not tested.

## Implementation checklist

- [x] Desktop and portrait MP4s exported and copied into the website.
- [x] Latest posters copied into source assets and production build.
- [x] Existing hero art preserved.
- [x] Controls and automatic handoff verified.
- [x] No actionable P0/P1/P2 findings remain in the checked flow.
