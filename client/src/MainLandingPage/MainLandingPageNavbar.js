import "../CSS/MainLandingPage.css";
import { NavLink } from "react-router-dom";
import MainPageSearch from "./MainPageSearch";

function MainLandingPageNavbar({ onHandleSearchResults, onGetData }) {
  return (
    <div className="navbar-header-landing-page">
      <div className="navbar-main-landing-page">
        <MainPageSearch
          onHandleSearch={onHandleSearchResults}
          onGetData={onGetData}
        />
        <NavLink to="/login">
          <p className="navbar-elem">Log In</p>
        </NavLink>
        <NavLink to="/create">
          <p className="navbar-elem">Create Acct</p>
        </NavLink>
      </div>
    </div>
  );
}

export default MainLandingPageNavbar;
