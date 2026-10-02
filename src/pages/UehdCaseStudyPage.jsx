import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ExternalLinkIcon } from "../components/Icons";
import Section from "../components/case-study/Section";
import Callout from "../components/case-study/Callout";
import Quote from "../components/case-study/Quote";
import StatPanel from "../components/case-study/StatPanel";
import MetaRow from "../components/case-study/MetaRow";
import Timeline from "../components/case-study/Timeline";
import ProblemSolution from "../components/case-study/ProblemSolution";
import CaseFigure from "../components/case-study/CaseFigure";
import Lightbox from "../components/case-study/Lightbox";
import SectionBar from "../components/case-study/SectionBar";
import ReadingProgress from "../components/case-study/ReadingProgress";

import heroMockup from "../Images/uehd/hero.webp";
import navigationStates from "../Images/uehd/navigation.webp";
import informationArchitecture from "../Images/uehd/information-architecture.svg";
import wireframes from "../Images/uehd/wireframes.webp";
import industriesBeforeAfter from "../Images/uehd/before-after.webp";
import styleGuide from "../Images/uehd/style-guide.webp";
import finalScreens from "../Images/uehd/desktop.webp";

/*
 * UEHD case study (/projects/uehd).
 * The images in src/Images/uehd/ are stand-ins: replace each file with the
 * real screen (same file name, or update the import above).
 */

/** Sections in page order. `label` is the eyebrow and the chip on phones. */
const SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    title: "Two decades in business, and no website",
  },
  {
    id: "research",
    label: "Research",
    title: "Buyers know the machine, not its name",
  },
  {
    id: "problems-solutions",
    label: "Problems and solutions",
    title: "Six problems, six design answers",
  },
  {
    id: "navigation",
    label: "Navigation",
    title: "Buyers find products by picture",
  },
  {
    id: "information-architecture",
    label: "Information architecture",
    title: "How the site is organised",
  },
  {
    id: "wireframes",
    label: "Wireframes",
    title: "We designed the first screen first",
  },
  {
    id: "hallway-testing",
    label: "Hallway testing",
    title: "People tried to click cards that weren't clickable",
  },
  {
    id: "style-guide",
    label: "Style guide",
    title: "Poppins and one brand blue",
  },
  {
    id: "final-designs",
    label: "Final designs",
    title: "Four pages, three screen sizes",
  },
  {
    id: "build-and-launch",
    label: "Build and launch",
    title: "Our first Framer build, live in 4 months",
  },
  {
    id: "outcome",
    label: "Outcome",
    title: "125 visitors and 3 to 4 leads in 15 days",
  },
  { id: "future-scope", label: "Future scope", title: "What comes next" },
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
  [
    "Team",
    "Deepanshi Birla and Chakshu Khanna. We both worked on design (Figma) and build (Framer).",
  ],
  ["Timeline", "4 months: 2 in design, 2 in build"],
  ["Tools", "Figma, Framer (with CMS)"],
  // [
  //   "Deliverable",
  //   "Responsive website for desktop, tablet and mobile, live at uehd.co.in",
  // ],
  ["Launch", "December 2025, at an industrial exhibition in Kanpur"],
];

const FINDINGS = [
  "Many buyers don't know a product's technical name, but they recognise the machine as soon as they see a photo.",
  "Industrial websites are hard to use. LES Store's navigation is text-heavy and full of jargon. The design is dense, spacing and card styles change from page to page, and one section mixes categories with sub-categories.",
  "Buyers only go further if the site stocks the brand they already trust.",
  "Buyers don't purchase online today. The equipment is expensive and every deal closes on a call with the owner, so the first version of the site focuses on getting buyers to enquire.",
  "Every crane is built for the buyer's space and machinery, so cranes can't be listed as fixed products.",
];

const PROBLEMS_SOLUTIONS = [
  {
    icon: "search",
    title: "Unknown product names",
    problem: "Buyers don't know technical product names",
    solution:
      "Image-first navigation, with category thumbnails right under the header",
  },
  {
    icon: "layout",
    title: "Cluttered competitor sites",
    problem: "Competitor sites feel cluttered",
    solution:
      "A clean layout with one card style and a fixed spacing and type scale",
  },
  {
    icon: "shield",
    title: "Trusted brands first",
    problem: "Buyers want to see their brand first",
    solution: "“Authorised Retailer of” brand logos in the hero",
  },
  {
    icon: "wrench",
    title: "Cranes are custom-built",
    problem: "Cranes can't be listed as products",
    solution:
      "A banner at the bottom of the page has a short message and an Enquire Now button, so buyers who need a custom crane can get in touch.",
  },
  {
    icon: "users",
    title: "Different buyer needs",
    problem: "Some buyers know exactly what they want, others don't",
    solution:
      "Two enquiry types: Quick, for buyers who just want to talk, and Detailed, for buyers who know the exact spec. We designed both for a later phase. Since most buyers work offline, we launched with a simple Google Form they could fill in easily, and the site didn't need a backend yet.",
  },
  {
    icon: "pencil",
    title: "No designer to update the site",
    problem: "The owner has no designer to update the site",
    solution: "A Framer CMS so he can add products himself",
  },
];

const BUILD_TIMELINE = [
  {
    when: "Months 1 to 2",
    done: true,
    what: "Design in Figma, checking in with the owner at every stage.",
  },
  {
    when: "Month 3 to 4",
    done: true,
    what: "Build in Framer: type scale, colour styles, components and a product CMS.",
  },
  {
    when: "December 2025",
    done: true,
    what: "Launch at an industrial exhibition in Kanpur.",
  },
];

const OUTCOME_STATS = [
  { value: "~125", label: "unique users in the first 15 days" },
  {
    value: "3 to 4",
    label: "leads in those 15 days, each called back by the owner",
  },
  { value: "1st", label: "website for the business, which had none before" },
];

const FUTURE_SCOPE = [
  "The two-tab enquiry form (Quick and Detailed), connected to a database",
  "WhatsApp enquiries",
  "A blog section",
  "Prices and call-to-action buttons on product cards",
  "Online payments for products, spare parts and other items",
];

export default function UehdCaseStudyPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const previous = document.title;
    document.title = "Universal Enterprises Hoist Division · Deepanshi Birla";
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
              src={heroMockup}
              alt="Hero mockup across devices"
              onOpen={setLightboxImage}
            />
          </div>
          <h1 className="cs-hero__title">
            Universal Enterprises Hoist Division
          </h1>
          <Quote>
            Taking an industrial supplier running since 2001 online in 4 months.
          </Quote>
          <p className="cs-hero__summary">
            UEHD had sold lifting equipment from Kanpur for over two decades
            <strong> without a website</strong>. We designed and built its first
            site in Figma and Framer, using{" "}
            <strong>product images for navigation</strong> so buyers can find
            equipment without knowing its technical name. The site launched in
            December 2025 at an industrial exhibition in Kanpur. In its first 15
            days, it had <strong>about 125 unique users</strong> and brought in{" "}
            <strong>3 to 4 leads</strong>.
          </p>
          <a
            href="https://www.uehd.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-hero__live"
          >
            Visit uehd.co.in <ExternalLinkIcon />
          </a>
          <MetaRow items={DETAILS} />
        </div>
      </header>

      <SectionBar chapters={CHIPS} />

      <div className="cs-column">
        <S id="overview">
          <p className="cs-text">
            Universal Enterprises Hoist Division (UEHD) has sold hoists, cranes
            and rigging equipment from Kanpur since 2001. Its clients include
            steel plants, metro and rail projects, hospitals, and aerospace and
            manufacturing units. Even so, the business had no website, and{" "}
            <strong>new clients came only through local contacts</strong>,
            mostly in Kanpur.
          </p>
          <Callout tone="accent" title="The goal">
            The owner wanted to reach buyers across North India first, and later
            the rest of the country. Our goal was to build a website that would
            give UEHD an online presence in its market.
          </Callout>
        </S>

        <S id="research">
          <p className="cs-text">
            We knew nothing about heavy-lifting equipment, its buyers or its
            competitors when we started. We had{" "}
            <strong>about five calls with the owner</strong> about his products,
            how a sale happens, and who buys. We also read every catalogue and
            product PDF he sent us. Our findings came from these calls and
            documents, since the owner deals with his buyers directly.
          </p>
          <p className="cs-text">
            He pointed us to LES Store (liftingequipmentstore.us) as an example
            of what sites in this market look like. We couldn't find a
            comparable Indian competitor site.
          </p>
          <p className="cs-text">
            The buyers are a mix of procurement managers, plant engineers,
            maintenance heads and business owners, and{" "}
            <strong>many of them aren't technical</strong>.
          </p>
          <p className="cs-text">Here's what we learned:</p>
          <div className="cs-callouts">
            {FINDINGS.map((finding, i) => (
              <Callout key={finding} tone="info" icon={i + 1}>
                {finding}
              </Callout>
            ))}
          </div>
        </S>

        <S id="problems-solutions">
          <ProblemSolution items={PROBLEMS_SOLUTIONS} />
        </S>

        <S id="navigation">
          <p className="cs-text">
            IKEA and Max Fashion both show category images in their headers, and
            we followed the same idea. I sorted the products into{" "}
            <strong>five groups</strong> (Hoists, Tackle/Rigging System, Epoxy
            Flooring &amp; Paints, Miscellaneous and Crane), based on the
            owner's catalogue and our calls.
          </p>
          <p className="cs-text">
            On desktop, a bar of category thumbnails sits under the header. When
            the user scrolls down, the images hide and only the category names
            stay, and both bars remain fixed at the top. The images help
            first-time visitors understand each category. After that, they would
            only take up space and push the content down.
          </p>
          <p className="cs-text">
            On mobile, the thumbnails sit in a top bar that{" "}
            <strong>expands on tap</strong>, so they're available when needed
            but don't fill the screen.
          </p>
          <p className="cs-text">
            The navigation depends on photos, so product images had to look
            consistent. We sourced them from brand websites and stock libraries,
            then upscaled them with AI to bring them to the same quality.
          </p>
          <CaseFigure
            src={navigationStates}
            alt="Navigation states: desktop expanded and scrolled, mobile collapsed and expanded"
            onOpen={setLightboxImage}
          />
        </S>

        <S id="information-architecture">
          <CaseFigure
            src={informationArchitecture}
            alt="Information architecture diagram"
            onOpen={setLightboxImage}
          />
        </S>

        <S id="wireframes">
          <p className="cs-text">
            We checked in with the owner at every stage so we wouldn't have to
            redo work later. We designed the first screen (header, category bar
            and hero) first, since{" "}
            <strong>that's what visitors judge the site by</strong>.
          </p>
          <CaseFigure
            src={wireframes}
            alt="Wireframes"
            onOpen={setLightboxImage}
          />
        </S>

        <S id="hallway-testing">
          <p className="cs-text">
            We ran hallway usability tests with 5 people around us who regularly
            use many different websites and apps.
          </p>
          <Quote tone="accent" title="What we saw">
            The “Industries We Serve” cards looked exactly like the product
            category cards, so people tried to click them, but they weren't
            clickable.
          </Quote>
          <p className="cs-text">
            We rebuilt the section as a <strong>bento grid of 7 tiles</strong>{" "}
            in different sizes, each with a photo and a centred label. Because
            it looks different from the product cards, people can now tell which
            cards they can click.
          </p>
          <CaseFigure
            src={industriesBeforeAfter}
            alt="Industries We Serve: before and after"
            onOpen={setLightboxImage}
          />
        </S>

        <S id="style-guide">
          <p className="cs-text">
            <strong>Poppins</strong> is the typeface and{" "}
            <strong>#0094DB</strong> is the brand colour.
          </p>
          <CaseFigure
            src={styleGuide}
            alt="Style guide: colours, type scale and components"
            onOpen={setLightboxImage}
          />
        </S>

        <S id="final-designs">
          <p className="cs-text">
            We designed the home page, product listing, product detail page and
            enquiry page for desktop, tablet and mobile. The product detail page
            splits specs into tabs so technical buyers get full details without
            crowding the page for everyone else.
          </p>
          <CaseFigure
            src={finalScreens}
            alt="Final screens per page and breakpoint"
            onOpen={setLightboxImage}
          />
        </S>

        <S id="build-and-launch">
          <Timeline items={BUILD_TIMELINE} />
          <p className="cs-text">
            This was our first Framer project. We set up a type scale, colour
            styles, reusable components and a product CMS. The navigation was
            the hardest part to build, both the images hiding on scroll and
            turning the whole nav into one reusable component.
          </p>
          <p className="cs-text">
            For launch, we used a <strong>Google Form</strong> for enquiries.
            Most buyers work offline, and a form is simple for them to use. The
            client also had no business email or budget for a database, and we
            wanted to go live quickly and see how people used the site. We
            designed the two-tab enquiry form for a future phase.
          </p>
        </S>

        <S id="outcome">
          <StatPanel
            title="The first 15 days after launch"
            stats={OUTCOME_STATS}
          />
          <p className="cs-text">
            The site launched at an industrial exhibition in Kanpur in December
            2025. Visitors responded very positively, and more leads came from
            there.
          </p>
        </S>

        <S id="future-scope">
          <ul className="cs-dots">
            {FUTURE_SCOPE.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </S>
      </div>

      <ReadingProgress />
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </article>
  );
}
