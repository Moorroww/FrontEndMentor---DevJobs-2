import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/theme";
import { HomePage } from "./Components/HomePage/HomePage";
import { CompanyDetailPage } from "./Components/CompanyDetailPage/CompanyDetailPage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
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
