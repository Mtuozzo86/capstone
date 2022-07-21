import { NavLink } from "react-router-dom";
// import "./CSS/MainLandingPage.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>LightBulb</h1>
      <div className="navbar-links">
        {" "}
        <NavLink to="/login">
          <p>Log In</p>
        </NavLink>
        <NavLink to="/create">
          <p>Create Acct</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
