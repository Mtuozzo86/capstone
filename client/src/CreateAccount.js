import "./CreateAccount.css";
import { useState } from "react";

function CreateAccount() {
  const [owner, setOwner] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    occupation: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/owners", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        owner,
      }),
    });
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setOwner({
      ...owner,
      [name]: value,
    });
  }

  return (
    <div className="create-form-container">
      <form onSubmit={handleSubmit}>
        <input
          name="occupation"
          type="text"
          placeholder="Occupation"
          value={owner.occupation}
          onChange={handleChange}
        />
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={owner.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={owner.email}
          onChange={handleChange}
        />
        <input
          name="website"
          type="text"
          placeholder="Website"
          value={owner.website}
          onChange={handleChange}
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={owner.phone}
          onChange={handleChange}
        />
        <input type="text" placeholder="Street Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="ZIP/Postal" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateAccount;
