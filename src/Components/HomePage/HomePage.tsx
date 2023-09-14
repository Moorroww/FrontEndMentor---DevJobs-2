import React, { createContext } from "react";

import { ToggleThemeFunction } from "../../Types/types";

import { SearchBar } from "./SearchBar/SearchBar";

import { HomePageContainer } from "./HomePage.css";
import { CardsSection } from "./CardsSection/CardsSection";

export const SearchContext = createContext();

export const HomePage = () => {
  const searchFilter = {
    mainSearch: "",
    locationSearch: "",
    contractType: "",
  };

  return (
    <HomePageContainer>
      <SearchContext.Provider value={{ searchFilter }}>
        <SearchBar />
        <CardsSection />
      </SearchContext.Provider>
    </HomePageContainer>
  );
};
