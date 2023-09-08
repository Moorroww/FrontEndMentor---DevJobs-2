import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./Styles/globalStyles.css.tsx";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/theme";
import { useDarkMode } from "./Styles/useDarkMode.tsx";

import { HomePage } from "./Components/HomePage/HomePage";
import { CompanyDetailPage } from "./Components/CompanyDetailPage/CompanyDetailPage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";

export const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage toggleTheme={themeToggler} />}
          ></Route>
          <Route
            path="/company-detailed-page"
            element={<CompanyDetailPage />}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
