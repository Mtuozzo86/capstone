import { useState, useEffect } from "react";
import "../CSS/MainLandingPage.css";
import MainLandingPageNavbar from "../MainLandingPage/MainLandingPageNavbar";
import MainPageSearch from "../MainLandingPage/MainPageSearch";
import SearchResults from "./SearchResults";

function MainLandingPage() {
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState("");

  let searchResults = data.filter((person) => {
    return (
      person.business.toLowerCase().includes(searched.toLowerCase()) ||
      person.occupation.toLowerCase().includes(searched.toLowerCase())
    );
  });

  return (
    <div className="main-landing-page-container">
      <MainLandingPageNavbar />

      <div className="main-landing-page-items">
        <div className="box-1">
          <MainPageSearch onGetData={setData} onHandleSearch={setSearched} />
        </div>
        <div className="box-2">
          <SearchResults results={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default MainLandingPage;
