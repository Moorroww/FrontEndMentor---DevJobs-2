import React, { useEffect, useState } from "react";

import { Card } from "./Card";

import { StyledCardsSectionContainer } from "./CardsSection.css";
import axios from "axios";

export const CardsSection = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((res) => {
      setCompanies(res.data);
    });
  }, []);

  return (
    <StyledCardsSectionContainer>
      {companies.map((company, key) => {
        return <Card key={key} company={company} />;
      })}
    </StyledCardsSectionContainer>
  );
};
