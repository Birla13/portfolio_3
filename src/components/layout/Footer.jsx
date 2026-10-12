import { Link } from "react-router-dom";
import { EMAIL, NAV_LINKS, SITE_NAME } from "../../data/site";
import FadeIn from "../FadeIn";
import { ExternalLinkIcon } from "../Icons";
import SocialLinks from "../SocialLinks";

/**
 * Black closing section on every page: "Interested in connecting?"
 * and the footer links, merged into one block with a rounded top.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-end" id="contact">
      <FadeIn className="cta-section__inner">
        <h2 className="cta-section__heading">Interested in connecting?</h2>
        <a href={`mailto:${EMAIL}`} className="cta-section__btn">
          Book a consultation
        </a>
      </FadeIn>

      <div className="footer">
        <div className="footer__main">
          <nav className="footer__nav" aria-label="Footer navigation">
            {NAV_LINKS.map(({ label, to, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__nav-link nav-external"
                >
                  {label}
                  <ExternalLinkIcon size="1em" />
                </a>
              ) : (
                <Link key={label} to={to} className="footer__nav-link">
                  {label}
                </Link>
              ),
            )}
          </nav>
          <SocialLinks
            className="footer__right"
            linkClassName="footer__social-btn"
          />
        </div>
        <div className="footer__copy">
          Copyright {year} by {SITE_NAME}
        </div>
      </div>
    </footer>
  );
}
