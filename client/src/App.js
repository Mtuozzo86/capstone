import "./CSS/App.css";
import { Routes, Route, useParams } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import OwnerLandingPage from "./OwnerLandingPage";
import CreateAccountSuccess from "./CreateAccountSuccess";
import MainLandingPage from "./MainLandingPage";
import { useState, useEffect } from "react";
import WhatCustomerSees from "./WhatCustomerSees";

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
    <div className="wrapper">
      <Routes>
        <Route path="/business/:business" element={<WhatCustomerSees />} />
        <Route path="/" element={<MainLandingPage />} />

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
    </div>
  );
}

export default App;
