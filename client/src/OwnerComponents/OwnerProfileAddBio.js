import { useState } from "react";

function OwnerProfileAddBio({ owner, handleCancel, onAddBio, setAddOwnerBio }) {
  const [biography, setBio] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/owners/${owner.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ biography }),
    })
      .then((resp) => resp.json())
      .then((info) => onAddBio("biography", info.biography))
      .then(setAddOwnerBio(false));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="owner-profile-form-inputs">
        <input
          className="input-create-account"
          name="bio"
          type="text"
          placeholder="Say something about yourself"
          value={biography}
          onChange={(e) => setBio(e.target.value)}
        />
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
      </form>
    </div>
  );
}

export default OwnerProfileAddBio;
