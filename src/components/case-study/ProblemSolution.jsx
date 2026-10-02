import { TopicIcon } from "../Icons";

/**
 * Problem → solution cards, two per row. The top half states the problem,
 * the bottom half (below a divider) the solution.
 *   items – [{ icon, title, problem, solution }]; `icon` is a TopicIcon name
 */
export default function ProblemSolution({ items, label = "Problems and solutions" }) {
  return (
    <ul className="cs-pairs" aria-label={label}>
      {items.map(({ icon, title, problem, solution }) => (
        <li key={title} className="cs-pair">
          <div className="cs-pair__problem">
            <span className="cs-pair__icon" aria-hidden="true">
              <TopicIcon name={icon} />
            </span>
            <h4 className="cs-pair__title">{title}</h4>
            <p>{problem}</p>
          </div>
          <div className="cs-pair__solution">
            <p className="cs-pair__label">Solution</p>
            <p>{solution}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
