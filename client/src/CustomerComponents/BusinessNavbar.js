import "../CSS/BusinessFound.css";
import "../CSS/Navbar.css";
import "../CSS/App.css";
import { Link } from "react-router-dom";

function BusinessNavbar({ bio, urlParam }) {
  return (
    <div className="business-navbar">
      <Link to="about">About</Link>
      <div>Contact</div>
      <div>Schedule</div>
    </div>
  );
}
export default BusinessNavbar;
