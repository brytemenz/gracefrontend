import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">Login</h1>

        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Login
          </button>
        </form>

        {errorMessage && (
          <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
        )}

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-700 hover:text-purple-900">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
