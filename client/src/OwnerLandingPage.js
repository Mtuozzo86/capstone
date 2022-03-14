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
      <div className="container-home">
        <div className="react-icons">
          <li onClick={handleClick}>
            <FaAddressCard />
          </li>
          <li>
            <FaClock />
          </li>
        </div>
        {edit ? <CreateOwnerAddress loggedInUser={loggedInUser}/> : null}
      </div>
    </>
  );
}

export default OwnerLandingPage;
