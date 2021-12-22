import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Theme, SharedComponents } from "./shared";
import { Home } from "./home";
import { EpicQuests } from "./epic_quests";

function App() {
  return (
    <ThemeProvider theme={Theme.darkTheme}>
      <SharedComponents.GlobalStyle />
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"epic-quests"} element={<EpicQuests />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
