import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS, SITE_NAME } from "../../data/site";
import { MenuIcon, CloseIcon, ExternalLinkIcon } from "../Icons";
import SocialLinks from "../SocialLinks";

/** Sticky top bar: name, desktop links, and a mobile drawer. */
export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);
  const navRef = useRef(null);

  // Publish the nav's height as --nav-h so sticky elements below it
  // (like the case study's section bar) can sit right under it.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const update = () =>
      document.documentElement.style.setProperty("--nav-h", `${nav.getBoundingClientRect().height}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(nav.firstElementChild);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav" ref={navRef}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" onClick={closeDrawer}>
          {SITE_NAME}
        </Link>

        {/* Desktop links ("Projects" also stays active on a case study) */}
        <nav className="nav__links" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, to, href }) =>
            href ? (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="nav__link nav-external">
                {label}
                <ExternalLinkIcon size="1em" />
              </a>
            ) : (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--active" : "nav__link"
                }
              >
                {label}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav__hamburger"
          onClick={() => setDrawerOpen((open) => !open)}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          aria-controls="navDrawer"
        >
          {drawerOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <nav className="nav__drawer is-open" id="navDrawer" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, to, href }) =>
            href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav__drawer-link nav-external"
                onClick={closeDrawer}
              >
                {label}
                <ExternalLinkIcon size="1em" />
              </a>
            ) : (
              <Link key={label} to={to} className="nav__drawer-link" onClick={closeDrawer}>
                {label}
              </Link>
            )
          )}
          <SocialLinks className="social-icons hide" linkClassName="social-icon-btn" />
        </nav>
      )}
    </header>
  );
}
