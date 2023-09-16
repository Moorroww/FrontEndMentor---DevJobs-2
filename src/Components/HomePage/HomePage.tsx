import { createContext } from "react";

import { motion } from "framer-motion";

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
    <HomePageContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: innerWidth * -1, opacity: 0 }}
    >
      <SearchContext.Provider value={{ searchFilter }}>
        <SearchBar />
        <CardsSection />
      </SearchContext.Provider>
    </HomePageContainer>
  );
};
