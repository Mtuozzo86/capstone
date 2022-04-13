import "../CSS/BusinessFound.css";
import "../CSS/Navbar.css";
import "../CSS/App.css";

function BusinessNavbar({ bio, urlParam, OnHandleClick }) {
  return (
    <div className="business-navbar">
      <div onClick={() => OnHandleClick("About")}>About</div>
      <div onClick={() => OnHandleClick("Contact")}>Contact</div>
      <div onClick={() => OnHandleClick("Schedule")}>Schedule</div>
    </div>
  );
}
export default BusinessNavbar;
