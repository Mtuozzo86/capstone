import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

function MainPageSearch({ onHandleSearch, onGetData }) {
  const [searched, setSearched] = useState("");

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

  return (
    <form className="search-feature" onSubmit={handleSubmit}>
      <div className="magnifying-glass">
        <BiSearchAlt2 />
      </div>
      <input
        onChange={(e) => setSearched(e.target.value)}
        className="main-landing-page-search"
        type="text"
        value={searched}
      />
    </form>
  );
}

export default MainPageSearch;
