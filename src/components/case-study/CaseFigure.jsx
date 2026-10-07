/**
 * A case study image with a caption.
 *   caption   – text under the image; defaults to `alt`, pass null for none
 *   className – extra class on the figure, e.g. "cs-figure--narrow"
 */
export default function CaseFigure({ src, alt, caption = alt, className }) {
  return (
    <figure className={className ? `cs-figure ${className}` : "cs-figure"}>
      <img className="cs-figure__img" src={src} alt={alt} loading="lazy" />
      {caption && <figcaption className="cs-figure__caption">{caption}</figcaption>}
    </figure>
  );
}
