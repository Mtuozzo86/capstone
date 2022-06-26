import { useState } from "react";
import OwnerAddress from "./OwnerAddress";
import Navbar from "../Navbar";
import "../CSS/OwnerLandingPage.css";
import CalenderTest from "../CalendarTest";
import OwnerProfile from "./OwnerProfile";
import Sidebar from "./Sidebar";
import OwnerLandingPageDashboard from "./OwnerLandingPageDashboard";
import OwnerWarningPage from "./OwnerWarningPage";

function OwnerLandingPage({ loggedInUser }) {
  const [address, setAddress] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [landingPageContainer, setLandingPageContainer] = useState(true);
  const [ownerProfile, setOwnerProfile] = useState(false);
  const [ownerWarning, setOwnerWarning] = useState(false);

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
    {
      comp: setOwnerWarning,
      clickName: "",
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
      <Sidebar
        onHandlePageView={handleViews}
        components={componentWithName}
        setOwnerWarning={setOwnerWarning}
      />
      <div className="landing-page-container-home">
        <Navbar />

        {landingPageContainer && (
          <OwnerLandingPageDashboard loggedInUser={loggedInUser} />
        )}
        {address && <OwnerAddress loggedInUser={loggedInUser} />}
        {openCalendar && <CalenderTest />}
        {ownerProfile && (
          <OwnerProfile
            owner={loggedInUser}
            image={loggedInUser.image || undefined}
          />
        )}
        {ownerWarning && <OwnerWarningPage loggedInUser={loggedInUser} />}
      </div>
    </div>
  );
}

export default OwnerLandingPage;
