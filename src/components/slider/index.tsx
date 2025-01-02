import HeaderComponent from "../header";
import HomePage from "../home";
import ExperiencePage from "../experience";
import SkillPage from "../skills";
//import AboutMePage from "../about-me";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderComponent() {
  return (
    <div className="sm:h-screen h-min">
      <HeaderComponent projectSection={false} />
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <HomePage />
        </SwiperSlide>
        <SwiperSlide>
          <ExperiencePage />
        </SwiperSlide>
        <SwiperSlide>
          <SkillPage />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
