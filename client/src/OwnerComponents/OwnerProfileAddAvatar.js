import { useState } from "react";

function OwnerProfileAddAvatar({
  handleCancel,
  owner,
  onAddAttribute,
  setAddOwnerAvatar,
}) {
  const [image, setImage] = useState("");
  // function handleCancel(cancel) {
  //   onHandleCancel(cancel);
  // }

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
      .then((avatar) => {
        onAddAttribute("image", avatar.image);
      })
      .then(setAddOwnerAvatar(false));
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

export default OwnerProfileAddAvatar;
