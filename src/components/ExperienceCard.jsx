const ExperienceCard = ({ details }) => (
  <div className="experience-card bg-defaultLightBlurBackground backdrop-blur-[50px] mx-4 my-0 p-6 rounded-[0.65rem] border-[1.5px] border-solid border-primary md:m-1">
    <h6 className="text-[1.05rem] font-medium mb-[0.7rem] md:text-[0.95rem]">
      {details.title}
    </h6>

    <div className="bg-primary text-secondary inline-block text-[0.7rem] font-normal mb-[1.3rem] px-[0.6rem] py-[0.4rem] rounded-[0.3rem]">
      {details.date}
    </div>

    <ul>
      {details.responsibilities.map((item) => (
        <li
          className="list-none text-[0.8rem] font-normal relative mb-2 after:content-['_'] after:w-2 after:h-2 after:bg-primary after:absolute after:left-[-1.3rem] after:rounded-lg after:top-[0.35rem] md:text-[0.75rem]"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
