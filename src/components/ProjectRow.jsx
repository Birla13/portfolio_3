import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import { ArrowRightIcon, ExternalLinkIcon } from "./Icons";

/** Internal pages (`to`) use <Link>; external ones (`href`) open in a new tab. */
function ProjectLink({ to, href, children, ...props }) {
  if (to) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

/**
 * One project: image, title, description, tags and link.
 *
 *   variant="row"  (default) image on one side, text on the other (desktop);
 *                  `flip` puts the image on the right
 *   variant="card" image on top, text below, for the three-per-row grid
 */
export default function ProjectRow({ project, flip = false, variant = "row" }) {
  const {
    title,
    description,
    img,
    alt,
    // tags = [],
    to,
    href,
    ctaText,
  } = project;

  return (
    <FadeIn
      as="article"
      className={`project-row${flip ? " project-row--flip" : ""}${variant === "card" ? " project-row--card" : ""}`}
    >
      <ProjectLink
        to={to}
        href={href}
        className="project-card__imglink project-row__media"
        aria-label={title}
        tabIndex={-1}
      >
        <div className="project-card__image">
          <img src={img} alt={alt} loading="lazy" />
        </div>
      </ProjectLink>

      <div className="project-row__text">
        <h3 className="project-card__title">
          {to ? <Link to={to}>{title}</Link> : title}
        </h3>
        <p className="project-card__desc">{description}</p>
        {/* {tags.length > 0 && (
          <ul className="project-tags" aria-label="Tags">
            {tags.map((tag) => (
              <li key={tag} className="project-tag">
                {tag}
              </li>
            ))}
          </ul>
        )} */}
        <ProjectLink to={to} href={href} className="project-card__cta">
          {ctaText} {to ? <ArrowRightIcon /> : <ExternalLinkIcon />}
        </ProjectLink>
      </div>
    </FadeIn>
  );
}
