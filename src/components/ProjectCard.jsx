import { FiExternalLink } from "react-icons/fi";

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
      <a
        href={href}
        className="project-card__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        {ctaText} <FiExternalLink />
      </a>
    </article>
  );
}
