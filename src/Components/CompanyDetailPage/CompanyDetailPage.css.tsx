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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0;
    padding-right: 4rem;
  }

  @media (width>1439px) {
    margin-inline: 16.5rem !important;
    width: 100%;
    max-width: 730px;
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

  @media (width>767px) {
    position: static;
    width: 14rem;
    height: 14rem;
    border-radius: 0 0 0 1.5rem;

    & img {
      scale: 2;
    }
  }
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

  @media (width>767px) {
    margin-right: auto;
    margin-left: 4rem;
    margin-bottom: 0;
  }
`;

export const StyledCompanyDetailDescContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  padding: 4rem 2.4rem;
  margin-inline: 2.4rem;
  border-radius: 0.6rem;
  display: grid;
  gap: 4rem;

  @media (width>767px) {
    margin-inline: 4rem;
    padding: 4rem 4rem;
  }

  @media (width>1439px) {
    margin-inline: 16.5rem !important;
    width: 100%;
    max-width: 730px;
    justify-self: center;
  }
`;

export const StyledShortInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  & button {
    padding-block: 1.6rem;
  }

  @media (width>767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & button {
      padding: 1.6rem 2.8rem;
      width: 100%;
      max-width: 15.2rem;
    }
  }
`;

export const StyledPostTimeAndContractBox = styled.div`
  color: ${({ theme }) => theme.fontSecondary};
  display: flex;
  gap: 1.2rem;
`;

export const StyledCompanyHugeNameBox = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-block: 0.7rem;
`;

export const StyledCompanyLocationBox = styled.div`
  color: ${({ theme }) => theme.accentViolet};
  font-weight: bold;
`;

export const StyledLargeDescBox = styled.div`
  color: ${({ theme }) => theme.fontSecondary};
`;

export const StyledRequirementsBox = styled.div`
  & p {
    color: ${({ theme }) => theme.fontSecondary};
    margin-bottom: 2.4rem;
  }
  & h3 {
    margin-bottom: 2.4rem;
  }
`;

export const StyledUl = styled.ul`
  color: ${({ theme }) => theme.fontSecondary};

  & li {
    margin-left: 1.6rem;
    margin-bottom: 0.8rem;
    padding-left: 1.6rem;
  }
  & li::marker {
    color: ${({ theme }) => theme.accentViolet};
  }
`;

export const StyledWorkDutiesBox = styled.div`
  & p {
    color: ${({ theme }) => theme.fontSecondary};
    margin-bottom: 2.4rem;
  }
  & h3 {
    margin-bottom: 2.4rem;
  }
`;

export const StyledOl = styled.ol`
  color: ${({ theme }) => theme.fontSecondary};

  & li {
    margin-left: 1.6rem;
    margin-bottom: 0.8rem;
    padding-left: 1.6rem;
  }
  & li::marker {
    color: ${({ theme }) => theme.accentViolet};
    font-weight: bold;
  }
`;

export const CardDetailedFooter = styled.footer`
  background-color: ${({ theme }) => theme.card};
  width: 100%;
  height: 9.6rem;
  position: relative;
  bottom: -4rem;
  display: grid;
  place-items: center;
  padding-block: 2.3rem;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  & button {
    padding-block: 1.6rem;
    margin-inline: 4rem;

    @media (width>767px) {
      margin: 0;
      padding: 1.6rem 2.8rem;
    }
  }

  @media (width>767px) {
    & > div {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-inline: 4rem;
    }
  }

  @media (width>1439px) {
    & > div {
      max-width: 730px;
      padding-inline: 0;
    }
  }
`;

export const StyledFooterCompanyInfo = styled.div`
  display: none;

  & span {
    color: ${({ theme }) => theme.fontSecondary};
  }

  @media (width>767px) {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;
