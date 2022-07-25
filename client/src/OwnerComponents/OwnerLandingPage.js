import { useEffect, useState } from "react";
import OwnerAddress from "./OwnerAddress";
import { BsFillLightbulbFill } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";

import "../CSS/OwnerLandingPage.css";
// import "../UI/Navbar.css"
import styles from "../Navbar.module.css";
import OwnerProfile from "./OwnerProfile";
import Sidebar from "./Sidebar";
import OwnerLandingPageDashboard from "./OwnerLandingPageDashboard";
import OwnerWarningPage from "./OwnerWarningPage";
import OwnerReviewsList from "./OwnerReviewsList";
import NavbarHeader from "../UI/NavbarHeader";


function OwnerLandingPage({ loggedInUser }) {
  const [address, setAddress] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);
  const [landingPageContainer, setLandingPageContainer] = useState(true);
  const [ownerProfile, setOwnerProfile] = useState(false);
  const [ownerWarning, setOwnerWarning] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`owners/${loggedInUser.id}/reviews`)
      .then((r) => r.json())
      .then((data) => setReviews(data));
  }, []);

  const componentWithName = [
    {
      comp: setLandingPageContainer,
      clickName: "Dashboard",
      icon: <BsHouse />
    },
    {
      comp: setAddress,
      clickName: "Address",
    },
    {
      comp: setOpenReviews,
      clickName: "Your Reviews",
      icon: <BsPeople />
    },
    {
      comp: setOwnerProfile,
      clickName: "Profile",
      icon: <BsPerson />
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
      <div className="landing-page-container-home">
        <NavbarHeader style={styles.navbar}>
          
          <h1>LightBulb</h1>
        </NavbarHeader>
        <div className="con">
          <Sidebar
            onHandlePageView={handleViews}
            components={componentWithName}
            setOwnerWarning={setOwnerWarning}
          />
          <div className="options-container">
            {landingPageContainer && (
              <OwnerLandingPageDashboard loggedInUser={loggedInUser} />
            )}
            {address && <OwnerAddress loggedInUser={loggedInUser} />}
            {openReviews && (
              <OwnerReviewsList
                reviews={reviews}
                // onDeleteReview={setReviews}
                onSetListOfReviews={setReviews}
              />
            )}
            {ownerProfile && (
              <OwnerProfile
                owner={loggedInUser}
                image={loggedInUser.image || undefined}
              />
            )}
            {ownerWarning && <OwnerWarningPage loggedInUser={loggedInUser} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerLandingPage;
