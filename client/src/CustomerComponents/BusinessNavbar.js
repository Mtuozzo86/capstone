import "../CSS/BusinessFound.css";
import "../CSS/Navbar.css";
import "../CSS/App.css";
import { Link } from "react-router-dom";
import About from "./About";

function BusinessNavbar({ bio, urlParam }) {
  return (
    <div className="business-navbar">
      <Link to="/:business/about" element={<About />}>
        About
      </Link>
      {/* <div>About</div> */}
      <div>Contact</div>
      <div>Schedule</div>
    </div>
  );
}
export default BusinessNavbar;
