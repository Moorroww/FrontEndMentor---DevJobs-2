import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 0.6rem;
  padding: 0 0.9rem 3.2rem 3.2rem;
  cursor: pointer;

  &:hover #position {
    color: ${({ theme }) => theme.fontSecondary};
  }
`;

export const StyledCompanyLogoBox = styled.div<{ bgColor: string }>`
  width: 5rem;
  height: 5rem;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 1.5rem;
  display: grid;
  place-items: center;
  position: relative;
  top: -2.5rem;
`;

export const StyledShortInfoRow = styled.div`
  margin-bottom: 1.6rem;
  display: flex;
  gap: 1.2rem;
  color: ${({ theme }) => theme.fontSecondary};
`;

export const StyledPositionRow = styled.div`
  margin-bottom: 1.6rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.fontMain};

  &:hover {
    color: ${({ theme }) => theme.fontSecondary};
  }
`;

export const StyledCompanyName = styled.div`
  margin-bottom: 4.4rem;
  color: ${({ theme }) => theme.fontSecondary};
`;

export const StyledCompanyLocation = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accentViolet};
`;
