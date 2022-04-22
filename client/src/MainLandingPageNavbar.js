import "./CSS/MainLandingPage.css";

import { NavLink } from "react-router-dom";

function MainLandingPageNavbar() {
  return (
    <div className="navbar-header-landing-page">
      <div className="navbar-main-landing-page">
        <NavLink style={{ color: "black" }} to="/login">
          <p>Log In</p>
        </NavLink>
        <NavLink style={{ color: "black" }} to="/create">
          <p>Create Acct</p>
        </NavLink>
      </div>
    </div>
  );
}

export default MainLandingPageNavbar;
