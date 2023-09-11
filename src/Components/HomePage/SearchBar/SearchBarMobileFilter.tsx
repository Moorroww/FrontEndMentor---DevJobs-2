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

export const SearchBarMobileFilter = ({
  mobileFilterVisible,
  setMobileFilterVisible,
}: {
  mobileFilterVisible: boolean;
  setMobileFilterVisible: (value: boolean) => void;
}) => {
  return (
    <div>
      <StyledMobileFilterContainer>
        <StyledLocationInputLabelMobile htmlFor="locationFilterMobile">
          <img src={locationIcon} alt="" />
          <StyledInput
            id="locationFilterMobile"
            placeholder="Filter by location..."
          />
        </StyledLocationInputLabelMobile>

        <StyledCheckboxLabel>
          <input type="checkbox" id="cbx" className="hidden-xs-up" />
          <label htmlFor="cbx" className="cbx"></label>
          <span>Full Time</span>
        </StyledCheckboxLabel>

        <StyledSearchButton>
          <span>Search</span>
        </StyledSearchButton>
      </StyledMobileFilterContainer>
      <StyledDarkBg
        onClick={() => setMobileFilterVisible(!mobileFilterVisible)}
      ></StyledDarkBg>
    </div>
  );
};
