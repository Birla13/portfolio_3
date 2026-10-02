/**
 * A pull quote: large text with a soft coloured line on the left.
 *   tone  – colour of the line: "accent" (orange, the default),
 *           "info" (blue: insights, questions), "ok" (green: results)
 *           or "note" (grey).
 *   title – optional bold line above the quote, e.g. "What we saw".
 *   cite  – optional line under the quote, e.g. who said it.
 *           Leave it out for a statement with no source.
 */
export default function Quote({ tone = "accent", title, cite, children }) {
  return (
    <figure className={`cs-quote cs-quote--${tone}`}>
      {title && <p className={`cs-quote__title cs-quote--${tone}`}>{title}</p>}
      <blockquote className="cs-quote__text">{children}</blockquote>
      {cite && <figcaption className="cs-quote__cite">{cite}</figcaption>}
    </figure>
  );
}
