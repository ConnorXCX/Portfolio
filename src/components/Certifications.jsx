import "./Certifications.css";
import CertificationCard from "./CertificationCard";
import { CERTIFICATIONS } from "../utils/data";

const Certifications = () => (
  <section id="certifications" className="certifications-container">
    <h5>Certifications</h5>

    <div className="certifications-content">
      {CERTIFICATIONS.map((item) => (
        <CertificationCard
          title={item.title}
          issueDate={item.issue_date}
          expirationDate={item.expiration_date}
          credentialId={item.credential_id}
          logo={item.logo}
        />
      ))}
    </div>
  </section>
);

export default Certifications;
