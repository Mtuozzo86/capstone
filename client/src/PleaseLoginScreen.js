import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function PleaseLoginScreen() {
  return (
    <div className="main-landing-page-container">
      <Navbar />
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
