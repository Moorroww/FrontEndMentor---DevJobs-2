import React from "react";
import { HomePageContainer } from "./HomePage.css";
import { Header } from "./Header/Header";

export const HomePage = ({ themeToggler }) => {
  return (
    <HomePageContainer>
      <Header themeToggler={themeToggler} />
    </HomePageContainer>
  );
};
