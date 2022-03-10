import "./CreateAccount.css";
import { useState } from "react";

function CreateAccount() {
  const [errors, setErrors] = useState([]);

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
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then(() => console.log("good"));
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
    <>
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
          {errors.length > 0 && (
            <ul>
              {errors.map((error) => (
                <p className="errors" key={error}>
                  {error}
                </p>
              ))}
            </ul>
          )}
        </form>
      </div>
    </>
  );
}

export default CreateAccount;
