import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OwnerAddress from "./OwnerAddress";
import Navbar from "../Navbar";
import "../CSS/OwnerLandingPage.css";
import CalenderTest from "../CalenderTest";
import OwnerProfile from "./OwnerProfile";

function OwnerLandingPage({ loggedInUser }) {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(navigate("/"));
  }

  const [edit, setIsEditting] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [landingPageContainer, setLandingPageContainer] = useState(true);
  const [ownerProfile, setOwnerProfile] = useState(false);

  function handleViews(component) {
    let arrayOfComponents = [
      setIsEditting,
      setOpenCalendar,
      setLandingPageContainer,
      setOwnerProfile,
    ];
    arrayOfComponents.filter((setState) => {
      if (setState === component) {
        return setState(true);
      } else {
        return setState(false);
      }
    });
  }

  return (
    <div className="landing-page-wrapper">
      <div className="sidebar">
        <div className="sidebar-nav">
          <li onClick={() => handleViews(setLandingPageContainer)}>
            Dashboard
          </li>
          <li onClick={() => handleViews(setIsEditting)}>Address</li>
          <li onClick={() => handleViews(setOpenCalendar)}>Calendar</li>
          <li onClick={() => handleViews(setOwnerProfile)}>Profile</li>
        </div>
        <li onClick={handleLogout} className="sidebar-logout">
          Log out
        </li>
      </div>
      <div className="landing-page-container-home">
        <Navbar />

        {landingPageContainer ? (
          <div className="landing-page-user-info-container">
            <div className="user-info-name">{loggedInUser.first_name}</div>
            <p>Appointments:</p>
            <p>Customers:</p>
          </div>
        ) : null}
        {edit ? <OwnerAddress loggedInUser={loggedInUser} /> : null}
        {openCalendar ? <CalenderTest /> : null}
        {ownerProfile ? <OwnerProfile owner={loggedInUser} /> : null}
      </div>
      test
    </div>
  );
}

export default OwnerLandingPage;
