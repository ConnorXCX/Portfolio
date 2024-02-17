import "./Contact.css";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = () => (
  <section className="contact-container">
    <h5>Contact Me</h5>

    <div className="contact-content">
      <div className="contact-content-column">
        <ContactCard iconUrl="https://placehold.co/75x75" text="blah" />
        <ContactCard iconUrl="https://placehold.co/75x75" text="blah" />
      </div>
      <div className="contact-content-column">
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
