/**
 * One case study section: a small coloured eyebrow (what the section is)
 * above a headline (what it found), then the content.
 */
export default function Section({ id, eyebrow, title, children }) {
  return (
    <section className="cs-section" id={id} aria-labelledby={`cs-${id}`}>
      <p className="cs-eyebrow">{eyebrow}</p>
      <h2 className="cs-section__title" id={`cs-${id}`}>
        {title}
      </h2>
      <div className="cs-section__content">{children}</div>
    </section>
  );
}
