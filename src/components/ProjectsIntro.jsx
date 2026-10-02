import FadeIn from "./FadeIn";

/**
 * "Selected projects" heading and intro text.
 * Use `as="h1"` when it's the main heading of the page.
 */
export default function ProjectsIntro({ as: Heading = "h2" }) {
  return (
    <FadeIn className="projects__header">
      <Heading className="heading-lg">Selected projects</Heading>
      <p className="body-base projects__intro">
        Explore my selected projects, showcasing my dedication to innovative
        and heartfelt design.
      </p>
    </FadeIn>
  );
}
