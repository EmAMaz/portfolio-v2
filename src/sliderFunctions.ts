import { useRef } from "react";
import Slider from "react-slick";

export const useSlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  const goToSection = (indice:number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(indice);
    }
  };
  
  return { sliderRef, goToSection };
};
