import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import axios from "axios";

import {
  StyledCompanyDetailPageContainer,
  StyledCompanyDetailedHeader,
  StyledErrorMessage,
} from "./CompanyDetailPage.css";
import { StyledButtonMain } from "../_shared/ButtonsAndMisc.css";

export const CompanyDetailPage = () => {
  const toMainPage = useNavigate();

  const [companyData, setCompanyData] = useState(null);

  const findCompanyById = (data: any, companyId: string) => {
    return data.find((company: any) => company.id === parseInt(companyId));
  };

  useEffect(() => {
    const companyIdFromLocalStorage = localStorage.getItem("CompanyID");

    axios.get("/data.json").then((res) => {
      const company = findCompanyById(res.data, companyIdFromLocalStorage);
      setCompanyData(company || null);
    });
  }, []);

  return companyData ? (
    <StyledCompanyDetailPageContainer>
      <StyledCompanyDetailedHeader>HEAD</StyledCompanyDetailedHeader>
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
