import React from "react";

import { StyledHeaderContainer, ThemeToggleBox } from "./Header.css";
import "./darkModeToggleButton.css";

import logoImg from "../../../Assets/desktop icons/logo.svg";
import sunIcon from "../../../Assets/desktop icons/icon-sun.svg";
import moonIcon from "../../../Assets/desktop icons/icon-moon.svg";

export const Header = ({ themeToggler }) => {
  return (
    <StyledHeaderContainer>
      <img src={logoImg} alt="devjobs logo" />

      <ThemeToggleBox>
        <img src={sunIcon} alt="sun icon" />
        <div className="toggle-switch">
          <input
            className="toggle-input"
            id="toggle"
            type="checkbox"
            onClick={themeToggler[0]}
            //   checked={themeToggler[1] === "dark" ? true : false}
          />
          <label className="toggle-label" htmlFor="toggle"></label>
        </div>
        <img src={moonIcon} alt="moon icon" />
      </ThemeToggleBox>
    </StyledHeaderContainer>
  );
};
