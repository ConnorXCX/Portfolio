import CertificationCard from "./CertificationCard";
import { CERTIFICATIONS } from "../utils/data";

const Certifications = () => (
  <section id="certifications" className="anchor relative mx-0 my-16">
    <h5 className="text-[1.3rem] font-[6000] mb-12">Certifications</h5>

    <div className="flex gap-8 justify-around sm:flex-col sm:gap-4">
      {CERTIFICATIONS.map((item) => (
        <CertificationCard
          key={item.credential_id}
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
