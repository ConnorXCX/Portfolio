import "./ContactCard.css";

const ContactCard = ({ content, link, logo, invertLogo }) => (
  <div className="contact-details-card">
    <div className="icon">
      <img
        src={logo}
        alt={content}
        className={`${invertLogo ? "invert" : ""}`}
      />
    </div>
    <p>
      <a href={link}>{content}</a>
    </p>
  </div>
);

export default ContactCard;
