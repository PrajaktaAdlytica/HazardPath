import React, { useLayoutEffect } from "react";
import { mountSiteMotion } from "./motion";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "lenis/dist/lenis.css";
import { Header, Footer, PageHero, A } from "./ui";
import Home from "./Home";
import Intro from "./Intro";
import Demo from "./Demo";
import { ValidationPlaybook, DataDictionary } from "./PlanningDetails";
import { products, contentPages } from "./data";
import {
  ProductPage,
  Products,
  Pricing,
  Platform,
  ContentPage,
  Evaluation,
  Memo,
  Resources,
  SourceRegister,
  Intake,
  Access,
  Legal,
  Accessibility,
} from "./Pages";
function Page() {
  const path = location.pathname.replace(/\/$/, "") || "/";
  const p = products.find((x) => path === "/products/" + x.slug);
  if (p) return <ProductPage p={p} />;
  if (contentPages[path]) return <ContentPage data={contentPages[path]} />;
  switch (path) {
    case "/":
      return <Home />;
    case "/products":
      return <Products />;
    case "/platform":
      return <Platform />;
    case "/pricing":
      return <Pricing />;
    case "/demo":
      return <Demo />;
    case "/evaluation":
    case "/pilot":
      return <Evaluation />;
    case "/resources":
      return <Resources />;
    case "/resources/validation-playbook":
      return <ValidationPlaybook />;
    case "/resources/demo-data-dictionary":
      return <DataDictionary />;
    case "/resources/example-capital-memo":
      return <Memo />;
    case "/resources/source-register":
      return <SourceRegister />;
    case "/request-demo":
      return <Intake kind="demo" />;
    case "/request-pilot":
      return <Intake kind="pilot" />;
    case "/contact":
      return <Intake kind="contact" />;
    case "/sign-in":
    case "/signin":
      return <Access />;
    case "/legal/privacy":
      return <Legal type="privacy" />;
    case "/legal/terms":
      return <Legal type="terms" />;
    case "/accessibility":
      return <Accessibility />;
    default:
      return (
        <PageHero
          label="404 / A DIFFERENT PATH"
          title="This page is beyond the map."
          body="Return to the platform or explore the fictional planning case."
          image="regional-coast"
        >
          <A to="/">Return home</A>
        </PageHero>
      );
  }
}
export function App() {
  useLayoutEffect(() => {
    const path = location.pathname.split("/").filter(Boolean).pop();
    document.title =
      (path
        ? path
            .split("-")
            .map((s) => s[0].toUpperCase() + s.slice(1))
            .join(" ") + " | "
        : "") + "HazardPath — A clearer path from hazard to decision";
    return mountSiteMotion();
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {location.pathname === "/" && <Intro />}
      <Header />
      <div className="scroll-progress" aria-hidden="true" />
      <main id="main">
        <Page />
      </main>
      <Footer />
    </>
  );
}
