import "./CSS/App.css";
import { Link } from "react-router-dom";

function CreateAccountSuccess() {
  return (
    <div className="success-message">
      <h2>
        Thank you for signing up! <br />
        Please click
        <Link to="/login"> here</Link> to login.
      </h2>
    </div>
  );
}

export default CreateAccountSuccess;
