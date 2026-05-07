import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Login from "./pages/auth/login/Login.jsx";
import Signup from "./pages/auth/signup/Signup.jsx";
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  )
}

export default App
