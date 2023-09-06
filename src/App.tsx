import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/theme";

export const App = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default App;
