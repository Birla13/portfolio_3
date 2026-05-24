// import { ArrowRightIcon } from "./Icons";
import { FiExternalLink } from "react-icons/fi";
/**
 * ProjectCard
 * Displays a project image, title, one-liner description, and CTA link.
 *
 * Props (from PROJECTS data):
 *   title       – project name
 *   description – one-liner
 *   img         – image URL
 *   alt         – image alt text
 *   href        – link destination
 */
export default function ProjectCard({
  title,
  description,
  img,
  alt,
  href = "#",
  ctaText,
}) {
  return (
    <article className="project-card">
      {/* Thumbnail */}
      <div className="project-card__image">
        <img src={img} alt={alt} loading="lazy" />
      </div>

      {/* Text */}
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>

      {/* CTA */}
      <a href={href} className="project-card__cta" target="_blank">
        {ctaText} <FiExternalLink />
      </a>
    </article>
  );
}
