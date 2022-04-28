import { FaBeer } from "react-icons/fa";
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
    <form onSubmit={handleSubmit}>
      <i class={<FaBeer />}>
        <FaBeer />
      </i>
      <input
        onChange={(e) => setSearched(e.target.value)}
        className="main-landing-page-search"
        type="text"
        value={searched}
      />
      <FaBeer />
    </form>
  );
}

export default MainPageSearch;
