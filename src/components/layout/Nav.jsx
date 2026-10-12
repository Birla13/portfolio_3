import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { EMAIL, NAV_LINKS, SITE_NAME } from "../../data/site";
import { MenuIcon, CloseIcon, ExternalLinkIcon, MailIcon } from "../Icons";

const CTA_LABEL = "Get in touch";

/** One nav item: an internal page (NavLink) or an external site (new tab). */
function NavItem({ label, to, href, className, onClick, children }) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${className} nav-external`} onClick={onClick}>
        {label}
        <ExternalLinkIcon size="1em" />
        {children}
      </a>
    );
  }
  // "Projects" also stays active on a case study
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? `${className} ${className}--active` : className)}
      onClick={onClick}
    >
      {label}
      {children}
    </NavLink>
  );
}

/**
 * Floating dark pill nav, centred near the top of the screen.
 * On phones the links move into a full-screen menu.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeRef = useRef(null);
  const { pathname } = useLocation();

  // Publish where the pill ends as --nav-h, so the page starts below it and
  // sticky elements (like the case study's section bar) sit right under it.
  // offsetHeight ignores the drop-in animation's transform.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const update = () => document.documentElement.style.setProperty("--nav-h", `${header.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // While the menu is open: lock page scroll, focus the close button, close on Escape.
  // On close, hand focus back to the hamburger.
  useEffect(() => {
    if (!open) return;
    const hamburger = hamburgerRef.current;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      hamburger?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <header className="nav" ref={headerRef}>
        <div className="nav__pill">
          <Link to="/" className="nav__brand">
            {SITE_NAME}
          </Link>

          <span className="nav__divider" aria-hidden="true" />

          {/* Desktop links */}
          <nav className="nav__links" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.label} {...link} className="nav__link">
                <span className="nav__underline" aria-hidden="true" />
              </NavItem>
            ))}
          </nav>

          <a href={`mailto:${EMAIL}`} className="nav__cta">
            <MailIcon />
            {CTA_LABEL}
          </a>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className="nav__hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="navMenu"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu (outside the header so it can cover the whole screen) */}
      <div
        className={open ? "nav-menu is-open" : "nav-menu"}
        id="navMenu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
      >
        <div className="nav-menu__top">
          <Link to="/" className="nav__brand" onClick={close}>
            {SITE_NAME}
          </Link>
          <button ref={closeRef} className="nav-menu__close" onClick={close} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>

        <nav className="nav-menu__links" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.label} {...link} className="nav-menu__link" onClick={close} />
          ))}
        </nav>

        <a href={`mailto:${EMAIL}`} className="nav__cta nav-menu__cta" onClick={close}>
          <MailIcon size={16} />
          {CTA_LABEL}
        </a>
      </div>
    </>
  );
}
