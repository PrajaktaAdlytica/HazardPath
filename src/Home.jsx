import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  ArrowLeft,
  Stack,
  Path,
  Users,
  FileText,
  WarningCircle,
  Buildings,
  Lightning,
  Drop,
  Sun,
  Quotes,
  Plus,
  LockKey,
} from "@phosphor-icons/react";
import { A, Img, Label, DemoTag, FinalCTA, ProductStrip, tabKeys } from "./ui";
import { alternatives, faqs } from "./data";
export function Hero() {
  return (
    <section className="hero">
      <Img
        name="terrain-restored"
        className="hero-terrain"
        alt="Sculpted fictional neighborhood with river, school, access road and utility"
        eager
      />
      <div className="hero-copy">
        <span className="pill">CONCEPT PREVIEW</span>
        <h1>
          <span className="hero-line">A clearer path</span>
          <span className="hero-line">from hazard</span>
          <span className="hero-line">
            to <em>decision.</em>
          </span>
        </h1>
        <p className="hero-sub">
          Source-linked planning for
          <br />
          municipal resilience teams.
        </p>
        <div className="actions">
          <A to="/demo">Explore the concept</A>
          <A to="/resources/example-capital-memo" secondary>
            View the planning case
          </A>
        </div>
        <div className="hero-foot">
          <ArrowDown size={20} />
          <span>
            PEOPLE. PLACES. ESSENTIAL SERVICES.
            <br />
            SCROLL TO FOLLOW THE EVIDENCE.
          </span>
        </div>
      </div>
      <div className="hero-label">
        <DemoTag />
      </div>
      <a href="/demo?view=evidence" className="float-card card-source">
        <Stack size={26} weight="light" />
        <div>
          <strong>A traceable starting point</strong>
          <span>Illustrative hazard & asset sources</span>
          <small>Source date · 01 Oct 2026</small>
        </div>
        <ArrowUpRight size={15} />
      </a>
      <a href="/products/climate-review" className="float-card card-road">
        <Path size={28} weight="light" />
        <div>
          <strong>Access route</strong>
          <span>School → road → utility</span>
        </div>
      </a>
      <a href="/trust" className="float-card card-review">
        <Users size={28} weight="light" />
        <div>
          <strong>Human review</strong>
          <span>Every consequential decision</span>
        </div>
      </a>
    </section>
  );
}
function Layers() {
  return (
    <section className="section layers-section" id="sources">
      <div className="section-heading reveal">
        <Label>01 / CLIMATE DESK + CLIMATE REVIEW</Label>
        <h2>
          A hazard layer is
          <br />
          only the <em>beginning.</em>
        </h2>
        <p>
          Connect source evidence with local knowledge.
          <br />
          Understand the places, people and services behind the map.
        </p>
      </div>
      <div className="layer-visuals">
        <div className="layer-art reveal from-left">
          <Img
            name="layers"
            alt="Four illustrated source layers in an exploded map stack"
          />
          <span className="caption">
            SOURCE LAYERS / SCENARIO + ASSETS + CONTEXT
          </span>
        </div>
        <div className="dependency-art reveal from-right">
          <Img
            name="dependencies"
            alt="Illustrated school, access road and utility dependency"
          />
          <span className="map-label school">
            <Buildings />
            School
          </span>
          <span className="map-label utility">
            <Lightning />
            Utility dependency
          </span>
          <span className="map-label route">
            <Path />
            Access road
          </span>
          <DemoTag />
        </div>
      </div>
      <div className="info-grid">
        {[
          [
            FileText,
            "What we know",
            "Source-linked hazard layers, municipal assets and context.",
            "climate-desk",
          ],
          [
            WarningCircle,
            "What is missing",
            "Unverified dependencies and evidence gaps stay visible.",
            "climate-review",
          ],
          [
            Users,
            "Who reviews it",
            "The plan owner, operator and designated data owner.",
            "climate-report",
          ],
        ].map(([Icon, t, b, s]) => (
          <a key={t} href={"/products/" + s} className="info-card reveal">
            <span className="icon-disc">
              <Icon size={27} weight="light" />
            </span>
            <div>
              <h3>{t}</h3>
              <p>{b}</p>
            </div>
            <ArrowUpRight size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}
export const layerDetails = {
  Flood: {
    icon: Drop,
    title: "Flood scenario",
    body: "The illustrative school approach intersects a flood scenario. Exposure alone does not establish vulnerability.",
    note: "Culvert survey missing",
    image: "terrain-restored",
  },
  Heat: {
    icon: Sun,
    title: "Heat scenario",
    body: "Review outdoor access and service dependencies in a separate heat scenario. Local condition evidence is still needed.",
    note: "Shade and condition data needed",
    image: "dependencies",
  },
  Assets: {
    icon: Buildings,
    title: "Asset dependencies",
    body: "Follow the school, access road and utility relationship. Confirm assumptions with the responsible data owner.",
    note: "Utility topology needs confirmation",
    image: "dependencies",
  },
};
function MapSection() {
  const [layer, setLayer] = useState("Flood");
  const d = layerDetails[layer];
  return (
    <section className="section map-section" id="community">
      <div className="section-heading reveal">
        <Label>02 / CLIMATE REVIEW</Label>
        <h2>
          See what connects
          <br />a <em>community.</em>
        </h2>
        <p>
          Understand what the evidence means for a place.
          <br />
          And what you still need to know.
        </p>
      </div>
      <div className="map-stage">
        <Img
          name={d.image}
          className="map-scene"
          alt="Synthetic school-access neighborhood"
        />
        <div className="map-tabs" role="tablist" aria-label="Map layers">
          {Object.entries(layerDetails).map(([key, v]) => (
            <button
              key={key}
              role="tab"
              id={"map-tab-" + key}
              aria-controls="map-panel"
              tabIndex={layer === key ? 0 : -1}
              onKeyDown={(e) =>
                tabKeys(e, Object.keys(layerDetails), layer, setLayer)
              }
              aria-selected={layer === key}
              onClick={() => setLayer(key)}
              className={layer === key ? "active" : ""}
            >
              <v.icon size={20} />
              {key}
              <span>{layer === key ? "ON" : "OFF"}</span>
            </button>
          ))}
        </div>
        <div
          className="map-evidence"
          id="map-panel"
          aria-labelledby={"map-tab-" + layer}
          role="tabpanel"
          aria-live="polite"
        >
          <Label>ILLUSTRATIVE CASE HP-DEMO-001</Label>
          <h3>{d.title}</h3>
          <p>{d.body}</p>
          <div className="evidence-warning">
            <WarningCircle size={24} />
            <div>
              <strong>Evidence needed</strong>
              <span>{d.note}</span>
            </div>
          </div>
          <a href="/demo" className="text-link">
            Open the source record <ArrowUpRight />
          </a>
        </div>
        <div className="map-tag">
          <DemoTag />
        </div>
        <div className="map-bottom">
          <span>Fictional Merebank neighborhood</span>
          <span>No live monitoring · No intervention authority</span>
        </div>
      </div>
    </section>
  );
}
export function Alternatives() {
  const track = useRef();
  const [atStart, setAtStart] = useState(true),
    [atEnd, setAtEnd] = useState(false);
  function update(el) {
    setAtStart(el.scrollLeft <= 5);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 5);
  }
  useEffect(() => {
    const el = track.current;
    const observer = new ResizeObserver(() => update(el));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  function move(n) {
    const el = track.current;
    el.scrollBy({
      left: n * (el.children[0].getBoundingClientRect().width + 24),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  return (
    <section className="section alternatives" id="alternatives">
      <div className="section-heading horizontal-heading reveal">
        <div>
          <Label>03 / CLIMATE PROOF</Label>
          <h2>
            Compare the
            <br />
            <em>paths forward.</em>
          </h2>
          <p>
            Different approaches. Shared evidence.
            <br />A clear view of the assumptions behind each one.
          </p>
        </div>
        <div className="slider-controls">
          <button
            className="icon-button"
            aria-label="Previous alternative"
            onClick={() => move(-1)}
            disabled={atStart}
          >
            <ArrowLeft />
          </button>
          <button
            className="icon-button"
            aria-label="Next alternative"
            onClick={() => move(1)}
            disabled={atEnd}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div
        className="alternatives-track"
        ref={track}
        onScroll={(e) => update(e.currentTarget)}
      >
        {alternatives.map((a, i) => (
          <article className="alternative-card reveal" key={a.name}>
            <div className="alt-image">
              <Img name={a.image} alt={a.name + " illustrated concept"} />
              <span className="pill">
                {i === 0 ? "BASELINE" : "ALTERNATIVE"} / A{i}
              </span>
              <DemoTag />
            </div>
            <div className="alt-body">
              <h3>{a.name}</h3>
              <h4>{a.head}</h4>
              <p>{a.body}</p>
              <div className="assumption">
                <WarningCircle />
                <span>
                  <strong>Key assumption</strong>
                  {a.assumption}
                </span>
              </div>
              <a className="text-link" href="/products/climate-proof">
                Review the approach <ArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="fineprint">
        Illustrative concepts. Engineering, permitting, capital votes and public
        process govern real works.
      </p>
    </section>
  );
}
export function Evidence() {
  return (
    <section className="section evidence-section">
      <div className="section-heading reveal">
        <Label>04 / CLIMATE SIGNAL + CLIMATE REPORT</Label>
        <h2>
          One decision.
          <br />A <em>traceable record.</em>
        </h2>
        <p>
          Keep the sources, assumptions and public input
          <br />
          behind a planning decision connected.
        </p>
      </div>
      <div className="evidence-layout">
        <a
          href="/resources/example-capital-memo"
          className="memo-art reveal from-left"
        >
          <Img
            name="memo"
            alt="Dimensional draft memo with map and source pages"
          />
          <span className="memo-stamp">DRAFT · HUMAN REVIEW REQUIRED</span>
          <span className="caption">
            OPEN THE SAMPLE CAPITAL MEMO <ArrowUpRight />
          </span>
        </a>
        <div className="evidence-panels">
          <div className="ledger reveal from-right">
            <div className="panel-heading">
              <Stack size={28} />
              <div>
                <h3>Source ledger</h3>
                <p>Every input has a place in the record.</p>
              </div>
            </div>
            <div className="ledger-row table-head">
              <span>Source</span>
              <span>Context</span>
              <span>State</span>
            </div>
            {[
              ["Source A", "Flood scenario", "Reviewed"],
              ["Source B", "Asset register", "Reviewed"],
              ["Source C", "Utility relation", "Needs review"],
            ].map((row) => (
              <a className="ledger-row" href="/demo?view=evidence" key={row[0]}>
                {row.map((x, i) => (
                  <span key={i} className={i === 2 ? "small-status" : ""}>
                    {x}
                  </span>
                ))}
              </a>
            ))}
            <DemoTag />
          </div>
          <div className="comments-panel reveal from-right">
            <div className="panel-heading">
              <Quotes size={28} />
              <div>
                <h3>Public comments</h3>
                <p>From question to next action.</p>
              </div>
            </div>
            <div className="comment">
              <span className="avatar">R</span>
              <div>
                <strong>Fictional resident · C01</strong>
                <p>“How will accessible school access be maintained?”</p>
              </div>
              <span className="small-status pending">Open</span>
            </div>
            <a className="text-link" href="/demo?view=review">
              See the review trail <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export function EvalTeaser() {
  return (
    <section className="section eval-section">
      <div className="reveal">
        <Label>VALIDATE THE WORK, NOT THE PROMISE</Label>
        <h2>
          Useful is something
          <br />
          we <em>have to test.</em>
        </h2>
        <p>
          Compare a source-linked packet with your current planning process.
          Agree the evaluator, baseline and failure criteria before a paid
          workshop begins.
        </p>
        <A to="/evaluation">Explore the evaluation</A>
      </div>
      <div className="scorecard reveal from-right">
        <div className="panel-heading">
          <FileText size={28} />
          <div>
            <h3>A shared evaluation rubric</h3>
            <p>Proposed criteria · Not yet evaluated</p>
          </div>
        </div>
        {[
          "Evidence completeness",
          "Traceable alternatives",
          "Decision usefulness",
          "Public-process integrity",
        ].map((x, i) => (
          <div className="score-row" key={x}>
            <span>0{i + 1}</span>
            <strong>{x}</strong>
            <span>To evaluate</span>
          </div>
        ))}
        <div className="score-foot">
          <Users />
          Named plan owner + existing planning packet
        </div>
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section className="section faq-section">
      <div className="reveal">
        <Label>A FEW USEFUL ANSWERS</Label>
        <h2>
          Clarity before
          <br />
          the next <em>step.</em>
        </h2>
        <Img
          name="layers"
          alt="Illustrated planning layers"
        />
        <a className="text-link" href="/contact">
          Have another question? <ArrowUpRight />
        </a>
      </div>
      <div>
        {faqs.map(([q, a]) => (
          <details className="reveal" key={q}>
            <summary>
              {q}
              <Plus size={20} />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <>
      <Hero />
      <Layers />
      <MapSection />
      <Alternatives />
      <Evidence />
      <ProductStrip />
      <EvalTeaser />
      <section className="boundary-strip">
        <LockKey size={28} />
        <p>
          Source-linked evidence. Human-reviewed decisions.
          <br />
          <strong>No live control. No shortcuts around public process.</strong>
        </p>
        <a href="/trust">
          Our boundaries <ArrowUpRight />
        </a>
      </section>
      <FAQ />
      <FinalCTA />
    </>
  );
}
