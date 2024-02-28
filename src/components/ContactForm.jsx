import { useState } from "react";
import emailjs from "@emailjs/browser";

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
    // contact-form-content
    <div className="w-full">
      <form className="flex flex-col gap-6" onSubmit={sendEmail}>
        {/* name-container */}
        <div className="flex items-center gap-6 ss:flex-col ss:items-start">
          <input
            className="flex-1 w-full text-[0.9rem] text-white [background:rgba(22,17,47,0.4)] p-4 rounded-[0.6rem] border-[1.5px] border-solid border-[#6751b9] ss:p-[0.7rem] ss:rounded-[0.3rem]"
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <input
            className="flex-1 w-full text-[0.9rem] text-white [background:rgba(22,17,47,0.4)] p-4 rounded-[0.6rem] border-[1.5px] border-solid border-[#6751b9] ss:p-[0.7rem] ss:rounded-[0.3rem]"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <input
          className="flex-1 w-full text-[0.9rem] text-white [background:rgba(22,17,47,0.4)] p-4 rounded-[0.6rem] border-[1.5px] border-solid border-[#6751b9] ss:p-[0.7rem] ss:rounded-[0.3rem]"
          type="text"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="flex-1 w-full text-[0.9rem] text-white [background:rgba(22,17,47,0.4)] p-4 rounded-[0.6rem] border-[1.5px] border-solid border-[#6751b9] ss:p-[0.7rem] ss:rounded-[0.3rem]"
          type="text"
          name="message"
          placeholder="Message"
          rows={5}
        />
        <input
          className="flex-1 w-full text-[0.9rem] text-white [background:rgba(22,17,47,0.4)] p-4 rounded-[0.6rem] border-[1.5px] border-solid border-[#6751b9] ss:p-[0.7rem] ss:rounded-[0.3rem]"
          type="submit"
          value="SEND"
          disabled={isSubmitting}
        />
        {stateMessage && <p>{stateMessage}</p>}
        {/* <button className="text-base font-medium text-white [background:linear-gradient(90deg,#a892fe_0%,#8064e8_100%)] transition-all duration-[0.3s] ease-[ease] cursor-pointer p-[0.7rem] rounded-[0.6rem] border-[1.5px] border-solid border-[#a892fe] hover:text-[#a892fe] hover:[background:transparent] ss:text-[0.9rem] ss:p-[0.7rem] ss:rounded-[0.3rem]">
          SEND
        </button> */}
      </form>
    </div>
  );
};

export default ContactForm;
