import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Theme, SharedComponents } from "./shared";
import { Home } from "./home";
import { EpicQuests } from "./epic_quests";
import { SealedCave } from "./sealed_cave";
import { PATCH_03_12_2021 } from "./patch_03_12_2021";
import { PATCH_22_12_2021 } from "./patch_22_12_2021";
import { TimeOfApocalypses } from "./time_of_apocalypses";
import { NewYear } from "./new_year";

function App() {
  return (
    <ThemeProvider theme={Theme.darkTheme}>
      <SharedComponents.GlobalStyle />
      <Router>
        <SharedComponents.ScrollToTop />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"events/epic-quests"} element={<EpicQuests />} />
          <Route path={"events/sealed-cave"} element={<SealedCave />} />
          <Route
            path={"events/patch-22-12-2021"}
            element={<PATCH_22_12_2021 />}
          />
          <Route
            path={"events/patch-03-12-2021"}
            element={<PATCH_03_12_2021 />}
          />
          <Route
            path={"events/time-of-apocalypses"}
            element={<TimeOfApocalypses />}
          />
          <Route path={"events/new-year"} element={<NewYear />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
