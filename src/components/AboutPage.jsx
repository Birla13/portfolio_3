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
                <p className="about-intro__lead">My journey</p>
                <p className="about-intro__body">
                  I’m Deepanshi Birla, a UI/UX Designer originally from
                  Rajasthan 🐪.
                  <br></br>
                  <br></br>
                  My design journey really kicked off during my B.Tech at the
                  Indian Institute of Information Technology (IIIT), Kota. I
                  joined the Q’n’S magazine team, where I found myself spending
                  hours designing layouts and banners in Canva.
                  <br></br>I didn't know it back then, but that small spark of
                  curiosity was exactly what would lead me into digital product
                  design.
                  <br></br>
                  Driven to learn more, I picked up Figma, started copying
                  screens to understand user interfaces, and completely fell in
                  love with the craft.
                  <br></br>
                  Today, I’m based in Gurugram, working at Care Health
                  Insurance. From diving deep into UX audits to shaping
                  high-conversion digital experiences, I've grown from
                  experimenting with basic layouts to confidently building
                  complex workflows. I genuinely love this field and the impact
                  good design can make.
                  <br></br>
                  Outside of work, I’m constantly exploring the world to find
                  new perspectives and figure out my own. I stay highly creative
                  and socially active, whether I'm scriptwriting and creating
                  reels for my channels, practicing art and crafts, or putting
                  my observations into structured, rhyming verses for the people
                  around me.
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
