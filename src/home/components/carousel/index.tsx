import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { SharedComponents, Theme } from "@shared";

import { Img } from "./lib";
import { PATHS } from "./constants";

const onDragStart = (e: any) => e.preventDefault();

export const Carousel = () => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <>
      <SharedComponents.Column
        height={"192px"}
        justifyContent={"center"}
        padding={"0 48px"}
      >
        <SharedComponents.Text
          text={"Выбери свое перевоплощение:"}
          type={"h1"}
          color={white}
        />
      </SharedComponents.Column>
      <AliceCarousel
        infinite
        autoPlay
        autoPlayInterval={3000}
        mouseTracking
        items={PATHS.map((src) => (
          <Img src={src} onDragStart={onDragStart} />
        ))}
        disableButtonsControls
        disableDotsControls
        disableSlideInfo
        responsive={{ 0: { items: 3 } }}
      />
      <SharedComponents.VerticalBox height={192} />
    </>
  );
};
