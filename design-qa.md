# HazardPath design and interaction QA

**final result: passed**

Local prototype acceptance, 26 October 2026. No actionable P0/P1/P2 finding remains in the tested scope. This is not a certification of production security, accessibility, climate-model accuracy or market readiness.

## Comparison truth and normalization

- Selected directions: `design/01-matcha-terrain.png` and `design/02-climate-fieldbook.png`.
- Combined visual truth: `design/merged-target.png`, 971 × 1619 px. This is a compressed multi-section concept board, not a browser viewport.
- Implementation: http://127.0.0.1:5173/ . Final hero `design/qa/desktop-home-final.png`, 1440 × 900 px at a 1440 × 900 CSS viewport; screenshot output is 1 px per CSS px. Main narrative capture `design/qa/desktop-home-full.png`, 1440 × 8146 px.
- Mobile: 390 × 844 CSS/PNG viewport. Tablet: 960 × 900 CSS/PNG viewport. Initial desktop observations also used 1280 × 720.
- Same-state checks use the light theme, synthetic default case and settled entrance animation. Full-page captures were made after traversing the story so reveal elements and lazy images were present. Sticky chrome can occur at a captured scroll position in full-page captures; focused viewport images are authoritative for navigation.
- Width-normalized comparisons preserve aspect ratio. The source board is deliberately not stretched to match the much taller implemented website. The build adds full-height cinematic pacing, readable interactive records, required evaluation/FAQ/conversion content and a complete footer.

## Combined visual evidence

The source and implementation were placed together in the same comparison image and visually inspected, not judged from separate remembered views.

- Full composition: `design/qa/comparison-full.png` (890 × 2477 px).
- Final hero: `design/qa/comparison-hero-final.png` (1590 × 533 px).
- Source-layer section: `design/qa/comparison-layers.png`.
- Evidence section: `design/qa/comparison-evidence.png`.
- Focused typography, buttons and context labels: `design/qa/comparison-type-controls.png`.
- Additional actual rendered states: `desktop-product-final.png`, `mobile-product.png`, `desktop-demo-1440.png`, `desktop-sources-1440.png`, `desktop-review-1440.png`, `mobile-demo.png`, `mobile-source-detail-final.png`, `mobile-review-action.png`, `mobile-form-success.png`, `mobile-home-final.png`, `tablet-home.png` in `design/qa/`.

## Required fidelity surfaces

**Fonts / typography.** Cormorant Garamond 500/600 preserves the editorial serif direction; DM Sans is used for interface text. This is an intentional, licensed implementation choice rather than an assertion that the generated board has an identifiable exact font. Large three-line hero hierarchy, italic emphasis, restrained tracking and small uppercase labels are coherent. No fallback-font shift, truncated primary heading or collision was observed at 1440, 1280, 960 or 390 px. Mobile product headings reflow into readable lines. Small metadata remains secondary; important source dates and uncertainty are available in the opened record.

**Spacing / layout.** The three principal source compositions are retained: landscape hero with floating evidence cards, paired exploded layers/dependency map, and memo/evidence panels. The actual site intentionally expands the compressed board into a scrolling narrative. Cards use restrained 5–9 px corners, light borders and quiet elevation. All 34 content routes rendered without document-level horizontal overflow at desktop; mobile checks covered all five product pages and the major templates. The alternatives are an intentional horizontal rail; data tables scroll inside their container. Tablet hero and navigation remain usable.

**Colors / tokens.** Cream #FAF9F0, matcha #E5EACB, olive #53613B, sky #DFEDF0 and deep green text #26332B form a consistent palette. Olive is the primary action color, blue is a supporting context/status color and ochre indicates missing evidence. Contrast and focus were visually reviewed; no compliance certification is asserted. The opaque final navbar avoids an intermittent sticky/backdrop capture-paint defect.

**Image quality / assets.** Every major visual family from both selected directions is implemented using original generated raster artwork, not CSS/SVG substitute illustrations. All eight scene/diagram assets plus the contour mark are preserved in the source package. Optimized WebP files are used on the site. Phosphor provides standard interface icons. Feathered edges integrate the layer/dependency art with the matcha surface. Hero geography is clearly fictional. The platform/product screenshot is a real browser capture, separately labeled from conceptual artwork. No broken images were observed.

**Copy / content.** All five proposed offers and prices remain distinct and explicitly hypothetical. Municipal buyer and consultant channel are separated. The source board's incorrect Climate Proof label on the community map was corrected to Climate Review. Sources, missingness, uncertainty, reviewer responsibility and public process are explicit. The new site adds the required 10-record workflow, paid-evaluation rubric, data dictionary, validation/ad/analytics plans and limitations. No fake customers, grant awards, savings, integrations or certifications are inserted. Independent art and synthetic labels avoid reproducing proprietary maps.

## Comparison and fix history

1. **P2 / Image integration:** Initial layer and dependency images showed rectangular background boundaries at 1280 px, unlike the blended source target. Applied edge masks and retained the raster imagery. Post-fix evidence: `desktop-layers.png`, `comparison-layers.png`. Edges now blend into the section.
2. **P2 / Carousel state:** The first horizontal control calculation could leave Previous disabled after scrolling to the final edge. Replaced item-index assumptions with explicit start/end scroll-boundary state. Browser verification reached scrollLeft 246 / max 246 with Previous enabled and Next disabled, then returned using Previous.
3. **P2 / Mobile labeling:** The mobile hero initially placed its synthetic badge below the first screen and the scroll cue over detailed terrain. Moved the badge alongside the concept label and gave the cue a light backing. Post-fix: `mobile-home-final.png`.
4. **P2 / Form feedback:** Completing a long mobile intake initially left the viewport at the footer when the form collapsed. Added focus and scroll to the result. Re-tested the full flow; focused element is `form-result`, visible bounds approximately y=227–717 at 390 × 844. Post-fix: `mobile-form-success.png`.
5. **P2 / Mobile navigation:** Closing the primary menu could leave its product submenu open. Closing now clears both states. Post-fix browser verification: zero `.mobile-open` and zero `.mega` elements; Escape also closes desktop navigation.
6. **P2 / Sticky chrome paint:** Some captured route/scroll transitions omitted the navigation's painted contents despite correct DOM geometry. Replaced backdrop-filter chrome with an opaque cream surface. Post-fix: `desktop-product-final.png`, `mobile-product.png`, `tablet-home.png` and final hero. Navigation is visible and operable.
7. **Final comparison:** Recompared the final hero, complete composition, typography and primary visual sections. Remaining differences are intentional expansion of the concept board into the complete brief, chosen font refinement and responsive reflow. No further P0/P1/P2 visual repair was identified.

## Functional verification

- `npm run build`: passed; static client and preserved worker packaging produced.
- `npm run test:sites`: 4/4 passed (asset serving, route fallback, no API/write shell fallback, packaging).
- All 34 content routes: rendered expected H1, no document overflow and no observed broken images on desktop. Unknown-route fallback exists in source; hosted 404 semantics still depend on deployment.
- Mobile template checks: all five products, platform, pricing, evaluation, validation playbook, example memo and sign-in. Home, demo and pilot form also exercised interactively.
- Main/product mobile navigation, close behavior and desktop Escape: passed.
- Home Flood → Heat control and keyboard ArrowRight: appropriate text/state changed.
- Horizontal alternatives: next/end/previous states passed after correction.
- FAQ disclosure: opened and displayed the live-platform limitation answer.
- Demo source S03: selected state, dated source pane and missing utility confirmation displayed.
- Opened record HP-010: rejected automatic closure, fictional owner and timestamp displayed.
- Review action: Pending → Blocked applies only on submit; counts changed from 4/3/2/1 to 4/2/3/1; local-only feedback appeared. Reset restored initial counts.
- Export: actual browser download created `HazardPath-SIMULATED-planning-packet.json`. Parsed file contains 10 labeled records, 5 sources, owner/timestamp fields and the chosen Blocked review.
- Pilot form: empty submission blocked by native validity; required fields accepted fictional test values; optional waitlist fields expanded; separate consent remained available; completion explicitly said nothing was sent or saved.
- Browser console: no application errors/warnings in inspected sessions.

## Residual checks / follow-up polish

- Reduced-motion behavior is implemented in GSAP media conditions and CSS and was source-reviewed. The available browser API did not expose media-preference emulation, so an OS reduced-motion runtime check remains for release QA.
- Cross-browser/device testing, zoom/text-scaling audit, full automated accessibility audit and production performance metrics remain release checks. This pass does not establish WCAG conformance.
- P3: after stakeholder review, experiment with slightly denser vertical pacing in the longer explanatory sections. The present pacing deliberately favors cinematic scroll storytelling.
- Real submissions, analytics, authentication, payment, deployment and custom domain are unconnected and are not represented as working services.

## Implementation checklist

- [x] Combined visual direction and full asset family preserved.
- [x] Hero, layers, alternatives, evidence and brand compared visually.
- [x] Desktop, tablet and mobile screenshots inspected.
- [x] Primary local interactions exercised and defects repaired.
- [x] Required product/price/buyer boundaries preserved.
- [x] Build and packaging checks pass.
- [x] Local preview remains available for user review.


## Follow-up: remove white cast and repeated imagery

**final result: passed**

The user's follow-up explicitly supersedes the faded treatment in the original reference. Added ten new generated scenes: clear river terrain, heat district, data network, adaptation-model workbench, grant evidence, plan progress, planning workshop, field survey, utility campus and coastal region. The five product heroes are all different; generic content routes now have topic-specific scenes. Old terrain/dependency/fieldbook images with baked-in pale treatment are no longer referenced by live components.

Comparison evidence: `design/qa/art-refresh-before-after.png` combines the old and new hero at the same 1440 × 900 CSS/PNG viewport, cropped below the 82 px navbar and downsampled equally. The final implementation capture is `art-refresh-hero-final.png`; additional evidence is `art-refresh-preview.png`, `art-refresh-cta.png`, `art-refresh-mobile-home.png` and `art-refresh-mobile-product.png`. The contact sheet is `art-refresh-sheet.jpg`.

Reviewed typography (same serif/sans hierarchy; responsive wrapping), spacing (separate copy/image columns; no overlaps), color (clear blue/olive imagery rather than white haze), asset quality (ten full-color scenes, no substitute CSS illustrations) and content (all synthetic labels and product scope retained). Sharp column boundaries and the darker closing panel are intentional responses to the request. Cream cards/paper remain ordinary surfaces, not white overlays over imagery.

Computed hero and CTA overlay display is `none`; feather masks removed and image blending normal. Mobile image top and copy bottom both measured 574.37 px, preventing the image/cards from colliding with text. Desktop checks covered all five product routes, company, resources and demo: expected distinct image sources, no broken images, no horizontal overflow, no browser application errors. The mobile homepage and Climate Proof page were visually checked at 390 × 844. Build passed and all four packaging tests passed after the refresh.

The initial comparison capture caught a transitional scroll position and was discarded for comparison; the final image explicitly verified scrollY 0 before capture. No unresolved P0/P1/P2 finding remains for this visual refresh. Existing release limitations above still apply.


## Contour identity rollout
Applied outlined SVG lockup in shared header and footer across all routes. Added SVG/ICO/PNG favicons, Apple touch icon and web app manifest. Re-captured the platform workspace preview to remove the old logo. Verified live logo images load and favicon links reference Contour assets. Production build and all four packaging tests pass.


## Site-wide motion pass
Centralized Lenis/GSAP lifecycle in motion.js, expanded reveal coverage across page types and footer, and added scroll progress. Removed decorative rotation. Reduced-motion bypasses smooth scrolling and animation; touch stays native. Added teardown, keyboard focus completion and refresh after fonts/images/disclosures/dynamic content. Browser verified home back-to-top scroll reaches 0, pricing hero/cards finish at opacity 1 and no transform, progress changes with scroll, and no console errors in checked routes. Initial clamped hero trigger issue found and corrected.
