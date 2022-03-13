import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route, Switch } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import OwnerLandingPage from "./OwnerLandingPage";
import CreateAccountSuccess from "./CreateAccountSuccess";
import { useState, useEffect } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setLoggedInUser(user));
      }
    });
  }, []);

  function handleUserLoggedIn(user) {
    setLoggedInUser(user);
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={<OwnerLandingPage loggedInUser={loggedInUser} />}
        />
        <Route path="/create" element={<CreateAccount />} />
        <Route
          path="/login"
          element={<Login userInfo={handleUserLoggedIn} />}
        />
        <Route path="/thankyou" element={<CreateAccountSuccess />} />
      </Routes>
    </>
  );
}

export default App;
