import "./ContactCard.css";

const ContactCard = ({ iconUrl, text, invert }) => (
  <div className="contact-details-card">
    <div className="icon">
      <img
        src={iconUrl}
        alt={text}
        className={invert === true ? "invert" : ""}
      />
    </div>
    <p>{text}</p>
  </div>
);

export default ContactCard;
