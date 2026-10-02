import { SOCIAL_LINKS } from "../data/site";
import { SOCIAL_ICONS } from "./Icons";

/**
 * Row of round social icon links (Dribbble, LinkedIn, Gmail).
 *
 * Props:
 *   className     – class for the wrapper element
 *   linkClassName – class for each icon link
 */
export default function SocialLinks({ className, linkClassName }) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map(({ label, icon, href }) => {
        const Icon = SOCIAL_ICONS[icon];
        const external = href.startsWith("http");
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            className={linkClassName}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
