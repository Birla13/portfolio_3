import { ExpandIcon } from "../Icons";

/** A case study image with a caption; tapping it opens the full-screen viewer. */
export default function CaseFigure({ src, alt, onOpen }) {
  return (
    <figure className="cs-figure">
      <button
        type="button"
        className="fig-tap"
        aria-label={`View full screen: ${alt}`}
        onClick={() => onOpen({ src, alt })}
      >
        <img src={src} alt={alt} loading="lazy" />
        <span className="fig-tap__icon" aria-hidden="true">
          <ExpandIcon />
        </span>
      </button>
      <figcaption className="cs-figure__caption">{alt}</figcaption>
    </figure>
  );
}
