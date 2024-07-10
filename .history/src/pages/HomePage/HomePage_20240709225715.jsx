import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarDay, faClock, faHourglassHalf, faStopwatch } from "@fortawesome/free-solid-svg-icons";

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
    <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/view-soccer-field-with-grass_23-2150887312.jpg?t=st=1720550052~exp=1720553652~hmac=e5fef99d0636c3e8a8f1f0eec771fc03e379832badb5f95bd15a279c93e1ff4f&w=2000)' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white p-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to the Field of Grace Event</h1>
        <p className="text-lg md:text-2xl p-2 mb-8 bg-purple-600">Join us for an unforgettable experience. Register now to participate!</p>
        <button
          onClick={handleRegisterClick}
          className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 mb-8 flex items-center"
        >
          Click to Register
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>

        {countdown.days > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-purple-800 bg-opacity-60 rounded-lg p-4 text-center">
              <FontAwesomeIcon icon={faCalendarDay} className="text-4xl md:text-5xl text-white mb-2" />
              <div className="text-2xl md:text-3xl text-white font-semibold mb-2">Days</div>
              <div className="text-4xl md:text-6xl text-white font-bold">{countdown.days}</div>
            </div>
            <div className="bg-purple-800 bg-opacity-60 rounded-lg p-4 text-center">
              <FontAwesomeIcon icon={faClock} className="text-4xl md:text-5xl text-white mb-2" />
              <div className="text-2xl md:text-3xl text-white font-semibold mb-2">Hours</div>
              <div className="text-4xl md:text-6xl text-white font-bold">{countdown.hours}</div>
            </div>
            <div className="bg-purple-800 bg-opacity-60 rounded-lg p-4 text-center">
              <FontAwesomeIcon icon={faHourglassHalf} className="text-4xl md:text-5xl text-white mb-2" />
              <div className="text-2xl md:text-3xl text-white font-semibold mb-2">Minutes</div>
              <div className="text-4xl md:text-6xl text-white font-bold">{countdown.minutes}</div>
            </div>
            <div className="bg-purple-800 bg-opacity-60 rounded-lg p-4 text-center">
              <FontAwesomeIcon icon={faStopwatch} className="text-4xl md:text-5xl text-white mb-2" />
              <div className="text-2xl md:text-3xl text-white font-semibold mb-2">Seconds</div>
              <div className="text-4xl md:text-6xl text-white font-bold">{countdown.seconds}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
