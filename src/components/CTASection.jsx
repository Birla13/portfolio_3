import FadeIn from "./FadeIn";

/**
 * CTASection
 * Upper part of the footer block.
 * Dark charcoal background, left-aligned heading + subtext + button.
 * Matches the Framer reference screenshot exactly.
 */
export default function CTASection() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-section__inner">
        <FadeIn>
          <h2 className="cta-section__heading">Interested in connecting?</h2>
          <p className="cta-section__sub">
            Let's talk projects, collaborations, or anything design!
          </p>
          <button className="cta-section__btn">Book a call</button>
        </FadeIn>
      </div>
    </section>
  );
}
