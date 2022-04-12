import { useState } from "react";

function OwnerProfileAddOccupation({
  owner,
  onCancelAddOccupation,
  onAddOccupation,
}) {
  const [occupation, setOccupation] = useState("");
  console.log(occupation);

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
      .then((data) => onAddOccupation(data.occupation));
  }

  function handleCancel(off) {
    onCancelAddOccupation(off);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="owner-profile-form-inputs">
        <input
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
            <button onClick={handleCancel} className="business-submit-button">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OwnerProfileAddOccupation;
