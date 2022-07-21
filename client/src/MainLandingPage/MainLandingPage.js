import { useState } from "react";
import NavbarHeader from "../UI/NavbarHeader";
import "../CSS/MainLandingPage.css";
import Navbar from "../Navbar";

function MainLandingPage() {
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
    </div>
  );
}

export default MainLandingPage;

