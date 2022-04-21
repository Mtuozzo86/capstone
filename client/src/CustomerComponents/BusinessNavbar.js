import "../CSS/BusinessFound.css";
import "../CSS/Navbar.css";
import "../CSS/App.css";
import { Link } from "react-router-dom";

function BusinessNavbar() {
  return (
    <div className="business-navbar">
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      <Link to="schedule">Schedule</Link>
    </div>
  );
}
export default BusinessNavbar;
