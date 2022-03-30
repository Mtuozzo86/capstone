import { useState } from "react";
import OwnerAddress from "./OwnerAddress";
import Navbar from "../Navbar";
import "../CSS/OwnerLandingPage.css";
import CalenderTest from "../CalenderTest";
import OwnerProfile from "./OwnerProfile";
import Sidebar from "./Sidebar";

function OwnerLandingPage({ loggedInUser }) {
  const [address, setAddress] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [landingPageContainer, setLandingPageContainer] = useState(true);
  const [ownerProfile, setOwnerProfile] = useState(false);

  const componentWithName = [
    {
      comp: setLandingPageContainer,
      clickName: "Dashboard",
    },
    {
      comp: setAddress,
      clickName: "Address",
    },
    {
      comp: setOpenCalendar,
      clickName: "Calendar",
    },
    {
      comp: setOwnerProfile,
      clickName: "Profile",
    },
  ];

  function handleViews(component) {
    componentWithName.filter((elem) => {
      if (elem.comp === component) {
        return elem.comp(true);
      } else {
        return elem.comp(false);
      }
    });
  }

  return (
    <div className="landing-page-wrapper">
      <Sidebar onHandlePageView={handleViews} components={componentWithName} />
      <div className="landing-page-container-home">
        <Navbar />

        {landingPageContainer ? (
          <div className="landing-page-user-info-container">
            <div className="user-info-name">{loggedInUser.first_name}</div>
            <p>Appointments:</p>
            <p>Customers:</p>
          </div>
        ) : null}
        {address ? <OwnerAddress loggedInUser={loggedInUser} /> : null}
        {openCalendar ? <CalenderTest /> : null}
        {ownerProfile ? <OwnerProfile owner={loggedInUser} /> : null}
      </div>
    </div>
  );
}

export default OwnerLandingPage;
