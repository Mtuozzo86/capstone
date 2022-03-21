import { useState } from "react";

function CreateOwnerAddress({ loggedInUser }) {
  console.log(loggedInUser);

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    setAddress({
      ...address,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/owner_addresses/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ address }),
    });
  }

  return (
    <>
      <div className="create-form-container">
        <form onSubmit={handleSubmit}>
          <input
            name="street"
            type="text"
            placeholder="Street"
            value={address.street}
            onChange={handleChange}
          />
          <input
            name="city"
            type="text"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
          />

          <input
            name="state"
            type="text"
            placeholder="State"
            value={address.state}
            onChange={handleChange}
          />

          <input
            name="zip"
            type="text"
            placeholder="Zip"
            value={address.zip}
            onChange={handleChange}
          />

          <br />
          <button type="submit" className="form-submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default CreateOwnerAddress;
