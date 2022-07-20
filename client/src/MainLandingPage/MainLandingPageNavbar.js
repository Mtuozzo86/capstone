import "../CSS/MainLandingPage.css";
import { NavLink } from "react-router-dom";

function MainLandingPageNavbar({ onHandleSearchResults, onGetData }) {
  return (
    
      <div className="navbar-main-landing-page">
<h2>lightBulb</h2>
        <NavLink to="/login">
          <p className="navbar-elem">Log In</p>
        </NavLink>
        <NavLink to="/create">
          <p className="navbar-elem">Create Acct</p>
        </NavLink>
      </div>
    
  );
}

export default MainLandingPageNavbar;
