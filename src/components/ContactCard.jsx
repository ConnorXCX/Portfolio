const ContactCard = ({ content, link, logo, invertImage }) => (
  <div className="bg-defaultLightBlurBackground flex flex-col items-center justify-center min-w-[20rem] flex-[1_0_45%] p-6 rounded-[0.65rem] border-[1.5px] border-solid border-primary">
    <div className="bg-primary w-16 h-16 flex items-center justify-center mb-[0.8rem] rounded-lg">
      <a
        className="no-underline text-[0.9rem] font-medium text-primary relative cursor-pointer visited:text-primary hover:text-primary active:text-primary"
        href={link}
      >
        <img
          src={logo}
          alt={content}
          className={`${
            invertImage ? "invert-[1]" : ""
          } w-[1.8rem] h-auto object-contain block`}
        />
      </a>
    </div>
    <p className="text-[0.9rem] font-normal">
      <a
        className="no-underline text-[0.9rem] font-medium text-primary relative cursor-pointer visited:text-primary hover:text-primary active:text-primary"
        href={link}
      >
        {content}
      </a>
    </p>
  </div>
);

export default ContactCard;
