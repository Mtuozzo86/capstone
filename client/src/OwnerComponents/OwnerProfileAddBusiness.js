import { useState } from "react";

function OwnerProfileAddBusiness({
  owner,
  onCancelAddBusiness,
  onAddBusiness,
}) {
  const [business, setBusinessName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/owners/${owner.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ business }),
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
          name="business"
          type="text"
          placeholder="Enter business"
          value={business}
          onChange={(e) => setBusinessName(e.target.value)}
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

export default OwnerProfileAddBusiness;
