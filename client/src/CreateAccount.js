import "./CreateAccount.css";
import { useState } from "react";

function CreateAccount() {
  const [owner, setOwner] = useState({
    email: "",
    password: "",
    password_confirmation: "",
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
          name="email"
          type="text"
          placeholder="Email"
          value={owner.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={owner.password}
          onChange={handleChange}
        />

        <input
          name="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          value={owner.password_confirmation}
          onChange={handleChange}
        />

        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateAccount;
