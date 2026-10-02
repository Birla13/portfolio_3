import { useFadeIn } from "../hooks/useFadeIn";

/**
 * Fades and slides its content up when it scrolls into view.
 * The animation itself lives in globals.css (.fade / .is-visible) and is
 * switched off for people who prefer reduced motion.
 *
 * Props:
 *   as        – element to render (default "div"), e.g. "h1", "p", "article"
 *   delay     – animation delay in seconds (default 0)
 *   className – extra class names
 */
export default function FadeIn({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const [ref, visible] = useFadeIn();
  return (
    <Tag
      ref={ref}
      className={`fade${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--d": `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
