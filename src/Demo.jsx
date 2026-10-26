import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Stack,
  MapTrifold,
  CheckCircle,
  WarningCircle,
  Clock,
  Download,
  ArrowCounterClockwise,
  FileText,
  Users,
} from "@phosphor-icons/react";
import { Img, Label, DemoTag, A, tabKeys } from "./ui";
import { sources, alternatives } from "./data";
import { layerDetails } from "./Home";
import { PilotContext, recordMeta } from "./PlanningDetails";
const initialRecords = [
  ["HP-001", "Flood source registered", "Completed", "S01"],
  ["HP-002", "School and road inventoried", "Completed", "S02"],
  ["HP-003", "Baseline packet versioned", "Completed", "S01, S02"],
  ["HP-004", "Alternative concepts documented", "Completed", "S01, S02"],
  ["HP-005", "Utility topology confirmation", "Pending", "S03"],
  ["HP-006", "Accessible walking comment", "Pending", "S04 / C01"],
  ["HP-007", "Plan-owner review", "Pending", "S01–S05"],
  ["HP-008", "Culvert survey unavailable", "Blocked", "Missing input"],
  ["HP-009", "Engineering feasibility unresolved", "Blocked", "Missing input"],
  ["HP-010", "Automatic road closure", "Rejected", "Outside authority"],
];
export default function Demo() {
  const initial = new URLSearchParams(location.search).get("view");
  const [tab, setTab] = useState(
    ["evidence", "review"].includes(initial) ? initial : "overview",
  );
  const [layer, setLayer] = useState("Flood");
  const [selected, setSelected] = useState("S01");
  const [decision, setDecision] = useState("Pending");
  const [draftDecision, setDraftDecision] = useState("Pending");
  const [opened, setOpened] = useState(7);
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");
  const [downloaded, setDownloaded] = useState(false);
  const d = layerDetails[layer];
  const source = sources.find((s) => s.id === selected);
  const records = initialRecords.map((r) =>
    r[0] === "HP-007" ? [r[0], r[1], decision, r[3]] : r,
  );
  function exportPacket() {
    const payload = {
      label: "DEMO / SIMULATED DATA — NOT FOR OPERATIONAL USE",
      version: "0.1",
      case: "HP-DEMO-001",
      municipality: "Fictional Alder Reach",
      neighborhood: "Fictional Merebank",
      decisionQuestion:
        "Which concepts should proceed to further investigation?",
      sources,
      alternatives,
      records: records.map((r, i) => ({
        id: r[0],
        label: "DEMO / SIMULATED DATA",
        item: r[1],
        state: r[2],
        source: r[3],
        owner: recordMeta[i][0],
        timestamp: recordMeta[i][1],
        annotation: recordMeta[i][2],
      })),
      review: {
        reviewer: "Jules Hart (fictional)",
        decision,
        note: note || "No reviewer annotation entered.",
        nextAction:
          "Request missing survey context. No external action occurs.",
      },
      limitations: [
        "No real geography or records",
        "Exposure is not vulnerability",
        "No engineering, grant or project approval",
        "No infrastructure control",
      ],
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "HazardPath-SIMULATED-planning-packet.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloaded(true);
  }
  return (
    <div className="demo-workspace">
      <div className="demo-top">
        <div>
          <Label>INTERACTIVE CONCEPT / CLIMATE DESK → CLIMATE REPORT</Label>
          <h1>Merebank school access</h1>
          <p>Fictional Alder Reach · Case HP-DEMO-001 · Draft v0.1</p>
        </div>
        <DemoTag />
      </div>
      <div className="demo-notice">
        <WarningCircle />
        <span>
          DEMO / SIMULATED DATA · Explore invented records. Changes stay in
          memory and reset on reload. No upload, live monitoring or external
          action.
        </span>
      </div>
      <div className="workspace-bar">
        <div role="tablist" aria-label="Planning case views">
          {[
            ["overview", MapTrifold, "Case overview"],
            ["evidence", Stack, "Sources & evidence"],
            ["review", Users, "Review & export"],
          ].map(([id, Icon, t]) => (
            <button
              key={id}
              role="tab"
              id={"case-tab-" + id}
              aria-controls={"case-panel-" + id}
              tabIndex={tab === id ? 0 : -1}
              onKeyDown={(e) =>
                tabKeys(e, ["overview", "evidence", "review"], tab, setTab)
              }
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={tab === id ? "active" : ""}
            >
              <Icon size={20} />
              {t}
            </button>
          ))}
        </div>
        <a className="text-link" href="/resources/example-capital-memo">
          Read the memo <ArrowUpRight />
        </a>
      </div>
      {tab === "overview" && (
        <section
          role="tabpanel"
          id="case-panel-overview"
          aria-labelledby="case-tab-overview"
          className="workspace-overview"
        >
          <div className="workspace-map">
            <Img
              name={d.image}
              alt="Fictional Merebank source illustration"
              eager
            />
            <div className="workspace-layer-tabs">
              {Object.keys(layerDetails).map((k) => (
                <button
                  key={k}
                  onClick={() => setLayer(k)}
                  className={k === layer ? "active" : ""}
                  aria-pressed={k === layer}
                >
                  {k}
                </button>
              ))}
            </div>
            <span className="map-place">MEREBANK / SYNTHETIC GEOGRAPHY</span>
          </div>
          <div className="workspace-context">
            <Label>THE PLANNING QUESTION</Label>
            <h2>What should we investigate next?</h2>
            <p>
              Compare concepts for school access before the next plan update. No
              preferred construction option is established.
            </p>
            <div className="context-box" aria-live="polite">
              <h3>{d.title}</h3>
              <p>{d.body}</p>
              <span className="status blocked">{d.note}</span>
            </div>
            <dl>
              <div>
                <dt>Accountable owner</dt>
                <dd>Mira Vale</dd>
              </div>
              <div>
                <dt>Day-to-day operator</dt>
                <dd>Theo Lane</dd>
              </div>
              <div>
                <dt>Data / integration owner</dt>
                <dd>Nia Reed</dd>
              </div>
              <div>
                <dt>Reviewer</dt>
                <dd>Jules Hart</dd>
              </div>
            </dl>
            <small>All people and records are fictional.</small>
            <button className="button" onClick={() => setTab("evidence")}>
              Follow the evidence <ArrowRight />
            </button>
          </div>
          <div className="workspace-options">
            {alternatives.map((a, i) => (
              <article key={a.name}>
                <Img name={a.image} alt={a.name} />
                <div>
                  <Label>A{i} / ILLUSTRATIVE CONCEPT</Label>
                  <h3>{a.name}</h3>
                  <p>{a.assumption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      {tab === "evidence" && (
        <section
          role="tabpanel"
          id="case-panel-evidence"
          aria-labelledby="case-tab-evidence"
          className="workspace-evidence"
        >
          <div className="source-list">
            <Label>THE SOURCE REGISTER / 5 RECORDS</Label>
            <h2>Keep the origin visible.</h2>
            {sources.map((s) => (
              <button
                key={s.id}
                aria-pressed={selected === s.id}
                className={
                  "source-item " + (selected === s.id ? "selected" : "")
                }
                onClick={() => setSelected(s.id)}
              >
                <Stack size={24} />
                <span>
                  <small>
                    {s.id} · {s.date}
                  </small>
                  <strong>{s.name}</strong>
                </span>
                <span
                  className={
                    "status " +
                    (s.state === "Reviewed" ? "completed" : "pending")
                  }
                >
                  {s.state}
                </span>
                <ArrowUpRight />
              </button>
            ))}
          </div>
          <article className="source-detail" aria-live="polite">
            <Img name="layers" alt="Illustrative stacked source layers" />
            <Label>{source.id} / SYNTHETIC INPUT</Label>
            <h2>{source.name}</h2>
            <p>{source.detail}</p>
            <dl>
              <div>
                <dt>Version date</dt>
                <dd>{source.date}</dd>
              </div>
              <div>
                <dt>Review state</dt>
                <dd>{source.state}</dd>
              </div>
              <div>
                <dt>Source owner</dt>
                <dd>Nia Reed · fictional</dd>
              </div>
              <div>
                <dt>Permitted use</dt>
                <dd>Isolated synthetic demonstration</dd>
              </div>
            </dl>
            <div className="notice">
              <WarningCircle />
              <p>
                Not an operational dataset. Scenario assumptions and uncertainty
                remain visible in every export.
              </p>
            </div>
            <button className="button" onClick={() => setTab("review")}>
              Continue to review <ArrowRight />
            </button>
          </article>
        </section>
      )}
      {tab === "review" && (
        <section
          role="tabpanel"
          id="case-panel-review"
          aria-labelledby="case-tab-review"
          className="workspace-review"
        >
          <div className="review-records">
            <Label>CASE RECORD / 10 ITEMS</Label>
            <h2>The next action needs an owner.</h2>
            <div className="status-counts">
              {["Completed", "Pending", "Blocked", "Rejected"].map((s) => (
                <div key={s}>
                  <strong>{records.filter((r) => r[2] === s).length}</strong>
                  <span>{s}</span>
                </div>
              ))}
            </div>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Record</th>
                    <th>Planning item</th>
                    <th>State</th>
                    <th>Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((r, i) => (
                    <tr key={r[0]}>
                      <td>
                        <button
                          className="record-open"
                          onClick={() => setOpened(i)}
                        >
                          {r[0]} <ArrowUpRight size={12} />
                        </button>
                        <small className="row-demo">DEMO</small>
                      </td>
                      <td>{r[1]}</td>
                      <td>
                        <span className={"status " + r[2].toLowerCase()}>
                          {r[2]}
                        </span>
                      </td>
                      <td>{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <article className="opened-record" aria-live="polite">
              <Label>OPENED RECORD / {records[opened][0]} · DEMO</Label>
              <h3>{records[opened][1]}</h3>
              <p>{recordMeta[opened][2]}</p>
              <dl>
                <div>
                  <dt>Owner · fictional</dt>
                  <dd>{recordMeta[opened][0]}</dd>
                </div>
                <div>
                  <dt>Illustrative timestamp</dt>
                  <dd>{recordMeta[opened][1]}</dd>
                </div>
                <div>
                  <dt>Source reference</dt>
                  <dd>{records[opened][3]}</dd>
                </div>
                <div>
                  <dt>State</dt>
                  <dd>{records[opened][2]}</dd>
                </div>
              </dl>
            </article>
          </div>
          <aside className="review-panel">
            <Users size={30} />
            <Label>JULES HART / SIMULATED REVIEWER</Label>
            <h2>Review the packet</h2>
            <p>
              Record a human review state. This does not authorize a project or
              trigger any external action.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDecision(draftDecision);
                setMessage("Review state updated in this browser only.");
              }}
            >
              <label>
                Plan-owner review state
                <select
                  value={draftDecision}
                  onChange={(e) => {
                    setDraftDecision(e.target.value);
                    setMessage("");
                  }}
                >
                  <option>Pending</option>
                  <option>Blocked</option>
                  <option>Completed</option>
                  <option>Rejected</option>
                </select>
              </label>
              <label>
                Reviewer annotation
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows="3"
                  placeholder="Use fictional notes only."
                />
              </label>
              <button className="button">
                Apply review state <CheckCircle />
              </button>
            </form>
            <p className="live-message" role="status">
              {message}
            </p>
            <div className="next-action">
              <Label>NEXT ACTION</Label>
              <p>
                Theo Lane requests missing survey context. Illustrative due
                date: 20 Oct 2026.
              </p>
            </div>
            <button className="button secondary" onClick={exportPacket}>
              <Download />
              Export simulated packet
            </button>
            {downloaded && (
              <small role="status">
                Labeled JSON export created in your browser.
              </small>
            )}
            <button
              className="text-link reset"
              onClick={() => {
                setDecision("Pending");
                setDraftDecision("Pending");
                setNote("");
                setMessage("Restored the original simulated review.");
                setDownloaded(false);
              }}
            >
              <ArrowCounterClockwise />
              Reset demo review
            </button>
          </aside>
        </section>
      )}
      <PilotContext />
      <div className="workspace-bottom">
        <span>
          <CheckCircle />
          Synthetic data only
        </span>
        <span>
          <Users />
          Human review required
        </span>
        <a href="/trust">
          Read the boundaries <ArrowUpRight />
        </a>
      </div>
    </div>
  );
}
