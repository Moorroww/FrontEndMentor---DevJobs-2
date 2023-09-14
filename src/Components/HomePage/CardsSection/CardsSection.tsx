import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { SearchContext } from "../HomePage";

import { Card } from "./Card";

import { StyledButtonMain } from "../../_shared/ButtonsAndMisc.css";
import { StyledCardsSectionContainer } from "./CardsSection.css";

export const CardsSection = () => {
  const { searchFilter } = useContext(SearchContext) as {
    searchFilter: {
      mainSearch: string;
      locationSearch: string;
      contractType: string;
    };
  };
  const [companies, setCompanies] = useState([]);
  const [visibleCompanies, setVisibleCompanies] = useState(12);

  useEffect(() => {
    axios.get("/data.json").then((res) => {
      setCompanies(res.data);
    });
  }, []);

  const showMore = () => {
    setVisibleCompanies((prevVisibleCompanies) => prevVisibleCompanies + 12);
  };

  return (
    <StyledCardsSectionContainer>
      {companies.slice(0, visibleCompanies).map((company, key) => {
        if (
          company.position.includes(searchFilter.mainSearch) &&
          company.location.includes(searchFilter.locationSearch) &&
          company.contract.includes(searchFilter.contractType)
        ) {
          return <Card key={key} company={company} />;
        }
      })}
      {visibleCompanies < companies.length && (
        <StyledButtonMain onClick={showMore} paddingx="3rem" paddingy="1.6rem">
          Load More
        </StyledButtonMain>
      )}
    </StyledCardsSectionContainer>
  );
};
