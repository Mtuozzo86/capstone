import { Link } from "react-router-dom";

function PleaseLoginScreen() {
  return (
    <h1>
      Sorry, please <Link to="/login">login</Link> to use service
    </h1>
  );
}

export default PleaseLoginScreen;
