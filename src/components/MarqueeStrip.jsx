import { MARQUEE_IMAGES } from "../data/marqueeImages";

/**
 * MarqueeStrip
 * Full-bleed continuously auto-scrolling image strip below the hero.
 * Images are tripled to ensure seamless infinite loop at any speed.
 * Left/right white fades blend it into the page background.
 */
export default function MarqueeStrip() {
  // Triple the array so there's always content filling the viewport
  const items = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      {/* Scrolling track */}
      <div className="marquee-track">
        {items.map((img, i) => (
          <div key={i} className="marquee-item">
            <img src={img.src} alt={img.alt} draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
