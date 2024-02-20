import "./Contact.css";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { CONTACT_LINKS } from "../utils/data";

const Contact = () => (
  <section id="contact" className="contact-container">
    <h5>Contact Me</h5>

    <div className="contact-content">
      {/* <div className="contact-content-column"> */}
      {CONTACT_LINKS.map((item) => (
        <ContactCard
          key={item.id}
          content={item.content}
          link={item.link}
          logo={item.logo}
          invertLogo={item.invertLogo}
        />
      ))}
      {/* <ContactCard iconUrl={githubLogo} text={GITHUB_LINK} invert={false} />
      <ContactCard iconUrl={linkedInLogo} text={LINKEDIN_LINK} invert={true} />
      <ContactCard iconUrl={phone} text={PHONE_NUMBER} invert={true} /> */}
      {/* </div> */}
      {/* <div className="contact-content-column"> */}
      {/* <ContactCard iconUrl={email} text={EMAIL_ADDRESS} invert={true} /> */}

      {/* <ContactForm /> */}
      {/* </div> */}
    </div>
  </section>
);

export default Contact;
