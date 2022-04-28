import { useState } from "react";

function MainPageSearch({ onGetData, onHandleSearch }) {
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
