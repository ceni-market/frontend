import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Login from "./pages/auth/login/Login.jsx";
import Signup from "./pages/auth/signup/Signup.jsx";
import FindPassword from "./pages/auth/find-password/FindPassword.jsx";
import EmailConfirm from "./pages/auth/email-confirm/EmailConfirm.jsx";
import SignupComplete from "./pages/auth/signup-complete/SignupComplete.jsx";
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/email-confirm" element={<EmailConfirm redirectTo="/signup/complete" />} />
        <Route path="/signup/complete" element={<SignupComplete />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/find-password/verify" element={<EmailConfirm />} />
        <Route path="/find-password/reset" element={<FindPassword step={3} />} />
        <Route path="/find-password/complete" element={<FindPassword step={4} />} />
      </Routes>
  )
}

export default App
