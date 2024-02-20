import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target).then(
      (result) => {
        setStateMessage("Message sent!");
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      },
      (error) => {
        setStateMessage("Something went wrong, please try again later");
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      }
    );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea type="text" name="message" placeholder="Message" rows={5} />
        <input type="submit" value="SEND" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
        {/* <button>SEND</button> */}
      </form>
    </div>
  );
};

export default ContactForm;
