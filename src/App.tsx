import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Theme, SharedComponents } from "./shared";
import { Home } from "./home";
import { EpicQuests } from "./epic_quests";
import { SealedCave } from "./sealed_cave";

function App() {
  return (
    <ThemeProvider theme={Theme.darkTheme}>
      <SharedComponents.GlobalStyle />
      <Router>
        <SharedComponents.ScrollToTop />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"epic-quests"} element={<EpicQuests />} />
          <Route path={"sealed-cave"} element={<SealedCave />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
