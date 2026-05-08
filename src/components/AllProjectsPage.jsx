import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/projects";
import CTASection from "./CTASection";
import Footer from "./Footer";
import Nav from "./Nav";

const AllProjectsPage = () => {
  return (
    <>
      <Nav />
      <section className="section section--light" id="projects">
        <div className="container">
          {/* Header */}
          <FadeIn>
            <div className="projects__header">
              <h1 className="heading-lg">Selected projects</h1>
              <p
                className="body-base"
                style={{ marginTop: "0.75rem", maxWidth: "36rem" }}
              >
                Explore my selected projects, showcasing my dedication to
                innovative and heartfelt design.
              </p>
            </div>
          </FadeIn>

          {/* Cards grid */}
          <div className="projects__grid">
            {PROJECTS.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.1}>
                <ProjectCard {...project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <main>
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default AllProjectsPage;
