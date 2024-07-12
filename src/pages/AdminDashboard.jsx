import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaPlus, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import useScrollToTop from "../components/useScrollToTop";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeProfile } from "../redux/slices/ProfileSlice";
import { useNavigate } from "react-router-dom";

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
  useScrollToTop();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const State = useSelector((state) => state);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    id: null,
    title: "",
    image: "",
    location: "",
    price: "",
  });
  const [newPropertyForm, setNewPropertyForm] = useState({
    title: "",
    images: [], // Updated to handle multiple images
    location: "",
    price: "",
    bathrooms: "",
    bedrooms: "",
  });

  const userProfile = State.Profile[0];
  console.log(userProfile);

  useEffect(() => {
    if (userProfile === undefined) {
      navigate("/");
    }
  }, [userProfile, navigate]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleEditClick = (property) => {
    setEditFormData(property);
    setShowEditModal(true);
  };

  const handleDeleteClick = (propertyId) => {
    setShowDeleteConfirmation(true);
    setEditFormData({ ...editFormData, id: propertyId });
  };

  const handleDeleteConfirm = () => {
    const updatedProperties = properties.filter(
      (property) => property.id !== editFormData.id
    );
    properties = updatedProperties;
    setShowDeleteConfirmation(false);
    alert(`Property with ID ${editFormData.id} deleted!`);
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
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
    const { name, value, files } = e.target;
    if (name === "images") {
      setNewPropertyForm({
        ...newPropertyForm,
        images: files,
      });
    } else {
      setNewPropertyForm({
        ...newPropertyForm,
        [name]: value,
      });
    }
  };

  const handleAddPropertySubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newPropertyForm.title);
    for (let i = 0; i < newPropertyForm.images.length; i++) {
      formData.append("images", newPropertyForm.images[i]);
    }
    formData.append("location", newPropertyForm.location);
    formData.append("price", newPropertyForm.price);
    formData.append("bathrooms", newPropertyForm.bathrooms);
    formData.append("bedrooms", newPropertyForm.bedrooms);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newProperty = {
        id: properties.length + 1,
        ...newPropertyForm,
        images: response.data.map((file) => file.path), // Save file paths returned from the server
      };

      properties.push(newProperty);
      setShowAddModal(false);
      setNewPropertyForm({
        title: "",
        images: [],
        location: "",
        price: "",
        bathrooms: "",
        bedrooms: "",
      });
    } catch (error) {
      console.error("There was an error uploading the images:", error);
    }
  };

  const logoutHandler = () => {
    if (window.confirm("Log out?")) {
      dispatch(removeProfile());
      navigate("/");
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        delay: 1.5,
      }}
      className="flex min-h-screen"
    >
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
              logoutHandler();
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
                <label className="block text-sm font-semibold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={newPropertyForm.title}
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Images
                </label>
                <input
                  type="file"
                  name="images"
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  multiple
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={newPropertyForm.location}
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={newPropertyForm.price}
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Bathrooms
                </label>
                <input
                  type="text"
                  name="bathrooms"
                  value={newPropertyForm.bathrooms}
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Bedrooms
                </label>
                <input
                  type="text"
                  name="bedrooms"
                  value={newPropertyForm.bedrooms}
                  onChange={handleNewPropertyInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                >
                  Add Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Edit Property</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  value={editFormData.image}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={editFormData.location}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={editFormData.price}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                >
                  Update Property
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
            <h2 className="text-2xl font-bold mb-6">Confirm Delete</h2>
            <p className="mb-6">
              Are you sure you want to delete this property?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleDeleteCancel}
                className="bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AdminDashboard;
