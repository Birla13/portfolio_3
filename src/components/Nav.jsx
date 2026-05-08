import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "./Icons";
import SocialIcons from "./SocialIcons";


const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "About me", href: "/about" },
];

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const currentHash = typeof window !== "undefined" ? window.location.hash : "";
  const [currentHash, setCurrentHash] = useState(
    typeof window !== "undefined" ? window.location.hash : "",
  );

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function isActive(href) {
    if (href === "#") return currentHash === "" || currentHash === "#";
    return currentHash === href;
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        {/* Brand → always goes home */}
        <a href="#" className="nav__brand">
          Deepanshi Birla
        </a>

        {/* Desktop links */}
        <nav className="nav__links" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`nav__link${isActive(href) ? " nav__link--active" : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav__hamburger"
          onClick={() => setDrawerOpen((o) => !o)}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
        >
          {drawerOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div
          className="nav__drawer"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <span className="nav__drawer-brand">Deepanshi Birla</span>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav__drawer-link"
              onClick={() => setDrawerOpen(false)}
            >
              {label}
            </a>

          ))}
          <SocialIcons dark />
        </div>
      )}
    </header>
  );
}
