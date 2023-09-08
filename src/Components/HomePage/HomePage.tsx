import React from "react";

import { ToggleThemeFunction } from "../../Types/types";

import { HomePageContainer } from "./HomePage.css";
import { Header } from "./Header/Header";

export const HomePage = ({ toggleTheme }: ToggleThemeFunction) => {
  return (
    <HomePageContainer>
      <Header toggleTheme={toggleTheme} />
    </HomePageContainer>
  );
};
