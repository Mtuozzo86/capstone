import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function OwnerLandingPageDashboard({ loggedInUser }) {
  useEffect(() => {
    fetch(`owners/${loggedInUser.id}`)
      .then((resp) => resp.json())
      .then((user) => setUrl(user.website));
  });
  const [url, setUrl] = useState("");

  return (
    <div className="landing-page-container-dashboard">
      <div className="landing-page-user-info-container">
        <div></div>
        <div className="user-info-name">{loggedInUser.first_name}</div>
        <p>Appointments:</p>
        <p>Customers:</p>
      </div>

      <div className="landing-page-user-info-website">
        <p>
          Go to the profile tab and add the name of your business. It will
          create a custom link you can copy to advertise anywhere you like.
        </p>
        <Link to={`/business/${url}`}>/business/{url}</Link>
      </div>
    </div>
  );
}

export default OwnerLandingPageDashboard;
