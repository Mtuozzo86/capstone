import "./CSS/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setLoggedInUser(user));
      }
    }).then(navigate('/home'));
  }, []);
  
  function handleUserLoggedIn(user) {
    setLoggedInUser(user);
  }

  function handleLogOut() {
    setLoggedInUser(null)
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/business/:website/*" element={<WhatCustomerSees />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="schedule" element={<CalendarTest />} />
        </Route>

        <Route
          path="/"
          element={<MainLandingPage loggedInUser={loggedInUser} />}
        />
        <Route
          path="/home"
          element={
            loggedInUser ? (
              <OwnerLandingPage loggedInUser={loggedInUser} onLogOut={handleLogOut} />
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

export default App;
