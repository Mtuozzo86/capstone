import { useState } from "react";
import { FaAddressCard, FaClock } from "react-icons/fa";
import CreateOwnerAddress from "./OwnerForms/CreateOwnerAddress";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./OwnerLandingPage.css";

function OwnerLandingPage({ loggedInUser }) {
  console.log(loggedInUser);
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    });
  }

  const [edit, setIsEditting] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  function handleAddressClick() {
    setIsEditting((edit) => !edit);
    setOpenCalendar(false);
  }

  function handleCalenderClick() {
    setIsEditting(false);
    setOpenCalendar((openCalender) => !openCalender);
  }

  return (
    <>
      <div className="landing-page-container-home">
        <div className="react-icons">
          <li onClick={handleAddressClick}>
            <FaAddressCard />
          </li>
          <li onClick={handleCalenderClick}>
            <FaClock />
          </li>
        </div>
        {loggedInUser.first_name}

        {edit ? <CreateOwnerAddress loggedInUser={loggedInUser} /> : null}
        <div className="calendar">{openCalendar ? <Calendar /> : null}</div>
      </div>
    </>
  );
}

export default OwnerLandingPage;
