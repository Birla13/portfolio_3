import { useEffect, useRef } from "react";

/** Thin bar along the bottom of the screen that fills as the page is read. */
export default function ReadingProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="cs-progress" aria-hidden="true">
      <i ref={barRef} />
    </div>
  );
}
