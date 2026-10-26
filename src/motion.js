import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let activeLenis;
export function scrollToSection(target, immediate = false, onComplete) {
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - (document.querySelector(".header")?.offsetHeight || 82);
  if (activeLenis && !immediate) activeLenis.scrollTo(top, { duration: 1.4, onComplete });
  else { window.scrollTo({ top, behavior: "instant" }); onComplete?.(); }
}

export function rebaseAfterIntro(top) {
  activeLenis?.resize();
  if (activeLenis) activeLenis.scrollTo(Math.max(0, top), { immediate: true, force: true });
  else window.scrollTo({ top: Math.max(0, top), behavior: "instant" });
  ScrollTrigger.refresh();
}

// One owner for smooth scrolling, scroll reveals and their complete teardown.
export function mountSiteMotion() {
  const media = gsap.matchMedia();
  media.add({ animated: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 981px)" }, ({ conditions }) => {
    if (!conditions.animated) return;
    const desktop = conditions.desktop;
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      autoResize: true,
      anchors: { offset: -96 },
      prevent: (node) => node.matches?.("textarea, select, [data-lenis-prevent]"),
    });
    activeLenis = lenis;
    const tick = (seconds) => lenis.raf(seconds * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    const tracked = new Map();
    let stopped = false, frame;
    const candidates = [
      ".reveal", ".page-hero-copy", ".page-hero-image", ".section > h1", ".section > h2", ".section > p",
      ".workflow-card", ".price-card", ".chain-card", ".resource-card", ".quote-card",
      ".intake-story", ".form-card", ".paper", ".data-table", ".timeline-item", ".pilot-facts",
      ".article-width > h2", ".article-width > p", ".article-width > ul",
      ".footer-intro", ".footer-group", ".footer-signature", ".footer-legal",
    ].join(",");
    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" }, ...(document.querySelector(".intro-film") ? {scrollTrigger: {trigger: ".hero", start: "top 75%", once: true}} : {}) });
      if (document.querySelector(".hero-line")) {
        intro.from(".hero-line", { y: 48, opacity: 0, clipPath: "inset(100% 0 0 0)", stagger: .12, duration: 1.05, clearProps: "transform,opacity,clipPath" })
          .from(".hero-sub,.hero .actions,.hero-foot", { y: 22, opacity: 0, stagger: .09, duration: .8, clearProps: "transform,opacity" }, .3)
          .from(".float-card", { y: 24, opacity: 0, stagger: .13, duration: .85, clearProps: "transform,opacity" }, .5);
        if (desktop) gsap.fromTo(".hero-terrain", { scale: 1.025 }, { scale: 1.075, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 } });
      }
      gsap.fromTo(".scroll-progress", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: .2 } });
    });

    const initialize = () => {
      // Prefer the outer reveal when nested components both opt into motion.
      document.querySelectorAll(candidates).forEach((el) => {
        if (tracked.has(el) || el.parentElement?.closest(candidates) || el.closest(".hero, .demo-workspace")) return;
        if (!el.getClientRects().length) return;
        const rect = el.getBoundingClientRect();
        // Never hide content already passed or restored to view by browser history.
        if (rect.bottom < 0) { tracked.set(el, null); return; }
        const siblings = [...el.parentElement.children].filter(child => child.matches(candidates));
        const delay = Math.min(Math.max(siblings.indexOf(el), 0) % 4 * .075, .225);
        const horizontal = desktop && (el.classList.contains("from-left") ? -34 : el.classList.contains("from-right") ? 34 : 0);
        const tween = gsap.from(el, {
          x: horizontal || 0, y: horizontal ? 12 : 28, opacity: 0,
          duration: .85, delay, ease: "power3.out", clearProps: "transform,opacity",
          scrollTrigger: rect.top < window.innerHeight * .94 ? undefined : { trigger: el, start: "top 94%", once: true },
        });
        tracked.set(el, tween);
      });
    };
    context.add(initialize);
    if (desktop) context.add(() => {
      document.querySelectorAll(".layer-art > img,.dependency-art > img,.memo-art > img,.page-hero-image > img").forEach(el => {
        gsap.fromTo(el, { y: 12 }, { y: -12, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 1.2 } });
      });
    });
    const refresh = () => {
      if (stopped) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (stopped) return;
        for (const [el, tween] of tracked) if (!el.isConnected) { tween?.scrollTrigger?.kill(); tween?.kill(); tracked.delete(el); }
        context.add(initialize);
        lenis.resize();
        ScrollTrigger.refresh();
      });
    };
    // Images, webfonts and conditional page content can change trigger positions.
    document.addEventListener("load", refresh, true);
    document.addEventListener("toggle", refresh, true);
    document.fonts.ready.then(refresh);
    const observer = new MutationObserver(refresh);
    observer.observe(document.querySelector("main"), { childList: true, subtree: true });
    // Keyboard users should never focus a still-transparent element.
    const revealFocused = (event) => {
      for (const [el, tween] of tracked) if (tween && el.contains(event.target)) tween.progress(1);
    };
    document.addEventListener("focusin", revealFocused);
    refresh();
    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("load", refresh, true);
      document.removeEventListener("toggle", refresh, true);
      document.removeEventListener("focusin", revealFocused);
      gsap.ticker.remove(tick);
      if (activeLenis === lenis) activeLenis = null;
      lenis.destroy();
      context.revert();
      tracked.clear();
    };
  });
  return () => media.revert();
}
