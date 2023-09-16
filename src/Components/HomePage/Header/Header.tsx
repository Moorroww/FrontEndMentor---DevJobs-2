import { useState } from "react";
import { useNavigate } from "react-router";

import { ToggleThemeFunction } from "../../../Types/types";

import {
  StyledHeaderContainer,
  StyledHeaderBox,
  ThemeToggleBox,
} from "./Header.css";
import "./darkModeToggleButton.css";

import logoImg from "../../../Assets/desktop icons/logo.svg";
import sunIcon from "../../../Assets/desktop icons/icon-sun.svg";
import moonIcon from "../../../Assets/desktop icons/icon-moon.svg";

export const Header = ({ toggleTheme }: ToggleThemeFunction) => {
  const [localTheme, setLocalTheme] = useState(localStorage.getItem("theme"));
  const toMainPage = useNavigate();

  return (
    <StyledHeaderContainer>
      <StyledHeaderBox>
        <img src={logoImg} alt="devjobs logo" onClick={() => toMainPage("/")} />

        <ThemeToggleBox>
          <img src={sunIcon} alt="sun icon" />
          <div className="toggle-switch">
            <input
              className="toggle-input"
              id="toggle"
              type="checkbox"
              onChange={() => {
                toggleTheme();
                setLocalTheme(localStorage.getItem("theme"));
              }}
              checked={localTheme === "dark"}
            />
            <label className="toggle-label" htmlFor="toggle"></label>
          </div>
          <img src={moonIcon} alt="moon icon" />
        </ThemeToggleBox>
      </StyledHeaderBox>
    </StyledHeaderContainer>
  );
};
