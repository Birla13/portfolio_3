import FadeIn from "../FadeIn";
import SocialLinks from "../SocialLinks";
import MarqueeStrip from "../MarqueeStrip";
import profile from "../../Images/Deepanshi.jpeg";

/** Home page top: avatar, headline, bio, social icons and image strip. */
export default function HeroSection() {
  return (
    <section className="hero top-section">
      <div className="container">
        <FadeIn delay={0.04}>
          <div className="hero__avatar">
            <img src={profile} alt="Portrait of Deepanshi Birla" />
          </div>
        </FadeIn>
        <FadeIn as="h1" delay={0.1} className="heading-xl hero__headline">
          I’m Deepanshi Birla, a UI/UX Designer crafting high-performance
          digital systems for complex service industries.
        </FadeIn>
        <FadeIn as="p" delay={0.17} className="body-base hero__bio">
          With a foundation in Computer Science and a passion for storytelling,
          I build scalable, high-conversion interfaces that solve business
          problems with simplicity and elegance.
        </FadeIn>
        <FadeIn delay={0.22}>
          <SocialLinks className="social-icons hide" linkClassName="social-icon-btn" />
        </FadeIn>
      </div>
      {/* Outside .container so the strip can run full-bleed */}
      <FadeIn delay={0.28}>
        <MarqueeStrip />
      </FadeIn>
    </section>
  );
}
