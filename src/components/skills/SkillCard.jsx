import "./SkillCard.css";

const SkillCard = ({ title, iconUrl, invertImage, isActive, onClick }) => (
  <div
    className={`skill-card ${isActive ? "active" : ""}`}
    onClick={() => onClick()}
  >
    <div className="skill-icon">
      <img
        src={iconUrl}
        alt={title}
        className={`${invertImage ? "invert" : ""}`}
      />
    </div>
    <span>{title}</span>
  </div>
);

export default SkillCard;
