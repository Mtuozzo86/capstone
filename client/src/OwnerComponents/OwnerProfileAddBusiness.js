import { useState, useEffect } from "react";

function OwnerProfileAddBusiness({ owner, onCancelAddBusiness, onAddBusiness }) {
  const [businessName, setBusinessName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/owners/${owner.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ businessName }),
    })
      .then((resp) => resp.json())
      .then((data) => onAddBusiness(data.business));
  }

  function handleCancel(off) {
    onCancelAddBusiness(off);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="owner-profile-form-inputs">
        <input
          name="street"
          type="text"
          placeholder="Enter business"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <button type="submit" className="business-submit-button">
          Submit
        </button>
        <button onClick={handleCancel} className="business-submit-button">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default OwnerProfileAddBusiness;
