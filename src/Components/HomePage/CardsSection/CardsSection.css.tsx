import styled from "styled-components";

export const StyledCardsSectionContainer = styled.section`
  margin-top: 3.2rem;
  margin-inline: 2.4rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4.9rem;

  & > button {
    max-width: 14.1rem;
    justify-self: center;
  }

  @media (width>767px) {
    margin-top: 4.5rem;
    margin-inline: 4rem;
    grid-template-columns: 1fr 1fr;
    row-gap: 6.5rem;
    column-gap: 1.1rem;

    & > button {
      grid-column: span 2 / span 2;
    }
  }

  @media (width>1439px) {
    margin-top: 8rem;
    margin-inline: 16.5rem !important;
    width: 100%;
    max-width: 1110px;
    justify-self: center;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;

    & > button {
      grid-column: span 3 / span 3;
    }
  }
`;
