import React from "react";
import { useState, useContext } from "react";
import { SearchContext } from "../HomePage";
import { useSearchParams } from "react-router-dom";

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
import { SearchBarMobileFilter } from "./SearchBarMobileFilter";

export const SearchBar = () => {
  const [mobileFilterVisible, setMobileFilterVisible] =
    useState<boolean>(false);

  const { searchFilter } = useContext(SearchContext) as {
    searchFilter: {
      mainSearch: string;
      locationSearch: string;
      contractType: string;
    };
  };
  const [mainSearch, setMainSearch] = useState<string>("");
  const [locationSearch, setLocationSearch] = useState<string>("");
  const [contractType, setContractType] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const proceedSearch = (): void => {
    searchFilter.mainSearch = mainSearch;

    searchFilter.locationSearch = locationSearch;

    contractType == true
      ? (searchFilter.contractType = "Full")
      : (searchFilter.contractType = "Part");
  };

  return (
    <StyledSearchBarContainer>
      <StyledMainInputLabel htmlFor="mainFilter">
        <img src={searchIcon} alt="" />
        <StyledInput
          id="mainFilter"
          placeholder="Filter by title, companies, expertise…"
          onChange={(e) => setMainSearch(e.target.value)}
        />
      </StyledMainInputLabel>
      <StyledLocationInputLabel htmlFor="locationFilter">
        <img src={locationIcon} alt="" />
        <StyledInput
          id="locationFilter"
          placeholder="Filter by location..."
          onChange={(e) => setLocationSearch(e.target.value)}
        />
      </StyledLocationInputLabel>
      <StyledButtonsBox>
        <StyledFilterButton
          onClick={() => setMobileFilterVisible(!mobileFilterVisible)}
        >
          <img src={filterIcon} alt="filter icon" />
        </StyledFilterButton>

        <StyledCheckboxLabel>
          <input
            type="checkbox"
            id="cbx"
            className="hidden-xs-up"
            onChange={() => setContractType(!contractType)}
          />
          <label htmlFor="cbx" className="cbx"></label>
          <span>
            Full Time <span>Only</span>
          </span>
        </StyledCheckboxLabel>

        <StyledSearchButton onClick={proceedSearch}>
          <img src={searchIconWhite} alt="search icon" />
          <span>Search</span>
        </StyledSearchButton>
      </StyledButtonsBox>

      {mobileFilterVisible && (
        <SearchBarMobileFilter
          mobileFilterVisible={mobileFilterVisible}
          setMobileFilterVisible={setMobileFilterVisible}
        />
      )}
    </StyledSearchBarContainer>
  );
};
