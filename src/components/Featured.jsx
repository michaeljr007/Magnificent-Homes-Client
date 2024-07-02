import React from "react";
import duplex1 from "../img/duplex1.JPG";
import duplex2 from "../img/duplex2.JPG";
import duplex3 from "../img/duplex3.JPG";
import { FaStar } from "react-icons/fa";
import { FaLocationDot, FaNairaSign } from "react-icons/fa6";

// Featured component to display featured properties
const Featured = () => {
  return (
    <div className="mt-20 pb-20 pt-4 w-full px-4">
      {/* Section heading */}
      <h2 className="text-xl text-left md:text-2xl border-b-2 border-gray-400 w-[12.3rem] lg:w-[14.3rem] mb-12 font-semibold ml-12">
        Featured <span className="text-[#992c99]">Properties</span>
      </h2>

      {/* Grid layout for featured properties */}
      <div className="grid grid-cols-1 cursor-pointer md:grid-cols-3 gap-5 w-full lg:ml-[4%] mx-auto text-center">
        {/* Featured Property 1 */}
        <div className="text-left rounded-lg shadow-lg lg:w-[80%] py-4 px-1 hover:shadow-2xl">
          <div>
            <img
              src={duplex1}
              alt=""
              className="w-full h-56 object-cover rounded"
            />
          </div>
          <div className="flex justify-between mt-3 px-3">
            <h3>6 Bedroom duplex</h3>
            <p className="py-1 px-2 bg-teal-100 text-teal-500 text-xs font-semibold">
              For Sale
            </p>
          </div>
          <h3 className="flex gap-1 ml-2 mt-1 text-gray-500 text-sm items-center">
            <FaLocationDot /> 21 Steven Strange Str Lagos
          </h3>
          <div className="flex justify-between mt-3 px-3 items-center">
            <div className="flex gap-1 text-yellow-500 text-sm">
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
            </div>

            <div>
              <h3 className="flex gap-1 items-center text-sm">
                <FaNairaSign /> 120,000,000
              </h3>
            </div>
          </div>
        </div>

        {/* Featured Property 2 */}
        <div className="text-left rounded-lg shadow-lg lg:w-[80%] py-4 px-1 hover:shadow-2xl">
          <div>
            <img
              src={duplex2}
              alt=""
              className="w-full h-56 object-cover rounded"
            />
          </div>
          <div className="flex justify-between mt-3 px-3">
            <h3>4 Bedroom duplex</h3>
            <p className="py-1 px-2 bg-teal-100 text-teal-500 text-xs font-semibold">
              For Sale
            </p>
          </div>
          <h3 className="flex gap-1 ml-2 mt-1 text-gray-500 text-sm items-center">
            <FaLocationDot /> 72 Richard Mil Str Abuja
          </h3>
          <div className="flex justify-between mt-3 px-3 items-center">
            <div className="flex gap-1 text-yellow-500 text-sm">
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
            </div>

            <div>
              <h3 className="flex gap-1 items-center text-sm">
                <FaNairaSign /> 270,000,000
              </h3>
            </div>
          </div>
        </div>

        {/* Featured Property 3 */}
        <div className="text-left rounded-lg shadow-lg lg:w-[80%] py-4 px-1 hover:shadow-2xl">
          <div>
            <img
              src={duplex3}
              alt=""
              className="w-full h-56 object-cover rounded"
            />
          </div>
          <div className="flex justify-between mt-3 px-3">
            <h3>7 Bedroom duplex</h3>
            <p className="py-1 px-2 bg-teal-100 text-teal-500 text-xs font-semibold">
              For Sale
            </p>
          </div>
          <h3 className="flex gap-1 ml-2 mt-1 text-gray-500 text-sm items-center">
            <FaLocationDot /> 56 Smith Andrews Str Enugu
          </h3>
          <div className="flex justify-between mt-3 px-3 items-center">
            <div className="flex gap-1 text-yellow-500 text-sm">
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
              <FaStar className="animate-pulse" />
            </div>

            <div>
              <h3 className="flex gap-1 items-center text-sm">
                <FaNairaSign /> 90,000,000
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
