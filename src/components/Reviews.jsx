import React from "react";
import { motion } from "framer-motion"; // Importing motion from Framer Motion
import review1 from "../img/review1.png"; // Importing review images
import review2 from "../img/review2.png";
import review3 from "../img/review3.png";
import vectorQuote from "../img/vector-qoute.png"; // Importing vector quote image
import { FaStar } from "react-icons/fa"; // Importing Star icon from React Icons

const Reviews = () => {
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
        delay: 0.5, // Delay before animation starts
        duration: 1, // Animation duration
      }}
      className="mt-20 py-20 w-full bg-white border border-white px-4"
    >
      {/* Section heading */}
      <h2 className="text-xl text-center md:text-2xl border-b-2 border-gray-400 w-40 md:w-52 mx-auto font-semibold">
        What Our <span className="text-[#992c99]">Clients Say</span>
      </h2>

      {/* Grid for displaying reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8 text-center">
        {/* Review 1 */}
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
            delay: 1, // Delay before animation starts
            duration: 1, // Animation duration
          }}
          className="text-left rounded-lg shadow-lg p-4 hover:shadow-2xl"
        >
          {/* Reviewer's image and quote */}
          <div className="flex justify-between items-start">
            <img src={review1} alt="" className="w-28 -ml-4" />
            <img src={vectorQuote} className="w-12 h-8 mt-2" alt="" />
          </div>
          {/* Review text */}
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            autem.
          </p>
          {/* Reviewer's details and star rating */}
          <div className="flex justify-between items-center mt-5">
            <div>
              <h3 className="text-sm font-semibold">Christopher Davidson</h3>
              <h4 className="text-xs text-gray-500">Product Manager</h4>
            </div>
            <div className="flex gap-1 text-yellow-500">
              {/* Five animated stars */}
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Review 2 (similar structure to Review 1) */}
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
            delay: 1, // Delay before animation starts
            duration: 1, // Animation duration
          }}
          className="text-left rounded-lg shadow-lg p-4 hover:shadow-2xl"
        >
          <div className="flex justify-between items-start">
            <img src={review2} alt="" className="w-28 -ml-4" />
            <img src={vectorQuote} className="w-12 h-8 mt-2" alt="" />
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            autem.
          </p>
          <div className="flex justify-between items-center mt-5">
            <div>
              <h3 className="text-sm font-semibold">Christopher Davidson</h3>
              <h4 className="text-xs text-gray-500">Product Manager</h4>
            </div>
            <div className="flex gap-1 text-yellow-500">
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Review 3 (similar structure to Review 1) */}
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
            delay: 1, // Delay before animation starts
            duration: 1, // Animation duration
          }}
          className="text-left rounded-lg shadow-lg p-4 hover:shadow-2xl"
        >
          <div className="flex justify-between items-start">
            <img src={review3} alt="" className="w-28 -ml-4" />
            <img src={vectorQuote} className="w-12 h-8 mt-2" alt="" />
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            autem.
          </p>
          <div className="flex justify-between items-center mt-5">
            <div>
              <h3 className="text-sm font-semibold">Christopher Davidson</h3>
              <h4 className="text-xs text-gray-500">Product Manager</h4>
            </div>
            <div className="flex gap-1 text-yellow-500">
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Reviews;
