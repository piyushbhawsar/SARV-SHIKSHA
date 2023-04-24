import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./App.css";
// import LoginRegister from "./components/login-registration";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
