import { useState } from "react";

function OwnerProfileAddAvatar({ onHandleCancel, owner, onAddAvatar }) {
  const [image, setImage] = useState("");
  function handleCancel(cancel) {
    onHandleCancel(cancel);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/owners/${owner.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ image }),
    })
      .then((resp) => resp.json())
      .then((resp) => onAddAvatar(resp.image));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="owner-profile-form-inputs">
        <input
          name="avatar"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
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

export default OwnerProfileAddAvatar;
