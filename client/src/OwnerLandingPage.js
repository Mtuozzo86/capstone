import { useState } from "react";
import { FaAddressCard, FaClock } from "react-icons/fa";
import CreateOwnerAddress from "./OwnerForms/CreateOwnerAddress";

function OwnerLandingPage({ loggedInUser }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    });
  }

  const [edit, setIsEditting] = useState(false);

  function handleClick() {
    setIsEditting((edit) => !edit);
  }

  return (
    <>
      <div className="landing-page-container-home">
        <div className="react-icons">
          <li onClick={handleClick}>
            <FaAddressCard />
          </li>
          <li>
            <FaClock />
          </li>
        </div>

        <h3>
          Welcome to your portal. From here you can view your clients, schedule,
          employees, and be your own boss.
        </h3>
        {edit ? <CreateOwnerAddress loggedInUser={loggedInUser} /> : null}
      </div>
    </>
  );
}

export default OwnerLandingPage;
