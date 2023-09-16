import { useNavigate } from "react-router";
import { motion } from "framer-motion";

import { Company } from "../../../Types/types";

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
  cardKey,
}: {
  company: Company;
  cardKey: number;
}) => {
  const toCompanyDetailPage = useNavigate();

  const cardAnimation = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <StyledCard
      as={motion.div}
      variants={cardAnimation}
      initial="initial"
      animate="enter"
      transition={{ delay: 0.12 * cardKey }}
      onClick={() => {
        toCompanyDetailPage("/company-detailed-page");
        localStorage.setItem("CompanyID", company.id.toString());
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
