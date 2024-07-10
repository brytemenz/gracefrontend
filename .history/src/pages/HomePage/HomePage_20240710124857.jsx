import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarDay,
  faClock,
  faHourglassHalf,
  faStopwatch,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a145268-41e7-4aa6-93b1-564a57fd6f05/dbki5lx-bc7ebf79-b427-4bb7-b19f-d1cf46b926a1.jpg/v1/fill/w_1024,h_698,q_75,strp/soccer_stadium_by_hz_designs_dbki5lx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njk4IiwicGF0aCI6IlwvZlwvOWExNDUyNjgtNDFlNy00YWE2LTkzYjEtNTY0YTU3ZmQ2ZjA1XC9kYmtpNWx4LWJjN2ViZjc5LWI0MjctNGJiNy1iMTlmLWQxY2Y0NmI5MjZhMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JWmyDxBn2RMSKNo8_ri8MLbEyraknjoe5rTuY5QYWYc)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white p-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to the Field of Grace Event
        </h1>
        <p className="text-sm md:text-2xl p-2 mb-8">
          A Field of Grace is a fundraising event organized by Phronesis
          Ministry to support various orphan homes. The event promises an
          exciting program featuring renowned Christian musicians and
          influencers. Join us for an inspiring and uplifting experience as we
          come together to make a difference in the lives of children in need.
        </p>
        <p className="text-lg md:text-2xl p-2 mb-8 bg-purple-600">
          Join us for an unforgettable experience. Register for free now to
          participate!
        </p>
        <button
          onClick={handleRegisterClick}
          className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 mb-8 flex items-center"
        >
          Click to Register
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>

        {countdown.days > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-8">
            {[
              { label: "Days", value: countdown.days, icon: faCalendarDay },
              { label: "Hours", value: countdown.hours, icon: faClock },
              { label: "Minutes", value: countdown.minutes, icon: faHourglassHalf },
              { label: "Seconds", value: countdown.seconds, icon: faStopwatch },
            ].map(({ label, value, icon }) => (
              <div
                key={label}
                className="bg-purple-800 bg-opacity-60 rounded-lg p-4 text-center"
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="text-3xl md:text-4xl text-white mb-2"
                />
                <div className="text-xl md:text-2xl text-white font-semibold mb-2">
                  {label}
                </div>
                <div className="text-3xl md:text-5xl text-white font-bold">
                  {value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      
    </div>
    <footer className="relative w-full bg-purple-800 bg-opacity-80 text-white py-6 ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Fore more information Contact us:</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12">
            <div className="mb-4 md:mb-0 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:info@phronesisministry.org">phronesisministry.gh@gmail.com</a>
            </div>
            <div className="mb-4 md:mb-0 flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span>+233 (0)5941 91084</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <span>Accra, Ghana</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
