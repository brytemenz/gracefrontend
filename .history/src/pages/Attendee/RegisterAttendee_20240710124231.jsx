import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterAttendee = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    specialNeeds: ''
  });

  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://gracebkend.onrender.com/api/register', formData);
      setMessage(response.data.message);
      setShowModal(true);
    } catch (error) {
      console.error("Registration error:", error.response ? error.response.data : error.message);
      setMessage('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Left side with image */}
      <div className="hidden md:flex md:w-1/2 h-full">
        <img
          src="../../../register.jpeg"
          alt="Event Image"
          className="object-cover w-full h-full rounded-l-md shadow-lg"
        />
      </div>

      {/* Right side with form */}
      <div className="bg-gray-100 p-8 rounded-r-md shadow-lg w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>
        {message && <p className="mb-4 text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="specialNeeds">
              Special Needs
            </label>
            <input
              type="text"
              id="specialNeeds"
              name="specialNeeds"
              value={formData.specialNeeds}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className={`w-full bg-purple-950 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 transition-opacity" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded shadow-lg max-w-sm text-center z-50 relative transform transition-transform duration-300 scale-95">
            <p className="text-2xl font-bold mb-4 text-purple-950">Congratulations!</p>
            <p className="mb-4">You have registered successfully to A Field of Grace.</p>
            <p className="mb-4">Kindly check your email for your ticket details.</p>
            <button
              className="bg-purple-950 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterAttendee;
