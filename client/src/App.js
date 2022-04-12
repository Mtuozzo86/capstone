import "./CSS/App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import OwnerLandingPage from "./OwnerComponents/OwnerLandingPage";
import CreateAccountSuccess from "./CreateAccountSuccess";
import MainLandingPage from "./MainLandingPage";
import { useState, useEffect } from "react";
import WhatCustomerSees from "./CustomerComponents/WhatCustomerSees";
import PleaseLoginScreen from "./PleaseLoginScreen";
import About from "./CustomerComponents/About";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

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
    <div className="wrapper">
      <Routes>
        <Route
          exact
          path="/business/:business"
          element={<WhatCustomerSees />}
        ></Route>

        <Route path="/" element={<MainLandingPage />} />
        {loggedInUser ? (
          <Route
            path="/home"
            element={<OwnerLandingPage loggedInUser={loggedInUser} />}
          />
        ) : (
          <Route path="/home" element={<PleaseLoginScreen />} />
        )}

        <Route path="/create" element={<CreateAccount />} />

        <Route
          path="/login"
          element={<Login userInfo={handleUserLoggedIn} />}
        />
        <Route path="/thankyou" element={<CreateAccountSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
