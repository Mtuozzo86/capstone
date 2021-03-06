import React from "react";

import { Routes, Route } from "react-router-dom";
import BusinessNavbar from "./BusinessNavbar";
import "../CSS/BusinessFound.css";
import CustomerLandingPage from "./CustomerLandingPage";
import About from "./About";
import Contact from "./Contact";
import CalendarTest from "../CalendarTest";
import Footer from "./Footer";

function BusinessFound({ companyInfo }) {
  return (
    <div className="business-found">
      <BusinessNavbar />

      <Routes>
        <Route
          index
          element={<CustomerLandingPage companyInfo={companyInfo} />}
        />
        <Route path={`about`} element={<About />} />
        <Route path={`contact`} element={<Contact />} />
        <Route
          path={`schedule`}
          element={
            <CalendarTest
              ownerId={companyInfo.id}
              booked={companyInfo.appointments}
            />
          }
        />
      </Routes>

      <Footer business={companyInfo} />
    </div>
  );
}

export default BusinessFound;
