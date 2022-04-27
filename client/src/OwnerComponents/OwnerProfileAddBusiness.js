import { useState } from "react";

function OwnerProfileAddBusiness({
  owner,
  handleCancel,
  onAddAttribute,
  setAddBusiness,
}) {
  const [business, setBusinessName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/owners/${owner.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        business,
        website: business.toLowerCase().split(" ").join("-"),
      }),
    })
      .then((resp) => resp.json())
      .then((data) => onAddAttribute("business", data.business))

      .then(setAddBusiness(false));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="owner-profile-form-inputs">
        <input
          className="input-create-account"
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

export default OwnerProfileAddBusiness;
