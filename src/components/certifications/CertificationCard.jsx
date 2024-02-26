import "./CertificationCard.css";

const CertificationCard = ({
  title,
  issueDate,
  expirationDate,
  credentialId,
  logo,
}) => {
  return (
    <div className="certification-card">
      <h3 className="certification-card-header">{title}</h3>
      <img className="certification-card-img" src={logo} alt={title} />
      <div className="certification-card-content">
        <p>
          <b>Credential ID:</b> {credentialId}
        </p>
        <p>
          <b>Expiration:</b> {expirationDate.month}, {expirationDate.year}
        </p>{" "}
      </div>
    </div>
  );
};

export default CertificationCard;
