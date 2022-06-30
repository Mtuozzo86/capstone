import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function OwnerLandingPageDashboard({ loggedInUser }) {
  useEffect(() => {
    fetch(`owners/${loggedInUser.id}`)
      .then((resp) => resp.json())
      .then((user) => {
        setUrl(user.website);
      });
  }, [loggedInUser.id]);
  const [url, setUrl] = useState("");

  return (
    <div className="landing-page-container-dashboard">
      <div className="landing-page-user-info-container">
        <div></div>
        <div className="user-info-name">{loggedInUser.first_name}</div>
        <p>Appointments:</p>
        <p>Customers: {loggedInUser.clients.length}</p>
      </div>

      <div className="landing-page-user-info-website">
        <p>
          Go to the profile tab and add the name of your business. It will
          create a custom link you can copy to advertise anywhere you like.
        </p>
        <h2 style={{ marginTop: "20px" }}>
          <Link to={`/business/${url}`}>www.{`business/${url}`}.com</Link>
        </h2>
      </div>
    </div>
  );
}

export default OwnerLandingPageDashboard;
