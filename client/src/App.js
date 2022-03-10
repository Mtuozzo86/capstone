import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
