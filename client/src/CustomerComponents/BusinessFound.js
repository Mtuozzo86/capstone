import { useParams, Routes, Route } from "react-router-dom";
import BusinessNavbar from "./BusinessNavbar";
import "../CSS/BusinessFound.css";
import CustomerLandingPage from "./CustomerLandingPage";
import About from "./About";

function BusinessFound({ companyInfo, urlParam }) {
  const params = useParams();
  console.log(urlParam);

  return (
    <div className="business-found">
      <BusinessNavbar bio={companyInfo.biography} urlParam={urlParam} />

      <CustomerLandingPage companyInfo={companyInfo} />
    </div>
  );
}

export default BusinessFound;
