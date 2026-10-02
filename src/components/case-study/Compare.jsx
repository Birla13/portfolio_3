/** Two images side by side, labelled Before and After (stacked on phones). */
export default function Compare({ before, after, beforeLabel = "Before", afterLabel = "After" }) {
  return (
    <div className="cs-compare">
      <div>
        <p className="cs-compare__label">{beforeLabel}</p>
        {before}
      </div>
      <div>
        <p className="cs-compare__label cs-compare__label--after">{afterLabel}</p>
        {after}
      </div>
    </div>
  );
}
