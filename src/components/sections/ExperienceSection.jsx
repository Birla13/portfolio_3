import { EXPERIENCE_ITEMS } from "../../data/experience";
import FadeIn from "../FadeIn";
import RichText from "../RichText";

/** Home page: company and dates on one line, dash points below. */
export default function ExperienceSection() {
  return (
    <section className="band band--a" id="experience">
      <div className="container">
        <FadeIn className="exp__header">
          <p className="eyebrow">Experience</p>
          <h2 className="heading-lg">Where I’ve been designing</h2>
        </FadeIn>
        {EXPERIENCE_ITEMS.map((job) => (
          <FadeIn as="article" key={job.company} className="exp-item">
            <div className="exp-item__head">
              <h3 className="exp-item__company">{job.company}</h3>
              <span className="exp-item__dates">{job.period}</span>
            </div>
            <ul className="exp-item__bullets">
              {job.points.map((point) => (
                <li key={point}>
                  <RichText text={point} />
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
