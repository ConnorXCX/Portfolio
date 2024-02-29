const SkillCard = ({ title, iconUrl, invertImage, isActive, onClick }) => (
  <div
    className={`${
      isActive ? "bg-defaultDarkerBlurBackground text-secondary" : ""
    } bg-defaultLightBlurBackground text-center backdrop-blur-lg relative cursor-pointer transition-all duration-[0.3s] ease-[ease] p-10 rounded-[0.65rem] border-[1.5px] border-solid border-primary hover:bg-defaultDarkBlurBackground`}
    onClick={() => onClick()}
  >
    <div className="bg-primary w-16 h-16 flex items-center justify-center absolute top-[-1rem] left-[-1rem] rounded-[0.65rem] border-[1.5px] border-solid border-primary">
      <img
        src={iconUrl}
        alt={title}
        className={`${
          invertImage ? "invert-[1]" : ""
        } w-[2.4rem] h-auto object-contain`}
      />
    </div>
    <span className="text-[1.3rem] font-medium">{title}</span>
  </div>
);

export default SkillCard;
