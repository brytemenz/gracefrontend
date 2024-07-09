import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const response = await axios.get('https://gracebkend.onrender.com/api/attendees');
        setAttendees(response.data.attendees);
      } catch (error) {
        console.error('Error fetching attendees:', error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchAttendees();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Card showing total registered tickets */}
          <div className="bg-purple-600 p-6 rounded-lg shadow-md flex items-center text-white">
            <div className="text-3xl mr-4">
              <FontAwesomeIcon icon={faTicketAlt} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Total Registered Tickets</h3>
              <p className="text-lg">{attendees.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <FontAwesomeIcon icon={faUsers} className="text-purple-600 mr-2" />
              Registered Attendees
            </h2>
            <div className="overflow-x-auto">
              {loading ? (
                <div className="flex justify-center items-center py-10">
                  <svg
                    className="animate-spin h-10 w-10 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                </div>
              ) : (
                <table className="min-w-full bg-white border border-gray-300 shadow-sm">
                  <thead className="bg-purple-600 text-white">
                    <tr>
                      <th className="py-2 px-4 border">Name</th>
                      <th className="py-2 px-4 border">Email</th>
                      <th className="py-2 px-4 border">Phone Number</th>
                      <th className="py-2 px-4 border">Special Needs</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {attendees.map((attendee, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="py-2 px-4 border">{attendee.name}</td>
                        <td className="py-2 px-4 border">{attendee.email}</td>
                        <td className="py-2 px-4 border">{attendee.phoneNumber}</td>
                        <td className="py-2 px-4 border">{attendee.specialNeeds}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
