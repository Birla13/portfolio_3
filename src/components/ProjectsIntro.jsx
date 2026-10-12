import FadeIn from "./FadeIn";

/**
 * Projects label and heading.
 * Use `as="h1"` when it's the main heading of the page.
 */
export default function ProjectsIntro({ as: Heading = "h2", eyebrow, title }) {
  return (
    <FadeIn className="projects__header">
      <p className="eyebrow">{eyebrow}</p>
      <Heading className="heading-lg">{title}</Heading>
    </FadeIn>
  );
}
