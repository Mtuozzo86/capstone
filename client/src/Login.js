import "./Login.css";

function Login() {
  return (
    <div className="login-form-container">
      <form>
        <input name="email" type="text" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
