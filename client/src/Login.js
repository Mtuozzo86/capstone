import "./Login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    });
  }

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleEmail}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
