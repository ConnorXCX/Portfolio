const CertificationCard = ({
  title,
  issueDate,
  expirationDate,
  credentialId,
  logo,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-[0.65rem] border-[1.5px] border-solid border-[#6751b9] bg-certificationCardBackground">
      <h3 className="content-center">{title}</h3>
      <img className="w-9/12 py-8 sm:px-8 xs:hidden" src={logo} alt={title} />
      <div className="xs:py-2">
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
