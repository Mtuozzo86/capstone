import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/create" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
