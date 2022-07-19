import "./CSS/App.css";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import OwnerLandingPage from "./OwnerComponents/OwnerLandingPage";
import CreateAccountSuccess from "./CreateAccountSuccess";
import MainLandingPage from "./MainLandingPage/MainLandingPage";
import { useState, useEffect } from "react";
import WhatCustomerSees from "./CustomerComponents/WhatCustomerSees";
import PleaseLoginScreen from "./PleaseLoginScreen";
import About from "./CustomerComponents/About";
import Contact from "./CustomerComponents/Contact";
import CalendarTest from "./CalendarTest";

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
    setLoggedInUser(null);
    setLoggedInUser(user);
  }
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/business/:website/*" element={<WhatCustomerSees />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="schedule" element={<CalendarTest />} />
        </Route>

        <Route path="/" element={<MainLandingPage />} />
        <Route
          path="/home"
          element={
            loggedInUser ? (
              <OwnerLandingPage loggedInUser={loggedInUser} />
            ) : (
              <PleaseLoginScreen />
            )
          }
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
// modal attempt
export default App;
