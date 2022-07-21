import "./CSS/Login.css";
import "./CSS/FormContainer.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarHeader from "./UI/NavbarHeader";

function Login({ userInfo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          userInfo(data);
          console.log("Logged in", data);
        });
        navigate("/home");
      } else {
        resp.json().then((message) => setErrors(message));
      }
    });
  }

  return (
    <div className="login-page">
      <NavbarHeader>
        <Navbar />
      </NavbarHeader>

      <div>
        <form className="inputs-form" onSubmit={handleSubmit}>
          <input
            className="input-create-account"
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleEmail}
          />
          <input
            className="input-create-account"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          <br />
          <button type="submit" className="form-submit-button">
            Submit
          </button>
          {errors ? <p>{errors.error}</p> : null}
        </form>
      </div>
    </div>
  );
}

export default Login;
