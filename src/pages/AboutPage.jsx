import FadeIn from "../components/FadeIn";
import { ImageIcon } from "../components/Icons";
import { HOBBIES } from "../data/hobbies";

// Grid positions for the five photo tiles (see .bento__item--a…e in globals.css).
const TILE_POSITIONS = ["a", "b", "c", "d", "e", "f"];

export default function AboutPage() {
  return (
    <>
      {/* Who I am */}
      <section className="about-hero top-section">
        <div className="container">
          {/* <FadeIn as="h1" delay={0.05} className="about-hero__headline">
            Who I am beyond Design
          </FadeIn> */}
          <FadeIn delay={0.12} className="about-intro">
            <div className="about-intro__copy">
              {/* <p className="about-intro__lead">My journey</p>
               */}
              <FadeIn as="h2" delay={0.05} className="about-section__title">
                My journey
              </FadeIn>
              <p className="about-intro__body">
                I’m Deepanshi Birla, a UI/UX Designer originally from Rajasthan
                🐪.
                <br />
                My design journey really kicked off during my B.Tech at the
                Indian Institute of Information Technology (IIIT), Kota. I
                joined the Q’n’S magazine team, where I found myself spending
                hours designing layouts and banners in Canva.
                <br />I didn't know it back then, but that small spark of
                curiosity was exactly what would lead me into digital product
                design.
                <br />
                Driven to learn more, I picked up Figma, started copying screens
                to understand user interfaces, and completely fell in love with
                the craft.
                <br />
                Today, I’m based in Gurugram, working at Care Health Insurance.
                From diving deep into UX audits to shaping high-conversion
                digital experiences, I've grown from experimenting with basic
                layouts to confidently building complex workflows. I genuinely
                love this field and the impact good design can make.
                <br />
                Outside of work, I’m constantly exploring the world to find new
                perspectives and figure out my own. I stay highly creative and
                socially active, whether I'm scriptwriting and creating reels
                for my channels, practicing art and crafts, or putting my
                observations into structured, rhyming verses for the people
                around me.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Inspirations & interests */}
      <section className="about-interests band band--b">
        <div className="container">
          <FadeIn as="h2" className="about-section__title">
            My inspirations and interests
          </FadeIn>
          <FadeIn delay={0.08} className="about-interests__copy">
            <p className="body-base">
              I love making things with my hands, from shaping clay and painting
              Mandana art to filling pages with doodles and verses. Everything I
              create ends up on my social media, where I share the little
              moments I capture along the way.
            </p>
          </FadeIn>
          <FadeIn delay={0.14} className="bento">
            {HOBBIES.slice(0, TILE_POSITIONS.length).map((hobby, i) => (
              <figure
                key={hobby.name}
                className={`bento__item bento__item--${TILE_POSITIONS[i]}`}
              >
                <div
                  className={`bento__photo${hobby.img ? " bento__photo--filled" : ""}`}
                >
                  {hobby.img ? (
                    <img src={hobby.img} alt={hobby.alt} />
                  ) : (
                    <ImageIcon />
                  )}
                </div>
                <figcaption className="bento__label">{hobby.name}</figcaption>
              </figure>
            ))}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
