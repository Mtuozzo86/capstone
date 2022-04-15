import { useParams, Routes, Route } from "react-router-dom";
import { useState } from "react";
import BusinessNavbar from "./BusinessNavbar";
import "../CSS/BusinessFound.css";
import CustomerLandingPage from "./CustomerLandingPage";
import About from "./About";

function BusinessFound({ companyInfo, urlParam }) {
  return (
    <div className="business-found">
      <BusinessNavbar urlParam={urlParam} />

      <Routes>
        <Route
          index
          element={<CustomerLandingPage companyInfo={companyInfo} />}
        />
        <Route path={`about`} element={<About bio={companyInfo.biography} />} />
      </Routes>
    </div>
  );
}

export default BusinessFound;
