import "./Contact.css";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { githubLogo, linkedInLogo, emailLogo } from "../assets";

const Contact = () => (
  <section className="contact-container">
    <h5>Contact Me</h5>

    <div className="contact-content">
      <div className="contact-content-column">
        <ContactCard
          iconUrl={githubLogo}
          text="github.com/ConnorXCX"
          invert={false}
        />
        <ContactCard
          iconUrl={linkedInLogo}
          text="linkedin.com/in/ConnorXCX"
          invert={true}
        />
        <ContactCard
          iconUrl={emailLogo}
          text="ConnorNoelThomas@gmail.com"
          invert={true}
        />
      </div>
      <div className="contact-content-column">
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
