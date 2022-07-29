import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarHeader from "./UI/NavbarHeader";

function PleaseLoginScreen() {
  return (
    <div className="main-landing-page-container">
      <NavbarHeader><Navbar /></NavbarHeader>
      
      <h2>
        Sorry, please{" "}
        <Link style={{ color: "blue" }} to="/login">
          login
        </Link>{" "}
        to use service
      </h2>
    </div>
  );
}

export default PleaseLoginScreen;
