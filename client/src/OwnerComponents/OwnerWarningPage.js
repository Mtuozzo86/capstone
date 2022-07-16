import { IoMdTrash } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function OwnerWarningPage({ loggedInUser }) {
  const navigate = useNavigate();
  function handleClick() {
    fetch(`/owners/${loggedInUser.id}`, {
      method: "DELETE",
    }).then(navigate("/"));
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
