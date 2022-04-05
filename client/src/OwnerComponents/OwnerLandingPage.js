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

  function handleAddressClick() {
    setOwnerProfile(false);
    setIsEditting(true);
    setOpenCalendar(false);
    setLandingPageContainer(false);
  }

  function handleCalenderClick() {
    setOwnerProfile(false);
    setIsEditting(false);
    setOpenCalendar(true);
    setLandingPageContainer(false);
  }

  function handleOwnerClick() {
    setOwnerProfile(false);
    setLandingPageContainer(true);
    setOpenCalendar(false);
    setIsEditting(false);
  }

  function handleOwnerProfileClick() {
    setOwnerProfile(true);
    setIsEditting(false);
    setOpenCalendar(false);
    setLandingPageContainer(false);
  }

  return (
    <div className="landing-page-wrapper">
      <div className="sidebar">
        <div className="sidebar-nav">
          <li onClick={handleOwnerClick}>Dashboard</li>
          <li onClick={handleAddressClick}>Address</li>
          <li onClick={handleCalenderClick}>Calendar</li>
          <li onClick={handleOwnerProfileClick}>Profile</li>
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
        {ownerProfile ? <OwnerProfile owner={loggedInUser}/> : null}
      </div>
    </div>
  );
}

export default OwnerLandingPage;
