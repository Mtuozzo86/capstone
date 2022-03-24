import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OwnerAddress from "./OwnerAddress";
import Calendar from "react-calendar";
import Navbar from "../Navbar";
import "react-calendar/dist/Calendar.css";
import "../CSS/OwnerLandingPage.css";

function OwnerLandingPage({ loggedInUser }) {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const clickedDate = date.toLocaleString();
  console.log(clickedDate);

  function handleCalender(test) {
    setDate(test);
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(navigate("/"));
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
        <div className="sidebar-nav">
          <li onClick={handleOwnerClick}>Dashboard</li>
          <li onClick={handleAddressClick}>Address</li>
          <li onClick={handleCalenderClick}>Calendar</li>
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
        {openCalendar ? <Calendar onChange={handleCalender} /> : null}
      </div>
    </div>
  );
}

export default OwnerLandingPage;
