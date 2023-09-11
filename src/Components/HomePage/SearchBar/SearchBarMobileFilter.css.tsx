import styled from "styled-components";

export const StyledMobileFilterContainer = styled.div`
  z-index: 2;
  position: fixed;
  background-color: ${({ theme }) => theme.card};
  padding: 2.4rem;
  border-radius: 0.6rem;
  width: 100%;
  max-width: 32.7rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (width>767px) {
    display: none;
  }
`;

export const StyledLocationInputLabelMobile = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.searchBorder};
  margin-bottom: 2.4rem;

  & img {
    width: 1.672rem;
    height: 2.389rem;
    margin-right: 1.6rem;
  }

  & input {
    max-width: 13.5rem !important;
  }
`;

export const StyledSearchButton = styled.button`
  background-color: ${({ theme }) => theme.accentViolet};
  color: ${({ theme }) => theme.white};
  padding-inline: 1.4rem;
  padding-block: 1.6rem;
  font-weight: bold;
  font-family: inherit;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  transition: 0.2s all ease;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.accentLightViolet};
    cursor: pointer;
  }

  & span {
    font-weight: bold;
  }
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
  label {
    background-color: ${({ theme }) => theme.searchBorder};
  }

  & span {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.fontMain};
    cursor: pointer;
  }

  @media (width>767px) {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`;

export const StyledDarkBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.65;
  @media (width>767px) {
    display: none;
  }
`;
