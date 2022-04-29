import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

function MainPageSearch({ onHandleSearch, onGetData }) {
  const [searched, setSearched] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const searchFalse = "main-landing-page-search-input-box-hidden";
  const searchTrue = "main-landing-page-search-input-box";

  function handleSubmit(e) {
    e.preventDefault();
    if (searched.trim() === "") {
      return;
    }

    fetch("/owners")
      .then((resp) => resp.json())
      .then((data) => onGetData(data));
    onHandleSearch(searched);
  }

  function handleSearchButton() {
    setButtonClicked((buttonClicked) => !buttonClicked);
  }

  return (
    <form className="search-feature" onSubmit={handleSubmit}>
      <div className={buttonClicked ? "box" : "box-unclicked"}>
        <BiSearchAlt2
          className="magnifying-glass"
          size={20}
          onClick={handleSearchButton}
        />

        <input
          onChange={(e) => setSearched(e.target.value)}
          className={buttonClicked ? searchTrue : searchFalse}
          type="text"
          value={searched}
        />
      </div>
    </form>
  );
}

export default MainPageSearch;
