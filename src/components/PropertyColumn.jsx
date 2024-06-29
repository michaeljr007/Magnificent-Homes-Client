import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBed,
  FaBath,
  FaRocket,
  FaHome,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { FaLocationDot, FaNairaSign } from "react-icons/fa6";

const PropertyColumn = ({ img, name, price, location }) => {
  const [isClicked, setIsClicked] = useState(false);

  // Function to toggle liked state
  const toggleLiked = () => {
    setIsClicked(!isClicked);
  };

  // Function to handle "More Info" click
  const handleMoreInfoClick = () => {
    // Navigate to the property info page
    // You may replace "/property-info" with your actual route path
    window.location.href = "/property-info";
    // Optional: You may use react-router-dom's Link component instead of window.location.href
    // return <Link to="/property-info" />;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 200,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="pb-5 pt-4 px-4 shadow-xl hover:shadow-2xl bg-white rounded-lg w-full sm:w-80 md:w-[22rem] max-w-md mx-auto mb-8"
    >
      {/* Property name */}
      <h1 className="mb-2 text-[#992c99] font-bold text-sm md:text-base">
        {name}
      </h1>
      {/* Property image */}
      <img src={img} alt="" className="w-full h-48 mb-3 object-cover" />
      {/* Heart icon for like */}
      <span
        className="absolute cursor-pointer mt-[-12rem] ml-[15rem] sm:ml-[18rem] md:ml-[18rem]"
        onClick={toggleLiked}
      >
        {isClicked ? (
          <FaHeart className="text-[#992c99] text-2xl" />
        ) : (
          <FaRegHeart className="text-white text-2xl" />
        )}
      </span>
      {/* Location and bed/bath icons */}
      <h3 className="flex justify-between mb-3 text-xs md:text-sm">
        <span className="flex gap-1">
          <FaLocationDot className="mt-1 text-[#992c99]" /> {location}
        </span>
        <span className="flex gap-2">
          <span className="flex gap-1">
            <FaBed className="mt-1 text-[#992c99]" /> 4
          </span>
          <span className="flex gap-1">
            <FaBath className="mt-1 text-[#992c99]" /> 5
          </span>
        </span>
      </h3>
      {/* Price */}
      <h3 className="flex gap-1 pb-2 text-xs md:text-sm">
        <FaNairaSign /> {price}
      </h3>
      {/* Property description */}
      <p className="text-xs md:text-sm pr-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi minima
        et facere animi!
      </p>
      {/* Links for more info and booking a tour */}
      <ul className="flex gap-4 sm:gap-6 mt-3">
        <li>
          <button
            className="bg-[#992c99] px-4 py-2 flex items-center text-white no-underline rounded hover:bg-[#7d257d] hover:text-white text-xs md:text-sm"
            onClick={handleMoreInfoClick}
          >
            More Info <FaHome className="ml-1" />
          </button>
        </li>
        <li>
          <a
            className="bg-[#992c99] px-4 py-2 flex items-center text-white no-underline rounded hover:bg-[#7d257d] hover:text-white text-xs md:text-sm"
            href="#signup"
          >
            Book A Tour <FaRocket className="ml-1" />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default PropertyColumn;
