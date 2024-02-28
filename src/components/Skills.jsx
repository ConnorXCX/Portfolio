import { useState } from "react";
import { SKILLS } from "../utils/data";
import SkillCard from "./SkillCard";
import SkillInfoCard from "./SkillInfoCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    // Background style code: after:top-[-3rem] after:left-[-5rem] before:[background:#9e51b9] before:right-0 before:bottom-0 before:content-['_'] before:w-[28rem] before:h-[28rem] before:absolute before:z-[-1] before:blur-[200px] before:rounded-[28.125rem] after:content-['_'] after:w-[28rem] after:h-[28rem] after:[background:#7c66e3] after:absolute after:z-[-1] after:blur-[200px] after:rounded-[28.125rem] md:before:w-72 md:before:h-72 md:after:w-72 md:after:h-72 sm:p-0
    <section
      id="skills"
      className="scroll-mt-[100px] relative mx-0 my-16 md:w-full"
    >
      <h5 className="text-[1.5rem] font-[6000] mb-14 md:text-[1.3rem] md:mb-8">
        Technical Proficiency
      </h5>

      <div className="flex items-start gap-12 lg:gap-8 md:flex-col md:gap-12">
        <div className="flex-1 grid gap-12 grid-cols-[repeat(2,1fr)] lg:pl-4 lg:gap-8 md:w-full">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              invertImage={item.invertImage}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectedSkill(item);
              }}
            />
          ))}
        </div>

        <div className="flex-1 md:w-full">
          <SkillInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
