import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-header">
      <Link to="/">
        <p className="title">I Know A Guy</p>
      </Link>

      <div className="navbar">
        <Link to="/login">
          <p>Log In</p>
        </Link>
        <Link to="/create">
          <p>Create Acct</p>
        </Link>

        <p>
          <BsSearch />
        </p>
      </div>
    </div>
  );
}

export default Navbar;
