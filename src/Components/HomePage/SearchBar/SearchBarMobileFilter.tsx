import React from "react";

import { motion } from "framer-motion";

import {
  StyledMobileFilterContainer,
  StyledLocationInputLabelMobile,
  StyledSearchButton,
  StyledCheckboxLabel,
  StyledDarkBg,
} from "./SearchBarMobileFilter.css";
import { StyledInput } from "./SearchBar.css";
import "./checkboxStyle.css";

import locationIcon from "../../../Assets/desktop icons/icon-location.svg";

interface SearchBarMobileFilterProps {
  mobileFilterVisible: boolean;
  setMobileFilterVisible: (value: boolean) => void;
  locationSearch: string;
  setLocationSearch: (value: string) => void;
  contractType: boolean;
  setContractType: (value: boolean) => void;
  proceedSearch: () => void;
}

export const SearchBarMobileFilter: React.FC<SearchBarMobileFilterProps> = ({
  mobileFilterVisible,
  setMobileFilterVisible,
  locationSearch,
  setLocationSearch,
  contractType,
  setContractType,
  proceedSearch,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, zIndex: 20 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledMobileFilterContainer>
        <StyledLocationInputLabelMobile htmlFor="locationFilterMobile">
          <img src={locationIcon} alt="" />
          <StyledInput
            id="locationFilterMobile"
            placeholder="Filter by location..."
            onChange={(e) => setLocationSearch(e.target.value)}
            value={locationSearch}
          />
        </StyledLocationInputLabelMobile>

        <StyledCheckboxLabel>
          <input
            type="checkbox"
            id="cbx"
            className="hidden-xs-up"
            onChange={() => setContractType(!contractType)}
            checked={contractType}
          />
          <label htmlFor="cbx" className="cbx"></label>
          <span>Full Time</span>
        </StyledCheckboxLabel>

        <StyledSearchButton
          onClick={() => {
            setMobileFilterVisible(!mobileFilterVisible);
            proceedSearch();
          }}
        >
          <span>Search</span>
        </StyledSearchButton>
      </StyledMobileFilterContainer>
      <StyledDarkBg
        onClick={() => setMobileFilterVisible(!mobileFilterVisible)}
      ></StyledDarkBg>
    </motion.div>
  );
};
