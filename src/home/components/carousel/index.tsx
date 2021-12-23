import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Theme } from "@shared";

import { Img } from "./lib";
import { PATHS } from "./constants";

const onDragStart = (e: any) => e.preventDefault();

export const Carousel = () => {
  const {} = Theme.useStyledTheme();
  return (
    <>
      <AliceCarousel
        infinite
        autoPlay
        autoPlayInterval={2000}
        mouseTracking
        items={PATHS.map((src) => (
          <Img key={src} alt={""} src={src} onDragStart={onDragStart} />
        ))}
        disableButtonsControls
        disableDotsControls
        disableSlideInfo
        responsive={{ 0: { items: 3 } }}
      />
    </>
  );
};
