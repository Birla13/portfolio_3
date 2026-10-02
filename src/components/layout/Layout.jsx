import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

/**
 * Frame shared by every page: nav on top, page content in the middle,
 * the black "Interested in connecting?" + footer block at the bottom.
 */
export default function Layout() {
  const { pathname } = useLocation();

  // Start each new page at the top, like a normal page load.
  // "instant" skips the smooth scrolling set on <html> in globals.css.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  const skipToContent = (e) => {
    e.preventDefault();
    document.getElementById("main")?.focus();
  };

  return (
    <>
      <a className="skip" href="#main" onClick={skipToContent}>
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
