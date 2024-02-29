import React from "react";

const SkillInfoCard = ({ heading, skills }) => (
  <div className="bg-defaultLightBlurBackground min-h-[23rem] backdrop-blur-lg rounded-[0.65rem] border-[1.5px] border-solid border-primary">
    <div className="rounded-[0.65rem]">
      <h6 className="text-[1.2rem] font-medium bg-primary bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] px-8 py-[0.8rem] border-b-[1.5px] border-t-0 border-x-0 border-b-primary border-solid lg:text-[1.1rem]">
        {heading}
      </h6>
    </div>
    <div className="p-8 lg:p-6">
      {skills.map((item, index) => (
        <React.Fragment key={`skill_${index}`}>
          <div className="flex items-center justify-between">
            <p className="text-[1rem] font-[500] lg:text-[0.9rem]">
              {item.skill}
            </p>
            <p className="text-[1rem] font-[500] text-primary lg:text-[0.9rem]">
              {item.percentage}
            </p>
          </div>

          <div className="w-full h-2 bg-defaultLightBlurBackground overflow-hidden mx-0 my-4 rounded-lg">
            <div
              className="w-[0%] h-2 bg-primary transition-all duration-[0.5s] ease-[ease-in-out] rounded-lg"
              style={{ width: item.percentage }}
            ></div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default SkillInfoCard;
