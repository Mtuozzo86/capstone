import { useParams, Routes, Route } from "react-router-dom";
import { useState } from "react";
import BusinessNavbar from "./BusinessNavbar";
import "../CSS/BusinessFound.css";
import CustomerLandingPage from "./CustomerLandingPage";
import About from "./About";
import Contact from "./Contact";
import CalendarTest from "../CalendarTest";

function BusinessFound({ companyInfo }) {
  return (
    <div className="business-found">
      <BusinessNavbar />

      <Routes>
        <Route
          index
          element={<CustomerLandingPage companyInfo={companyInfo} />}
        />
        <Route path={`about`} element={<About bio={companyInfo.biography} />} />
        <Route
          path={`contact`}
          element={<Contact companyInfo={companyInfo} />}
        />
        <Route path={`schedule`} element={<CalendarTest />} />
      </Routes>
    </div>
  );
}

export default BusinessFound;
