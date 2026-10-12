import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";
import FadeIn from "../FadeIn";
import ProjectsIntro from "../ProjectsIntro";
import ProjectList from "../ProjectList";

const FEATURED_COUNT = 2;

/** Home page: the first two projects, then a centred "See All Projects" button. */
export default function ProjectsSection() {
  return (
    <section className="band band--b" id="projects">
      <div className="container">
        <ProjectsIntro eyebrow="Featured work" title="Two projects I’m proud of" />
        <ProjectList projects={PROJECTS.slice(0, FEATURED_COUNT)} />
        <FadeIn className="projects__see-all">
          <Link to="/projects" className="cta-section__btn">
            See All Projects
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
