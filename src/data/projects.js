import project1 from "../Images/project1.png";
import project from "../Images/project.png";
import project2 from "../Images/project2.png";
import project3 from "../Images/project3.png";
import project4 from "../Images/project4.png";
import project5 from "../Images/project5.png";

/**
 * Portfolio projects, in display order.
 * The home page shows the first two; the Projects page shows all of them.
 * Order: UEHD, Faveo Dashboard, Customer app, Faveo app, BMI Calculator, Web Story.
 *
 *   to   – a page on this site (e.g. a case study), opens in the same tab
 *   href – an external link, opens in a new tab
 *   tags – small labels shown under the description
 */
export const PROJECTS = [
  {
    id: "hoist-division",
    title: "Helping buyers find industrial cranes without knowing their technical names",
    description:
      "Taking an authorised retailer of industrial cranes online. A freelance project with one other designer, from needs analysis to the Framer build.",
    img: project1,
    alt: "UEHD",
    to: "/projects/uehd",
    ctaText: "View case study",
    tags: ["B2B", "Industrial equipment", "Website", "Figma", "Framer"],
  },
  {
    id: "faveo-dashboard",
    title: "Turning a cluttered agent portal into a guided daily workspace",
    description:
      "Redesigning the dashboard Care Health's insurance agents use to sell and earn. As the only designer, I led research and designed every view.",
    img: project,
    alt: "Faveo Agent Dashboard",
    to: "/projects/faveo",
    ctaText: "View case study",
    tags: ["B2B", "Dashboard", "Insurance", "UX research"],
  },
  {
    id: "reimagining-insurance",
    title: "Making several insurance policies easy to manage in one app",
    description:
      "Making health insurance easier for Care Health's policyholders. Working with the design team, I redesigned 10+ modules of the app.",
    img: project4,
    alt: "Insurance Customer app",
    href: "https://dribbble.com/shots/27337907-Reimagining-Insurance-For-Everyday-User",
    ctaText: "Dribbble link",
    tags: ["Mobile app", "Insurance", "Health", "Redesign"],
  },
  {
    id: "faveo-plus",
    title: "Cutting friction from 15+ daily workflows for insurance agents",
    description:
      "Simplifying the mobile app insurance agents use every day. With my team, I audited 15+ workflows and redesigned it around faster tasks.",
    img: project2,
    alt: "Faveo App",
    href: "https://dribbble.com/shots/27194549-Next-Gen-Insurance-Agent-App",
    ctaText: "Dribbble link",
    tags: ["B2B", "Internal tool", "Insurance", "UX audit"],
  },
  {
    id: "bmi-calculator",
    title: "Turning a simple health check into new website visitors",
    description:
      "A quick health check that brings new visitors to Care Health's website. I designed and shipped it with the SEO and content teams.",
    img: project3,
    alt: "BMI Calculator",
    href: "https://www.careinsurance.com/health-insurance/calculators/bmi-calculator",
    ctaText: "Website link",
    tags: ["Web", "Health", "Calculator", "SEO"],
  },
  {
    id: "web-story",
    title: "Making health and insurance tips quick to read on mobile",
    description:
      "Short, swipeable health, travel and insurance stories for Care Health's website. I designed the format so each screen shares one tip.",
    img: project5,
    alt: "Web Story",
    href: "https://www.careinsurance.com/web-story/",
    ctaText: "Website link",
    tags: ["Web", "Content", "SEO"],
  },
];
