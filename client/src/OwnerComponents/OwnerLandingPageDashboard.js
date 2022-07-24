import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function OwnerLandingPageDashboard({ loggedInUser }) {
  console.log(loggedInUser);

  useEffect(() => {
    fetch(`owners/${loggedInUser.id}`)
      .then((resp) => resp.json())
      .then((user) => {
        setUrl(user.business);
      });
  }, [loggedInUser.business]);
  const [url, setUrl] = useState("");

  // const parameterizedUrl = url.split(" ").join("-").toLocaleLowerCase();
  return (
    <>
      <div className="landing-page-user-info-container">
        <div></div>
        <div className="user-info-name">{loggedInUser.first_name}</div>
        <p>Appointments:</p>
        <p>Customers: </p>
      </div>

      <div className="landing-page-user-info-website">
        <p>
          Go to the profile tab and add the name of your business. It will
          create a custom link you can copy to advertise anywhere you like.
        </p>
        {url ? (
          <h2 style={{ marginTop: "20px" }}>
            <Link to={`/business/${url.split(" ").join("-").toLowerCase()}`}>
              {`business/${url.split(" ").join("-").toLowerCase()}`}.com
            </Link>
          </h2>
        ) : null}
      </div>
    </>
  );
}

export default OwnerLandingPageDashboard;
