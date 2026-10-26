import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  X,
  List,
  Stack,
  MapTrifold,
  Path,
  FileText,
  Files,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { products } from "./data";
export const icons = [Stack, MapTrifold, Path, FileText, Files];
export const Img = ({ name, alt = "", className = "", eager = false }) => (
  <img
    src={"/art/" + name + ".webp"}
    alt={alt}
    className={className}
    loading={eager ? "eager" : "lazy"}
    decoding="async"
  />
);
export const Label = ({ children }) => (
  <div className="eyebrow">{children}</div>
);
export const DemoTag = () => (
  <span className="demo-tag">DEMO · SIMULATED DATA</span>
);
export const A = ({
  children,
  to = "/request-demo",
  secondary = false,
  className = "",
}) => (
  <a
    href={to}
    className={"button " + (secondary ? "secondary " : "") + className}
  >
    {children}
    <ArrowRight size={19} />
  </a>
);
export const Brand = () => (
  <a href="/" className="brand" aria-label="HazardPath home">
    <img className="brand-lockup" src="/brand/logo-horizontal-forest.svg" alt="HazardPath" width="220" height="55" />
  </a>
);
export function Header() {
  const [menu, setMenu] = useState(""),
    [mobile, setMobile] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") {
        setMenu("");
        setMobile(false);
      }
    };
    const outside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setMenu("");
        setMobile(false);
      }
    };
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);
  return (
    <header className="header" ref={ref}>
      <div className="nav-wrap">
        <Brand />
        <nav
          className={"nav " + (mobile ? "mobile-open" : "")}
          aria-label="Main navigation"
        >
          <button
            aria-expanded={menu === "products"}
            onClick={() => setMenu(menu === "products" ? "" : "products")}
          >
            Products <Plus size={12} />
          </button>
          <a href="/platform">Platform</a>
          <button
            aria-expanded={menu === "solutions"}
            onClick={() => setMenu(menu === "solutions" ? "" : "solutions")}
          >
            Solutions <Plus size={12} />
          </button>
          <a href="/pricing">Pricing</a>
          <a className="desktop-extra" href="/resources">
            Resources
          </a>
          <a className="desktop-extra" href="/company">
            Company
          </a>
          <a className="mobile-only" href="/sign-in">
            Sign in
          </a>
          <a className="mobile-only" href="/request-demo">
            Request demo
          </a>
        </nav>
        <div className="nav-right">
          <a className="signin" href="/sign-in">
            Sign in
          </a>
          <A>Request demo</A>
          <button
            className="icon-button menu-toggle"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            onClick={() => {
              setMobile(!mobile);
              setMenu("");
            }}
          >
            {mobile ? <X /> : <List />}
          </button>
        </div>
      </div>
      {menu && (
        <div className="mega">
          <div className="mega-top">
            <Label>
              {menu === "products"
                ? "Five proposed modules. One planning record."
                : "Start with the decision you need to make."}
            </Label>
            <button
              className="icon-button"
              aria-label="Close navigation"
              onClick={() => setMenu("")}
            >
              <X />
            </button>
          </div>
          <div className="mega-grid">
            {menu === "products"
              ? products.map((p, i) => {
                  const Icon = icons[i];
                  return (
                    <a key={p.slug} href={"/products/" + p.slug}>
                      <Icon size={28} weight="light" />
                      <strong>{p.name}</strong>
                      <span>{p.short}</span>
                      <ArrowUpRight />
                    </a>
                  );
                })
              : [
                  [
                    "Municipal plan updates",
                    "For the accountable plan owner.",
                    "/solutions/municipal-plan-updates",
                  ],
                  [
                    "Infrastructure priorities",
                    "School, road and utility decisions.",
                    "/solutions/infrastructure-prioritization",
                  ],
                  [
                    "Consultant channel",
                    "A separate agency-led engagement.",
                    "/partners/consultants",
                  ],
                ].map(([x, y, z]) => (
                  <a key={x} href={z}>
                    <MapTrifold size={28} />
                    <strong>{x}</strong>
                    <span>{y}</span>
                    <ArrowUpRight />
                  </a>
                ))}
          </div>
          <a
            className="text-link"
            href={menu === "products" ? "/products" : "/solutions"}
          >
            Explore the overview <ArrowRight />
          </a>
        </div>
      )}
    </header>
  );
}
const footerGroups = [
  ["Products", products.map(p => [p.name, "/products/" + p.slug])],
  ["Platform", [["Platform overview", "/platform"], ["Why HazardPath", "/why-change"], ["Solutions", "/solutions"], ["Pricing", "/pricing"], ["Evaluation", "/evaluation"], ["Simulated demo", "/demo"]]],
  ["Resources", [["Resource library", "/resources"], ["Example capital memo", "/resources/example-capital-memo"], ["Results & evidence", "/results"], ["Data & permissions", "/platform/data-and-integrations"], ["Trust & limitations", "/trust"]]],
  ["Company", [["About HazardPath", "/company"], ["Consultant channel", "/partners/consultants"], ["Contact", "/contact"], ["Request a demo", "/request-demo"], ["Workspace access", "/sign-in"]]],
];
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <div>
          <Brand />
          <p>People. Places. Essential services.<br />A clearer record for what comes next.</p>
        </div>
        <a className="footer-contact" href="/contact">
          <span>START WITH A PLANNING QUESTION</span>
          <strong>Let’s find your next step. <ArrowUpRight size={24} /></strong>
        </a>
      </div>
      <nav className="footer-directory" aria-label="Footer navigation">
        {footerGroups.map(([title, links]) => (
          <div className="footer-group" key={title}>
            <h2>{title}</h2>
            <ul>{links.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
          </div>
        ))}
      </nav>
      <div className="footer-signature">
        <p>Evidence for a<br /><em>more resilient tomorrow.</em></p>
        <div className="footer-concept">
          <span>CONCEPT PREVIEW</span>
          <p>Source-linked evidence.<br />Human-reviewed decisions.</p>
          <a href="/trust">Understand our boundaries <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="footer-legal">
        <span>© {new Date().getFullYear()} HazardPath</span>
        <nav aria-label="Legal navigation">
          <a href="/legal/privacy">Privacy</a>
          <a href="/legal/terms">Terms</a>
          <a href="/accessibility">Accessibility</a>
        </nav>
        <a className="footer-top-link" href="#main">Back to top <ArrowUpRight size={16} /></a>
      </div>
    </footer>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <Img
        name={
          location.pathname === "/"
            ? "fieldbook"
            : location.pathname.includes("resources")
              ? "field-survey"
              : "plan-progress"
        }
        alt="Illustrative next stage of municipal planning"
      />
      <div className="cta-copy reveal">
        <Label>YOUR NEXT PLAN UPDATE</Label>
        <h2>
          A clearer path starts
          <br />
          with one <em>decision.</em>
        </h2>
        <p>
          Bring a planning question. Explore a source-linked case.
          <br />
          Then decide what a paid evaluation should test.
        </p>
        <div className="actions">
          <A to="/request-pilot">Discuss a planning workshop</A>
          <A secondary>Request a demo</A>
        </div>
      </div>
    </section>
  );
}
export function PageHero({
  label,
  title,
  body,
  image = "regional-coast",
  children,
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy reveal">
        <Label>{label}</Label>
        <h1>{title}</h1>
        <p>{body}</p>
        {children}
      </div>
      <div className="page-hero-image reveal from-right">
        <Img name={image} alt="Illustrative planning visual" eager />
        <DemoTag />
      </div>
    </section>
  );
}
export function ProductStrip() {
  return (
    <section className="section product-section">
      <div className="section-heading horizontal-heading reveal">
        <div>
          <Label>THE HAZARDPATH PLATFORM</Label>
          <h2>
            Five ways to make
            <br />
            the picture <em>clearer.</em>
          </h2>
        </div>
        <p>
          Five distinct proposed offers.
          <br />
          Start with one planning question.
        </p>
      </div>
      <div className="product-grid">
        {products.map((p, i) => {
          const Icon = icons[i];
          return (
            <a
              href={"/products/" + p.slug}
              className="product-card reveal"
              key={p.slug}
            >
              <span className="product-number">0{i + 1}</span>
              <Icon size={35} weight="light" />
              <h3>{p.name}</h3>
              <p>{p.short}</p>
              <span className="product-link">
                Explore the module <ArrowUpRight size={17} />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export function WorkspacePreview() {
  return (
    <section className="section workspace-preview">
      <div className="section-heading horizontal-heading reveal">
        <div>
          <Label>THE SHARED DEMONSTRATION WORKSPACE</Label>
          <h2>
            Follow the evidence
            <br />
            for yourself.
          </h2>
        </div>
        <A to="/demo">Open the interactive demo</A>
      </div>
      <a href="/demo?view=evidence" className="workspace-capture reveal">
        <Img
          name="workspace-demo"
          alt="Actual browser capture of HazardPath's synthetic source register, with dated evidence and a source-detail pane"
        />
        <span>
          ACTUAL PROTOTYPE CAPTURE · SYNTHETIC RECORDS · NO CONNECTED SERVICES
        </span>
      </a>
    </section>
  );
}

export function tabKeys(e, keys, current, setter) {
  let i = keys.indexOf(current);
  if (e.key === "ArrowRight") i = (i + 1) % keys.length;
  else if (e.key === "ArrowLeft") i = (i + keys.length - 1) % keys.length;
  else if (e.key === "Home") i = 0;
  else if (e.key === "End") i = keys.length - 1;
  else return;
  e.preventDefault();
  setter(keys[i]);
  e.currentTarget.parentElement.querySelectorAll('[role="tab"]')[i]?.focus();
}
