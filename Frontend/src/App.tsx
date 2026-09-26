
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";

import DashboardLayout from "./layouts/DashboardLayout.tsx";

import Overview from "./pages/dashboard/Overview";
import GuestsPage from "./pages/dashboard/GuestsPage";
import GiftsPage from "./pages/dashboard/GiftFundPage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import RsvpDashboardPage from "./pages/dashboard/RsvpDashboardPage.tsx";
import WishListPage from "./pages/dashboard/WishListPage.tsx";
import InvitationManagePage from "./pages/dashboard/InvitationManagePage.tsx";

import ForgotPassword from "./pages/ForgotPassword.tsx";
import CreateWedding from "./pages/CreateWedding.tsx";

import RsvpNow from "./pages/RsvpNow.tsx";
import InvitationPage from "./pages/InvitationPage.tsx";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Wedding creation */}
        <Route
          path="/create-wedding"
          element={<CreateWedding />}
        />

        {/* Public wedding website */}
        <Route
          path="/w/:slug"
          element={<InvitationPage />}
        />

        {/* Public RSVP */}
        <Route
          path="/rsvp/:slug"
          element={<RsvpNow />}
        />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="guests" element={<GuestsPage />} />
          <Route path="gifts" element={<GiftsPage />} />
          <Route path="rsvp" element={<RsvpDashboardPage />} />
          <Route path="wishlist" element={<WishListPage />} />
          <Route
            path="invitation"
            element={<InvitationManagePage />}
          />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
