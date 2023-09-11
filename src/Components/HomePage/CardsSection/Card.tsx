import React from "react";

import {
  StyledCard,
  StyledCompanyLocation,
  StyledCompanyLogoBox,
  StyledCompanyName,
  StyledPositionRow,
  StyledShortInfoRow,
} from "./Card.css";

export const Card = ({ company }) => {
  return (
    <StyledCard>
      <StyledCompanyLogoBox bgColor={company.logoBackground}>
        <img src={company?.logo} alt="" />
      </StyledCompanyLogoBox>
      <StyledShortInfoRow>
        <span>{company?.postedAt}</span>•<span>{company.contract}</span>
      </StyledShortInfoRow>
      <StyledPositionRow id="position">{company.position}</StyledPositionRow>
      <StyledCompanyName>{company.company}</StyledCompanyName>

      <StyledCompanyLocation>{company.location}</StyledCompanyLocation>
    </StyledCard>
  );
};
