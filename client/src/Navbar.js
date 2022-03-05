import "./Navbar.css";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar-header">
      <p>I Know A Guy</p>
      <div className="navbar">
        <p>Log In</p>
        <p>Create Acct</p>
        <p>
          <BsSearch />
        </p>
      </div>
    </div>
  );
}

export default Navbar;
