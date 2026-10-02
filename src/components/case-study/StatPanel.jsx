/**
 * Big numbers on a tinted panel.
 *   stats – [{ value, label }]
 *   tone  – "accent" (orange, default) or "ok" (green, for results)
 */
export default function StatPanel({ title, stats, tone = "ok" }) {
  return (
    <section className={`cs-stats--${tone}`} aria-label={title}>
      {title && <p className="cs-stats__title">{title}</p>}
      <div className="cs-stats__grid" style={{ "--cols": stats.length }}>
        {stats.map(({ value, label }) => (
          <div key={label} className="cs-stat">
            <div className="cs-stat__value">{value}</div>
            <div className="cs-stat__label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
