import { useEffect } from "react";
import { FaAddressCard, FaClock } from "react-icons/fa";

function OwnerLandingPage({ loggedInUser }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    });
  }

  return (
    <>
      <div className="container-home">
        <div className="react-icons">
          <li>
            <FaAddressCard />
          </li>
          <li>
            <FaClock />
          </li>
        </div>
      </div>
    </>
  );
}

export default OwnerLandingPage;
