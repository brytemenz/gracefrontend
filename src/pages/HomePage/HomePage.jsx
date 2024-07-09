import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const handleRegisterClick = () => {
    navigate("/register");
  };

  useEffect(() => {
    const countdownDate = new Date("2024-08-10T00:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to the Field of Grace Event</h1>
        <p className="text-xl mb-8">
          Join us for an unforgettable experience. Register now to participate!
        </p>
        <button
          onClick={handleRegisterClick}
          className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 mb-4"
        >
          Register to Participate
        </button>

        {countdown.days > 0 && (
          <div className="flex items-center justify-center mt-8">
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 text-center">
                <div className="text-3xl text-white font-semibold mb-2">Days</div>
                <div className="text-6xl text-white font-bold">{countdown.days}</div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 text-center">
                <div className="text-3xl text-white font-semibold mb-2">Hours</div>
                <div className="text-6xl text-white font-bold">{countdown.hours}</div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 text-center">
                <div className="text-3xl text-white font-semibold mb-2">Minutes</div>
                <div className="text-6xl text-white font-bold">{countdown.minutes}</div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 text-center">
                <div className="text-3xl text-white font-semibold mb-2">Seconds</div>
                <div className="text-6xl text-white font-bold">{countdown.seconds}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
