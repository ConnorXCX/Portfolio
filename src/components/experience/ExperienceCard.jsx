import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => (
  <div className="experience-card">
    <h6>{details.title}</h6>

    <div className="duration">{details.date}</div>

    <ul>
      {details.responsibilities.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
