import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaTrash,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaEdit,
} from "react-icons/fa";
import useScrollToTop from "../components/useScrollToTop";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    image: "https://via.placeholder.com/300",
    location: "Beverly Hills, CA",
    price: "$4,500,000",
  },
  {
    id: 2,
    title: "Modern Apartment in New York",
    image: "https://via.placeholder.com/300",
    location: "New York, NY",
    price: "$2,300,000",
  },
  // Add more properties here
];

const UserDashboard = () => {
  useScrollToTop();
  const [showProfile, setShowProfile] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    profilePicture: "https://via.placeholder.com/150",
  });

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Profile updated!");
    handleCloseProfile();
  };

  const handleProfilePictureChange = () => {
    // Handle profile picture change logic here
    alert("Profile picture change triggered!");
  };

  const handleLogout = () => {
    // Handle logout logic here
    alert("Logged out!");
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDeleteAccount = () => {
    // Handle account deletion logic here
    alert("Account deleted!");
    setShowDeleteConfirmation(false);
  };

  const handleContactUs = () => {
    // Handle contact us logic here
    alert("Contact us!");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-0 z-50 bg-gray-800 text-white w-64 p-6 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h1 className="text-3xl font-bold mb-10">Dashboard</h1>
        <ul className="space-y-6">
          <li
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          >
            <FaHome />
            <span>Home</span>
          </li>
          <li
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          >
            <FaHeart />
            <span>Favorites</span>
          </li>
          <li
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              handleProfileClick();
              setSidebarOpen(false);
            }}
          >
            <FaUser />
            <span>Profile</span>
          </li>
          <li
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              handleLogout();
              setSidebarOpen(false);
            }}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </li>
          <li
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              handleContactUs();
              setSidebarOpen(false);
            }}
          >
            <FaEnvelope />
            <span>Contact Us</span>
          </li>
          <li
            className="flex items-center space-x-3 cursor-pointer text-red-500"
            onClick={() => {
              handleDeleteAccount();
              setSidebarOpen(false);
            }}
          >
            <FaTrash />
            <span>Delete Account</span>
          </li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 md:hidden bg-gray-800 text-white p-2 rounded-full z-50"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-4 md:ml-0">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[1.45rem] md:text-4xl font-bold mb-8 text-center">
            Your Favorite Properties
          </h1>
          <div className="block md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <motion.div
                key={property.id}
                className="bg-white rounded-lg max-[450px]:mb-6 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{property.title}</h2>
                  <p className="text-gray-500">{property.location}</p>
                  <p className="text-lg font-bold">{property.price}</p>
                  <button className="mt-4 bg-[#992c99] text-white py-2 px-4 rounded-full hover:bg-[#6a1f6a]">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {showProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Edit Profile</h2>
              <button
                onClick={handleCloseProfile}
                className="text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>
            <div className="flex items-center mb-6">
              <img
                src={formData.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover mr-4"
              />
              <button
                onClick={handleProfilePictureChange}
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 flex items-center"
              >
                <FaEdit className="mr-2" /> Edit Picture
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseProfile}
                  className="bg-red-500 text-white py-2 px-4 rounded mr-2 hover:bg-red-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Delete Account</h2>
            <p className="mb-4">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowDeleteConfirmation(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteAccount}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
