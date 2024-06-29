import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaPlus,
  FaSignOutAlt,
  FaTrash,
  FaEdit,
  FaBars,
  FaTimes,
} from "react-icons/fa";

let properties = [
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

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false); // New state for add modal
  const [editFormData, setEditFormData] = useState({
    id: null,
    title: "",
    image: "",
    location: "",
    price: "",
  });
  const [newPropertyForm, setNewPropertyForm] = useState({
    title: "",
    image: "",
    location: "",
    price: "",
    bathrooms: "",
    bedrooms: "",
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleEditClick = (property) => {
    setEditFormData(property);
    setShowEditModal(true);
  };

  const handleDeleteClick = (propertyId) => {
    // Set state to show delete confirmation modal
    setShowDeleteConfirmation(true);
    setEditFormData({ ...editFormData, id: propertyId });
  };

  const handleDeleteConfirm = () => {
    // Handle delete logic here (e.g., filter properties array)
    const updatedProperties = properties.filter(
      (property) => property.id !== editFormData.id
    );
    properties = updatedProperties; // Update properties array
    setShowDeleteConfirmation(false); // Close delete confirmation modal
    alert(`Property with ID ${editFormData.id} deleted!`);
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Property updated!");
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleAddModalOpen = () => {
    setShowAddModal(true);
  };

  const handleAddModalClose = () => {
    setShowAddModal(false);
  };

  const handleNewPropertyInputChange = (e) => {
    const { name, value } = e.target;
    setNewPropertyForm({
      ...newPropertyForm,
      [name]: value,
    });
  };

  const handleAddPropertySubmit = (e) => {
    e.preventDefault();
    // Add new property logic here (e.g., push to properties array)
    const newProperty = {
      id: properties.length + 1,
      ...newPropertyForm,
    };
    properties.push(newProperty);
    setShowAddModal(false);
    setNewPropertyForm({
      title: "",
      image: "",
      location: "",
      price: "",
      bathrooms: "",
      bedrooms: "",
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-0 z-50 bg-gray-800 text-white w-64 p-6 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h1 className="text-3xl font-bold mb-10">Admin Dashboard</h1>
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
            onClick={() => {
              handleAddModalOpen();
              setSidebarOpen(false);
            }}
          >
            <FaPlus />
            <span>Create New Listing</span>
          </li>
          <li
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              // Handle logout logic here
              alert("Logged out!");
              setSidebarOpen(false);
            }}
          >
            <FaSignOutAlt />
            <span>Logout</span>
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
            Manage Properties
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
                  <div className="flex mt-4 space-x-2">
                    <button
                      onClick={() => handleEditClick(property)}
                      className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(property.id)}
                      className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add New Property Button */}
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
        onClick={handleAddModalOpen}
      >
        <FaPlus className="text-2xl" />
      </button>

      {/* Add New Property Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Add New Property</h2>
              <button
                onClick={handleAddModalClose}
                className="text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleAddPropertySubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newPropertyForm.title}
                  onChange={handleNewPropertyInputChange}
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={newPropertyForm.image}
                  onChange={handleNewPropertyInputChange}
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={newPropertyForm.location}
                  onChange={handleNewPropertyInputChange}
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="text"
                  name="price"
                  value={newPropertyForm.price}
                  onChange={handleNewPropertyInputChange}
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Bathrooms</label>
                <input
                  type="text"
                  name="bathrooms"
                  value={newPropertyForm.bathrooms}
                  onChange={handleNewPropertyInputChange}
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Bedrooms</label>
                <input
                  type="text"
                  name="bedrooms"
                  value={newPropertyForm.bedrooms}
                  onChange={handleNewPropertyInputChange}
                  className="w-full mt-2 p-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleAddModalClose}
                  className="bg-red-500 text-white py-2 px-4 rounded mr-2 hover:bg-red-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Add Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Confirm Delete</h2>
              <button
                onClick={handleDeleteCancel}
                className="text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>
            <p className="text-lg">
              Are you sure you want to delete this property?
            </p>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleDeleteCancel}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Property Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Edit Property</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={editFormData.image}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={editFormData.location}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                  type="text"
                  name="price"
                  value={editFormData.price}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
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
    </div>
  );
};

export default AdminDashboard;
