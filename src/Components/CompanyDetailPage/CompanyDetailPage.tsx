import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import axios from "axios";

import { motion } from "framer-motion";

import { Company } from "../../Types/types";

import {
  StyledCompanyDetailPageContainer,
  StyledCompanyDetailedHeader,
  StyledErrorMessage,
  StyledCompanyLogoBox,
  StyledCompanyNameBox,
  StyledCompanyDetailDescContainer,
  StyledShortInfoBox,
  StyledPostTimeAndContractBox,
  StyledCompanyHugeNameBox,
  StyledCompanyLocationBox,
  StyledLargeDescBox,
  StyledRequirementsBox,
  StyledUl,
  StyledWorkDutiesBox,
  StyledOl,
  CardDetailedFooter,
  StyledFooterCompanyInfo,
} from "./CompanyDetailPage.css";
import {
  StyledButtonMain,
  StyledButtonSecondary,
} from "../_shared/ButtonsAndMisc.css";

export const CompanyDetailPage = () => {
  const toMainPage = useNavigate();

  const [companyData, setCompanyData] = useState<Company | null>(null);

  const findCompanyById = (data: any, companyId: string) => {
    return data.find((company: any) => company.id === parseInt(companyId));
  };

  useEffect(() => {
    const companyIdFromLocalStorage = localStorage.getItem("CompanyID");

    if (companyIdFromLocalStorage !== null) {
      axios.get("/data.json").then((res) => {
        const company = findCompanyById(res.data, companyIdFromLocalStorage);
        setCompanyData(company || null);
      });
    } else {
      setCompanyData(null);
    }
  }, []);

  return companyData ? (
    <StyledCompanyDetailPageContainer>
      <StyledCompanyDetailedHeader
        as={motion.div}
        initial={{ opacity: 0, x: innerWidth }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
        exit={{ opacity: 0 }}
      >
        <StyledCompanyLogoBox bgcolor={companyData?.logoBackground}>
          <img src={companyData?.logo} alt="" />
        </StyledCompanyLogoBox>

        <StyledCompanyNameBox>
          <span>{companyData?.company}</span>
          <span>{companyData?.company.toLowerCase() + ".com"}</span>
        </StyledCompanyNameBox>

        <StyledButtonSecondary>
          <a href={companyData?.website}>Company Stite</a>
        </StyledButtonSecondary>
      </StyledCompanyDetailedHeader>

      <StyledCompanyDetailDescContainer
        as={motion.div}
        initial={{ opacity: 0, x: innerWidth }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
        exit={{ opacity: 0 }}
      >
        <StyledShortInfoBox>
          <div>
            <StyledPostTimeAndContractBox>
              <span>{companyData?.postedAt}</span>•
              <span>{companyData?.contract}</span>
            </StyledPostTimeAndContractBox>
            <StyledCompanyHugeNameBox>
              {companyData?.position}
            </StyledCompanyHugeNameBox>
            <StyledCompanyLocationBox>
              {companyData?.location}
            </StyledCompanyLocationBox>
          </div>
          <StyledButtonMain>
            <a href={companyData?.apply}>Apply Now</a>
          </StyledButtonMain>
        </StyledShortInfoBox>

        <StyledLargeDescBox>
          <p>{companyData?.description}</p>
        </StyledLargeDescBox>

        <StyledRequirementsBox>
          <h3>Requirements</h3>
          <p>{companyData?.requirements.content}</p>
          <StyledUl>
            {companyData?.requirements.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </StyledUl>
        </StyledRequirementsBox>

        <StyledWorkDutiesBox>
          <h3>What You Will Do</h3>
          <p>{companyData?.role.content}</p>
          <StyledOl>
            {companyData?.role.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </StyledOl>
        </StyledWorkDutiesBox>
      </StyledCompanyDetailDescContainer>
      <CardDetailedFooter>
        <div>
          <StyledFooterCompanyInfo>
            <h3>{companyData?.position}</h3>
            <span>{companyData?.company}</span>
          </StyledFooterCompanyInfo>
          <StyledButtonMain>
            <a href={companyData?.apply}>Apply Now</a>
          </StyledButtonMain>
        </div>
      </CardDetailedFooter>
    </StyledCompanyDetailPageContainer>
  ) : (
    <StyledErrorMessage>
      Data loading error :c
      <StyledButtonMain
        paddingx="1.2rem"
        paddingy="1.2rem"
        onClick={() => toMainPage("/")}
      >
        Return to main page
      </StyledButtonMain>
    </StyledErrorMessage>
  );
};
