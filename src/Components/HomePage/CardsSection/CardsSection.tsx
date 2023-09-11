import React, { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "./Card";

import { StyledButtonMain } from "../../_shared/ButtonsAndMisc.css";
import { StyledCardsSectionContainer } from "./CardsSection.css";

export const CardsSection = () => {
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
        return <Card key={key} company={company} />;
      })}
      {visibleCompanies < companies.length && (
        <StyledButtonMain onClick={showMore} paddingX="3rem" paddingY="1.6rem">
          Load More
        </StyledButtonMain>
      )}
    </StyledCardsSectionContainer>
  );
};
