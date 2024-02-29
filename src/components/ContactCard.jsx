const ContactCard = ({ content, link, logo, invertImage }) => (
  <a
    className="min-w-[20rem] flex-[1_0_45%] no-underline text-[0.9rem] font-medium text-primary relative cursor-pointer visited:text-primary hover:text-secondary hover:bg-defaultDarkBlurBackground active:text-primary"
    href={link}
  >
    <div className="bg-defaultLightBlurBackground flex flex-col items-center justify-center p-6 rounded-[0.65rem] border-[1.5px] border-solid border-primary">
      <div className="bg-primary w-16 h-16 flex items-center justify-center mb-[0.8rem] rounded-lg">
        <img
          src={logo}
          alt={content}
          className={`${
            invertImage ? "invert-[1]" : ""
          } w-[1.8rem] h-auto object-contain block`}
        />
      </div>
      <p className="text-[0.9rem] font-normal">{content}</p>
    </div>
  </a>
);

export default ContactCard;
