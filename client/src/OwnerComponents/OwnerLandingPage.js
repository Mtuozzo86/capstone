import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OwnerAddress from "./OwnerAddress";
import Navbar from "../Navbar";
import "../CSS/OwnerLandingPage.css";
import CalenderTest from "../CalenderTest";
import OwnerProfile from "./OwnerProfile";
import Sidebar from "./Sidebar";

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
  const setState = [
    setIsEditting,
    setOpenCalendar,
    setLandingPageContainer,
    setOwnerProfile,
  ];

  function handleViews(component) {
    console.log(setState);
    // let arrayOfComponents = [
    //   setIsEditting,
    //   setOpenCalendar,
    //   setLandingPageContainer,
    //   setOwnerProfile,
    // ];

    setState.filter((setState) => {
      if (setState === component) {
        return setState(true);
      } else {
        return setState(false);
      }
    });
  }

  // function handleView(component) {
  //   console.log(component);
  // }

  return (
    <div className="landing-page-wrapper">
      <Sidebar onHandlePageView={handleViews} components={setState} />
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
    </div>
  );
}

export default OwnerLandingPage;
