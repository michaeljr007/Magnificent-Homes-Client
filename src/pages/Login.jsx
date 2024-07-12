import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import lekkiBridge1 from "../assets/img/LekkiBridge1.jpg";
import logo1 from "../assets/img/logo1.png";
import { FaLocationDot } from "react-icons/fa6";
import useScrollToTop from "../components/useScrollToTop";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProfile } from "../redux/slices/ProfileSlice";

const Login = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v1/users/login", formData);
      const { data } = response;

      if (data.user) {
        dispatch(
          addProfile({
            id: data.user.id,
            name: data.user.name,
            image: data.user.image,
            token: data.user.token,
            role: data.user.role,
          })
        );
        navigate("/");
      } else {
        alert("No user found");
      }
    } catch (error) {
      const {
        response: {
          data: { errors: errorArr },
        },
      } = error;

      const {
        response: {
          data: { msg: adminCodeErr },
        },
      } = error;

      if (adminCodeErr) {
        alert(adminCodeErr);
      }

      if (errorArr) {
        let errDiv = document.querySelector(".error-div");
        let errorMsg = errorArr[0];

        errDiv.textContent = errorMsg.msg;

        errDiv.classList.toggle("hidden");

        setTimeout(() => {
          errDiv.classList.toggle("hidden");
        }, 2000);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen flex flex-col md:flex-row"
    >
      <div className="hidden md:flex w-full md:w-1/2 relative">
        <img src={logo1} alt="Logo" className="w-16 ml-4 mt-2 absolute" />
        <img
          src={lekkiBridge1}
          className="w-full h-full object-cover"
          alt="Lekki Bridge"
        />
        <h3 className="absolute bottom-8 left-4 text-lg font-semibold text-gray-400 flex items-center gap-1">
          Lekki-Ikoyi Bridge, Lagos Nigeria
          <FaLocationDot className="animate-pulse" />
        </h3>
      </div>
      <div className="w-full md:w-1/2 bg-slate-50 flex flex-col justify-center p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Log In</h1>
          <Link to="/">
            <IoHome className="text-3xl text-[#992c99] hover:text-[#6e286e]" />
          </Link>
        </div>
        <div className="error-div hidden mb-4 bg-red-500 text-white w-[76%] px-6 mx-auto py-2 rounded-lg"></div>
        <div className="bg-white p-6  max-[450px]:mt-[6rem] rounded-lg shadow-xl">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <p className="mt-2 flex gap-2">
              Don't have an account?{" "}
              <Link className="font-semibold text-[#992c99]" to="/signup">
                Sign up
              </Link>
            </p>
            <button
              className="w-full py-2 mt-5 bg-[#992c99] text-white font-semibold rounded hover:bg-[#691e69]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <h3 className="font-bold mt-8 text-center text-[#882c88] md:mt-32">
          Magnificent Homes
        </h3>
      </div>
    </motion.div>
  );
};

export default Login;
