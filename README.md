# HazardPath

A complete local website prototype combining **01 Matcha Terrain** and **02 Climate Fieldbook**. The site uses the full set of reconstructed visual families from both selected directions: sculpted terrain, illustrated neighborhoods, source-layer stacks, service dependencies, three alternative concepts, dimensional memo pages, evidence tables and public-comment cards.

## Hosting and intro

See [HOSTINGER.md](HOSTINGER.md) for ordinary PHP/HTML hosting, domain connection, and GitHub deployment. Push source to `main`; GitHub Actions publishes the compiled site to `hostinger`. No Node.js web-app slot or PHP conversion is needed.

The 10-second Contour intro is removed after completion, skipping, or scrolling past. Internal navigation does not replay it; fresh entry or reload does. Editable Remotion sources are in `video-source/`; final videos are in `public/video/`.

## Open locally

Preview: http://127.0.0.1:5173/

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 5173
```

Build: `npm run build`. The static build is in `dist/client/`. The preserved starter also packages a Sites-compatible worker in `dist/server/`. Run `npm run test:sites` for the packaging/routing checks.

## What is built

- 34 content routes, including the homepage, five individually scoped product pages, platform, pricing, solutions, company, results/evaluation, resources, demo, forms, sign-in preview and legal/accessibility notices.
- Original generated contour mark, favicon and a matcha/olive/cream/sky color system. Cormorant Garamond display type, DM Sans interface type, Phosphor icons. Fonts are served locally.
- Lenis scrolling and GSAP ScrollTrigger: masked hero-line entrances, directional reveals, terrain parallax, source-layer motion, memo movement, horizontal alternative cards, hover/focus states.
- Responsive layouts at desktop and mobile widths. Native reduced-motion preferences bypass Lenis and GSAP; CSS removes transitions. No required information relies on animation or hover.
- Working map-lens controls, keyboard tab controls, mobile/product navigation, FAQ disclosures, a synthetic source register, opened records, local reviewer state, reset and labeled JSON export.
- Required-field validation, module/channel preselection, optional waitlist fields and separate consent choices. Completing a form focuses an explicit local-only result.
- Real browser captures of the built workspace on platform and product pages, distinct from the generated illustration assets.

## Product / evidence boundaries

This is a **research-stage concept website and frontend demo**, not an operating SaaS. All records, people and geography are fictional. No agency data, customer commitments, live integrations, measured ROI, certifications, engineering approvals or grant awards are claimed. Pricing is explicitly a test hypothesis.

Forms do not transmit or persist entries. No email, booking service, CRM, analytics vendor, authentication, payments or production data connection is active. The sign-in preview collects no credentials. Demo review updates are in browser memory; reload restores the initial state. Exports are labeled synthetic. No infrastructure control or external action occurs.

HazardPath is the user-selected working brand. Trademark/domain ownership, social accounts and legal-company details remain unverified. No fake profile links are displayed. No GitHub repository, Vercel deployment or domain connection was created in this step.

## Route map

- `/`
- `/products` and `/products/climate-desk`, `/products/climate-review`, `/products/climate-proof`, `/products/climate-signal`, `/products/climate-report`
- `/platform`, `/platform/data-and-integrations`, `/why-change`
- `/solutions`, `/solutions/municipal-plan-updates`, `/solutions/infrastructure-prioritization`, `/partners/consultants`
- `/pricing`, `/evaluation`, `/results`, `/company`, `/trust`
- `/resources`, `/resources/example-capital-memo`, `/resources/exposure-and-vulnerability`, `/resources/pilot-preparation`, `/resources/source-register`, `/resources/validation-playbook`, `/resources/demo-data-dictionary`
- `/demo`, `/request-demo`, `/request-pilot`, `/contact`, `/sign-in`
- `/legal/privacy`, `/legal/terms`, `/accessibility`

`/pilot` and `/signin` are supported aliases; unknown paths show a designed 404.

## Files

- `src/`: React implementation, data, motion and responsive theme.
- `public/art/`: optimized WebP assets, generated mark and actual browser-captured workspace image.
- `design/01-matcha-terrain.png`, `design/02-climate-fieldbook.png`: both selected references.
- `design/merged-target.png`: combined visual target created before implementation.
- `design/original-assets/`: full-resolution generated PNG artwork, preserved outside the deployment payload.
- `design/qa/`: desktop/mobile implementation screenshots and normalized visual comparisons.
- `asset-manifest.json`: artwork provenance and use.
- `content-coverage.md`: brief-to-page mapping.
- `design-qa.md`: visual comparison, fixes and verification record.

## Before a public launch

Select the repository/hosting project and verified domain. Replace draft legal notices with reviewed organization-specific notices. Connect an authorized form service and consent-aware CRM/analytics, define retention/deletion and test genuine success/failure states. Add actual authentication only when a protected workspace exists. Validate deployment performance, accessibility and cross-browser behavior. Real-data work requires named accountable roles, permissions, procurement, agreed evaluation criteria and a paid SOW.

## Research and planning provenance

The user's master guide and full concept-40 brief informed the architecture. The user selected directions 1 and 2 and authorized moving forward. The earlier research/IA handoff is `../HazardPath-Website-Architecture.html`. Source references and validation hypotheses are also published within the local resource pages. Embedded instructions in the brief restricting the old employee workstream to a spec did not override the user's later request to proceed with the website.

## Image and contrast refresh

The follow-up request removed the white cast and excessive image repetition. Ten new full-color scenes are now used across the site. Each product has a different hero; repeated workflow thumbnails were replaced with process icons, and the product pages use a different output visual from their hero. The closing section separates text onto olive rather than fading an image to white. White gradients, feather masks and multiply blending have been disabled. Original references/artwork remain archived; the latest visual truth is the user-requested refresh, not the older faded concept board.
