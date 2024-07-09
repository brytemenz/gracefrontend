import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="bg-purple-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Home
        </Link>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="text-white hover:bg-purple-700 px-4 py-2 rounded-md transition"
              >
                Dashboard
              </Link>
              <span className="text-white font-medium">{user && user.name}</span>
              <button
                onClick={logOutUser}
                className="bg-white text-purple-600 hover:bg-gray-200 px-4 py-2 rounded-md font-semibold transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* <Link
                to="/signup"
                className="bg-white text-purple-600 hover:bg-gray-200 px-4 py-2 rounded-md font-semibold transition"
              >
                Sign Up
              </Link> */}
              <Link
                to="/login"
                className="bg-white text-purple-600 hover:bg-gray-200 px-4 py-2 rounded-md font-semibold transition"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
