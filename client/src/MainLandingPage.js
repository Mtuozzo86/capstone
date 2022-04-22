import Navbar from "./Navbar";
import "./CSS/MainLandingPage.css";
import MainLandingPageNavbar from "./MainLandingPageNavbar";

function MainLandingPage() {
  return (
    <div className="main-landing-page-container">
      <MainLandingPageNavbar />

      <div className="main-landing-page-items">
        <div className="item">
          <input className="main-landing-page-search" type="text" />
        </div>
        <div className="item">
          <h4>Browse</h4>
        </div>
      </div>
    </div>
  );
}

export default MainLandingPage;
