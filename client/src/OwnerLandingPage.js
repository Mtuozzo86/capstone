import { useState } from "react";
import OwnerAddress from "./OwnerAddress";
import Calendar from "react-calendar";
import Navbar from "./Navbar";
import "react-calendar/dist/Calendar.css";
import "./CSS/OwnerLandingPage.css";

function OwnerLandingPage({ loggedInUser }) {
  console.log(loggedInUser);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    });
  }

  const [edit, setIsEditting] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [landingPageContainer, setLandingPageContainer] = useState(true);

  function handleAddressClick() {
    setIsEditting(true);
    setOpenCalendar(false);
    setLandingPageContainer(false);
  }

  function handleCalenderClick() {
    setIsEditting(false);
    setOpenCalendar(true);
    setLandingPageContainer(false);
  }

  function handleOwnerClick() {
    setLandingPageContainer(true);
    setOpenCalendar(false);
    setIsEditting(false);
  }

  return (
    <div className="landing-page-wrapper">
      <div className="sidebar">
        <li onClick={handleOwnerClick}>Dashboard</li>
        <li onClick={handleAddressClick}>Address</li>
        <li onClick={handleCalenderClick}>Calendar</li>
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
        {openCalendar ? <Calendar /> : null}
      </div>
    </div>
  );
}

export default OwnerLandingPage;
