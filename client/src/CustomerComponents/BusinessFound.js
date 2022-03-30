import { Routes, Route } from "react-router-dom";
import BusinessNavbar from "./BusinessNavbar";
import "../CSS/BusinessFound.css";

function BusinessFound({ companyInfo }) {
  console.log(companyInfo);

  return (
    <div className="business-found">
      <BusinessNavbar />
      <div className="business-found-company-name">
        <h1>{companyInfo.business}</h1>
      </div>
      <div></div>
    </div>
  );
}

export default BusinessFound;
