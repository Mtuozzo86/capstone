import { useState } from "react";
import "../CSS/MainLandingPage.css";
import MainLandingPageNavbar from "../MainLandingPage/MainLandingPageNavbar";
import MainPageSearch from "../MainLandingPage/MainPageSearch";
import SearchResults from "./SearchResults";

function MainLandingPage() {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState("");

  const searchResults = results.filter((result) => {
    return (
      result.business.toLowerCase().includes(searched.toLowerCase()) ||
      result.occupation.toLowerCase().includes(searched.toLowerCase())
    );
  });

  return (
    <div className="main-landing-page-container">
      <MainLandingPageNavbar />

      <div className="main-landing-page-items">
        <div className="item">
          <MainPageSearch onSearch={setResults} onHandleSearch={setSearched} />
        </div>
        <div className="item">
          <SearchResults results={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default MainLandingPage;
