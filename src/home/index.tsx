import { SharedComponents, Theme } from "../shared";

import * as Components from "./components";

export const Home = () => {
  const {
    palette: {},
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.NavBar />
      <Components.Promo />
      <Components.Carousel />
      <SharedComponents.VerticalBox height={64} />
      <Components.EpicQuests />
      <Components.LatestNews />
      <Components.EpicQuests />
      <SharedComponents.VerticalBox height={64} />
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
