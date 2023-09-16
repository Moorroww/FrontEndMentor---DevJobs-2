import { Routes, Route, useLocation } from "react-router-dom";

import { CompanyDetailPage } from "../CompanyDetailPage/CompanyDetailPage";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { HomePage } from "../HomePage/HomePage";

import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="FrontEndMentor---DevJobs-2/"
          element={<HomePage />}
        ></Route>
        <Route
          path="FrontEndMentor---DevJobs-2/company-detailed-page"
          element={<CompanyDetailPage />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </AnimatePresence>
  );
};
