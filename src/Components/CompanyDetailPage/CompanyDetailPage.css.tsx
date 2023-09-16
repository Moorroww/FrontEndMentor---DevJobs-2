import { styled } from "styled-components";

export const StyledCompanyDetailPageContainer = styled.div`
  display: grid;
  gap: 2.4rem;
  position: relative;
  top: -1.5rem;

  @media (width>767px) {
    gap: 3.2rem;
    top: -4rem;
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

export const StyledCompanyDetailedHeader = styled.div`
  background-color: ${({ theme }) => theme.card};
  position: relative;
  margin-inline: 2.4rem;
  border-radius: 0.6rem;
  display: grid;
  justify-items: center;
  padding-bottom: 3.2rem;

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

export const StyledCompanyLogoBox = styled.div<{ bgcolor: string }>`
  width: 5rem;
  height: 5rem;
  background-color: ${({ bgcolor }) => bgcolor};
  border-radius: 1.5rem;
  display: grid;
  place-items: center;
  position: relative;
  top: -2.5rem;
`;

export const StyledCompanyNameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2.4rem;

  & span:first-of-type {
    font-size: 2rem;
    font-weight: bold;
  }

  & span:last-of-type {
    color: ${({ theme }) => theme.fontSecondary};
  }
`;

export const StyledCompanyDetailDesc = styled.div`
  background-color: ${({ theme }) => theme.card};
  padding: 4rem 2.4rem;
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
