import "./CSS/CreateAccount.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function CreateAccount() {
  const navigateToSuccessPage = useNavigate();
  const [errors, setErrors] = useState([]);

  // HANDLING SUCCUSSFUL ACCOUNT CREATION

  // HANDLING ERROR MESSAGES
  const errorMessages = errors.length > 0 && (
    <ul>
      {errors.map((error) => (
        <p className="errors" key={error}>
          {error}
        </p>
      ))}
    </ul>
  );

  const [owner, setOwner] = useState({
    first_name: "",
    last_name: "",
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
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then(() => navigateToSuccessPage("/thankyou"));
        setErrors([]);
      } else {
        resp.json().then((errors) => setErrors(errors.error));
      }
    });
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setOwner({
      ...owner,
      [name]: value,
    });
  }

  return (
    <div className="create-form-flex">
      <Navbar />
      <div className="create-form-container">
        <form className="login-signin" onSubmit={handleSubmit}>
          <div className="first-lastname">
            {" "}
            <input
              className="input-create-account"
              name="first_name"
              type="text"
              placeholder="First Name"
              value={owner.first_name}
              onChange={handleChange}
            />
            <input
              className="input-create-account"
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={owner.last_name}
              onChange={handleChange}
            />
          </div>

          <input
            className="input-create-account"
            name="email"
            type="text"
            placeholder="Email"
            value={owner.email}
            onChange={handleChange}
          />
          <input
            className="input-create-account"
            name="password"
            type="password"
            placeholder="Password"
            value={owner.password}
            onChange={handleChange}
          />

          <input
            className="input-create-account"
            name="password_confirmation"
            type="password"
            placeholder="Confirm Password"
            value={owner.password_confirmation}
            onChange={handleChange}
          />

          <br />
          <button type="submit" className="form-submit-button">
            Submit
          </button>

          {errorMessages}
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
