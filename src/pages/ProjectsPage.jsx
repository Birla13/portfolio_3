import { PROJECTS } from "../data/projects";
import ProjectsIntro from "../components/ProjectsIntro";
import ProjectList from "../components/ProjectList";

export default function ProjectsPage() {
  return (
    <section className="section top-section" id="projects">
      <div className="container">
        <ProjectsIntro as="h1" />
        <ProjectList projects={PROJECTS} />
      </div>
    </section>
  );
}
