import { useState } from "react";
import NavbarHeader from "../UI/NavbarHeader";
import "../CSS/MainLandingPage.css";
import Navbar from "../Navbar";

function MainLandingPage({loggedInUser}) {
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState("");

  const searchResults = data.filter((each) => {
    return (
      each.business.toLowerCase().includes(searched.toLowerCase()) ||
      each.occupation.toLowerCase().includes(searched.toLowerCase())
    );
  });

  return (
    <div className="main-landing-page-container">
      <NavbarHeader>
        <Navbar />
      </NavbarHeader>
        {loggedInUser && <h3>{`Hello, ${loggedInUser.first_name}`}</h3>}
    </div>
  );
}

export default MainLandingPage;
        

