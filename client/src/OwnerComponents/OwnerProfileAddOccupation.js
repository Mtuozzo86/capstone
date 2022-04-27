import { useState } from "react";

function OwnerProfileAddOccupation({
  owner,
  handleCancel,
  onAddOccupation,
  setAddOwnerOccupation,
}) {
  const [occupation, setOccupation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/owners/${owner.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ occupation }),
    })
      .then((resp) => resp.json())
      .then((data) => onAddOccupation("occupation", data.occupation))
      .then(setAddOwnerOccupation(false));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="owner-profile-form-inputs">
        <input
          className="input-create-account"
          name="occupation"
          type="text"
          placeholder="Enter occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
        <div>
          <div>
            <button type="submit" className="business-submit-button">
              Submit
            </button>
            <button
              onClick={() => handleCancel(false)}
              className="business-submit-button"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OwnerProfileAddOccupation;
