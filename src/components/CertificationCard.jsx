import "./CertificationCard.css";

const CertificationCard = ({
  title,
  issueDate,
  expirationDate,
  credentialId,
}) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>
        Valid from {issueDate.month}, {issueDate.year} to {expirationDate.month}
        , {expirationDate.year}
      </p>
      <p>{credentialId}</p>
    </div>
  );
};

export default CertificationCard;
