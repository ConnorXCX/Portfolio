import { FULL_NAME, SUB_HEADER } from "../utils/data";
import { unicorn2 } from "../assets";

const Hero = () => (
  // Background style code: before:bg-[#7c66e3] before:content-['_'] before:w-[28.125rem] before:h-[28.125rem] before:absolute before:z-[-1] before:blur-[225px] before:rounded-[28.125rem] after:top-[-3rem] after:left-[-5rem] before:right-0 before:bottom-8 after:content-['_'] after:bg-[#7c66e3] after:w-[28.125rem] after:h-[28.125rem] after:absolute after:z-[-1] after:blur-[225px] after:rounded-[28.125rem] md:after:hidden md:after:left-0 md:after:top-0 md:after:content-['_'] md:after:w-72 md:after:h-72 md:before:right-0 md:before:bottom-8 md:before:content-['_'] md:before:w-72 md:before:h-72
  <section
    id="home"
    className="scroll-mt-[100px] flex items-center md:flex-col widescreen:section-min-height tallscreen:section-min-height tallscreen:justify-center"
  >
    <div className="flex-1 my-20 py-8 md:mt-40 sm:mt-40 sm:my-4 sm:py-4 ">
      <p className="text-8xl font-extrabold ss:text-7xl xs:text-7xl">
        {FULL_NAME.slice(0, 6)}
      </p>
      <p className="text-8xl font-extrabold tracking-[0.18rem] ss:text-7xl ss:tracking-[0.13rem] xs:text-7xl xs:tracking-[0.09rem]">
        {FULL_NAME.slice(7, 13)}
      </p>
    </div>

    <div className="flex-1 px-8">
      <p className="text-justify font-light tracking-tight">{SUB_HEADER}</p>
    </div>
  </section>

  // <section
  //   id="home"
  //   className="scroll-mt-[100px] flex items-center relative md:flex-col"
  // >
  //   <div className="flex-1">
  //     <h2 className="justify-center text-[3.8rem] font-bold leading-[5rem] mb-4 lg:text-5xl lg:leading-[4rem] md:mt-12 md:w-auto md:text-center sm:text-[2.2rem] sm:leading-[3rem]">
  //       {FULL_NAME}
  //     </h2>
  //   </div>

  //   <div className="flex-1 flex flex-col items-center gap-8 mt-20 md:mx-0 md:my-8 sm:gap-4">
  //     <div className="flex items-end gap-8 sm:gap-4">
  //       <p className="w-4/5 text-base font-medium leading-8 lg:text-[0.9] lg:leading-[1.6rem] md:w-auto md:text-center sm:text-[0.8rem] sm:leading-[1.3rem]">
  //         {SUB_HEADER}
  //       </p>
  //     </div>
  //   </div>
  // </section>
);

export default Hero;
