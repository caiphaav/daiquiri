import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Theme, SharedComponents } from "./shared";
import { Home } from "./home";

function App() {
  return (
    <ThemeProvider theme={Theme.darkTheme}>
      <SharedComponents.GlobalStyle />
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
