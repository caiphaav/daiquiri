import { SharedComponents, Theme } from "../shared";

import * as Components from "./components";

export const Home = () => {
  const {} = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <Components.Promo />
    </SharedComponents.Screen>
  );
};
