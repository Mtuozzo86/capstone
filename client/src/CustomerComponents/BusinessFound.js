import { Routes, Route } from "react-router-dom";
import BusinessNavbar from "./BusinessNavbar";
import "../CSS/BusinessFound.css";
import CustomerLandingPage from "./CustomerLandingPage";
import About from "./About";
import Contact from "./Contact";
import CalendarTest from "../CalendarTest";
import Footer from "./Footer";

function BusinessFound({ companyInfo }) {
  console.log(companyInfo);

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
        <Route
          path={`schedule`}
          element={<CalendarTest ownerId={companyInfo.id} booked={companyInfo.appointments}/>}
        />
      </Routes>

      <Footer business={companyInfo} />
    </div>
  );
}

export default BusinessFound;
