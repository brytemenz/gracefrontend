import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const response = await axios.get('http://localhost:5005/api/attendees'); // Adjust the endpoint based on your API
        setAttendees(response.data.attendees); // Assuming response.data contains an array of attendees
      } catch (error) {
        console.error('Error fetching attendees:', error);
      }
    };

    fetchAttendees();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Card showing total registered tickets */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="text-blue-500 text-3xl mr-4">
              <FontAwesomeIcon icon={faTicketAlt} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Total Tickets
              </h3>
              <p className="text-gray-600 text-lg">
                {attendees.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FontAwesomeIcon icon={faUsers} className="text-blue-500 mr-2" />
              Registered Attendees
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-collapse overflow-hidden border-gray-300 shadow-sm">
                <thead className="bg-gray-200 text-gray-700">
                  <tr>
                    <th className="py-2 px-4 border">Name</th>
                    <th className="py-2 px-4 border">Email</th>
                    <th className="py-2 px-4 border">Phone Number</th>
                    <th className="py-2 px-4 border">Special Needs</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {attendees.map((attendee, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border">{attendee.name}</td>
                      <td className="py-2 px-4 border">{attendee.email}</td>
                      <td className="py-2 px-4 border">{attendee.phoneNumber}</td>
                      <td className="py-2 px-4 border">{attendee.specialNeeds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
