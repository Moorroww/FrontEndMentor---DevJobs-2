import styled from "styled-components";
import bgImgMobile from "/bg-pattern-header-mobile.svg";
import bgImgTablet from "/bg-pattern-header-tablet.svg";
import bgImgDesktop from "/bg-pattern-header-desktop.svg";

export const StyledHeaderContainer = styled.header`
  min-height: 13.6rem;
  padding: 2.3rem 2.4rem 7.2rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${bgImgMobile});
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr;

  @media (width>767px) {
    padding: 4.2rem 4rem 8.6rem 4rem;
    background-image: url(${bgImgTablet});
    min-height: 16rem;
    background-repeat: no-repeat;
  }

  @media (width>1439px) {
    padding: 4.4rem 16.5rem 8.6rem 16.5rem;
    background-image: url(${bgImgDesktop});
    min-height: 16rem;
  }
`;

export const StyledHeaderBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  justify-self: center;

  @media (width>1439px) {
    max-width: 1110px;
  }
`;

export const ThemeToggleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
