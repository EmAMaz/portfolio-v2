import Slider from "react-slick";
import HeaderComponent from "../header";
import HomePage from "../home";
import ExperiencePage from "../experience";
import SkillPage from "../skills";
import AboutMePage from "../about-me";
import { useSlider } from "../../sliderFunctions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import ProjectPage from "../projects";
export default function SliderComponent() {
  const { sliderRef, goToSection } = useSlider();
  const [openProjectPage, setOpenProjectPage] = useState(Boolean);
  const settings = {
    infinite: true,
    speed: 800,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlerClickProject = (e: boolean) => {
    sliderRef.current?.slickPrev();
    setOpenProjectPage(e);
  };

  return (
    <div className="sm:h-screen h-min">
      <HeaderComponent
        sectionIndex={goToSection}
        onProject={(e: boolean) => handlerClickProject(e)}
      />
      <Slider ref={sliderRef} {...settings}>
        <div>
          <HomePage />
        </div>
        <div>
          <ExperiencePage />
        </div>
        <div>
          <SkillPage />
        </div>
        <div>
          <AboutMePage />
        </div>
        {openProjectPage && (
          <div>
            <ProjectPage />
          </div>
        )}
      </Slider>
    </div>
  );
}
