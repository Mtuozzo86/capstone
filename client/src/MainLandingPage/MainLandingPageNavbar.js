import "../CSS/MainLandingPage.css";

import { NavLink } from "react-router-dom";

function MainLandingPageNavbar() {
  return (
    <div className="navbar-header-landing-page">
      <div className="navbar-main-landing-page">
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
