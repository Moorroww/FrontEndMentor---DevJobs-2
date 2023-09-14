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
  locationSearch,
  setLocationSearch,
  contractType,
  setContractType,
  proceedSearch,
}: {
  mobileFilterVisible: boolean;
  setMobileFilterVisible: (value: boolean) => void;
  locationSearch: string;
  setLocationSearch: (value: string) => void;
  contractType: boolean;
  setContractType: (value: boolean) => void;
  proceedSearch: any;
}) => {
  return (
    <div>
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
    </div>
  );
};
