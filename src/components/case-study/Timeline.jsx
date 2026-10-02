/**
 * Vertical step list: a dashed circle with a dot per step, joined by a line.
 * Every step looks the same; `done` is only announced to screen readers.
 *   items – [{ when, what, done }]
 */
export default function Timeline({ items }) {
  return (
    <ol className="cs-timeline">
      {items.map(({ when, what, done }) => (
        <li key={when}>
          <span className="cs-timeline__marker">
            <span className="sr-only">{done ? "Done:" : "Still to come:"}</span>
          </span>
          <div>
            <p className="cs-timeline__when">{when}</p>
            <p className="cs-timeline__what">{what}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
