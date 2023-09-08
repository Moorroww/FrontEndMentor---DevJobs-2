import React from "react";

import { ToggleThemeFunction } from "../../Types/types";

import { SearchBar } from "./SearchBar/SearchBar";

import { HomePageContainer } from "./HomePage.css";
import { Header } from "./Header/Header";

export const HomePage = ({ toggleTheme }: ToggleThemeFunction) => {
  return (
    <HomePageContainer>
      <Header toggleTheme={toggleTheme} />
      <SearchBar />
    </HomePageContainer>
  );
};
