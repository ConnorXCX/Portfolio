import { FULL_NAME, SUB_HEADER } from "../utils/data";
import { unicorn2 } from "../assets";

const Hero = () => (
  // hero-container
  <section
    id="home"
    className="scroll-mt-[100px] flex items-center relative before:bg-[#7c66e3] before:content-['_'] before:w-[28.125rem] before:h-[28.125rem] before:absolute before:z-[-1] before:blur-[225px] before:rounded-[28.125rem] after:top-[-3rem] after:left-[-5rem] before:right-0 before:bottom-8 after:content-['_'] after:bg-[#7c66e3] after:w-[28.125rem] after:h-[28.125rem] after:absolute after:z-[-1] after:blur-[225px] after:rounded-[28.125rem] md:flex-col md:after:hidden md:after:left-0 md:after:top-0 md:after:content-['_'] md:after:w-72 md:after:h-72 md:before:right-0 md:before:bottom-8 md:before:content-['_'] md:before:w-72 md:before:h-72"
  >
    {/* hero-content */}
    <div className="flex-1">
      <h2 className="text-[3.8rem] font-semibold leading-[5rem] mb-4 lg:text-5xl lg:leading-[4rem] md:mt-12 md:w-auto md:text-center sm:text-[2.2rem] sm:leading-[3rem]">
        {FULL_NAME}
      </h2>
      <p className="w-4/5 text-base font-normal leading-8 lg:text-[0.9] lg:leading-[1.6rem] md:w-auto md:text-center sm:text-[0.8rem] sm:leading-[1.3rem]">
        {SUB_HEADER}
      </p>
    </div>

    {/* hero-img */}
    <div className="flex-1 flex flex-col items-center gap-8 mt-20 md:mx-0 md:my-8 sm:gap-4">
      <div className="flex items-end gap-8 sm:gap-4">
        {/* <div className="tech-icon">
          <img src="https://placehold.co/75x75" />
        </div> */}
        <img
          className="w-[25rem] transition-all duration-[0.3s] ease-[ease] hover:translate-y-[-0.5rem] lg:w-80 sm:w-64"
          src={unicorn2}
        />
      </div>
      {/* <div>
        <div className="tech-icon">
          <img src="https://placehold.co/75x75" />
        </div>
        <div className="tech-icon">
          <img src="https://placehold.co/75x75" />
        </div>
        <div className="tech-icon">
          <img src="https://placehold.co/75x75" />
        </div>
      </div> */}
    </div>
  </section>
);

export default Hero;
