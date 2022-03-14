import { useState } from "react";
import { FaClock } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import CreateOwnerAddress from "./OwnerForms/CreateOwnerAddress";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./OwnerLandingPage.css";

function OwnerLandingPage({ loggedInUser }) {
  console.log(loggedInUser.owner_addresses[0].street);
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
        <div className="react-icons">
          <li onClick={handleOwnerClick}>
            <BsFillPersonFill />
          </li>
          <li onClick={handleAddressClick}>
            <BsFillPersonLinesFill />
          </li>
          <li onClick={handleCalenderClick}>
            <FaClock />
          </li>
        </div>

        {landingPageContainer ? (
          <div className="landing-page-info-container">
            {loggedInUser.first_name}
            {loggedInUser.owner_addresses[0].street}
          </div>
        ) : null}

        {edit ? <CreateOwnerAddress loggedInUser={loggedInUser} /> : null}
        <div className="calendar">{openCalendar ? <Calendar /> : null}</div>
      </div>
    </>
  );
}

export default OwnerLandingPage;
