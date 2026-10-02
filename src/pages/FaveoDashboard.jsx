import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "../components/Icons";
import Section from "../components/case-study/Section";
import Callout from "../components/case-study/Callout";
import MetaRow from "../components/case-study/MetaRow";
import Timeline from "../components/case-study/Timeline";
import Pill from "../components/case-study/Pill";
import Compare from "../components/case-study/Compare";
import ProblemSolution from "../components/case-study/ProblemSolution";
import ImagePlaceholder from "../components/case-study/ImagePlaceholder";
import SectionBar from "../components/case-study/SectionBar";
import ReadingProgress from "../components/case-study/ReadingProgress";

/*
 * Faveo Agent Dashboard case study (/projects/faveo).
 * Content follows "Faveo Case Study v2 for Review" (draft, 25 Sep 2026).
 * Bracketed notes are still open in the draft and are shown as written.
 * Each <ImagePlaceholder> marks an image to add: replace it with a
 * <CaseFigure> (see UehdCaseStudyPage) once the image is in src/Images/.
 */

/** Sections in page order. `label` is the eyebrow and the chip on phones. */
const SECTIONS = [
  { id: "research", label: "Research", title: "Agents were dropping off, or skipping the portal" },
  { id: "ux-audit", label: "UX audit", title: "No home screen, scattered tabs, slow APIs" },
  { id: "synthesis", label: "Affinity diagram", title: "Four themes behind every problem" },
  { id: "problems-solutions", label: "Problems and solutions", title: "A fix for each theme" },
  { id: "information-architecture", label: "Information architecture", title: "A shorter, simpler navigation" },
  { id: "user-flows", label: "User flows", title: "Three paths through the new design" },
  { id: "wireframes", label: "Wireframes", title: "Three rounds of feedback changed the design" },
  { id: "style-guide", label: "Style guide", title: "Shared colours, fonts and spacing" },
  { id: "final-design", label: "Final design", title: "Beginner and advanced dashboards" },
  { id: "metrics", label: "Metrics", title: "Five numbers to watch after launch" },
  { id: "future-scope", label: "Future scope", title: "Build now, then two more phases" },
];

const CHIPS = SECTIONS.map(({ id, label }) => ({ id, title: label }));

/** Shorthand: a section whose eyebrow and headline come from SECTIONS. */
function S({ id, children }) {
  const { label, title } = SECTIONS.find((s) => s.id === id);
  return (
    <Section id={id} eyebrow={label} title={title}>
      {children}
    </Section>
  );
}

const DETAILS = [
  ["Company", "Care Health Insurance"],
  ["Users", "Insurance agents: beginner, intermediate and advanced"],
  ["Status", "In build, due mid to late October 2026"],
];

const USER_GROUPS = [
  ["Internal Stakeholders", "Business, Product, and Tech teams."],
  ["External Stakeholders", "Beginner, Intermediate, and Advanced agents."],
];

const KEY_INSIGHTS = [
  "New agents drop off during onboarding due to lack of guidance.",
  "Advanced agents skip the portal and rely on Relationship Managers (RMs) to enter policies for them.",
  "Features sit across scattered tabs with confusing names.",
  "Experienced agents struggle to track key business numbers quickly.",
  "APIs are unreliable, so agents often cannot finish tasks on the platform.",
];

const AUDIT = [
  {
    title: "Structural flaws",
    items: [
      "The app lacks a home dashboard.",
      "Pre-payment and post-payment steps (before and after the customer pays) are split across separate tabs instead of following a single flow.",
      "[To add: date filters such as “Last 10 days” and section tabs look the same and sit in the same row, so a control and a navigation item cannot be told apart.]",
      "Pages contain duplicate tags and repeated information.",
    ],
  },
  {
    title: "Visual flaws",
    items: [
      "UI patterns, fonts, and styles are inconsistent across pages.",
      "Layouts waste space and put information out of sequence.",
      "Background colors create readability issues.",
    ],
  },
  {
    title: "Tech bottlenecks",
    items: [
      "Old APIs cause slow page loading.",
      "[To add: legacy code makes it hard to scale AI beyond the one chatbot.]",
    ],
  },
];

const AFFINITY_GROUPS = [
  {
    title: "Onboarding & guidance friction",
    items: [
      "New agents drop off early due to a lack of guidance.",
      "The platform lacks a guided onboarding journey.",
    ],
  },
  {
    title: "Navigation & structural disconnects",
    items: [
      "Core features sit across scattered tabs with confusing names.",
      "Pre-payment and post-payment steps are split across separate tabs.",
      "Key controls like date filters sit inside unrelated operational tabs.",
      "Pages display duplicate tags and repeated information.",
      "The platform lacks a home dashboard.",
      "Experienced agents struggle to track key business numbers quickly.",
      "Advanced agents skip the portal and rely on RMs to enter policies for them.",
    ],
  },
  {
    title: "Visual design & interface inconsistencies",
    items: [
      "UI patterns, fonts, and styles are inconsistent across pages.",
      "Page layouts waste screen space and place information out of order.",
      "Low-contrast background colors create poor readability.",
    ],
  },
  {
    title: "Technical infrastructure & performance bottlenecks",
    items: [
      "Unreliable APIs stop agents from completing tasks.",
      "Old APIs cause slow page load times.",
    ],
  },
];

/** Problem/solution cards, grouped by the affinity themes above. */
const PROBLEM_CATEGORIES = [
  {
    title: "Category 1: Onboarding & guidance friction",
    cards: [
      {
        icon: "compass",
        title: "No onboarding guidance",
        problem:
          "New agents get no guidance during onboarding. They drop off early because the old portal has no structured onboarding journey.",
        solution:
          "The redesign adds a “Grow, Earn & Unlock Rewards” checklist. It tracks onboarding steps like profile setup and first policy issued. Agents earn points as they finish each step. This gives clear guidance from day one.",
      },
    ],
  },
  {
    title: "Category 2: Navigation & structural disconnects",
    cards: [
      {
        icon: "home",
        title: "No home dashboard",
        problem:
          "The old portal has no home dashboard. New agents see the same home screen as everyone else and feel overwhelmed.",
        solution:
          "I built a beginner dashboard view on the shared menu. New agents see simple onboarding guides.",
      },
      {
        icon: "chart",
        title: "Sales numbers hard to find",
        problem:
          "Experienced agents cannot quickly find their sales numbers on the same home screen.",
        solution:
          "I built an advanced dashboard view on the same shared menu. Experienced agents see revenue, performance metrics, and cross-sell options.",
      },
      {
        icon: "layers",
        title: "Payment steps split apart",
        problem:
          "Pre-payment and post-payment steps are split into separate tabs.",
        solution:
          "The redesign does not just merge these two tabs. It changes the full navigation structure from the old portal. All related tabs and flows are merged together, so the navigation becomes short and simple to use.",
      },
      {
        icon: "calendar",
        title: "Missed renewal dates",
        problem:
          "Expiring policies appear in long plain text lists. Agents miss urgent renewal dates because of this.",
        solution:
          "I replaced text lists with an interactive calendar view. This helps agents track and complete renewals on time.",
      },
      {
        icon: "filter",
        title: "Filters and tags misplaced",
        problem:
          "Date filters and duplicate tags sit in the wrong places, inside unrelated tabs.",
        solution:
          "[Open: “These get moved into the right sections as part of the new sidebar and flow structure.” There is no right sidebar in the design. See question 36.]",
      },
    ],
    note: "All these changes together should help more agents punch their own policies, instead of calling an RM. This still needs to be checked with real usage data.",
  },
  {
    title: "Category 3: Visual design & interface inconsistencies",
    cards: [
      {
        icon: "message",
        title: "AI stuck in one chatbot",
        problem:
          "The old design only has one floating chatbot in the corner. Agents get no AI help while working inside other pages.",
        solution:
          "AI suggestions now sit inside each section and page, not just in one floating chatbot. Captain Care, the portal’s AI assistant, also gets a cleaner UI, with different colors for regular text and AI suggestions, so agents can tell them apart at a glance. This should reduce how often agents need to call an RM for help.",
      },
      {
        icon: "palette",
        title: "Inconsistent visual style",
        problem:
          "UI patterns, fonts, and colors are inconsistent across pages. Backgrounds have low contrast and hurt readability.",
        solution:
          "The redesign adds shared colors, fonts, and spacing across every page, so the app feels consistent and is easier to read.",
      },
      {
        icon: "phone",
        title: "Not built for phones",
        problem:
          "The old portal does not adapt to smaller screens. Agents struggle to use it on phones or tablets in front of clients.",
        solution:
          "I created a responsive layout that works smoothly across phones, tablets, and desktop screens.",
      },
    ],
  },
  {
    title: "Category 4: Technical infrastructure & performance bottlenecks",
    cards: [
      {
        icon: "server",
        title: "Slow, unreliable APIs",
        problem:
          "Old APIs cause slow page loads. Unreliable APIs block agents from finishing tasks. Old code also stops the platform from adding AI features.",
        solution:
          "The redesign needs a stronger backend to support it. This means faster APIs and less downtime. The same backend upgrade is also what makes the AI suggestions and gamification features work across the app.",
      },
    ],
  },
];

const USER_FLOWS = [
  {
    title: "A. A new agent’s first week",
    steps: [
      "Log in",
      "Beginner dashboard",
      "“Grow, Earn & Unlock Rewards” checklist",
      "Open a task (for example, fill in profile details)",
      "Finish it",
      "Earn points",
      "Next reward unlocks (for example, free SMS credits)",
    ],
    screens: "Beginner dashboard, the checklist page.",
  },
  {
    title: "B. An experienced agent checks the month",
    steps: [
      "Log in",
      "Advanced dashboard",
      "Total Gross Written Premium (total premium sold) and Commission cards",
      "Renewal, from the sidebar",
      "Calendar",
      "Pick a date",
      "Policies expiring that day",
      "Open one",
      "Renew",
    ],
    screens: "Advanced dashboard, Renewal page, Renewal calendar.",
  },
  {
    title: "C. Clearing a pending case",
    steps: [
      "Dashboard",
      "Pendency Center card (the list of cases stuck for missing documents or approval)",
      "Arrow on the card",
      "Side panel opens with the full details",
      "Take the action there",
      "Panel closes",
      "Dashboard",
    ],
    screens:
      "Dashboard, Pendency page. Captain Care and other pop-ups use a similar panel.",
  },
];

/** The three pieces of feedback from the review rounds. */
const FEEDBACK = [
  {
    title: "The business wanted AI from launch",
    text: "The business wanted AI in the product. The AI services were not built yet but were due by launch. So I added an “Insights by Captain Care” strip near the top of the dashboard. It shows three short suggestions: leads not followed up, policies expiring soon, documents missing. On a phone it shows one. Agents can ask Captain Care a question from there.",
    image: "Crop, v1 top of dashboard beside v2 top with the insights strip",
  },
  {
    title: "The APIs could not load it all",
    text: "The tech team said the APIs were slow. The dashboard could not load everything I had put on it. So I cut the first version down. The renewal heatmap, the claim tracker and the marketing hub left the first screen. The cards for business numbers, leads and pending cases stayed.",
    image:
      "Crop, v1 advanced beside v2 advanced. Dropped: renewal heatmap, claim tracker, marketing hub, renewal ring, quick actions, digital training. Added: Cross Sell.",
  },
  {
    title: "The cards could not offer the fix",
    text: "The system knew why a case was stuck, but it could not offer the fix on the card itself. I turned the cards into previews. Each card has an arrow. It opens a side panel with the full details and the actions, so the agent does the work there.",
    image:
      "Crop, v1 card with a Resolve link and a small arrow, beside v2 card where the arrow is the only action, with the side panel open",
  },
];

/** Direction → pill colour: green for the way it should move, blue for new, grey to hold. */
const DIRECTION_TONE = {
  Up: "ok",
  Down: "ok",
  "New, no baseline": "info",
  "Should not rise": "note",
};

const METRICS = [
  [
    "Share of new agents who finish the onboarding checklist",
    "New, no baseline",
    "New agents drop off during onboarding",
  ],
  [
    "Share of policies agents enter themselves rather than through an RM",
    "Up",
    "Advanced agents skip the portal and use RMs",
  ],
  [
    "Calls to an RM per active agent per month",
    "Down",
    "Agents lean on RMs when the portal does not help them",
  ],
  [
    "Share of new agents who issue their first policy within 30 days",
    "Up",
    "New agents drop off before they sell anything",
  ],
  [
    "Dashboard load time",
    "Should not rise",
    "The APIs are slow. A heavier dashboard would make this worse",
  ],
];

const FUTURE_SCOPE = [
  {
    when: "Mid to late October 2026",
    what: "This design is now being built. It should be finished by mid to late October 2026.",
  },
  {
    when: "Phase 1.5",
    what: "Ships some of the things cut from phase 1, and fixes the bugs we find after launch.",
  },
  {
    when: "Phase 2",
    what: "Makes the actions on cards dynamic, so each card can offer the right action for that case. This picks up the third piece of feedback in section 7. It also brings AI deeper into the system, and makes changes based on the data and metrics we see after launch.",
  },
];

/** A white card with a heading and bullets (audit groups, affinity themes). */
function ListCard({ num, title, items, wide }) {
  return (
    <div className={wide ? "cs-card cs-card--wide" : "cs-card"}>
      {num && <span className="cs-card__num">{num}</span>}
      <h3 className="cs-card__title">{title}</h3>
      <ul className="cs-dots">
        {items.map((item) => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FaveoDashboard() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Faveo Agent Dashboard · Deepanshi Birla";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <article className="case-study">
      <header className="cs-hero">
        <div className="cs-column">
          <Link to="/projects" className="cs-back">
            <ArrowLeftIcon /> All projects
          </Link>
          <div className="cs-hero__cover">
            <ImagePlaceholder>
              Hero image: the new dashboard across desktop and phone.
            </ImagePlaceholder>
          </div>
          <h1 className="cs-hero__title">Faveo Agent Dashboard</h1>
          <p className="cs-hero__subtitle">
            Care Health’s dashboard for insurance agents
          </p>
          <p className="cs-hero__summary">
            Faveo is Care Health’s dashboard for insurance agents. Users{" "}
            <strong>manage policies</strong>,{" "}
            <strong>handle customer service requests</strong>,{" "}
            <strong>check commissions</strong>, and{" "}
            <strong>view rewards</strong>.
          </p>
          <MetaRow items={DETAILS} />
        </div>
      </header>

      <SectionBar chapters={CHIPS} />

      <div className="cs-column">
        <S id="research">
          <p className="cs-text">
            The research phase aligned <strong>business goals</strong> with{" "}
            <strong>user feedback</strong> from internal teams and external
            agents.
          </p>
          <h3 className="cs-subheading">User groups</h3>
          <div className="cs-cards">
            {USER_GROUPS.map(([group, who]) => (
              <div key={group} className="cs-card">
                <h4 className="cs-card__title">{group}</h4>
                <p>{who}</p>
              </div>
            ))}
          </div>
          <h3 className="cs-subheading">Key insights</h3>
          <div className="cs-callouts">
            {KEY_INSIGHTS.map((insight, i) => (
              <Callout key={insight} tone="info" icon={i + 1}>
                {insight}
              </Callout>
            ))}
          </div>
        </S>

        <S id="ux-audit">
          <div className="cs-cards">
            {AUDIT.map((group, i) => (
              <ListCard key={group.title} {...group} wide={i === 0} />
            ))}
          </div>
          <ImagePlaceholder>
            Two crops from the old portal. One: the page an agent lands on
            after login. Two: one table page with the yellow header row.
          </ImagePlaceholder>
        </S>

        <S id="synthesis">
          <div className="cs-cards">
            {AFFINITY_GROUPS.map((group, i) => (
              <ListCard key={group.title} num={`0${i + 1}`} {...group} />
            ))}
          </div>
        </S>

        <S id="problems-solutions">
          {PROBLEM_CATEGORIES.map((category) => (
            <div key={category.title} className="cs-section__content">
              <h3 className="cs-subheading">{category.title}</h3>
              <ProblemSolution items={category.cards} label={category.title} />
              {category.note && (
                <Callout tone="note" icon="!">
                  {category.note}
                </Callout>
              )}
            </div>
          ))}
        </S>

        <S id="information-architecture">
          <ImagePlaceholder>
            IA diagram. Before export: fix the second “Pipeline” label (should
            be Milestones), make the column labels visible, add a legend for
            orange and green.
          </ImagePlaceholder>
        </S>

        <S id="user-flows">
          <p className="cs-text">
            Here are three paths through the new design: a new agent’s first
            week, an experienced agent checking the month, and clearing a
            pending case.
          </p>
          {USER_FLOWS.map((flow) => (
            <div key={flow.title} className="cs-section__content">
              <h3 className="cs-subheading">{flow.title}</h3>
              <ol className="cs-flow" aria-label={flow.title}>
                {flow.steps.map((step, i) => (
                  <li key={`${i}-${step}`}>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="cs-text">
                <strong>Screens:</strong> {flow.screens}
              </p>
            </div>
          ))}
          <ImagePlaceholder>
            One small strip per flow, or the three flows as step chains in
            text. To settle.
          </ImagePlaceholder>
        </S>

        <S id="wireframes">
          <p className="cs-text">
            My first drafts split the dashboard by experience level, one for new
            agents and one for experienced agents.{" "}
            <strong>Both had too many cards on the first screen.</strong> I
            shared them with the business, product and tech teams over a few
            rounds. Three things came back, and each one changed the design.
          </p>

          <h3 className="cs-subheading">Beginner dashboard</h3>
          <Compare
            beforeLabel="First wireframe"
            afterLabel="Second wireframe"
            before={<ImagePlaceholder>First beginner wireframe</ImagePlaceholder>}
            after={<ImagePlaceholder>Second beginner wireframe</ImagePlaceholder>}
          />
          <p className="cs-text">
            <strong>Before:</strong> checklist, training, contest, pending
            cases, leads. <strong>After:</strong> AI suggestions at the top,
            checklist, training, and the account target on the right. No sales
            breakdown.
          </p>

          <h3 className="cs-subheading">Advanced dashboard</h3>
          <Compare
            beforeLabel="First wireframe"
            afterLabel="Second wireframe"
            before={<ImagePlaceholder>First advanced wireframe</ImagePlaceholder>}
            after={<ImagePlaceholder>Second advanced wireframe</ImagePlaceholder>}
          />
          <p className="cs-text">
            <strong>Before:</strong> sales numbers, renewal calendar, claims,
            contest. <strong>After:</strong> sales numbers by category, Cross
            Sell added.
          </p>

          {FEEDBACK.map((item, i) => (
            <div key={item.title} className="cs-section__content">
              <Callout tone="accent" icon={i + 1} title={item.title} />
              <p className="cs-text">{item.text}</p>
              <ImagePlaceholder>{item.image}</ImagePlaceholder>
            </div>
          ))}
        </S>

        <S id="style-guide">
          <ImagePlaceholder>
            To settle. There is one small spec card at the far right of the
            Designed canvas. If that is the style guide, one image. If not, cut
            this heading.
          </ImagePlaceholder>
        </S>

        <S id="final-design">
          <ImagePlaceholder>
            Beginner and advanced dashboards, desktop, same fold.
          </ImagePlaceholder>
          <Compare
            beforeLabel="Phone"
            afterLabel="Renewal calendar"
            before={
              <ImagePlaceholder tall>Beginner dashboard on a phone.</ImagePlaceholder>
            }
            after={
              <ImagePlaceholder>Renewal page with the calendar view.</ImagePlaceholder>
            }
          />
          <ImagePlaceholder>
            Captain Care panel, answered state. Fix the ClickUp placeholder text
            in Figma first.
          </ImagePlaceholder>
        </S>

        <S id="metrics">
          <p className="cs-text">
            The build is still in progress, so{" "}
            <strong>nothing is measured yet</strong>. These are the five things
            I would watch after launch. For each one I give the direction it
            should move. There are no targets yet.
          </p>
          <div className="cs-table-wrap">
            <table className="cs-table">
              <thead>
                <tr>
                  <th scope="col">What to watch</th>
                  <th scope="col">Direction</th>
                  <th scope="col">Why</th>
                </tr>
              </thead>
              <tbody>
                {METRICS.map(([what, direction, why]) => (
                  <tr key={what}>
                    <th scope="row">{what}</th>
                    <td>
                      <Pill tone={DIRECTION_TONE[direction]}>{direction}</Pill>
                    </td>
                    <td>{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Callout tone="note" icon="i">
            I do not know whether any of these are reported today. Each one
            needs the team to log it first.
          </Callout>
        </S>

        <S id="future-scope">
          <Timeline items={FUTURE_SCOPE} />
        </S>
      </div>

      <ReadingProgress />
    </article>
  );
}
