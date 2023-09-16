import { createContext } from "react";

import { motion } from "framer-motion";

import { SearchBar } from "./SearchBar/SearchBar";
import { CardsSection } from "./CardsSection/CardsSection";

import { HomePageContainer } from "./HomePage.css";

interface SearchFilter {
  mainSearch: string;
  locationSearch: string;
  contractType: string;
}

interface SearchContextType {
  searchFilter: SearchFilter;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const HomePage = () => {
  const searchFilter: SearchFilter = {
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
      {/* Używamy domyślnego wartości kontekstu */}
      <SearchContext.Provider value={{ searchFilter }}>
        <SearchBar />
        <CardsSection />
      </SearchContext.Provider>
    </HomePageContainer>
  );
};
