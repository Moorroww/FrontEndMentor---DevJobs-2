import React, { createContext } from "react";

import { ToggleThemeFunction } from "../../Types/types";

import { SearchBar } from "./SearchBar/SearchBar";

import { HomePageContainer } from "./HomePage.css";
import { Header } from "./Header/Header";
import { CardsSection } from "./CardsSection/CardsSection";

export const SearchContext = createContext();

export const HomePage = ({ toggleTheme }: ToggleThemeFunction) => {
  const searchFilter = {
    mainSearch: "",
    locationSearch: "",
    contractType: "",
  };

  return (
    <HomePageContainer>
      <Header toggleTheme={toggleTheme} />
      <SearchContext.Provider value={{ searchFilter }}>
        <SearchBar />
        <CardsSection />
      </SearchContext.Provider>
    </HomePageContainer>
  );
};
