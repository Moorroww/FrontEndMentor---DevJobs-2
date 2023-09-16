import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoutes } from "./Components/Routes/AnimatedRoutes.tsx";

import { GlobalStyles } from "./Styles/globalStyles.css.tsx";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/theme";
import { useDarkMode } from "./Styles/useDarkMode.tsx";

import { HomePage } from "./Components/HomePage/HomePage";
import { CompanyDetailPage } from "./Components/CompanyDetailPage/CompanyDetailPage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import { Header } from "./Components/HomePage/Header/Header.tsx";

export const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Header toggleTheme={themeToggler} />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
