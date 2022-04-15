import { useParams, Routes, Route } from "react-router-dom";
import { useState } from "react";
import BusinessNavbar from "./BusinessNavbar";
import "../CSS/BusinessFound.css";
import CustomerLandingPage from "./CustomerLandingPage";
import About from "./About";

function BusinessFound({ companyInfo, urlParam }) {
  return (
    <div className="business-found">
      <BusinessNavbar bio={companyInfo.biography} urlParam={urlParam} />
      <Routes>
        <Route path={`about`} element={<About />} />
      </Routes>
    </div>
  );
}

export default BusinessFound;
