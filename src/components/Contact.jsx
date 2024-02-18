import "./Contact.css";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { githubLogo, linkedInLogo, phone, email } from "../assets";

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
        <ContactCard iconUrl={phone} text="+1 (813) 575-3198" invert={true} />
      </div>
      <div className="contact-content-column">
        <ContactCard
          iconUrl={email}
          text="ConnorNoelThomas@gmail.com"
          invert={true}
        />
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
