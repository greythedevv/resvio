import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import DashboardLayout from './layouts/DashboardLayout.tsx';
import Overview from './pages/dashboard/Overview';
import GuestsPage from './pages/dashboard/GuestsPage';
import GiftsPage from './pages/dashboard/GiftsPage';
// import ProfilePage from './pages/dashboard/ProfilePage';
import ForgotPassword from './pages/ForgotPassword.tsx'
import CreateWedding from './pages/CreateWedding.tsx'
import RsvpNow from './pages/RsvpNow.tsx'
import InvitationPage from "./pages/InvitationPage.tsx";
import RsvpDashboardPage from "./pages/dashboard/RsvpDashboardPage.tsx";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="guests" element={<GuestsPage />} />
          <Route path="gifts" element={<GiftsPage />} />
          <Route path="rsvp" element={<RsvpDashboardPage />} />
          {/* <Route path="profile" element={<ProfilePage />} /> */}
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-wedding" element={<CreateWedding />} />
        <Route path="/invite/:slug" element={<InvitationPage />} />
        <Route path="/rsvp/:slug" element={<RsvpNow />} />
      </Routes>
    </div>
  )
}

export default App