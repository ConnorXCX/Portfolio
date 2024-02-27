import "./Contact.css";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { CONTACT_LINKS } from "../../utils/data";

const Contact = () => (
  <section id="contact" className="scroll-mt-[100px] contact-container">
    <h5>Contact Me</h5>

    <div className="contact-content">
      {CONTACT_LINKS.map((item) => (
        <ContactCard
          key={item.id}
          content={item.content}
          link={item.link}
          logo={item.logo}
          invertImage={item.invertImage}
        />
      ))}
      {/* <ContactForm /> */}
    </div>
  </section>
);

export default Contact;
