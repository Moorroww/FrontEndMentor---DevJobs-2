import React from "react";
import { useNavigate } from "react-router";

import {
  StyledCard,
  StyledCompanyLocation,
  StyledCompanyLogoBox,
  StyledCompanyName,
  StyledPositionRow,
  StyledShortInfoRow,
} from "./Card.css";

export const Card = ({
  company,
}: {
  company: {
    id: string;
    logoBackground: string;
    logo: string;
    postedAt: string;
    contract: string;
    position: string;
    company: string;
    location: string;
  };
}) => {
  const toCompanyDetailPage = useNavigate();

  return (
    <StyledCard
      onClick={() => {
        toCompanyDetailPage("/company-detailed-page");
        localStorage.setItem("CompanyID", company.id);
      }}
    >
      <StyledCompanyLogoBox bgcolor={company.logoBackground}>
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
