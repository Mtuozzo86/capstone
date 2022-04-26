import { useState, useEffect } from "react";
import "../CSS/MainLandingPage.css";
import MainLandingPageNavbar from "../MainLandingPage/MainLandingPageNavbar";
import MainPageSearch from "../MainLandingPage/MainPageSearch";
import SearchResults from "./SearchResults";

function MainLandingPage() {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState("");
  console.log(results, searched);

  let searchResults = results.filter((person) => {
    return (
      person.business.toLowerCase().includes(searched.toLowerCase()) ||
      person.occupation.toLowerCase().includes(searched.toLowerCase())
    );
  });

  console.log(searchResults);

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
