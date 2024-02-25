import "./Experience.css";
import { EXPERIENCE } from "../utils/data";
import ExperienceCard from "./ExperienceCard";
import { useRef } from "react";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Experience = () => {
  const sliderRef = useRef();

  // TODO: Update setting to highlight center card, go slower, and extra padding on left and right around arrows.
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    focusOnSelect: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    responsive: [
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
    <section id="experience" className="anchor experience-container">
      <h5>Experience</h5>
      <div className="experience-content">
        <div className="arrow-left" onClick={slideLeft}>
          <ChevronLeftIcon className="arrow-left-icon" />
        </div>

        <div className="arrow-right" onClick={slideRight}>
          <ChevronRightIcon className="arrow-right-icon" />
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
