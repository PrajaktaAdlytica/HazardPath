import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  WarningCircle,
  LockKey,
  CheckCircle,
  BookOpen,
  Stack,
  MagnifyingGlass,
  CheckSquare,
} from "@phosphor-icons/react";
import {
  A,
  Img,
  Label,
  DemoTag,
  PageHero,
  ProductStrip,
  FinalCTA,
  icons,
  WorkspacePreview,
} from "./ui";
import { products, sources } from "./data";
import { Evidence, EvalTeaser, FAQ } from "./Home";
export function ProductPage({ p }) {
  return (
    <>
      <PageHero
        label={"PROPOSED MODULE / " + p.name.toUpperCase()}
        title={p.job}
        body={p.desc}
        image={p.image}
      >
        <A to={"/request-demo?module=" + p.slug}>Explore {p.name}</A>
      </PageHero>
      <div className="product-subnav">
        <a href="#workflow">Workflow</a>
        <a href="#output">The output</a>
        <a href="#commercial">Pilot scope</a>
        <a href="/trust">Boundaries</a>
      </div>
      <section className="section" id="workflow">
        <Label>THE WORKFLOW</Label>
        <h2>
          A clearer record,
          <br />
          one step at a time.
        </h2>
        <div className="workflow-grid">
          {p.steps.map(([t, b], i) => (
            <article className="workflow-card reveal" key={t}>
              <span className="step-no">0{i + 1}</span>
              <div className="workflow-symbol">
                {i === 0 ? (
                  <Stack weight="light" />
                ) : i === 1 ? (
                  <MagnifyingGlass weight="light" />
                ) : (
                  <CheckSquare weight="light" />
                )}
                <span>
                  {
                    [
                      "SOURCE CONTEXT",
                      "REVIEW & INTERPRET",
                      "ACCOUNTABLE OUTPUT",
                    ][i]
                  }
                </span>
              </div>
              <h3>{t}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section split-section sage" id="output">
        <div className="reveal">
          <Label>WHAT YOU TAKE FORWARD</Label>
          <h2>{p.output}.</h2>
          <p>
            The proposed output keeps source dates, missingness, analyst
            annotations, alternative explanations and reviewer decisions
            together.
          </p>
          <A to="/resources/example-capital-memo" secondary>
            See an example artifact
          </A>
        </div>
        <Img
          name={p.outputImage}
          alt={p.output}
          className="reveal from-right"
        />
      </section>
      <section className="section commercial-section" id="commercial">
        <div>
          <Label>TEST THE SCOPE</Label>
          <h2>
            Start with one
            <br />
            accountable decision.
          </h2>
          <p>
            Agree the baseline, rubric and permissions with the municipal budget
            owner. Select one module for the first pilot.
          </p>
        </div>
        <div className="quote-card">
          <span className="pill">PRICING TEST HYPOTHESIS</span>
          <h3>{p.price}</h3>
          <p>{p.unit}</p>
          <hr />
          <p>
            {p.output}. Subject to interviews, agreed scope and public
            procurement. No payment is collected.
          </p>
          <A to={"/request-pilot?module=" + p.slug}>Discuss this pilot</A>
        </div>
      </section>
      <ProductStrip />
      <FAQ />
    </>
  );
}
export function Products() {
  return (
    <>
      <PageHero
        label="THE PROPOSED PRODUCT SUITE"
        title="Five ways to strengthen one planning decision."
        body="Distinct deliverables, shared evidence. Find the right starting point for your next plan update."
        image="layers"
      >
        <A>Explore the full platform</A>
      </PageHero>
      {products.map((p, i) => (
        <section
          className={"section split-section " + (i % 2 ? "sky" : "sage")}
          key={p.slug}
        >
          <div className="reveal">
            <Label>{"0" + (i + 1) + " / " + p.name}</Label>
            <h2>{p.job}</h2>
            <p>{p.desc}</p>
            <A to={"/products/" + p.slug}>Explore {p.name}</A>
          </div>
          <Img name={p.image} alt={p.output} className="reveal from-right" />
        </section>
      ))}
      <FinalCTA />
    </>
  );
}
export function Pricing() {
  return (
    <>
      <PageHero
        label="PILOT SCOPES & PRICING"
        title="Scope one planning decision first."
        body="Five separately quotable offers. These prices are interview and pilot hypotheses—not verified market rates or live subscription plans."
        image="grant-evidence"
      >
        <A to="/request-pilot">Discuss a paid workshop</A>
      </PageHero>
      <section className="section">
        <div className="pricing-grid">
          {products.map((p, i) => {
            const Icon = icons[i];
            return (
              <article className="price-card reveal" key={p.slug}>
                <Icon size={32} weight="light" />
                <Label>PROPOSED OFFER</Label>
                <h3>{p.name}</h3>
                <p>{p.output}</p>
                <div className="price">{p.price}</div>
                <small>{p.unit}</small>
                <span className="pricing-note">
                  Test hypothesis · Subject to public procurement
                </span>
                <A to={"/request-pilot?module=" + p.slug} secondary>
                  Discuss scope
                </A>
              </article>
            );
          })}
        </div>
        <div className="notice">
          <WarningCircle />
          <p>
            First select one offer. Data licensing, services and integration
            effort require separate scope. No savings guarantee or active
            checkout.
          </p>
        </div>
      </section>
      <EvalTeaser />
      <FAQ />
    </>
  );
}
export function Platform() {
  return (
    <>
      <PageHero
        label="THE SHARED PLANNING WORKSPACE"
        title="One case. A traceable chain of evidence."
        body="Five proposed modules share sources, local context, alternatives and accountable review."
        image="layers"
      >
        <A to="/demo">Open the simulated workspace</A>
      </PageHero>
      <section className="section">
        <Label>FOLLOW THE RECORD</Label>
        <h2>
          From a source to
          <br />a considered next step.
        </h2>
        <div className="platform-chain">
          {products.map((p, i) => {
            const Icon = icons[i];
            return (
              <a
                href={"/products/" + p.slug}
                className="chain-card reveal"
                key={p.slug}
              >
                <Icon size={35} />
                <span>0{i + 1}</span>
                <h3>{p.name}</h3>
                <p>{p.output}</p>
                <ArrowRight />
              </a>
            );
          })}
        </div>
      </section>
      <Evidence />
      <WorkspacePreview />
      <section className="section split-section sky">
        <div className="reveal">
          <Label>DESIGNED AROUND RESPONSIBILITY</Label>
          <h2>
            Evidence connects.
            <br />
            Authority stays clear.
          </h2>
          <p>
            Source dates, scenario limits, annotations, review states, versions
            and exports belong together. Human roles own the process.
          </p>
          <A to="/platform/data-and-integrations">Data and permissions</A>
        </div>
        <Img
          name="utility-grid"
          alt="Illustrative dependency map"
          className="reveal"
        />
      </section>
      <FinalCTA />
    </>
  );
}
export function ContentPage({ data }) {
  return (
    <>
      <PageHero {...data}>
        <A to="/request-pilot">Discuss your planning question</A>
      </PageHero>
      {data.sections.map(([t, b, im, to], i) => (
        <section
          className={"section split-section " + (i % 2 ? "sky" : "sage")}
          key={t}
        >
          <div className="reveal">
            <Label>{"0" + (i + 1) + " / " + data.label}</Label>
            <h2>{t}</h2>
            <p>{b}</p>
            {to && (
              <A to={to} secondary>
                Explore this further
              </A>
            )}
          </div>
          <Img name={im} alt={t} className="reveal from-right" />
        </section>
      ))}
      <FinalCTA />
    </>
  );
}
export function Evaluation() {
  return (
    <>
      <PageHero
        label="THE PAID EVALUATION"
        title="Compare the packet with the work you already do."
        body="One capital decision. An agreed baseline. A named plan owner. A paid workshop with precommitted criteria."
        image="planning-workshop"
      >
        <A to="/request-pilot">Discuss a planning workshop</A>
      </PageHero>
      <section className="section">
        <Label>THE PATH TO A PILOT</Label>
        <h2>Agreement before evaluation.</h2>
        <div className="workflow-grid">
          {[
            [
              "Qualify the decision",
              "Name the budget owner, operator and data owner; identify one capital decision and the existing packet.",
              "utility-grid",
            ],
            [
              "Agree permissions",
              "Document legal permission, data licenses, procurement and the public-engagement route.",
              "layers",
            ],
            [
              "Pre-register the test",
              "Agree the comparator, evaluator, observation window and failure threshold in a paid SOW.",
              "memo",
            ],
          ].map(([t, b, im], i) => (
            <article className="workflow-card reveal" key={t}>
              <span className="step-no">0{i + 1}</span>
              <Img name={im} alt={t} />
              <h3>{t}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
      </section>
      <EvalTeaser />
      <section className="section">
        <Label>PROPOSED SCORECARD · TO AGREE IN THE SOW</Label>
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Method</th>
                <th>Proposed decision rule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Evidence completeness</td>
                <td>
                  Plan owner rates baseline and new packet on an agreed 1–5
                  rubric.
                </td>
                <td>
                  ≥4/5 and one-point improvement; no decline if baseline already
                  ≥4.
                </td>
              </tr>
              <tr>
                <td>Traceable alternatives</td>
                <td>Review source links and assumptions for all options.</td>
                <td>≥4/5; every consequential statement traceable.</td>
              </tr>
              <tr>
                <td>Decision usefulness</td>
                <td>Compare clarity of next action with existing packet.</td>
                <td>≥4/5, no worse than baseline, with written rationale.</td>
              </tr>
              <tr>
                <td>Integrity</td>
                <td>Audit permission, provenance and public process.</td>
                <td>
                  Fail if material sources lack provenance or public process is
                  bypassed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Proposed observation window: one workshop plus two weeks of review.
          Separately count qualified municipal buyers and signed paid
          commitments. Traffic and waitlist entries are not product validation.
        </p>
        <div className="notice">
          <WarningCircle />
          <p>
            Proceed beyond demo only after authorization for paid work and data
            access, accepted rubric, documented procurement/public process,
            required safety sign-off and available historical comparator. Pause
            if any gate is missing.
          </p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Memo() {
  return (
    <>
      <PageHero
        label="ILLUSTRATIVE CAPITAL MEMO"
        title="The reasoning belongs in the record."
        body="Fictional Merebank school access · Draft v0.1 · 16 October 2026."
        image="memo"
      >
        <A to="/demo">Inspect the simulated case</A>
      </PageHero>
      <section className="section memo-page">
        <article className="paper">
          <DemoTag />
          <Label>HP-DEMO-001 / FICTIONAL ALDER REACH MUNICIPALITY</Label>
          <h2>Merebank school access planning memo</h2>
          <h3>Decision question</h3>
          <p>
            Which project concepts should proceed to further investigation
            before the next plan update?
          </p>
          <h3>Observation</h3>
          <p>
            The synthetic RD-01 approach intersects S01’s illustrative flood
            layer. S02 links the road to SCH-01. This indicates exposure only,
            not failure probability or expected damage.
          </p>
          <Img name="plan-progress" alt="Fictional neighborhood illustration" />
          <h3>Alternatives and missingness</h3>
          <p>
            A0 retain current approach while gathering evidence. A1 investigate
            another access route. A2 investigate drainage improvements. The
            culvert survey is absent, utility topology needs confirmation, and
            engineering/public-review requirements are unresolved. No preferred
            construction option is established.
          </p>
          <h3>Public input</h3>
          <p>
            Fictional comment C01 asks whether accessible walking access is
            preserved. Response pending.
          </p>
          <h3>Reviewer disposition</h3>
          <p>
            Return for evidence. Simulated owner: Mira Vale. Next action: Theo
            Lane requests missing survey context through a permissioned pilot.
            Illustrative due date: 20 October 2026. No external action occurs.
          </p>
          <h3>Source register</h3>
          {sources.map((s) => (
            <p key={s.id}>
              <strong>
                {s.id} · {s.name}
              </strong>
              <br />
              {s.date} · {s.state}. {s.detail}
            </p>
          ))}
          <div className="notice">
            Draft · Human review required. All records are invented. No grant
            eligibility, engineering approval or intervention authority.
          </div>
        </article>
      </section>
    </>
  );
}
export function Resources() {
  return (
    <>
      <PageHero
        label="THE FIELD GUIDE"
        title="Good decisions start with better questions."
        body="Artifacts, explainers and preparation guides for a traceable planning conversation."
        image="regional-coast"
      />
      <section className="section resource-grid">
        {[
          [
            "example-capital-memo",
            "The example capital memo",
            "Follow a fictional source-linked decision.",
            "memo",
          ],
          [
            "exposure-and-vulnerability",
            "Exposure is a starting point",
            "What a map can—and cannot—tell you.",
            "utility-grid",
          ],
          [
            "pilot-preparation",
            "Prepare a useful evaluation",
            "People, permissions and the existing packet.",
            "layers",
          ],
          [
            "source-register",
            "Research source register",
            "Public resources and adjacent products.",
            "regional-coast",
          ],
          [
            "validation-playbook",
            "The validation playbook",
            "Buyer channels, message tests and expansion hypotheses.",
            "utility-grid",
          ],
          [
            "demo-data-dictionary",
            "The demo data dictionary",
            "The fields behind a traceable planning case.",
            "layers",
          ],
        ].map(([s, t, b, im]) => (
          <a className="resource-card reveal" key={s} href={"/resources/" + s}>
            <Img name={im} alt={t} />
            <Label>HAZARDPATH FIELD GUIDE</Label>
            <h3>{t}</h3>
            <p>{b}</p>
            <span className="text-link">
              Read the guide <ArrowUpRight />
            </span>
          </a>
        ))}
      </section>
    </>
  );
}
export function SourceRegister() {
  return (
    <>
      <PageHero
        label="RESEARCH REFERENCES"
        title="Context you can follow back to the source."
        body="These resources inform the concept. They are not partners, integrations or sources of the fictional demo geometry."
        image="layers"
      />
      <section className="section article-width">
        {[
          [
            "FEMA RAPT",
            "Public resilience analysis and planning resource.",
            "https://www.fema.gov/emergency-managers/practitioners/resilience-analysis-and-planning-tool",
          ],
          [
            "Climate Resilience Toolkit",
            "Public guidance on exposure, vulnerability and resilience planning.",
            "https://toolkit.climate.gov/overview-steps",
          ],
          [
            "Jupiter Intelligence",
            "Commercial risk and adaptation analytics; an adjacent product.",
            "https://www.jupiterintel.com/solutions",
          ],
          [
            "ClimateCheck",
            "Commercial property and portfolio climate-risk screening.",
            "https://climatecheck.com/solutions",
          ],
        ].map(([t, b, url]) => (
          <a
            key={t}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="source-link"
          >
            <BookOpen size={28} />
            <div>
              <h3>{t}</h3>
              <p>{b}</p>
            </div>
            <ArrowUpRight />
          </a>
        ))}
        <p>
          Predominantly US-focused planning references. Verify current local
          guidance and licensing before a pilot. No interviews, backtests or
          independent accuracy/ROI validation are claimed.
        </p>
      </section>
    </>
  );
}
export function Intake({ kind }) {
  const pilot = kind === "pilot",
    contact = kind === "contact";
  const [done, setDone] = useState(false),
    [wait, setWait] = useState(false);
  const resultRef = useRef();
  useEffect(() => {
    if (done && resultRef.current) {
      resultRef.current.focus();
      resultRef.current.scrollIntoView({
        block: "center",
        behavior: "instant",
      });
    }
  }, [done]);
  const params = new URLSearchParams(location.search);
  return (
    <section className="intake section">
      <div className="intake-story">
        <Label>
          {pilot
            ? "ONE DECISION. AN ACCOUNTABLE TEAM."
            : contact
              ? "START A CONVERSATION"
              : "EXPLORE THE PROPOSED WORKSPACE"}
        </Label>
        <h1>
          {pilot
            ? "Bring your next planning question."
            : contact
              ? "Let’s make the next step clearer."
              : "See the story behind the evidence."}
        </h1>
        <p>
          {pilot
            ? "Scope a paid workshop around one capital decision and an existing planning packet."
            : "Walk through a synthetic case, one proposed module or the full platform."}
        </p>
        <Img
          name={pilot ? "options-lab" : "planning-workshop"}
          alt="Planning illustration"
        />
        <div className="notice">
          <LockKey />
          <p>
            Local concept preview. Nothing is transmitted or saved. Please use
            fictional details to explore the form.
          </p>
        </div>
      </div>
      <div className="form-card">
        {done ? (
          <div
            className="form-result"
            role="status"
            tabIndex="-1"
            ref={resultRef}
          >
            <CheckCircle size={42} />
            <h2>Preview complete.</h2>
            <p>
              Your entries passed the form checks.{" "}
              <strong>Nothing has been sent or saved.</strong> A connected
              service would next arrange manual discovery—not automatic data
              access or a confirmed meeting.
            </p>
            <button className="button" onClick={() => setDone(false)}>
              Back to the form <ArrowRight />
            </button>
            <a className="text-link" href="/demo">
              Explore the simulated case <ArrowRight />
            </a>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <Label>FRONTEND PREVIEW · NO SUBMISSION</Label>
            <h2>
              {pilot
                ? "Plan a workshop"
                : contact
                  ? "Your inquiry"
                  : "Request a walkthrough"}
            </h2>
            <div className="form-row">
              <label>
                Name
                <input required placeholder="Your name" autoComplete="off" />
              </label>
              <label>
                Work email
                <input
                  required
                  type="email"
                  placeholder="you@organization.org"
                  autoComplete="off"
                />
              </label>
            </div>
            <label>
              Organization
              <input
                required
                placeholder="Municipality or organization"
                autoComplete="off"
              />
            </label>
            <div className="form-row">
              <label>
                Your role
                <select required defaultValue="">
                  <option value="" disabled>
                    Select a role
                  </option>
                  <option>Budget / plan owner</option>
                  <option>Day-to-day operator</option>
                  <option>Data / integration owner</option>
                  <option>Consultant</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Engagement channel
                <select defaultValue={params.get("channel") || "municipal"}>
                  <option value="municipal">Municipal planning</option>
                  <option value="consultant">Consultant channel</option>
                  <option value="data">Data / permissions</option>
                </select>
              </label>
            </div>
            <label>
              Area of interest
              <select defaultValue={params.get("module") || "full"}>
                <option value="full">Full platform / not sure yet</option>
                {products.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Current workflow or planning question
              <textarea
                rows="3"
                required
                placeholder="Describe the decision, without sensitive records."
              />
            </label>
            <div className="form-row">
              <label>
                Timeframe
                <select>
                  <option>Exploring</option>
                  <option>Next 3 months</option>
                  <option>3–6 months</option>
                  <option>6–12 months</option>
                  <option>Active plan update</option>
                </select>
              </label>
              <label>
                Jurisdiction / region
                <input placeholder="State, region or jurisdiction" />
              </label>
            </div>
            {pilot && (
              <fieldset>
                <legend>Pilot qualification</legend>
                <p>
                  Confirm roles and permissions in manual discovery. Do not
                  upload records.
                </p>
                {[
                  "Budget owner",
                  "Day-to-day operator",
                  "Data / integration owner",
                  "Existing comparison packet",
                  "GIS / legal permission",
                  "Procurement route",
                ].map((t) => (
                  <label key={t}>
                    {t}
                    <select>
                      <option>Not yet confirmed</option>
                      <option>Identified / available</option>
                      <option>Needs further review</option>
                    </select>
                  </label>
                ))}
                <label>
                  Paid workshop appetite
                  <select>
                    <option>To discuss</option>
                    <option>Budget identified, subject to approval</option>
                    <option>No budget currently identified</option>
                  </select>
                </label>
              </fieldset>
            )}
            <label className="check-label">
              <input
                type="checkbox"
                checked={wait}
                onChange={(e) => setWait(e.target.checked)}
              />
              Explore optional waitlist fields
            </label>
            {wait && (
              <div className="form-row">
                <label>
                  Sector
                  <input placeholder="Public infrastructure" />
                </label>
                <label>
                  Site count
                  <input type="number" min="0" placeholder="Optional" />
                </label>
              </div>
            )}
            <label className="check-label">
              <input required type="checkbox" />I understand this preview does
              not send a request or grant data access.
            </label>
            <label className="check-label">
              <input type="checkbox" />
              In a connected service, I would consent to follow-up about this
              inquiry.
            </label>
            <label className="check-label">
              <input type="checkbox" />
              Optional: I would like marketing updates.
            </label>
            <button className="button submit">
              Preview request <ArrowRight />
            </button>
            <small>
              Separate consent choices ·{" "}
              <a href="/legal/privacy">Privacy and data handling</a>
            </small>
          </form>
        )}
      </div>
    </section>
  );
}
export function Access() {
  return (
    <section className="section intake">
      <div className="intake-story">
        <Label>WORKSPACE ACCESS</Label>
        <h1>
          A clearer record.
          <br />A considered next step.
        </h1>
        <p>
          This concept has no connected authentication. Explore the demo without
          entering credentials.
        </p>
        <Img name="regional-coast" alt="Illustrated neighborhood" />
      </div>
      <div className="form-card access-card">
        <LockKey size={34} />
        <h2>Workspace sign in</h2>
        <p>Production access is not available in this concept preview.</p>
        <div className="notice">No passwords or credentials are collected.</div>
        <A to="/demo">Open the synthetic demo</A>
        <A secondary>Request a walkthrough</A>
        <a href="/contact" className="text-link">
          Access help <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
export function Legal({ type }) {
  return (
    <section className="section article-width legal">
      <Label>DRAFT NOTICE · CONCEPT PREVIEW</Label>
      <h1>
        {type === "privacy"
          ? "Privacy and data handling"
          : "Terms of this concept preview"}
      </h1>
      <p>
        Updated 26 October 2026. This notice describes the local demonstration.
        Public launch requires review against the actual organization, hosting
        and services.
      </p>
      <h2>Local preview only</h2>
      <p>
        Forms validate entries in browser memory; they do not send or save a
        lead. No marketing analytics, advertising pixels or form backend is
        connected. Demo records are synthetic. Do not enter credentials,
        sensitive GIS or operational records.
      </p>
      <h2>Illustrative planning</h2>
      <p>
        Outputs are proposed decision-support artifacts, not engineering advice,
        safety guarantees, grant eligibility decisions or permission to control
        infrastructure. Prices are hypotheses; no payment or agreement is
        created here.
      </p>
      <h2>Future connected services</h2>
      <p>
        Before collecting real leads or records, define the responsible
        organization, retention, deletion process, contact route and consent
        requirements. Real-data evaluations need permissions, a paid SOW, named
        roles and an agreed rubric.
      </p>
      <A to="/contact">Contact path</A>
    </section>
  );
}
export function Accessibility() {
  return (
    <section className="section article-width legal">
      <Label>ACCESSIBILITY</Label>
      <h1>A readable path through the story.</h1>
      <p>
        The interface includes labeled controls, keyboard navigation, visible
        focus, text alternatives, mobile layouts and reduced-motion support.
        Required information is available without hover or animation.
      </p>
      <h2>Motion preferences</h2>
      <p>
        With reduced motion enabled, smooth scrolling, parallax and entrance
        animations are disabled. Controls and alternatives remain available.
      </p>
      <h2>Maps and evidence</h2>
      <p>
        Illustrative maps have text context and a source register. This concept
        is not a certification of accessibility compliance.
      </p>
      <A to="/contact">Contact</A>
    </section>
  );
}
