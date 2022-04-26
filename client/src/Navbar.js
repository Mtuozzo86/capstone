import "./CSS/Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-header">
      <Link to="/">
        <p className="title">I Know A Guy</p>
      </Link>

      <div className="navbar">
        <Link to="/login">
          <p className="navbar-elem">Log In</p>
        </Link>
        <Link to="/create">
          <p className="navbar-elem">Create Acct</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
