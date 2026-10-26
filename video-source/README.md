# HazardPath — Contour Awakening

A 10-second, 30 fps intro based on the approved Contour Awakening direction.

## Deliverables

- `out/hazardpath-intro.mp4`: 1600 × 900 desktop H.264 video.
- `out/hazardpath-intro-mobile.mp4`: 900 × 1200 portrait H.264 video.
- `src/Root.tsx`: editable Remotion composition.
- `src/mark.ts`: approved Contour logo geometry.

## Sequence

0–3 seconds: contour tracing and “Every place has a path.”
3–5 seconds: contours gather into the approved P.
5–8 seconds: the original homepage landscape appears through the P, then expands into view.
8–10 seconds: brand and “A clearer path forward.” hold before the website handoff.

The videos are intentionally silent for muted inline autoplay. The website supplies Pause, Play, Replay and Skip controls, a reduced-motion still, and the Lenis transition into the existing hero. Navigation appears as the hero enters. Manual scrolling or pausing cancels automatic movement.

## Editing

Run `npm install` if needed, then `npm run dev` for Remotion Studio.
Render with `npx remotion render ContourAwakening out/hazardpath-intro.mp4` and `npx remotion render ContourAwakeningMobile out/hazardpath-intro-mobile.mp4`.
The current local environment uses its installed Playwright Chromium via `--browser-executable`; rendering also requires adequate temporary disk space.

The production site copies are in `../hazardpath-site/public/video/`.
