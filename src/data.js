export const products = [
  {
    slug: "climate-desk",
    name: "Climate Desk",
    short: "Sources, clearly connected.",
    job: "Know where every planning input came from.",
    desc: "Organize hazard layers and asset records with source dates, license context and visible gaps.",
    image: "data-network",
    price: "$5,000",
    unit: "per jurisdiction",
    output: "Source-provenance hazard and asset inventory",
    steps: [
      [
        "Collect source context",
        "Keep source owner, version, scenario and permitted use alongside every layer.",
      ],
      [
        "Make gaps visible",
        "Expose missing attributes and conflicting dates before they become assumptions.",
      ],
      [
        "Review the inventory",
        "Deliver an annotated inventory of what is known, unknown and ready for review.",
      ],
    ],
    outputImage: "layers",
  },
  {
    slug: "climate-review",
    name: "Climate Review",
    short: "A neighborhood in context.",
    job: "See the dependencies behind an exposed asset.",
    desc: "Connect school access, roads and utilities with local vulnerability and community context.",
    image: "heat-district",
    price: "$4,000",
    unit: "per neighborhood workshop",
    output: "Neighborhood vulnerability and dependency assessment",
    steps: [
      [
        "Locate exposure",
        "A mapped overlap does not establish damage or failure probability.",
      ],
      [
        "Understand dependencies",
        "Trace documented service relationships and flag assumptions for the data owner.",
      ],
      [
        "Add local knowledge",
        "Record sensitivity, adaptive capacity and equity questions with local reviewers.",
      ],
    ],
    outputImage: "utility-grid",
  },
  {
    slug: "climate-proof",
    name: "Climate Proof",
    short: "Every path has a tradeoff.",
    job: "Compare alternatives without hiding uncertainty.",
    desc: "Put adaptation concepts, assumptions and unresolved questions side by side, including the current approach.",
    image: "options-lab",
    price: "$3,000",
    unit: "per project memo",
    output: "Adaptation-option comparison and options memo",
    steps: [
      [
        "Frame the decision",
        "Agree the question and existing baseline with the accountable plan owner.",
      ],
      [
        "Compare alternatives",
        "Use the same evidence to compare the current approach, access-route and drainage concepts.",
      ],
      [
        "Document tradeoffs",
        "Preserve assumptions, missing engineering information and public-review requirements.",
      ],
    ],
    outputImage: "access",
  },
  {
    slug: "climate-signal",
    name: "Climate Signal",
    short: "A narrative with evidence.",
    job: "Give every project statement an evidence trail.",
    desc: "Prepare a draft grant narrative and evidence checklist with explicit missingness and source links.",
    image: "grant-evidence",
    price: "$2,500",
    unit: "per application evidence pack",
    output: "Grant-ready project narrative and evidence checklist",
    steps: [
      [
        "Set application context",
        "Identify the program and dated guidance that apply to the project.",
      ],
      [
        "Link the evidence",
        "Connect draft statements to sources and an explicit missing-evidence checklist.",
      ],
      [
        "Review before submission",
        "The agency owns final review. A prepared pack does not establish eligibility or guarantee an award.",
      ],
    ],
    outputImage: "memo",
  },
  {
    slug: "climate-report",
    name: "Climate Report",
    short: "Progress people can follow.",
    job: "Keep the plan and public record connected.",
    desc: "Track milestones, public comments, reviewer decisions and the next accountable action.",
    image: "plan-progress",
    price: "$1,000",
    unit: "per month / jurisdiction",
    output: "Plan-update progress and public-comment traceability",
    steps: [
      [
        "Track the plan cycle",
        "Assign an owner and dated next action to each milestone.",
      ],
      [
        "Connect comments to changes",
        "Keep each comment, response and revision connected; open and rejected comments remain visible.",
      ],
      [
        "Preserve the record",
        "Export a versioned planning record while existing public processes govern decisions.",
      ],
    ],
    outputImage: "regional-coast",
  },
];

export const alternatives = [
  {
    name: "Current approach",
    image: "current",
    head: "Understand the starting point.",
    body: "Retain the current configuration while documenting the gaps in the existing planning packet.",
    assumption: "Existing asset condition still needs confirmation.",
  },
  {
    name: "Access-route concept",
    image: "access",
    head: "Explore another way through.",
    body: "Investigate another school approach, including accessible walking connections and service continuity.",
    assumption: "Engineering feasibility and public review remain unresolved.",
  },
  {
    name: "Drainage concept",
    image: "drainage",
    head: "Examine the wider system.",
    body: "Investigate drainage improvements without implying a preferred construction decision.",
    assumption: "A culvert survey and downstream assessment are needed.",
  },
];

export const sources = [
  {
    id: "S01",
    name: "Illustrative flood scenario",
    date: "01 Oct 2026",
    state: "Reviewed",
    detail:
      "Synthetic geometry. Indicates exposure only, not forecast certainty or expected damage.",
  },
  {
    id: "S02",
    name: "Illustrative school & road register",
    date: "03 Oct 2026",
    state: "Reviewed",
    detail:
      "Fictional SCH-01 school and RD-01 approach. Asset condition is not established.",
  },
  {
    id: "S03",
    name: "Illustrative utility relation",
    date: "01 Sep 2026",
    state: "Needs review",
    detail: "UT-01 dependency needs confirmation from the data owner.",
  },
  {
    id: "S04",
    name: "Illustrative community context",
    date: "10 Oct 2026",
    state: "Open question",
    detail:
      "Fictional comment C01 asks whether accessible walking access is maintained.",
  },
  {
    id: "S05",
    name: "Illustrative heat scenario",
    date: "02 Oct 2026",
    state: "Needs review",
    detail:
      "A separate scenario; shade, condition and sensitivity evidence remain absent.",
  },
];

export const faqs = [
  [
    "Is HazardPath a live platform?",
    "HazardPath is a research-stage concept. This website demonstrates proposed workflows with synthetic data. No production connectors, live monitoring or infrastructure controls are available.",
  ],
  [
    "Who is the first engagement for?",
    "A municipal resilience or hazard-mitigation officer responsible for a plan update, with a named day-to-day operator and data/integration owner. Consultants follow a separate channel.",
  ],
  [
    "Can I upload agency GIS data?",
    "No. The public demo accepts no production or sensitive records. A real-data evaluation requires agreed scope, legal and procurement permission, licensing review and a named data owner.",
  ],
  [
    "Does exposure establish vulnerability?",
    "No. Local sensitivity, adaptive capacity and dependencies need evidence. Missing information remains explicit.",
  ],
  [
    "How do the proposed prices work?",
    "The five offers have separate price hypotheses, not verified market rates or an active checkout. Scope is tested through interviews and a conditional paid SOW.",
  ],
  [
    "Can this approve projects or secure grants?",
    "No. Engineering, permitting, capital votes and public process govern works. Draft evidence does not establish grant eligibility or guarantee an award.",
  ],
];

export const contentPages = {
  "/why-change": {
    label: "THE PLANNING PROBLEM",
    title: "Exposure is a starting point. Decisions need context.",
    body: "Hazard maps, asset GIS and community knowledge are often held in separate planning artifacts.",
    image: "field-survey",
    sections: [
      [
        "Connect the local context",
        "A hazard layer cannot explain asset condition, service dependencies or community priorities.",
        "heat-district",
      ],
      [
        "Build on existing work",
        "Public resources, engineering consultants, GIS departments and existing mitigation plans already do important work. HazardPath proposes connecting their evidence and review history.",
        "planning-workshop",
      ],
      [
        "Test the difference",
        "Compare the proposed packet with existing agency work. Decision improvement remains a hypothesis.",
        "options-lab",
      ],
    ],
  },
  "/solutions": {
    label: "PLANNING CONTEXTS",
    title: "Start with the decision your agency needs to make.",
    body: "Connect the evidence, people and public process around one planning question.",
    image: "terrain-clear",
    sections: [
      [
        "Municipal plan updates",
        "For the officer accountable for a plan cycle, supported by a named operator and data owner.",
        "planning-workshop",
        "/solutions/municipal-plan-updates",
      ],
      [
        "Infrastructure priorities",
        "Explore school, road and utility dependencies in a specific capital decision.",
        "drainage",
        "/solutions/infrastructure-prioritization",
      ],
      [
        "Consultant channel",
        "A distinct agency-led engagement. Consultant interest does not count as municipal buyer demand.",
        "grant-evidence",
        "/partners/consultants",
      ],
    ],
  },
  "/solutions/municipal-plan-updates": {
    label: "FOR MUNICIPAL PLAN OWNERS",
    title: "Prepare the next update with a traceable record.",
    body: "A shared starting point for sources, alternatives and public input.",
    image: "planning-workshop",
    sections: [
      [
        "Bring an accountable team",
        "Name the budget owner, operator, reviewer and data/integration owner for an active planning cycle.",
        "heat-district",
      ],
      [
        "Start with an existing packet",
        "Freeze a historical comparator and evaluation rubric before a paid workshop.",
        "grant-evidence",
      ],
      [
        "Keep public process intact",
        "Documentation supports agency decisions. It does not replace procurement, engineering or public participation.",
        "plan-progress",
      ],
    ],
  },
  "/solutions/infrastructure-prioritization": {
    label: "PUBLIC INFRASTRUCTURE",
    title: "Put the dependencies in the same decision.",
    body: "School access, roads and utilities form a connected service context.",
    image: "drainage",
    sections: [
      [
        "Follow the school approach",
        "A synthetic school access route overlaps an illustrative flood scenario. This establishes exposure only.",
        "terrain-clear",
      ],
      [
        "Compare concepts",
        "The current approach, access-route concept and drainage concept each have unresolved assumptions.",
        "options-lab",
      ],
      [
        "Resolve the evidence gap",
        "A culvert survey and utility topology need confirmation before further assessment.",
        "field-survey",
      ],
    ],
  },
  "/partners/consultants": {
    label: "SEPARATE CONSULTANT CHANNEL",
    title: "A clearer handoff for agency-led planning.",
    body: "Consultants can support the workflow while the agency retains accountability.",
    image: "planning-workshop",
    sections: [
      [
        "Clarify who contracts",
        "Agency and consultant procurement are different. Confirm the budget owner and dataset authority.",
        "data-network",
      ],
      [
        "Make the handoff traceable",
        "Connect assumptions, sources and reviewer context for the receiving agency.",
        "grant-evidence",
      ],
      [
        "Discuss the engagement",
        "Consultant leads are classified separately from municipal demand and paid commitments.",
        "field-survey",
        "/contact?channel=consultant",
      ],
    ],
  },
  "/platform/data-and-integrations": {
    label: "DATA & PERMISSIONS",
    title: "Plan the handoff before connecting systems.",
    body: "The public preview is isolated and synthetic. Real-data work starts with permission.",
    image: "data-network",
    sections: [
      [
        "Public and agency sources",
        "Record ownership, licenses, sensitivity, scenario dates and permitted use. Public availability does not establish all reuse rights.",
        "layers",
      ],
      [
        "Name the integration owner",
        "Agree the authorized dataset, access method and handling before a pilot. No production connectors are active here.",
        "field-survey",
      ],
      [
        "Changing evidence, visible limits",
        "Version changing scenarios and acknowledge model uncertainty. No live writeback, dispatch or external integration exists in this demo.",
        "plan-progress",
      ],
    ],
  },
  "/company": {
    label: "ABOUT HAZARDPATH",
    title: "Make the reasoning behind priorities visible.",
    body: "A research-stage climate adaptation planning concept for municipal resilience in energy, industry and public infrastructure.",
    image: "field-survey",
    sections: [
      [
        "Our vision",
        "Agencies can document tradeoffs, uncertainty and public input behind infrastructure priorities.",
        "terrain-clear",
      ],
      [
        "Our approach",
        "Connect fragmented evidence to a human-reviewed decision. Evaluate one planning question against existing work.",
        "planning-workshop",
      ],
      [
        "Where we are today",
        "A concept website and isolated synthetic demo. No customer commitments, product ROI or production deployments are claimed.",
        "options-lab",
      ],
    ],
  },
  "/trust": {
    label: "TRUST & LIMITATIONS",
    title: "Clear evidence. Explicit responsibility.",
    body: "What the concept shows, what it excludes and who must review the work.",
    image: "data-network",
    sections: [
      [
        "Synthetic by design",
        "All public demo names, records and geography are fictional. Exports retain the label. No operational records are accepted.",
        "heat-district",
      ],
      [
        "Permission before real data",
        "Obtain procurement/legal permission, licensing review and a named data owner before a real-data evaluation. No certification is claimed.",
        "grant-evidence",
      ],
      [
        "People retain authority",
        "No physical intervention authority. Engineering, permitting, capital votes and public process govern works. Draft grant evidence is not an award.",
        "planning-workshop",
      ],
    ],
  },
  "/results": {
    label: "EVIDENCE STATUS",
    title: "Useful is something we have to demonstrate.",
    body: "No measured HazardPath outcomes are available yet. Explore the proposed evaluation and sample artifact.",
    image: "plan-progress",
    sections: [
      [
        "A transparent starting point",
        "Public planning resources and adjacent commercial products exist. HazardPath demand and decision improvement are unverified.",
        "data-network",
      ],
      [
        "Compare the work",
        "A named owner rates the new packet against existing work on completeness, traceability and usefulness.",
        "options-lab",
      ],
      [
        "Publish verified outcomes",
        "Future results need a method, timeframe and permission. No invented testimonials or achieved ROI.",
        "field-survey",
        "/evaluation",
      ],
    ],
  },
  "/resources/exposure-and-vulnerability": {
    label: "FIELD GUIDE",
    title: "A hazard map is one part of the picture.",
    body: "Exposure, vulnerability and the local evidence behind a decision.",
    image: "heat-district",
    sections: [
      [
        "Exposure",
        "An asset–hazard overlap identifies where a hazard could affect a place. It is not a damage estimate.",
        "terrain-clear",
      ],
      [
        "Vulnerability",
        "Condition, backup services, access, sensitivity and adaptive capacity matter. Unknowns must remain visible.",
        "field-survey",
      ],
      [
        "Accountable alternatives",
        "Compare conditional options with traceable assumptions. Human reviewers determine the next investigation.",
        "drainage",
      ],
    ],
  },
  "/resources/pilot-preparation": {
    label: "WORKSHOP PREPARATION",
    title: "Bring one decision and a shared baseline.",
    body: "Prepare people, permissions and scope for a paid evaluation.",
    image: "planning-workshop",
    sections: [
      [
        "The people",
        "Identify the municipal budget owner, operator, reviewer and data/integration owner.",
        "field-survey",
      ],
      [
        "The evidence",
        "Locate the existing packet and a representative authorized dataset. Do not upload it here.",
        "data-network",
      ],
      [
        "The agreement",
        "Agree procurement, public process, paid SOW, evaluator, observation window and failure criteria first.",
        "grant-evidence",
        "/request-pilot",
      ],
    ],
  },
};
