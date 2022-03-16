import { useState } from "react";
import { FaClock } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import CreateOwnerAddress from "./OwnerForms/CreateOwnerAddress";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./OwnerLandingPage.css";

function OwnerLandingPage({ loggedInUser }) {
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
    <>
      <div className="landing-page-container-home">
        <div className="sidebar">
          <li onClick={handleOwnerClick}>Dashboard</li>
          <li onClick={handleAddressClick}>Address</li>
          <li onClick={handleCalenderClick}>Calendar</li>
        </div>

        {landingPageContainer ? (
          <div className="landing-page-user-info-container">
            <div className="user-info-name">{loggedInUser.first_name}</div>
            <p>Appointments:</p>
            <p>Customers:</p>
          </div>
        ) : null}

        {edit ? <CreateOwnerAddress loggedInUser={loggedInUser} /> : null}
        <div className="calendar">{openCalendar ? <Calendar /> : null}</div>
      </div>
    </>
  );
}

export default OwnerLandingPage;
