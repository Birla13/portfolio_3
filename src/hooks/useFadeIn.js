import { useState, useEffect, useRef } from "react";

/**
 * useFadeIn
 * Triggers a visible state when the element enters the viewport.
 * Use the returned [ref, visible] to apply fade-in styles.
 *
 * @param {number} threshold  - 0–1, how much of the element must be visible (default 0.12)
 * @returns {[React.RefObject, boolean]}
 */
export function useFadeIn(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
