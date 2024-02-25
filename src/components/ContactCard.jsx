import "./ContactCard.css";

const ContactCard = ({ content, link, logo, invertLogo }) => (
  <div className="contact-details-card">
    <div className="icon">
      <a href={link}>
        <img
          src={logo}
          alt={content}
          className={`${invertLogo ? "invert" : ""}`}
        />
      </a>
    </div>
    <p>
      <a href={link}>{content}</a>
    </p>
  </div>
);

export default ContactCard;
