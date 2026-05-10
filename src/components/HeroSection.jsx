import FadeIn from "./FadeIn";
import SocialIcons from "./SocialIcons";
import MarqueeStrip from "./MarqueeStrip";
import profile from "../Images/Deepanshi.jpeg";

/**
 * HeroSection
 * Top of page: avatar, headline, bio paragraph, social icons, marquee strip.
 */
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        {/* Avatar */}
        <FadeIn delay={0.04}>
          <div className="hero__avatar">
            <img src={profile} alt="Portrait of Deepanshi Birla" />
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h1 className="heading-xl hero__headline">
            I’m Deepanshi Birla, a UI/UX Designer crafting high-performance
            digital systems for complex service industries.
          </h1>
        </FadeIn>

        {/* Bio */}
        <FadeIn delay={0.17}>
          <p className="body-base hero__bio">
            With a foundation in Computer Science and a passion for
            storytelling, I build scalable, high-conversion interfaces that
            solve business problems with simplicity and elegance.
          </p>
        </FadeIn>

        {/* Social icons */}
        <FadeIn delay={0.22}>
          <SocialIcons />
        </FadeIn>
      </div>

      {/* Full-bleed marquee (outside container so it breaks the max-width) */}
      <FadeIn delay={0.28}>
        <MarqueeStrip />
      </FadeIn>
    </section>
  );
}
