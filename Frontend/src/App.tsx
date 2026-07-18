import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
// import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/ForgotPassword.tsx'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
    </div>
  )
}

export default App
