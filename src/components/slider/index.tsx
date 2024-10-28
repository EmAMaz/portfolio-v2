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
export default function SliderComponent() {
  const { sliderRef, goToSection } = useSlider();
  const [openProjectPage, setOpenProjectPage] = useState(Boolean);
  const settings = {
    infinite: true,
    speed: 800,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handlerClickProject = (e: boolean) => {
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
      </Slider>
      {openProjectPage && (
        <div className="w-screen h-screen fixed bg-black/80 top-0">
          <div className="absolute top-[50%] right-[50%] left-[50%] w-min transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="rounded-2xl border border-blue-100 bg-white shadow-lg p-8 lg:p-8"
              role="alert"
            >
              <div className="flex items-center gap-4">
                <span className="shrink-0 rounded-full bg-black/90 p-400 p-2 text-white">
                  <img src="/logomodalProject.svg" alt="" />
                </span>
                <p className="font-medium sm:text-lg text-nowrap">Upss!</p>
              </div>
              <p className="mt-4 text-gray-500 text-nowrap">
                This section is not ready yet.
              </p>
              <div className="mt-6 sm:flex sm:gap-4 items-end justify-end w-full">
                <a
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
                  href="#"
                  onClick={() => setOpenProjectPage(false)}
                >
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
