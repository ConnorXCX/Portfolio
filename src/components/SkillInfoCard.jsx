import React from "react";

const SkillInfoCard = ({ heading, skills }) => (
  <div className="bg-skillInfoCardBackground min-h-[23rem] backdrop-blur-lg rounded-[0.65rem] border-[1.5px] border-solid border-[#6751b9]">
    <div className="[background:rgba(22,17,47,0.2)] rounded-[0.65rem]">
      <h6 className="text-[1.2rem] font-medium bg-skillInfoCardHeaderBackground bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] px-8 py-[0.8rem] border-b-[1.5px] border-t-0 border-x-0 border-b-[#6751b9] border-solid lg:text-[1.1rem] ">
        {heading}
      </h6>
    </div>
    <div className="p-8 lg:p-6">
      {skills.map((item, index) => (
        <React.Fragment key={`skill_${index}`}>
          <div className="flex items-center justify-between">
            <p className="text-base font-medium lg:text-[0.9rem]">
              {item.skill}
            </p>
            <p className="text-[#dd8cfa]">{item.percentage}</p>
          </div>

          <div className="w-full h-2 bg-[#382e68] overflow-hidden mx-0 my-4 rounded-lg">
            <div
              className="w-[0%] h-2 bg-skillPercentageGradient transition-all duration-[0.5s] ease-[ease-in-out] rounded-lg"
              style={{ width: item.percentage }}
            ></div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default SkillInfoCard;
