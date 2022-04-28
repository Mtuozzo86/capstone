import { useState, useEffect } from "react";
import "../CSS/MainLandingPage.css";
import MainLandingPageNavbar from "../MainLandingPage/MainLandingPageNavbar";
import SearchResults from "./SearchResults";

function MainLandingPage() {
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState("");

  const searchResults = data.filter((each) => {
    return (
      each.business.toLowerCase().includes(searched.toLowerCase()) ||
      each.occupation.toLowerCase().includes(searched.toLowerCase())
    );
  });

  console.log(searchResults);

  return (
    <div className="main-landing-page-container">
      <MainLandingPageNavbar
        onHandleSearchResults={setSearched}
        onGetData={setData}
      />
      <div className="main-landing-page-items">
        <div className="box-1"></div>
        <div className="box-2">
          <SearchResults results={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default MainLandingPage;
