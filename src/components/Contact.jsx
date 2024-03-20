import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { CONTACT_LINKS } from "../utils/data";

const Contact = () => (
  // Background style code: before:bg-experienceContainer before:content-['_'] before:w-[28.125rem] before:h-[28.125rem] before:absolute before:z-[-1] before:blur-[225px] before:rounded-[28.125rem] after:top-[-3rem] after:left-[-5rem] before:right-0 before:bottom-8 after:bg-experienceContainer after:content-['_'] after:w-[28.125rem] after:h-[28.125rem] after:absolute after:z-[-1] after:blur-[225px] after:rounded-[28.125rem]
  <section id="contact" className="scroll-mt-[100px] relative mx-0 my-16">
    <h5 className="text-[1.5rem] font-[6000] mb-12 md:text-[1.3rem] md:mb-8">
      Contact
    </h5>

    <div className="flex flex-wrap gap-8 justify-between md:gap-4">
      {CONTACT_LINKS.map((item) => (
        <ContactCard
          key={item.id}
          content={item.content}
          link={item.link}
          logo={item.logo}
          invertImage={item.invertImage}
        />
      ))}
      {/* <ContactForm /> */}
    </div>
  </section>
);

export default Contact;
