import FadeIn from "./FadeIn";
import CTASection from "./CTASection";
import Footer from "./Footer";
import Nav from "./Nav";

/* ─── Resume data ─────────────────────────────────────────────────────────── */
const EDUCATION = [
  {
    degree: "BTech",
    school: "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY KOTA  2020–2024",
    bullets: ["CGPA: 7.89/10"],
  },
];

const EXPERIENCE = [
  {
    role: "UX/UI Designer",
    company: "Care Health Insurance Litmited",
    period: "May 2024 — Current",
    bullets: [
      "Faveo Plus Ecosystem: Spearheaded a UX overhaul by auditing 15+ internal workflows to resolve usability friction for insurance agents.",
      "Organic Growth Tools: Conceptualized and shipped scalable SEO templates and 10+ static pages, including BMI and Pregnancy calculators and the E-Power agent website.",
      "Customer App Redesign: Directed a comprehensive redesign, overseeing end-to-end UI/UX across 10+ modules to improve the digital policyholder experience.",
      "User Journey Optimization: Utilized funnel analysis to streamline complex insurance processes and improve user retention within the mobile application.",
    ],
  },
];

const SKILLS = [
  "Design Skills: User Research, UX Audits, Heuristic Evaluation, User Flows, Interaction Design, Visual Hierarchy, Design Systems, Prototyping.",
  "Technical Skills: HTML5, CSS3, JavaScript, C++, Tailwind CSS, Prompt Engineering.",
  "Tools: Figma, Framer, Canva, VS Code.",
];

const PROJECTS = [
  {
    title: "UEHD - Industrial Lifting Solutions Website",
    desc: "Designed and launched a high-performance industrial website by migrating pixel-perfect Figma prototypes to a responsive Framer build, featuring a custom product-showcase framework that optimized navigation and site speed for industrial clients.",
  },
  {
    title: "Reimagining Insurance For Everyday User",
    desc: "Transformed the end-to-end mobile experience for policyholders by redesigning 10+ distinct modules in Figma, utilizing funnel analysis to optimize high-conversion user journeys that streamlined complex insurance processes and increased user retention.",
  },
  {
    title: "Faveo Plus – Internal Agent Platform Redesign",
    desc: "Transformed a complex B2B insurance ecosystem by auditing 15+ core task flows and delivering 45+ high-fidelity screens, focusing on an optimized visual hierarchy that significantly reduced usability friction for internal agents.",
  },
];

const PERSONAL_QUALITIES = [
  "Possessing a refined eye for aesthetic balance and creative expression.",
  "Ensuring precision and high-quality standards in every design task.",
  "Communicating ideas and feedback with clear, honest, and direct transparency.",
  "Actively seeking feedback to continuously refine and evolve professional skills.",
  "Staying deeply connected to traditional roots while embracing modern growth.",
];

const INTERESTS = [
  "Crafting and sharing engaging reels to connect with a digital audience",
  "Exploring diverse cities to gain new perspectives and inspiration.",
  "Expressing creativity through hands-on artistic projects and handmade works.",
  "Writing rhythmic verses and poems to explore imaginative storytelling.",
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function ResumeSection({ title, children }) {
  return (
    <FadeIn>
      <div className="resume-section">
        <h2 className="resume-section__title">{title}</h2>
        {children}
      </div>
    </FadeIn>
  );
}

function BulletList({ items }) {
  return (
    <ul className="resume-bullets">
      {items.map((item, i) => (
        <li key={i} className="resume-bullets__item">
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function ResumePage() {
  return (
    <>
      <Nav />

      {/* ── Hero banner ────────────────────────────────────────────────────── */}
      <section className="resume-hero">
        <div className="container">
          {/* <div className="spacing"> */}
          <FadeIn delay={0.05}>
            <h1 className="resume-hero__headline">
              Creating Clarity
              <br />
              in a World of Complexity.
            </h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="resume-hero__bio">
              I’m a UI/UX Designer at Care Health Insurance and a Computer
              Science graduate from IIIT Kota. I specialize in building
              high-conversion digital experiences that solve complex user
              problems with simplicity and scalability.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1WBdP6vvq6CRw_SfYYYMsrVAlaW0YV-gJ/view"
              className="resume-download-btn"
            >
              Download Resume as PDF
            </a>
          </FadeIn>
          {/* </div> */}
        </div>
      </section>

      {/* ── Resume body ────────────────────────────────────────────────────── */}
      <div className="resume-body">
        <div className="container">
          {/* <div className="spacing"> */}
          {/* Education */}
          <ResumeSection title="Education">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="resume-entry">
                <p className="resume-entry__header">
                  <strong>{edu.degree}</strong>, {edu.school}
                </p>
                <BulletList items={edu.bullets} />
              </div>
            ))}
          </ResumeSection>

          {/* Experience */}
          <ResumeSection title="Experience">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="resume-entry">
                <p className="resume-entry__header">
                  <strong>{exp.role}</strong>, {exp.company}, {exp.period}
                </p>
                <BulletList items={exp.bullets} />
              </div>
            ))}
          </ResumeSection>

          {/* Skills */}
          <ResumeSection title="Skills">
            <BulletList items={SKILLS} />
          </ResumeSection>

          {/* Projects */}
          <ResumeSection title="Projects">
            <ul className="resume-bullets resume-entry__header">
              {PROJECTS.map((p, i) => (
                <li key={i} className="resume-bullets__item">
                  <strong>{p.title}</strong>
                  <br />
                  {p.desc}
                </li>
              ))}
            </ul>
          </ResumeSection>

          {/* Personal qualities */}
          <ResumeSection title="Personal qualities">
            <BulletList items={PERSONAL_QUALITIES} className="resume-bullets" />
          </ResumeSection>

          {/* Interests */}
          <ResumeSection title="Interests">
            <BulletList items={INTERESTS} />
          </ResumeSection>
          {/* </div> */}
        </div>
      </div>

      <main>
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
