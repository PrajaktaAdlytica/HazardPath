import React from "react";
import {
  WarningCircle,
  Clock,
  FileText,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { Label, DemoTag, Img, PageHero, A } from "./ui";
export const recordMeta = [
  [
    "Theo Lane",
    "03 Oct 2026, 09:00",
    "Registered S01 with its scenario limit.",
  ],
  [
    "Nia Reed",
    "03 Oct 2026, 11:20",
    "Linked SCH-01 and RD-01; condition evidence remains missing.",
  ],
  [
    "Theo Lane",
    "05 Oct 2026, 10:00",
    "Froze synthetic packet v0.1 as an illustrative comparator.",
  ],
  [
    "Theo Lane",
    "09 Oct 2026, 15:30",
    "Recorded A0, A1 and A2 with unresolved assumptions.",
  ],
  [
    "Nia Reed",
    "10 Oct 2026, 09:30",
    "UT-01 relation is unverified; request source-owner confirmation.",
  ],
  [
    "Jules Hart",
    "10 Oct 2026, 14:15",
    "C01: preserve accessible walking access. Response pending.",
  ],
  [
    "Mira Vale",
    "16 Oct 2026, 10:00",
    "Review completeness and next investigation; no construction approval.",
  ],
  [
    "Nia Reed",
    "14 Oct 2026, 11:00",
    "Missing culvert survey prevents drainage assessment.",
  ],
  [
    "Mira Vale",
    "15 Oct 2026, 16:00",
    "Feasibility and public process must be resolved before real works.",
  ],
  [
    "Jules Hart",
    "16 Oct 2026, 09:45",
    "Rejected automatic road closure: outside scope and authority.",
  ],
];
export function PilotContext() {
  return (
    <section className="pilot-context">
      <div className="pilot-facts">
        <Label>ILLUSTRATIVE PILOT STAGE / QUALIFICATION</Label>
        <h3>
          A proposed engagement,
          <br />
          with explicit gates.
        </h3>
        <dl>
          {[
            ["Plan-cycle owner", "Mira Vale · fictional"],
            ["Workshop scope", "One school-access capital question"],
            ["GIS sharing agreement", "Not authorized / synthetic only"],
            ["Procurement route", "Not confirmed"],
            ["Paid engagement", "Not signed · no revenue"],
            ["Next task", "Theo Lane · 20 Oct 2026"],
          ].map(([t, d]) => (
            <div key={t}>
              <dt>{t}</dt>
              <dd>{d}</dd>
            </div>
          ))}
        </dl>
        <DemoTag />
      </div>
      <div className="case-timeline">
        <Label>ILLUSTRATIVE ACTIVITY TIMELINE</Label>
        {[
          [
            "03 OCT",
            "Source and asset inventory created",
            "S01 and S02 · synthetic inputs",
          ],
          [
            "10 OCT",
            "Public access question recorded",
            "C01 · response pending",
          ],
          [
            "16 OCT",
            "Control recommendation rejected",
            "HP-010 · no intervention authority",
          ],
          [
            "20 OCT",
            "Next evidence request due",
            "Theo Lane · no external action",
          ],
        ].map(([d, t, b]) => (
          <div className="timeline-item" key={d}>
            <Clock />
            <span>{d}</span>
            <div>
              <strong>{t}</strong>
              <p>{b}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export function ValidationPlaybook() {
  return (
    <>
      <PageHero
        label="VALIDATION PLAYBOOK / PROPOSED RESEARCH"
        title="Earn the next step through evidence."
        body="The acquisition, evaluation and expansion hypotheses behind the concept. No campaign results or customer commitments are claimed."
        image="planning-workshop"
      >
        <A to="/evaluation">View the pilot scorecard</A>
      </PageHero>
      <section className="section split-section sage">
        <div>
          <Label>FIND THE ACCOUNTABLE BUYER</Label>
          <h2>Start with an active planning cycle.</h2>
          <p>
            Regional planning councils, municipal associations, grant writers,
            insurers and civil-engineering firms are proposed acquisition
            channels. The first contracting buyer remains the municipal plan
            owner. Consultant demand is recorded separately.
          </p>
          <p>
            Public RAPT and toolkit resources, existing mitigation plans,
            engineering consultants and GIS departments are meaningful
            substitutes. Private risk products already exist. Differentiation
            and willingness to pay remain unverified.
          </p>
        </div>
        <Img
          name="heat-district"
          alt="Illustrative municipal service context"
        />
      </section>
      <section className="section">
        <Label>PROPOSED LINKEDIN MESSAGE TESTS</Label>
        <h2>Two truthful starting points.</h2>
        <div className="ad-grid">
          <article>
            <Label>VARIANT A / THE BUYER'S JOB</Label>
            <h3>Your hazard map is not your capital plan.</h3>
            <p>
              Connect hazard layers, asset context and public input around one
              planning decision. Explore a fictional school-access case.
            </p>
            <a href="/solutions/municipal-plan-updates" className="text-link">
              Role-specific destination <ArrowUpRight />
            </a>
          </article>
          <article>
            <Label>VARIANT B / THE ARTIFACT</Label>
            <h3>Follow the reasoning behind a priority.</h3>
            <p>
              A source-linked capital memo, visible assumptions and an
              accountable next step. Inspect the synthetic example.
            </p>
            <a href="/resources/example-capital-memo" className="text-link">
              Artifact destination <ArrowUpRight />
            </a>
          </article>
        </div>
        <div className="notice">
          <WarningCircle />
          <p>
            Proposed test only. Agree a small spend cap, duration and pause rule
            before any campaign. Record targeting, spend, clicks, qualified
            conversations and consented requests. No ad is launched here and no
            results are simulated as achieved.
          </p>
        </div>
      </section>
      <section className="section split-section sky">
        <div>
          <Label>EXPANSION IS A HYPOTHESIS</Label>
          <h2>
            One jurisdiction.
            <br />
            Then test what travels.
          </h2>
          <p>
            A recurring evidence workflow might expand to regional or agency
            portfolios and plan-update monitoring if paid evaluations improve
            decisions beyond existing work.
          </p>
          <p>
            No numerical TAM is established. Size later from independently
            verified buyers × tested annual contract value × reachable share,
            net of service and integration costs. Grant pools, disaster losses
            and infrastructure capital spend are not software revenue.
          </p>
        </div>
        <Img name="plan-progress" alt="Illustrated connected region" />
      </section>
      <section className="section">
        <Label>ANALYTICS PLAN / NOT CONNECTED</Label>
        <h2>Count commitments with context.</h2>
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>When it would occur</th>
                <th>Interpretation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["page_view", "Page loaded", "Reach, not demand"],
                ["offer_card_view", "Offer visible", "Scope interest"],
                ["demo_open", "Demo intentionally opened", "Exploration only"],
                ["pilot_cta", "Paid-pilot CTA selected", "Intent signal"],
                [
                  "form_start",
                  "First form interaction",
                  "Unqualified interest",
                ],
                [
                  "form_submit",
                  "Consented request received by service",
                  "Manual qualification needed",
                ],
                [
                  "meeting_booked",
                  "Verified booking from connected service",
                  "Not a paid commitment",
                ],
              ].map((r) => (
                <tr key={r[0]}>
                  {r.map((v) => (
                    <td key={v}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Record approved UTM source/campaign, page and offer ID; exclude email,
          names, free text and operational data from analytics. Deduplicate
          contacts inside an authorized CRM, honor consent and deletion
          requests, and count budget owner, operator, permitted dataset and
          willingness to pay separately. Local form completion is not a real
          form_submit.
        </p>
      </section>
      <section className="section split-section sage">
        <div>
          <Label>RESEARCH LIMITS & FUTURE TRACKING</Label>
          <h2>Keep the unanswered questions visible.</h2>
          <p>
            Evidence is stronger for public tools and adjacent offerings than
            for HazardPath demand or decision improvement. No customer
            interviews, signed commitments, historical backtests, integration
            audits, accuracy studies or independent ROI validation have been
            completed.
          </p>
          <p>
            Future internal tracking includes idea 40, brand verification,
            buyer, operator, integration owner, hypothesis, five offer IDs,
            price hypotheses, source links, consent, interview date, dataset
            permissions, comparator/evaluator/threshold, SOW, safety boundary,
            regulatory review, demo URL, screenshot review, traffic
            cohort/spend, qualified meetings, decision and next action. No
            Notion access is part of this prototype.
          </p>
          <p>
            HazardPath is the selected working brand. Domain ownership and
            trademark clearance are not established by this site. Public
            research is predominantly US-focused and requires local
            verification.
          </p>
        </div>
        <Img name="grant-evidence" alt="Illustrative evidence packet" />
      </section>
    </>
  );
}
export function DataDictionary() {
  return (
    <>
      <PageHero
        label="SYNTHETIC DEMO / DATA DICTIONARY"
        title="A record that explains itself."
        body="The fields behind the public concept case, source record and exportable evidence packet."
        image="layers"
      >
        <A to="/demo">Open the demo</A>
      </PageHero>
      <section className="section">
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Meaning</th>
                <th>Example / constraint</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "case_id",
                  "Stable planning-question identifier",
                  "HP-DEMO-001",
                ],
                [
                  "account",
                  "Invented jurisdiction and neighborhood",
                  "Alder Reach / Merebank",
                ],
                [
                  "asset_id",
                  "Fictional school, road or utility",
                  "SCH-01 / RD-01 / UT-01",
                ],
                [
                  "source_id + source_date",
                  "Provenance and version context",
                  "S01 / 01 Oct 2026",
                ],
                [
                  "scenario_limit",
                  "What the input does not establish",
                  "Exposure only; no forecast certainty",
                ],
                [
                  "owner + role",
                  "Person accountable for a record",
                  "Mira Vale / plan owner; fictional",
                ],
                [
                  "timestamp",
                  "Illustrative record chronology",
                  "16 Oct 2026, 10:00; not live",
                ],
                [
                  "missingness",
                  "Absent inputs or unresolved assumptions",
                  "Culvert survey / utility topology",
                ],
                [
                  "annotation",
                  "Analyst or reviewer explanation",
                  "Request evidence; no external action",
                ],
                [
                  "alternative",
                  "Comparable concept, including baseline",
                  "A0 current / A1 access / A2 drainage",
                ],
                [
                  "comment",
                  "Public question and disposition",
                  "C01 accessible walking access; pending",
                ],
                [
                  "review_state",
                  "Local workflow status",
                  "Completed / Pending / Blocked / Rejected",
                ],
                [
                  "next_action",
                  "Named owner and illustrative due date",
                  "Theo Lane / 20 Oct 2026",
                ],
                [
                  "pilot_stage",
                  "Non-commercial demonstration state",
                  "Qualification; SOW not signed",
                ],
                [
                  "export_label",
                  "Persistent provenance boundary",
                  "DEMO / SIMULATED DATA",
                ],
              ].map((r) => (
                <tr key={r[0]}>
                  {r.map((v) => (
                    <td key={v}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          All data is invented. Inputs and changes remain in browser memory. A
          JSON export is a reversible download with the synthetic label; no
          writeback or integration occurs.
        </p>
      </section>
    </>
  );
}
