import { PROJECTS } from "../data/projects";
import ProjectsIntro from "../components/ProjectsIntro";
import ProjectList from "../components/ProjectList";

export default function ProjectsPage() {
  return (
    <section className="section top-section" id="projects">
      <div className="container">
        <ProjectsIntro
          as="h1"
          eyebrow="All projects"
          title="All my work, in one place"
        />
        <ProjectList projects={PROJECTS} />
      </div>
    </section>
  );
}
