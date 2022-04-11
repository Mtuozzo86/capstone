import { Routes, Route } from "react-router-dom";
import BusinessNavbar from "./BusinessNavbar";
import "../CSS/BusinessFound.css";

function BusinessFound({ companyInfo }) {
  const fullName = companyInfo.first_name + " " + companyInfo.last_name;

  return (
    <div className="business-found">
      <BusinessNavbar />
      <div className="business-found-company-name">
        <h1>{companyInfo.business}</h1>
      </div>
      <div className="business-found-owner">
        <img
          className="profile-picture"
          src={companyInfo.image}
          alt="Profile picture"
        />
        <div className="profile-name">{fullName}</div>
      </div>
    </div>
  );
}

export default BusinessFound;
