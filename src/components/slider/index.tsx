import Slider from "react-slick";
import HeaderComponent from "../header";
import HomePage from "../home";
import ExperiencePage from "../experience";
import SkillPage from "../skills";
import AboutMePage from "../about-me";
import { useSlider } from "../../sliderFunctions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SliderComponent() {
  const { sliderRef, goToSection } = useSlider();
  const settings = {
    infinite: true,
    speed: 800,
    autoplaySpeed: 6000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className="sm:h-screen h-min">
      <HeaderComponent
        sectionIndex={goToSection}
        projectSection={false}
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
      </Slider>
    </div>
  );
}
