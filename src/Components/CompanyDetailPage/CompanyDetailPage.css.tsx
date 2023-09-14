import { styled } from "styled-components";

export const StyledCompanyDetailPageContainer = styled.div`
  display: grid;
`;

export const StyledCompanyDetailedHeader = styled.div`
  background-color: ${({ theme }) => theme.card};
  position: relative;
  top: -1.5rem;
  margin-inline: 2.4rem;
  border-radius: 0.6rem;

  @media (width>767px) {
    margin-inline: 4rem;
  }

  @media (width>1439px) {
    margin-inline: 16.5rem !important;
    width: 100%;
    max-width: 1110px;
    justify-self: center;
  }
`;

export const StyledErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
