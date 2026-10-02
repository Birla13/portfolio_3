/**
 * A tinted box, with an optional round icon on the left.
 *   tone – "info" (blue: insights, questions), "ok" (green: results),
 *          "accent" (orange) or "note" (grey, the default)
 *   icon – optional short mark for the circle, e.g. "i", "✓" or a number.
 *          Leave it out for a callout without an icon.
 */
export default function Callout({ tone = "note", icon, title, children }) {
  const hasIcon = icon !== undefined && icon !== null && icon !== "";

  return (
    <aside className={`cs-callout cs-callout--${tone}`}>
      {hasIcon && (
        <span className="cs-callout__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <div className="cs-callout__body">
        {title && <p className="cs-callout__title">{title}</p>}
        {children && <p>{children}</p>}
      </div>
    </aside>
  );
}
