import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Signup from "./pages/auth/signup/Signup.jsx";
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  )
}

export default App
