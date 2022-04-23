import { useState, useEffect } from "react";
import "./CSS/MainLandingPage.css";
import MainLandingPageNavbar from "./MainLandingPageNavbar";

function MainLandingPage() {
  const [searched, setSearched] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/owners")
      .then((resp) => resp.json())
      .then((data) => setResults(data));
  }

  const searchResults = results.filter((result) => {
    return;
  });

  return (
    <div className="main-landing-page-container">
      <MainLandingPageNavbar />

      <div className="main-landing-page-items">
        <div className="item">
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setSearched(e.target.value)}
              className="main-landing-page-search"
              type="text"
            />
          </form>
        </div>
        <div className="item"></div>
      </div>
    </div>
  );
}

export default MainLandingPage;
