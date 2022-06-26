import { useEffect } from "react";
import { IoMdTrash } from "react-icons/io";

function OwnerWarningPage({ loggedInUser }) {
  function handleClick() {
    fetch(`/owners/${loggedInUser.id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className="owner-warning-container">
      <p>
        To completely delete your information from our service, please click
        below
      </p>
      <div className="owner-warning-trash-icon">
        <IoMdTrash onClick={handleClick} />
      </div>
    </div>
  );
}

export default OwnerWarningPage;
