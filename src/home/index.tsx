import { SharedComponents, Theme } from "../shared";

import * as Components from "./components";

export const Home = () => {
  const {
    palette: { pink },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <Components.Promo />
      <SharedComponents.Box background={pink} height={"256px"} />
    </SharedComponents.Screen>
  );
};
