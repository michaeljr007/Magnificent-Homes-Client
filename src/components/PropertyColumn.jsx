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
import { Link } from "react-router-dom";

const PropertyColumn = ({ img, name, price, location }) => {
  const [isClicked, setIsClicked] = useState(false);

  // Function to toggle liked state
  const toggleLiked = () => {
    setIsClicked(!isClicked);
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
      className="pb-5 pt-5 md:pt-2 md:pb-4 px-3 mx-auto shadow-xl hover:shadow-2xl bg-white rounded-lg w-[92%] md:w-[82%] max-w-[95%] mb-6"
    >
      {/* Property name */}
      <h1 className="mb-2 text-[#992c99] font-bold text-sm">{name}</h1>
      {/* Property image */}
      <img
        src={img}
        alt=""
        className="w-full h-[12.7rem] lg:h-[11rem] mb-3 object-cover"
      />
      {/* Heart icon for like */}
      <span
        className="absolute cursor-pointer mt-[-13rem] lg:mt-[-9.5rem] ml-[15.55rem] md:ml-[13.5rem] lg:ml-[17rem]"
        onClick={toggleLiked}
      >
        {isClicked ? (
          <FaHeart className="text-[#992c99] text-xl" />
        ) : (
          <FaRegHeart className="text-white text-xl" />
        )}
      </span>
      {/* Location and bed/bath icons */}
      <h3 className="flex justify-between mb-2 text-xs md:text-sm">
        <span className="flex gap-1">
          <FaLocationDot className=" text-[#992c99]" /> {location}
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
      <h3 className="flex gap-1 pb-1 text-sm">
        <FaNairaSign /> {price}
      </h3>
      {/* Property description */}
      <p className="text-sm pr-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi minima
        et facere animi!
      </p>
      {/* Links for more info and booking a tour */}
      <ul className="flex gap-3 sm:gap-4 mt-4">
        <li>
          <Link to={"/property-info"}>
            <button className="bg-[#992c99] px-3 py-[0.7rem] flex items-center text-white no-underline rounded hover:bg-[#7d257d] hover:text-white text-xs md:text-sm">
              More Info <FaHome className="ml-1" />
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/tour-form"}>
            <button
              className="bg-[#992c99] px-3 py-[0.7rem] flex items-center text-white no-underline rounded hover:bg-[#7d257d] hover:text-white text-xs md:text-sm"
              href="#"
            >
              Book A Tour <FaRocket className="ml-1" />
            </button>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default PropertyColumn;
