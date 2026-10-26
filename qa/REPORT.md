# HazardPath pre-GitHub QA — 26 October 2026

Result: passed for the tested frontend scope.

## Intro behavior

- Desktop 10-second playback completes, scrolls into the hero, and removes the intro DOM section. Observed after completion: intro absent, scrollY 0, hero top 82px.
- Mobile skip removes the section, leaving hero top 70px and scrollY 0.
- Internal navigation to Pricing and back through the brand link keeps the intro absent.
- Reload verified to create a fresh intro at time 0 and scrollY 0, using the portrait MP4 at phone widths.
- Scrolling beyond the intro removes it; there is no replay button or scroll-back section.
- Unit tests cover fresh external/direct entries, internal returns, history and reload semantics.

## Responsive coverage

All 34 main content routes checked at 390px (home plus 33 route records). No document-level horizontal overflow or broken loaded images observed. Five representative page types also checked at 320px, 768px and 1440px: product, pricing, interactive demo, inquiry form and data dictionary. Raw records: `route-checks.json`.

Visual captures: desktop-home.png (1440×900), mobile-home.png (390×844), mobile-menu.png (390×844), mobile-form.png (390×844), small-phone-home.png (320×740), tablet-data.png (768×1024).

Fixed a cramped title wrap at 320px with fluid type and slightly increased line-height. Intro controls now wrap on small screens, with the redundant caption removed below 350px. Preserved original terrain art, upright cards, approved logo, reading-panel colors and footer navigation.

## Functional checks

- Mobile menu opens and exposes product/platform/solution/pricing/resource/company/sign-in/demo destinations.
- Required-field validation rejects empty form submission.
- Fictional test entries produce the explicit “Preview complete — Nothing has been sent or saved” result.
- No console errors or warnings observed in the checked flow.
- Production build passes; all seven Node tests pass.
- .htaccess included for Apache/LiteSpeed static hosting and nested-route fallback.

## Limits

This is browser viewport QA, not physical-device or cross-browser certification. Reduced-motion and visibility branches were code-reviewed; OS reduced-motion emulation was not available in this browser session. Images were checked for failures among loaded elements, not a full network crawl of every lazy asset. Hostinger account deployment, DNS, SSL and Apache execution remain to be verified after the user connects hosting. Forms/auth remain frontend previews, not live backend services.
