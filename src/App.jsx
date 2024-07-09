import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import RegisterAttendee from "./pages/Attendee/RegisterAttendee";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AuthContext } from "./context/auth.context";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      {isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterAttendee />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
        <Route
          path="/dashboard"
          element={
            <IsPrivate>
              <Dashboard />
            </IsPrivate>
          }
        />
        {/* <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        /> */}
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
