import { useEffect, useRef, useState } from "react";

/**
 * Sticky row of chapter chips on phones and tablets (hidden on desktop).
 * Highlights the chapter being read and scrolls to a chapter on tap.
 *
 * chapters – [{ id, title }]
 */
export default function SectionBar({ chapters }) {
  const [active, setActive] = useState(chapters[0]?.id);
  const barRef = useRef(null);
  const listRef = useRef(null);

  // Track which chapter is in the middle band of the screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -60% 0px" }
    );
    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [chapters]);

  // Keep the active chip centred in the scrollable row.
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector(`[data-target="${active}"]`);
    if (!list || !chip || !list.clientWidth) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const left = chip.offsetLeft - (list.clientWidth - chip.offsetWidth) / 2;
    list.scrollTo({ left: Math.max(0, left), behavior: reduce ? "auto" : "smooth" });
  }, [active]);

  const goTo = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;
    const nav = document.querySelector(".nav");
    const bar = barRef.current;
    const barVisible = bar && getComputedStyle(bar).display !== "none";
    const offset = (nav?.offsetHeight || 0) + (barVisible ? bar.offsetHeight : 0) + 12;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - offset,
      behavior: reduce ? "auto" : "smooth",
    });
    setActive(id);
  };

  return (
    <nav className="cs-toc" ref={barRef} aria-label="Case study sections">
      <ol className="cs-toc__list" ref={listRef}>
        {chapters.map(({ id, title }) => (
          <li key={id}>
            <a
              className="cs-toc__link"
              href={`#${id}`}
              data-target={id}
              aria-current={active === id ? "true" : undefined}
              onClick={(e) => goTo(e, id)}
            >
              {title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
