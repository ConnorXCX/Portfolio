import "./Hero.css";

const Hero = () => (
  <section className="hero-container">
    <div className="hero-content">
      <h2>Building Digital Experiences That Inspire</h2>
      <p>
        Passionate Frontend Developer | Transforming Ideas into Seamless and
        Visually Stunning Web Solutions
      </p>
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
