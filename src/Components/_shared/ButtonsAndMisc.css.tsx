import { styled } from "styled-components";

export const StyledButtonMain = styled.button<{
  paddingx?: string;
  paddingy?: string;
  bgcolor?: string;
  hovercolor?: string;
}>`
  background-color: ${({ bgcolor, theme }) =>
    bgcolor ? bgcolor : theme.accentViolet};
  color: ${({ theme }) => theme.white};
  padding-inline: ${({ paddingx }) => (paddingx ? paddingx : 0)};
  padding-block: ${({ paddingy }) => (paddingy ? paddingy : 0)};
  font-weight: bold;
  font-family: inherit;
  border-radius: 0.5rem;
  transition: 0.2s all ease;

  &:hover {
    background-color: ${({ hovercolor, theme }) =>
      hovercolor ? hovercolor : theme.accentLightViolet};
    cursor: pointer;
  }
`;

export const StyledButtonSecondary = styled.button`
  background-color: ${({ theme }) => theme.secondaryButtonBg};
  color: ${({ theme }) => theme.secondaryButtonFont};
  padding: 1.6rem 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-family: inherit;
  border-radius: 0.5rem;
  transition: 0.2s all ease;

  &:hover {
    background-color: #c5c9f4;
    cursor: pointer;
  }
`;
