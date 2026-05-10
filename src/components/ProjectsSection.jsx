import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/projects";
import { ArrowRightIcon } from "./Icons";

/**
 * ProjectsSection
 * Displays the "Selected projects" heading, sub-copy, and a 2-column
 * responsive grid of ProjectCard components.
 */
export default function ProjectsSection() {
  return (
    <section className="section section--light" id="projects">
      <div className="container">
        {/* Header */}
        <FadeIn className="new">
          <div className="projects__header">
            <h2 className="heading-lg">Selected projects</h2>
            <p
              className="body-base"
              style={{ marginTop: "0.75rem", maxWidth: "36rem" }}
            >
              Explore my selected projects, showcasing my dedication to
              innovative and heartfelt design.
            </p>
          </div>
          <div className="seeAll">
            <a href="/projects" className="project-card__cta">
              See All Projects <ArrowRightIcon />
            </a>
          </div>
        </FadeIn>

        {/* Cards grid */}
        {/* <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div> */}

        <div className="projects__grid">
          {PROJECTS.slice(0, 2).map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
