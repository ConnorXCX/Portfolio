import "./Experience.css";
import { EXPERIENCE } from "../utils/data";
import ExperienceCard from "./ExperienceCard";
import { useRef } from "react";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Experience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
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
    <section id="experience" className="experience-container">
      <h5>Experience</h5>
      <div className="experience-content">
        <div className="arrow-left" onClick={slideLeft}>
          <ChevronLeftIcon style={{ fontSize: "2rem", fontWeight: "500" }} />
        </div>

        <div className="arrow-right" onClick={slideRight}>
          <ChevronRightIcon style={{ fontSize: "2rem", fontWeight: "500" }} />
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
