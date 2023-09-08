import { styled } from "styled-components";

export const StyledButtonMain = styled.button<{
  paddingX?: string;
  paddingY?: string;
}>`
  background-color: ${({ theme }) => theme.accentViolet};
  color: ${({ theme }) => theme.white};
  padding-inline: ${({ paddingX }) => (paddingX ? paddingX : 0)}; /* paddingX */
  padding-block: ${({ paddingY }) => (paddingY ? paddingY : 0)}; /* paddingY */
  font-weight: bold;
  font-family: inherit;
  border-radius: 0.5rem;
  transition: 0.2s all ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentLightViolet};
    cursor: pointer;
  }
`;

export const StyledButtonSecondary = styled.button`
  background-color: ${({ theme }) => theme.secondaryButtonBg};
  color: ${({ theme }) => theme.secondaryButtonFont};
  padding: 1.6rem 2rem;
  font-weight: bold;
  font-family: inherit;
  border-radius: 0.5rem;
  transition: 0.2s all ease;

  &:hover {
    background-color: #c5c9f4;
    cursor: pointer;
  }
`;
