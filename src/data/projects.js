import project1 from "../Images/project1.png";
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
    title: "UEHD - Universal Enterprises Hoist Division",
    description:
      "A high-performance industrial platform for the Universal Enterprises Hoist Division featuring specialized equipment and services.",
    img: project1,
    alt: "UEHD",
    to: "/projects/uehd",
    ctaText: "View case study",
    tags: ["B2B", "Industrial equipment", "Website", "Figma", "Framer"],
  },
  {
    id: "faveo-dashboard",
    title: "Faveo Agent Dashboard",
    description:
      "Care Health's dashboard for insurance agents, redesigned with beginner and advanced views, guided onboarding and AI suggestions.",
    img: project2,
    alt: "Faveo Agent Dashboard",
    to: "/projects/faveo",
    ctaText: "View case study",
    tags: ["B2B", "Dashboard", "Insurance", "UX research"],
  },
  {
    id: "reimagining-insurance",
    title: "Reimagining Insurance For Everyday User",
    description:
      "An adaptive mobile ecosystem that simplifies complex multi-policy management and personal health tracking for customers.",
    img: project4,
    alt: "Insurance Customer app",
    href: "https://dribbble.com/shots/27337907-Reimagining-Insurance-For-Everyday-User",
    ctaText: "Dribbble link",
    tags: ["Mobile app", "Insurance", "Health", "Redesign"],
  },
  {
    id: "faveo-plus",
    title: "Faveo Plus - Internal Agent Platform Redesign",
    description:
      "A streamlined agent application focused on efficient internal workflows, mobile productivity, and optimized insurance operations.",
    img: project2,
    alt: "Faveo App",
    href: "https://dribbble.com/shots/27194549-Next-Gen-Insurance-Agent-App",
    ctaText: "Dribbble link",
    tags: ["B2B", "Internal tool", "Insurance", "UX audit"],
  },
  {
    id: "bmi-calculator",
    title: "BMI Calculator",
    description:
      "A clean, accessible health tool designed for quick body mass index tracking through intuitive visual metrics.",
    img: project3,
    alt: "BMI Calculator",
    href: "https://www.careinsurance.com/health-insurance/calculators/bmi-calculator",
    ctaText: "Website link",
    tags: ["Web", "Health", "Calculator", "SEO"],
  },
  {
    id: "web-story",
    title: "Web Story",
    description:
      "A visual content hub delivering health, travel, and insurance insights through an engaging, easy-to-read format.",
    img: project5,
    alt: "Web Story",
    href: "https://www.careinsurance.com/web-story/",
    ctaText: "Website link",
    tags: ["Web", "Content", "SEO"],
  },
];
