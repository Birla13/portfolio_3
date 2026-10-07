import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "../components/Icons";
import Section from "../components/case-study/Section";
import Callout from "../components/case-study/Callout";
import MetaRow from "../components/case-study/MetaRow";
import Timeline from "../components/case-study/Timeline";
import Pill from "../components/case-study/Pill";
import Compare from "../components/case-study/Compare";
import ImagePlaceholder from "../components/case-study/ImagePlaceholder";
import CaseFigure from "../components/case-study/CaseFigure";
import SectionBar from "../components/case-study/SectionBar";
import ReadingProgress from "../components/case-study/ReadingProgress";

import foldBeginner from "../Images/faveo/fold-beginner.webp";
import foldAdvanced from "../Images/faveo/fold-advanced.webp";
import foldRenewal from "../Images/faveo/fold-renewal.webp";
import foldChat1 from "../Images/faveo/fold-chat-1.webp";
import foldContest from "../Images/faveo/fold-contest.png";
import mobileView from "../Images/faveo/mobile-view.webp";
import foldLearnEarn from "../Images/faveo/fold-learn-earn.png";
import foldChat2 from "../Images/faveo/fold-chat-2.webp";
import sitemap from "../Images/faveo/faveo-sitemap.png";
import styleGuide from "../Images/faveo/style-guide.webp";
import wfV1Beginner from "../Images/faveo/wf-v1-beginner.webp";
import wfV2Beginner from "../Images/faveo/wf-v2-beginner.webp";
import wfV1Advanced from "../Images/faveo/wf-v1-advanced.webp";
import wfV2Advanced from "../Images/faveo/wf-v2-advanced.webp";
import wfV1Ai from "../Images/faveo/wf-v1-ai.webp";
import wfV2Ai from "../Images/faveo/wf-v2-ai.webp";
import wfV1Heavy from "../Images/faveo/wf-v1-heavy.webp";
import wfV2Heavy from "../Images/faveo/wf-v2-heavy.webp";
import wfV1Card from "../Images/faveo/wf-v1-card.webp";
import wfV2Card from "../Images/faveo/wf-v2-card.webp";
import b1Insights from "../Images/faveo/b1-insights.webp";
import b2Rewards from "../Images/faveo/b2-rewards.webp";
import b4Quick from "../Images/faveo/b3-quick.webp";
import b5Training from "../Images/faveo/b5-training.webp";
import b4Banner from "../Images/faveo/b4-banner.webp";
import b6Account from "../Images/faveo/b6-account.webp";
import b7Leads from "../Images/faveo/b7-leads.webp";
import b8Pendency from "../Images/faveo/b8-pendency.webp";
import a2Gwp from "../Images/faveo/a2-business.webp";
import a2Contest from "../Images/faveo/a2-contest.webp";
import a3Commission from "../Images/faveo/a3-commission.webp";
import a4CrossSell from "../Images/faveo/a2-crosssell.webp";
// import p2Rewards from "../Images/faveo/p2-rewards.png";
// import p3Training from "../Images/faveo/p3-training.png";
import r1Switch from "../Images/faveo/r1-switch.webp";
import r1SwitchMobile from "../Images/faveo/r1-switch-mobile.webp";
import r2Insights from "../Images/faveo/r2-insights.webp";
import r3Heatmap from "../Images/faveo/r3-heatmap.webp";
import r4Policies from "../Images/faveo/r4-policies.webp";
import r4PoliciesMobile from "../Images/faveo/r4-policies-mobile.webp";
import oldDashboard from "../Images/faveo/old-dashboard.webp";
import oldTable from "../Images/faveo/old-table.webp";

/*
 * Faveo Agent Dashboard case study (/projects/faveo).
 * Each <ImagePlaceholder> marks an image still to add: replace it with a
 * <CaseFigure> once the image is in src/Images/faveo/.
 */

/** Sections in page order. `label` is the eyebrow and the chip on phones. */
const SECTIONS = [
  {
    id: "project",
    label: "The project",
    title: "A dashboard for the people who sell the policies",
  },
  {
    id: "research",
    label: "Research",
    title: "The business asked for a new portal. I started with the agents.",
  },
  {
    id: "ux-audit",
    label: "The old portal",
    title: "An audit of what agents had to work with",
  },
  {
    id: "synthesis",
    label: "Synthesis",
    title: "Four themes came out of the research",
  },
  {
    id: "problems-solutions",
    label: "Problems and solutions",
    title: "What I changed, problem by problem",
  },
  {
    id: "information-architecture",
    label: "Information architecture",
    title: "The map of the portal",
  },
  {
    id: "user-flows",
    label: "User flows",
    title: "Three paths through the new design",
  },
  {
    id: "wireframes",
    label: "Wireframes",
    title: "Two drafts, and what changed between them",
  },
  {
    id: "style-guide",
    label: "Style guide",
    title: "Shared colours, fonts and spacing",
  },
  {
    id: "final-design",
    label: "The final design",
    title: "Beginner dashboard",
  },
  { id: "metrics", label: "Metrics", title: "What I would watch after launch" },
  { id: "future-scope", label: "What comes next", title: "Future scope" },
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

/** A follow-on part of the final design: a headline without an eyebrow. */
function Part({ id, title, children }) {
  return (
    <section className="cs-section" id={id} aria-labelledby={`cs-${id}`}>
      <h2 className="cs-section__title" id={`cs-${id}`}>
        {title}
      </h2>
      <div className="cs-section__content">{children}</div>
    </section>
  );
}

const DETAILS = [
  ["Role", "Only designer"],
  ["Time", "2 to 3 months"],
  ["Status", "In build, due mid to late October 2026"],
];

const USER_GROUPS = [
  ["Inside the company", "Business, Product and Tech teams."],
  ["Outside the company", "Beginner, intermediate and advanced agents."],
];

const KEY_INSIGHTS = [
  <>
    <strong>New agents drop off</strong> during onboarding because nothing
    guides them.
  </>,
  <>
    <strong>Advanced agents skip the portal.</strong> They rely on Relationship
    Managers (RMs) to enter policies for them.
  </>,
  <>
    Features sit across <strong>scattered tabs with confusing names</strong>.
  </>,
  <>
    Experienced agents <strong>struggle to track key business numbers</strong>{" "}
    quickly.
  </>,
  <>
    <strong>APIs are unreliable</strong>, so agents often cannot finish tasks on
    the platform.
  </>,
];

const AUDIT = [
  {
    title: "Structure",
    items: [
      <>
        The app has <strong>no home dashboard</strong>.
      </>,
      <>
        Steps before and after the customer pays are{" "}
        <strong>split across separate tabs</strong> instead of one flow.
      </>,
      <>
        Pages carry <strong>duplicate tags</strong> and repeated information.
      </>,
    ],
  },
  {
    title: "Visuals",
    items: [
      <>
        UI patterns, fonts and styles are <strong>inconsistent</strong> across
        pages.
      </>,
      <>
        Layouts <strong>waste space</strong> and put information out of
        sequence.
      </>,
      <>
        Background colours <strong>hurt readability</strong>.
      </>,
    ],
  },
  {
    title: "Technology",
    items: [
      <>
        Old APIs make pages <strong>load slowly</strong>.
      </>,
    ],
  },
];

const THEMES = [
  [
    "Onboarding and guidance",
    "New agents drop off early. There is no guided onboarding journey.",
  ],
  [
    "Navigation and structure",
    "Scattered tabs, split payment steps, controls in the wrong tabs, no home dashboard, and business numbers that are hard to find.",
  ],
  [
    "Visual consistency",
    "Mixed patterns, fonts and styles. Wasted space. Low contrast.",
  ],
  [
    "Technical limits",
    "Unreliable APIs stop agents from finishing tasks. Old APIs load slowly.",
  ],
];

/** Problems and what I did, grouped by the themes above. */
const PROBLEM_GROUPS = [
  {
    title: "Onboarding and guidance",
    rows: [
      [
        <>
          New agents get <strong>no guidance</strong>. They drop off early
          because there is no structured onboarding journey.
        </>,
        <>
          A <strong>“Grow, Earn &amp; Unlock Rewards” checklist</strong>. It
          tracks steps like profile setup and first policy issued. Agents earn
          points as they finish each step.
        </>,
      ],
    ],
  },
  {
    title: "Navigation and structure",
    rows: [
      [
        <>
          There is <strong>no home dashboard</strong>. New agents see the same
          screen as everyone else and feel overwhelmed.
        </>,
        <>
          A <strong>beginner view</strong> on the shared menu, with simple
          onboarding guides.
        </>,
      ],
      [
        <>
          Experienced agents <strong>cannot find their sales numbers</strong> on
          the same home screen.
        </>,
        <>
          An <strong>advanced view</strong> on the same menu, with revenue,
          performance metrics and cross-sell options.
        </>,
      ],
      [
        <>
          Steps before and after payment are{" "}
          <strong>split into separate tabs</strong>.
        </>,
        <>
          I changed the <strong>full navigation structure</strong>, not only
          these two tabs. Related tabs and flows are merged, so navigation is
          short and simple.
        </>,
      ],
      [
        <>
          Expiring policies sit in <strong>long plain text lists</strong>.
          Agents miss urgent renewal dates.
        </>,
        <>
          An <strong>interactive calendar view</strong> to track and complete
          renewals on time.
        </>,
      ],
      [
        <>
          Date filters and duplicate tags sit{" "}
          <strong>in the wrong places</strong>.
        </>,
        <>
          They move into the right sections as part of the{" "}
          <strong>new sidebar and flow structure</strong>.
        </>,
      ],
    ],
  },
  {
    title: "Visual design",
    rows: [
      [
        <>
          The old portal has only a <strong>basic chatbot</strong> in the
          corner. Agents get no AI help on other pages.
        </>,
        <>
          <strong>AI suggestions sit inside each section and page.</strong>{" "}
          Captain Care gets a cleaner UI, with different colours for regular
          text and AI suggestions.
        </>,
      ],
      [
        <>
          Patterns, fonts and colours are <strong>inconsistent</strong>. Low
          contrast hurts reading.
        </>,
        <>
          <strong>Shared colours, fonts and spacing</strong> across every page.
        </>,
      ],
      [
        <>
          The old portal <strong>does not adapt to smaller screens</strong>.
          Agents struggle on phones and tablets in front of clients.
        </>,
        <>
          A <strong>responsive layout</strong> for phone, tablet and desktop. It
          was not in the first brief. It came up in the agent interviews, so we
          added it in about a day.
        </>,
      ],
    ],
  },
  {
    title: "Technology",
    rows: [
      [
        <>
          Old APIs load slowly. <strong>Unreliable APIs</strong> block agents
          from finishing tasks.
        </>,
        <>
          The redesign needs a <strong>stronger backend</strong>: faster APIs
          and less downtime. The same upgrade makes the AI suggestions and
          rewards work across the app.
        </>,
      ],
    ],
  },
];

const USER_FLOWS = [
  {
    title: "A new agent’s first week",
    steps: [
      "Log in",
      "Beginner dashboard",
      "“Grow, Earn & Unlock Rewards” checklist",
      "Open a task",
      "Finish it",
      "Earn points",
      "Next reward unlocks",
    ],
    screens:
      "beginner dashboard and the checklist page. Task names, points and rewards are placeholders for now.",
  },
  {
    title: "An experienced agent checks the month",
    steps: [
      "Log in",
      "Advanced dashboard",
      "Premium and commission cards",
      "Renewal, from the sidebar",
      "Calendar",
      "Pick a date",
      "Policies expiring that day",
      "Open one and renew",
    ],
    screens: "advanced dashboard, renewal list, renewal calendar.",
  },
  {
    title: "Clearing a pending case",
    steps: [
      "Dashboard",
      "Pendency Center card",
      "Arrow on the card",
      "Side panel opens",
      "Take the action",
      "Back to the dashboard",
    ],
    screens:
      "dashboard and the pendency page. Captain Care and other pop-ups use a similar panel.",
  },
];

/** What changed between the two wireframe drafts. */
const FEEDBACK = [
  {
    title: "1. AI needed a place on the dashboard",
    text: (
      <>
        Captain Care, the AI assistant, is a{" "}
        <strong>component called in from elsewhere</strong>. A full AI
        integration is not built yet. So I added an{" "}
        <strong>“Insights by Captain Care” strip</strong> near the top of the
        dashboard. The idea came out of discussions with the other designers. It
        shows three short suggestions: leads not followed up, policies expiring
        soon, documents missing. On a phone it shows one. Agents can ask Captain
        Care a question from there.
      </>
    ),
    before: { src: wfV1Ai, alt: "Top of the dashboard in the first draft" },
    after: {
      src: wfV2Ai,
      alt: "Top of the dashboard in the second draft, with the Insights by Captain Care strip",
    },
    image:
      "Before and after: the top of the dashboard in the first draft beside the second draft with the insights strip",
  },
  {
    title: "2. Some cards were too heavy for the first screen",
    text: (
      <>
        I added the <strong>renewal heatmap</strong> myself, because I wanted to
        make the numbers visual. It needs{" "}
        <strong>a month of data to load</strong>. That suits a dedicated renewal
        page, not the main dashboard, so it moved there. The{" "}
        <strong>claim tracker</strong> uses a different service and would add
        more load. It left the first screen after a session with the product
        managers. The <strong>marketing hub</strong> left after a session with a
        product manager and a developer. The cards for business numbers, leads
        and pending cases stayed.
      </>
    ),
    before: { src: wfV1Heavy, alt: "Advanced dashboard in the first draft" },
    after: {
      src: wfV2Heavy,
      alt: "Advanced dashboard in the second draft, without the renewal heatmap, claim tracker and marketing hub, with Cross Sell added",
    },
    image:
      "Before and after: the advanced dashboard in the first draft beside the second draft. Dropped: renewal heatmap, claim tracker, marketing hub. Added: Cross Sell.",
  },
  {
    title: "3. The cards needed one way to open more",
    text: (
      <>
        I turned the cards into <strong>previews</strong>. Each card has an{" "}
        <strong>arrow</strong>. It opens a <strong>side panel</strong> with the
        journey, the details and the next step, so the agent does the work
        there. This was my own call and it got a lot of pushback. I held on to
        it because the design needed{" "}
        <strong>one pattern that could carry many kinds of content</strong>.
      </>
    ),
    before: {
      src: wfV1Card,
      alt: "A card with a Resolve link in the first draft",
    },
    after: {
      src: wfV2Card,
      alt: "A card in the second draft, where the arrow is the only action and the side panel is open",
    },
    image:
      "Before and after: a card with a Resolve link in the first draft beside the second draft, where the arrow is the only action and the side panel is open",
  },
];

const BEGINNER_ADDED = [
  {
    title: "Insights by Captain Care",
    src: b1Insights,
    alt: "Insights by Captain Care strip",
    text: (
      <>
        Three short suggestions with an arrow each. <strong>Ask Now</strong>{" "}
        opens the chat.
      </>
    ),
  },
  {
    title: "Grow, Earn & Unlock Rewards",
    src: b2Rewards,
    alt: "Rewards checklist with a points track",
    width: 660,
    text: (
      <>
        A <strong>points track</strong> with unlock steps. Each task is worth 15
        points. Names and points are placeholders for now.
      </>
    ),
  },

  {
    title: "Quick Actions",
    src: b4Quick,
    alt: "Quick actions card",
    width: 433,
    text: (
      <>
        Four shortcuts. The agent can <strong>edit the list</strong>.
      </>
    ),
  },
  {
    title: "Digital Training",
    src: b5Training,
    width: 660,
    alt: "Digital training videos",
    text: <>Short videos for new agents. Sample content for now.</>,
  },
  {
    title: "Account Qualification",
    src: b6Account,
    width: 433,
    alt: "Account qualification card",
    text: (
      <>
        The <strong>premium target</strong> and the days left to keep the
        account active.
      </>
    ),
  },
  {
    title: "Festival Banner",
    src: b4Banner,
    width: 433,
    alt: "Janmashtami festival banner with a Krishna illustration",
    text: (
      <>
        A seasonal card for festivals like Janmashtami. Agents can{" "}
        <strong>share festive wishes and offers</strong> with their customers.
        The <strong>festival and artwork change</strong> through the year.
      </>
    ),
  },
  {
    title: "Lead Tracker",
    src: b7Leads,
    alt: "Lead tracker tabs and cards",
    text: (
      <>
        Tabs with counts. The{" "}
        <strong>arrow on a card opens a side panel</strong>.
      </>
    ),
  },
  {
    title: "Pendency Center",
    src: b8Pendency,
    alt: "Pendency center tabs and cards",
    text: (
      <>
        Cases <strong>stuck for documents or approval</strong>. The arrow opens
        a side panel with the journey, the details and the next step.
      </>
    ),
  },
];

const ADVANCED_ADDED = [
  {
    title: "Insights by Captain Care",
    src: b1Insights,
    alt: "Insights by Captain Care strip",
    text: <>The same strip as the beginner view, in the same place.</>,
  },
  {
    title: "Total Gross Written Premium",
    src: a2Gwp,
    width: 660,
    alt: "Total gross written premium card",
    text: (
      <>
        Total premium sold, with a <strong>period filter</strong>. Split into
        New, Renewal and Port. A Captain Care tip sits under the card.
      </>
    ),
  },
  {
    title: "Commission Summary",
    src: a3Commission,
    width: 660,
    alt: "Commission summary card",
    text: (
      <>
        Commission paid and premium collected, with a period filter and a tip
        under the card.
      </>
    ),
  },
  {
    title: "Contest",
    src: a2Contest,
    width: 433,
    alt: "Contest card",
    text: (
      <>
        How much business is <strong>left to unlock the next level.</strong>
      </>
    ),
  },
  {
    title: "Cross Sell",
    src: a4CrossSell,
    width: 433,
    alt: "Cross sell card",
    text: (
      <>
        <strong>Eligible customers</strong> and{" "}
        <strong>high intent prospects</strong>, each with an arrow.
      </>
    ),
  },
  {
    title: "Lead Tracker",
    src: b7Leads,
    alt: "Lead tracker tabs and cards",
    text: (
      <>
        Tabs with counts. The{" "}
        <strong>arrow on a card opens a side panel</strong>.
      </>
    ),
  },
  {
    title: "Pendency Center",
    src: b8Pendency,
    alt: "Pendency center tabs and cards",
    text: (
      <>
        Cases <strong>stuck for documents or approval</strong>. The arrow opens
        a side panel with the journey, the details and the next step.
      </>
    ),
  },
];

const RENEWAL_ADDED = [
  {
    title: "View switch and month",
    src: r1Switch,
    mobileSrc: r1SwitchMobile,
    alt: "List and calendar view switch with month picker",
    text: (
      <>
        Toggle between <strong>list view and calendar view</strong>. A month
        picker sits beside it.
      </>
    ),
  },
  {
    title: "Insights by Captain Care",
    src: r2Insights,
    alt: "Renewal insights",
    text: (
      <>
        Policies <strong>due in 7 days</strong>, policies{" "}
        <strong>at risk of lapse</strong>, and expired policies still in the
        grace period.
      </>
    ),
  },
  {
    title: "Heatmap calendar",
    src: r3Heatmap,
    width: 417,
    alt: "Heatmap calendar",
    text: (
      <>
        Each day carries a dot: <strong>renewed, pending or all pending</strong>
        . Picking a day shows its policies.
      </>
    ),
  },
  {
    title: "Policies for the picked day",
    src: r4Policies,
    mobileSrc: r4PoliciesMobile,
    alt: "Policies for the picked day",
    text: (
      <>
        Pending and Renewed tabs, search, filter, <strong>Bulk Renew</strong>{" "}
        and Excel export.
      </>
    ),
  },
];

const CONTEST_ADDED = [
  {
    title: "Business done and the next level",
    text: (
      <>
        The agent’s business so far, and{" "}
        <strong>how much is left to unlock the next level</strong>. A progress
        bar runs towards the level badges.
      </>
    ),
  },
  {
    title: "Seven levels",
    text: (
      <>
        From <strong>Bronze Club to Council Club</strong>, each with its
        business range. Each card shows{" "}
        <strong>how many agents are on that level</strong>, so the agent can see
        where others stand.
      </>
    ),
  },
  {
    title: "Time left",
    text: (
      <>
        A countdown to the end of the contest, in{" "}
        <strong>days, hours and minutes</strong>.
      </>
    ),
  },
  {
    title: "Ways to maximise your score",
    text: (
      <>
        Short tips: <strong>new business, early renewals and cross-sell</strong>
        . Each one says why it moves the score.
      </>
    ),
  },
];

const LEARN_EARN_ADDED = [
  {
    title: "Tasks and points",
    text: (
      <>
        Points earned, <strong>tasks done out of ten</strong> and a progress
        ring. Tabs split the tasks into In-Progress, Pending and Completed.
      </>
    ),
  },
  {
    title: "Task cards",
    text: (
      <>
        Each task shows <strong>its points and its own progress bar</strong>.
        The arrow opens the task.
      </>
    ),
  },
  {
    title: "Rewards",
    text: (
      <>
        Points left to unlock the next reward. Each reward is{" "}
        <strong>availed, ready to avail or locked</strong>, and a locked one
        says how many points it needs.
      </>
    ),
  },
];

// const CHAT_ADDED = [
//   {
//     title: "A drawer, not a new page",
//     src: c1Drawer,
//     alt: "Captain Care drawer header",
//     text: (
//       <>
//         The page stays visible behind it, so the agent{" "}
//         <strong>keeps their place</strong>.
//       </>
//     ),
//   },
//   {
//     title: "Answer with suggestions",
//     src: c2Answer,
//     alt: "Captain Care answer with suggestion chips",
//     text: (
//       <>
//         The reply is followed by <strong>short suggestion chips</strong> for the
//         next question.
//       </>
//     ),
//   },
//   {
//     title: "Question box",
//     src: c3Input,
//     alt: "Question box and reminder line",
//     text: (
//       <>
//         The agent types here. A line below reminds them to{" "}
//         <strong>verify AI answers</strong> against official policy documents.
//       </>
//     ),
//   },
// ];

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
    when: "Phase 1.5",
    what: "Ships some of the things cut from phase 1, and fixes the bugs we find after launch.",
  },
  {
    when: "Phase 2",
    what: "Makes the actions on cards contextual, so each card offers the right action for that case. Today a lead card may only offer “see details”. Later it will tell the agent to call or show prospective pitches. This picks up the third piece of feedback above.",
  },
  {
    when: "Also in phase 2",
    what: "The intermediate agent view. It was part of the first pitch. Working out its logic with the stakeholders showed that building something this detailed at the start would add complexity and risk the timeline. Phase 2 also brings AI deeper into the system and makes changes based on the data and metrics we see after launch.",
  },
  {
    when: "After launch results",
    what: "Commission and EMI only move to the new look. They are not redesigned.",
  },
];

/** Numbered close-ups of what was added, each crop at its own size. Items with `mobileSrc` show desktop and mobile side by side. */
function Added({ items, two }) {
  return (
    <div className={two ? "cs-added cs-added--two" : "cs-added"}>
      {items.map(({ title, src, mobileSrc, alt, text, width }, i) => (
        <div key={title} className="cs-added__item">
          <div className="cs-added__head">
            <span className="cs-added__num" aria-hidden="true">
              {i + 1}
            </span>
            <h3 className="cs-card__title">{title}</h3>
          </div>
          {mobileSrc ? (
            <div className="cs-added__pair">
              <div>
                <p className="cs-added__device">Desktop</p>
                <CaseFigure src={src} alt={`${alt}, desktop`} caption={null} />
              </div>
              <div>
                <p className="cs-added__device">Mobile</p>
                <CaseFigure
                  src={mobileSrc}
                  alt={`${alt}, mobile`}
                  caption={null}
                />
              </div>
            </div>
          ) : (
            src &&
            (width ? (
              // Shown at its real size (half the 2x export) so it stays sharp
              <div style={{ maxWidth: width }}>
                <CaseFigure src={src} alt={alt} caption={null} />
              </div>
            ) : (
              <CaseFigure src={src} alt={alt} caption={null} />
            ))
          )}
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

/** A small uppercase label above a screen or a group of close-ups. */
function Label({ children }) {
  return <p className="cs-compare__label">{children}</p>;
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
            <CaseFigure
              src={foldBeginner}
              alt="The Faveo beginner dashboard, first screen on desktop"
            />
          </div>
          <h1 className="cs-hero__title">Faveo Agent Dashboard</h1>
          <p className="cs-hero__summary">
            A new home for Care Health’s insurance agents.{" "}
            <strong>One menu, two views</strong> and an AI assistant that points
            to the next job. New agents get guidance. Experienced agents get
            their numbers.
          </p>
          <MetaRow items={DETAILS} />
        </div>
      </header>

      <SectionBar chapters={CHIPS} />

      <div className="cs-column">
        <S id="project">
          <p className="cs-text">
            Faveo is Care Health’s dashboard for{" "}
            <strong>insurance agents</strong>. Agents manage policies, handle
            customer service requests and check commissions. The redesign also
            adds <strong>rewards</strong>.
          </p>
          <p className="cs-text">
            I was the <strong>only designer</strong> on this project, which ran
            for two to three months. I held regular feedback sessions with other
            designers and front-end developers.
          </p>
        </S>

        <S id="research">
          <p className="cs-text">
            The business asked for a <strong>new portal</strong>. The research
            started from that ask and added feedback from internal teams and
            external agents. I used <strong>analytics data</strong> and the{" "}
            <strong>WhatsApp group conversations</strong> of different zones,
            and I met <strong>five agents in person</strong>. Within that
            research I analysed <strong>three agent cohorts</strong>.
          </p>
          <div className="cs-cards">
            {USER_GROUPS.map(([group, who]) => (
              <div key={group} className="cs-card">
                <h3 className="cs-card__title">{group}</h3>
                <p>{who}</p>
              </div>
            ))}
          </div>
          <h3 className="cs-subheading">What the research showed</h3>
          <ul className="cs-dots">
            {KEY_INSIGHTS.map((insight, i) => (
              <li key={i}>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </S>

        <S id="ux-audit">
          {AUDIT.map(({ title, items }) => (
            <div key={title} className="cs-section__content">
              <h3 className="cs-subheading">{title}</h3>
              <ul className="cs-dots">
                {items.map((item, i) => (
                  <li key={i}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Compare
            beforeLabel="After login"
            afterLabel="A table page"
            stacked
            before={
              <CaseFigure
                src={oldDashboard}
                alt="Old portal: the page an agent lands on after login"
                caption={null}
              />
            }
            after={
              <CaseFigure
                src={oldTable}
                alt="Old portal: one table page with the yellow header row"
                caption={null}
              />
            }
          />
          <p className="cs-figure__caption">The old portal</p>
        </S>

        <S id="synthesis">
          <div className="cs-cards">
            {THEMES.map(([title, text]) => (
              <div key={title} className="cs-card">
                <h3 className="cs-card__title">{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </S>

        <S id="problems-solutions">
          <div className="cs-table-wrap">
            <table className="cs-table cs-table--grouped">
              <thead>
                <tr>
                  <th scope="col">Problem</th>
                  <th scope="col">What I did</th>
                </tr>
              </thead>
              {PROBLEM_GROUPS.map(({ title, rows }) => (
                <tbody key={title}>
                  <tr>
                    <th
                      scope="colgroup"
                      colSpan={2}
                      className="cs-table__group"
                    >
                      {title}
                    </th>
                  </tr>
                  {rows.map(([problem, fix], i) => (
                    <tr key={i}>
                      <td>{problem}</td>
                      <td>{fix}</td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
          <p className="cs-text">
            All of this should help more agents{" "}
            <strong>enter their own policies</strong> instead of calling an RM.
            That still needs to be checked against real usage data.
          </p>
        </S>

        <S id="information-architecture">
          <p className="cs-text">
            The sidebar has <strong>eight items</strong>. Four groups hold the
            pages: My Business, Pipeline and Milestones, plus the Dashboard on
            its own. Commission, EMI and Reportee Business only get the{" "}
            <strong>new look</strong> for now. Info &amp; Media, Services and
            Payment Services are <strong>phase 2</strong>.
          </p>
          <CaseFigure
            src={sitemap}
            alt="Sitemap of the Faveo portal: sidebar groups, pages, and the views or tabs on each page"
            caption="Sitemap. Dark blue is redesigned in phase 1, light blue gets the new look only, dashed is phase 2."
          />
        </S>

        <S id="user-flows">
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
        </S>

        <S id="wireframes">
          <p className="cs-text">
            My first drafts split the dashboard by experience level. Both had{" "}
            <strong>too many cards on the first screen</strong>. I ran{" "}
            <strong>three demo rounds with each team</strong> to learn what
            worked and what did not. Other designers also raised questions that
            turned into insights. Three things came out of this, and each one
            changed the design.
          </p>
          <Callout tone="info" icon="i" title="Who sees which view">
            An agent starts on the <strong>beginner view</strong>. They move to
            the <strong>advanced view</strong> after six months or once they
            reach a sales amount, whichever comes first. The business can change
            both at any time. After that point the agent gets a toggle between
            the two views for a while, and then stays on advanced.
          </Callout>

          <Compare
            beforeLabel="First draft"
            afterLabel="Second draft"
            before={
              <CaseFigure
                src={wfV1Beginner}
                alt="First beginner wireframe"
                caption={null}
              />
            }
            after={
              <CaseFigure
                src={wfV2Beginner}
                alt="Second beginner wireframe"
                caption={null}
              />
            }
          />
          <p className="cs-figure__caption">
            Beginner. Before: checklist, training, contest, pending cases,
            leads. After: AI suggestions at the top, checklist, training, and
            the account target on the right. No sales breakdown.
          </p>

          <Compare
            beforeLabel="First draft"
            afterLabel="Second draft"
            before={
              <CaseFigure
                src={wfV1Advanced}
                alt="First advanced wireframe"
                caption={null}
              />
            }
            after={
              <CaseFigure
                src={wfV2Advanced}
                alt="Second advanced wireframe"
                caption={null}
              />
            }
          />
          <p className="cs-figure__caption">
            Advanced. Before: sales numbers, renewal calendar, claims, contest.
            After: sales numbers by category, with Cross Sell added.
          </p>

          {FEEDBACK.map((item) => (
            <div key={item.title} className="cs-section__content">
              <h3 className="cs-subheading">{item.title}</h3>
              <p className="cs-text">{item.text}</p>
              {item.before && item.after ? (
                <>
                  <Compare
                    beforeLabel="First draft"
                    afterLabel="Second draft"
                    stacked
                    before={
                      <CaseFigure
                        src={item.before.src}
                        alt={item.before.alt}
                        caption={null}
                      />
                    }
                    after={
                      <CaseFigure
                        src={item.after.src}
                        alt={item.after.alt}
                        caption={null}
                      />
                    }
                  />
                  <p className="cs-figure__caption">{item.image}</p>
                </>
              ) : (
                <ImagePlaceholder>{item.image}</ImagePlaceholder>
              )}
            </div>
          ))}
        </S>

        <S id="style-guide">
          <CaseFigure
            src={styleGuide}
            alt="Style guide: typography, field types, icons, colours, buttons, switcher and cards"
            caption={null}
          />
        </S>

        <S id="final-design">
          <p className="cs-text">
            This is what a <strong>new agent</strong> sees. There are{" "}
            <strong>no sales numbers</strong>, because new agents have none yet.
            The first screen is for{" "}
            <strong>guidance, rewards and the next job</strong>.
          </p>
          <Label>What I added</Label>
          <Added items={BEGINNER_ADDED} />
          <Label>The first screen</Label>
          <CaseFigure
            src={foldBeginner}
            alt="Beginner dashboard, first screen on desktop"
            caption={null}
          />
        </S>

        <Part id="advanced-dashboard" title="Advanced dashboard">
          <p className="cs-text">
            This is what an <strong>experienced agent</strong> sees.{" "}
            <strong>Sales numbers come first.</strong> The insights strip,
            contest, lead tracker and pendency center are the same as in the
            beginner view.
          </p>
          <Label>What I added</Label>
          <Added items={ADVANCED_ADDED} />
          <Label>The first screen</Label>
          <CaseFigure
            src={foldAdvanced}
            alt="Advanced dashboard, first screen on desktop"
            caption={null}
          />
        </Part>

        <Part id="renewal" title="Renewal">
          <p className="cs-text">
            The old portal listed expiring policies as plain text. Agents{" "}
            <strong>missed urgent renewal dates</strong>. The calendar and the
            heatmap now live on the Renewal page, because they need a month of
            data to load.
          </p>
          <Label>What I added</Label>
          <Added items={RENEWAL_ADDED} />
          <Label>The first screen</Label>
          <CaseFigure
            src={foldRenewal}
            alt="Renewal page, calendar view, first screen on desktop"
            caption={null}
          />
        </Part>

        <Part id="captain-care-chat" title="Captain Care chat">
          <p className="cs-text">
            Agents can ask a question from the insights strip or from anywhere
            in the portal. The chat opens as a{" "}
            <strong>drawer over the page</strong>, so the agent keeps their
            place.
          </p>
          <div className="cs-compare cs-compare--stacked">
            <div>
              <p className="cs-added__device">New chat</p>
              <CaseFigure
                src={foldChat1}
                alt="Captain Care chat drawer open over the dashboard, before a question"
                caption={null}
              />
            </div>
            <div>
              <p className="cs-added__device">With an answer</p>
              <CaseFigure
                src={foldChat2}
                alt="Captain Care chat drawer showing an answer with suggestion chips"
                caption={null}
              />
            </div>
          </div>
        </Part>

        <Part id="contest" title="Contest">
          <p className="cs-text">
            A new page under Milestones. The dashboard card only shows what is
            left to unlock the next level. This page shows{" "}
            <strong>every level, the time left and how to climb</strong>.
          </p>
          <Label>What I added</Label>
          <Added items={CONTEST_ADDED} />
          <Label>The first screen</Label>
          <CaseFigure
            src={foldContest}
            alt="Contest page with business done, seven levels, time left and tips"
            caption={null}
          />
        </Part>

        <Part id="learn-earn" title="Learn, Earn & Level Up">
          <p className="cs-text">
            Also new, under Milestones. This is where the{" "}
            <strong>“Grow, Earn &amp; Unlock Rewards” checklist</strong> on the
            beginner dashboard leads. Agents{" "}
            <strong>finish tasks, earn points and spend them on rewards</strong>
            . Task names, points and rewards are placeholders for now.
          </p>
          <Label>What I added</Label>
          <Added items={LEARN_EARN_ADDED} />
          <Label>The first screen</Label>
          <CaseFigure
            src={foldLearnEarn}
            alt="Learn, Earn and Level Up page with tasks on the left and rewards on the right"
            caption={null}
          />
        </Part>

        <Part id="mobile-view" title="Mobile view">
          <p className="cs-text">
            The same five pages on a phone: beginner dashboard, advanced
            dashboard, Renewal, Contest and Learn, Earn &amp; Level Up. The side
            menu moves behind the <strong>menu icon</strong>, and the cards{" "}
            <strong>stack in one column</strong>.
          </p>
          <div className="cs-device-row" aria-hidden="true">
            {[
              "Beginner",
              "Advanced",
              "Renewal",
              "Contest",
              "Learn, Earn & Level Up",
            ].map((name) => (
              <p key={name} className="cs-added__device">
                {name}
              </p>
            ))}
          </div>
          <CaseFigure
            src={mobileView}
            className="cs-figure--bare"
            alt="Mobile screens of the beginner dashboard, advanced dashboard, Renewal, Contest and Learn, Earn and Level Up"
            caption={null}
          />
        </Part>

        <S id="metrics">
          <p className="cs-text">
            The build is still in progress, so{" "}
            <strong>nothing is measured yet</strong>. These are the four things
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
          <p className="cs-text">
            I do not know whether any of these are reported today.{" "}
            <strong>Each one needs the team to log it first.</strong>
          </p>
        </S>

        <S id="future-scope">
          <p className="cs-text">
            This design is <strong>now being built</strong>. It should be
            finished by mid to late October 2026.
          </p>
          <Timeline items={FUTURE_SCOPE} />
        </S>
      </div>

      <ReadingProgress />
    </article>
  );
}
