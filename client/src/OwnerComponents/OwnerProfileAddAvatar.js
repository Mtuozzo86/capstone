import { useState } from "react";

function OwnerProfileAddAvatar({
  handleCancel,
  owner,
  onAddAttribute,
  setAddOwnerAvatar,
}) {
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    fetch(`/owners/${owner.id}`, {
      method: "PATCH",
      body: formData,
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
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {/* <input
          name="avatar"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        /> */}
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
