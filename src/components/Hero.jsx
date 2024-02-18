import "./Hero.css";
import { HEADER, SUB_HEADER } from "../utils/data";

const Hero = () => (
  <section id="home" className="hero-container">
    <div className="hero-content">
      <h2>{HEADER}</h2>
      <p>{SUB_HEADER}</p>
    </div>

    <div className="hero-img">
      <div>
        <div className="tech-icon">
          <img src="https://placehold.co/75x75" />
        </div>
        <img src="https://placehold.co/250x250" />
      </div>
      <div>
        <div className="tech-icon">
          <img src="https://placehold.co/75x75" />
        </div>
        <div className="tech-icon">
          <img src="https://placehold.co/75x75" />
        </div>
        <div className="tech-icon">
          <img src="https://placehold.co/75x75" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;