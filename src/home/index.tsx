import { SharedComponents } from "@shared";

import * as Components from "./components";

export const Home = () => {
  return (
    <SharedComponents.Screen>
      <SharedComponents.NavBar />
      <Components.Promo />
      <Components.Carousel />
      <Components.NewYearPromo />
      <Components.LatestNews />
      <Components.EpicQuests />
      <SharedComponents.VerticalBox height={64} />
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
