import { SharedComponents, Theme } from "../shared";

import * as Components from "./components";

export const Home = () => {
  const {
    palette: {},
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <Components.Promo />
      <Components.Carousel />
    </SharedComponents.Screen>
  );
};
