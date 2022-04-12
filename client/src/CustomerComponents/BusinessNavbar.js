import "../CSS/BusinessFound.css";
import "../CSS/Navbar.css";
import "../CSS/App.css";
import { Link } from "react-router-dom";

function BusinessNavbar({ bio, urlParam }) {
  return (
    <div className="business-navbar">
      <div>About</div>
      <div>Contact</div>
      <div>Schedule</div>
    </div>
  );
}
export default BusinessNavbar;
