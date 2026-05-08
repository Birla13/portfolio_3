import FadeIn from "./FadeIn";
import CTASection from "./CTASection";
import Footer from "./Footer";
import Nav from "./Nav";
import pf from "../Images/Deepanshi.jpeg";

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* ── Hero: Who I am ───────────────────────────────────────────────── */}
      <section className="about-hero">
        <div className="container">
          <FadeIn delay={0.05}>
            <h1 className="about-hero__headline">Who I am beyond Design</h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="about-intro">
              {/* Portrait */}
              <div className="about-intro__image">
                <img src={pf} alt="Callum Hayes portrait" />
              </div>

              {/* Copy */}
              <div className="about-intro__copy">
                <p className="about-intro__lead">
                  More than a UX/UI designer, I'm a storyteller at heart,
                  weaving narratives through my designs.
                </p>
                <p className="about-intro__body">
                  My philosophy? Every app tells a story, and every interface is
                  a journey. I find joy in simple things — a well-crafted
                  espresso, the crisp pages of a new book, and the quiet buzz of
                  a city at dawn.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Inspirations & Interests ─────────────────────────────────────── */}
      <section className="about-interests section section--light">
        <div className="container">
          <FadeIn>
            <h2 className="about-section__title">
              My inspirations and interests
            </h2>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="about-interests__copy">
              <p className="body-base">
                I find my creative balance between the structure of a rhyme and
                the energy of visual storytelling. Writing rhyming poetry is
                where I explore how words can create a natural rhythm to express
                ideas.
              </p>
              <p className="body-base">
                Outside of design, I’m constantly creating and sharing reels on
                social media. It’s a way for me to experiment with visual beats
                and connect with a wider audience through short-form stories.
              </p>
            </div>
          </FadeIn>

          {/* Photo gallery strip */}
          {/* <FadeIn delay={0.14}>
            <div className="about-gallery">
              {GALLERY_IMAGES.map((img, i) => (
                <div key={i} className="about-gallery__item">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </FadeIn> */}
        </div>
      </section>

      {/* ── Looking ahead ────────────────────────────────────────────────── */}
      {/* <section className="about-ahead section">
        <div className="container">
          <FadeIn>
            <h2 className="about-section__title">Looking ahead</h2>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="about-ahead__copy">
              <p className="body-base">
                As I immerse deeper into the world of UX/UI design, I'm
                particularly excited about the potential of integrating
                sustainable practices into digital design, thereby embedding a
                layer of environmental responsibility directly into the user
                experience.
              </p>
              <p className="body-base">
                I dream of contributing to projects that not only look good but
                also do good — for people and the planet. I'm also keen on
                exploring how AI can further personalize user experiences
                without losing the human touch.
              </p>
            </div>
          </FadeIn>
        </div>
      </section> */}

      {/* <CTASection /> */}
      <main>
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
