/**
 * Stand-in for a case study image that isn't ready yet: a dashed box that
 * describes what goes there. Swap it for <CaseFigure> once the image exists.
 * `tall` makes a phone-shaped box.
 */
export default function ImagePlaceholder({ tall, children }) {
  return (
    <figure className={tall ? "cs-placeholder cs-placeholder--tall" : "cs-placeholder"}>
      <figcaption>{children}</figcaption>
    </figure>
  );
}
