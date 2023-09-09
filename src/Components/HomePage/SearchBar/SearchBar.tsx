import React from "react";
import { useState } from "react";

import {
  StyledButtonsBox,
  StyledCheckboxLabel,
  StyledFilterButton,
  StyledInput,
  StyledLocationInputLabel,
  StyledMainInputLabel,
  StyledSearchBarContainer,
  StyledSearchButton,
} from "./SearchBar.css";
import "./checkboxStyle.css";

import searchIcon from "../../../Assets/desktop icons/icon-search.svg";
import searchIconWhite from "../../../Assets/desktop icons/icon-search-white.svg";
import locationIcon from "../../../Assets/desktop icons/icon-location.svg";
import filterIcon from "../../../Assets/mobile icons/icon-filter.svg";

export const SearchBar = () => {
  return (
    <StyledSearchBarContainer>
      <StyledMainInputLabel htmlFor="mainFilter">
        <img src={searchIcon} alt="" />
        <StyledInput
          id="mainFilter"
          placeholder="Filter by title, companies, expertise…"
        />
      </StyledMainInputLabel>

      <StyledLocationInputLabel htmlFor="locationFilter">
        <img src={locationIcon} alt="" />
        <StyledInput id="locationFilter" placeholder="Filter by location..." />
      </StyledLocationInputLabel>

      <StyledButtonsBox>
        <StyledFilterButton>
          <img src={filterIcon} alt="filter icon" />
        </StyledFilterButton>

        <StyledCheckboxLabel>
          <input type="checkbox" id="cbx" className="hidden-xs-up" />
          <label htmlFor="cbx" className="cbx"></label>
          <span>Full Time</span>
        </StyledCheckboxLabel>

        <StyledSearchButton>
          <img src={searchIconWhite} alt="search icon" />
          <span>Search</span>
        </StyledSearchButton>
      </StyledButtonsBox>
    </StyledSearchBarContainer>
  );
};
