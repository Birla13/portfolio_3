import { MARQUEE_IMAGES } from "../data/marqueeImages";

// Tripled so the strip always fills the viewport and loops seamlessly.
const ITEMS = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

/**
 * Full-bleed, continuously scrolling image strip below the home hero.
 * Note: the scroll distance in the `marqueeScroll` keyframes (globals.css)
 * assumes 6 images — update it if you add or remove images.
 */
export default function MarqueeStrip() {
  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {ITEMS.map((img, i) => (
          <div key={i} className="marquee-item">
            <img src={img.src} alt={img.alt} draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
