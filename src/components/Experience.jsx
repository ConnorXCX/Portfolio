import { useRef } from "react";
import { EXPERIENCE } from "../utils/data";
import ExperienceCard from "./ExperienceCard";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Experience = () => {
  const sliderRef = useRef();

  // TODO: Update setting to highlight center card, go slower, and extra padding on left and right around arrows.
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    focusOnSelect: true,
    // className: "slick-center",
    // centerMode: true,
    // centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  return (
    // Background style code: after:content-['_'] after:w-[28.125rem] after:h-[28.125rem] after:absolute after:z-[-1] after:blur-[225px] after:rounded-[28.125rem] before:content-['_'] before:w-[28.125rem] before:h-[28.125rem] before:absolute before:z-[-1] before:blur-[225px] before:rounded-[28.125rem] after:top-[-3rem] after:left-[-5rem] before:right-0 before:bottom-8 before:bg-experienceContainer after:bg-experienceContainer
    <section id="experience" className="scroll-mt-[100px] relative mx-0 my-16 ">
      <h5 className="text-[1.5rem] font-[6000] mb-12 md:text-[1.3rem] md:mb-8">
        Experience
      </h5>
      <div className="">
        <div
          className="left-[-2rem] bg-primary w-[2.2rem] h-[2.2rem] flex items-center justify-center text-secondary absolute z-[2] cursor-pointer rounded-[0.65rem] border-[1.5px] border-solid border-secondary top-[55%] lg:left-0 md:left-[-1rem]"
          onClick={slideLeft}
        >
          <ChevronLeftIcon className="text-[2rem] font-medium" />
        </div>

        <div
          className="right-[-2rem] bg-primary w-[2.2rem] h-[2.2rem] flex items-center justify-center text-secondary absolute z-[2] cursor-pointer rounded-[0.65rem] border-[1.5px] border-solid border-secondary top-[55%] lg:right-0 md:right-[-1rem]"
          onClick={slideRight}
        >
          <ChevronRightIcon className="text-[2rem] font-medium" />
        </div>

        <Slider ref={sliderRef} {...settings}>
          {EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;
