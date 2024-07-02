import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaFire, FaHome } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import PropertyColumn from "./PropertyColumn";
import bongalo1 from "../img/bongalo1.JPG";
import duplex1 from "../img/duplex1.JPG";
import duplex2 from "../img/duplex2.JPG";
import bongalo2 from "../img/bongalo2.JPG";
import duplex3 from "../img/duplex3.JPG";
import bongalo3 from "../img/bongalo3.JPG";
import bongalo4 from "../img/bongalo4.JPG";
import duplex4 from "../img/duplex4.JPG";
import duplex5 from "../img/duplex5.JPG";
import personLogo1 from "../img/person-logo1.jpeg";
import steps1 from "../img/steps1.png";
import steps2 from "../img/steps2.png";
import steps3 from "../img/steps3.png";
import lagos1 from "../img/lagos1.jpg";
import enugu2 from "../img/enugu2.jpg";
import abuja2 from "../img/abuja2.jpg";
import vector from "../img/Vector.png";
import vector1 from "../img/Vector 1.png";
import vector2 from "../img/Vector 2.png";
import lovetolive1 from "../img/lovetolive1.jpg";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";
import Featured from "./Featured";
import Faq from "./Faq";

const propertiesData = [
  {
    id: 1,
    type: "Bungalow",
    name: "Cozy Bungalow 1",
    img: bongalo1,
    location: "Los Angeles",
    price: "58,000,000",
  },
  {
    id: 2,
    type: "Duplex",
    name: "Luxury Duplex 1",
    img: duplex1,
    location: "New York",
    price: "125,000,000",
  },
  {
    id: 3,
    type: "Duplex",
    name: "Luxury Duplex 2",
    img: duplex2,
    location: "New York",
    price: "250,000,000",
  },
  {
    id: 4,
    type: "Bungalow",
    name: "Luxury Bungalow 2",
    img: bongalo2,
    location: "New York",
    price: "43,000,000",
  },
  {
    id: 5,
    type: "Duplex",
    name: "Luxury Duplex 3",
    img: duplex3,
    location: "New York",
    price: "132,000,000",
  },
  {
    id: 6,
    type: "Bungalow",
    name: "Luxury Bungalow 3",
    img: bongalo3,
    location: "New York",
    price: "67,000,000",
  },
  {
    id: 7,
    type: "Duplex",
    name: "Luxury Duplex 4",
    img: duplex4,
    location: "New York",
    price: "90,000,000",
  },
  {
    id: 8,
    type: "Bungalow",
    name: "Luxury Bungalow 4",
    img: bongalo4,
    location: "New York",
    price: "34,000,000",
  },
  {
    id: 9,
    type: "Duplex",
    name: "Luxury Duplex 5",
    img: duplex5,
    location: "New York",
    price: "105,000,000",
  },
  {
    id: 10,
    type: "Apartment",
    name: "Modern Apartment",
    location: "Chicago",
    price: "400,000",
  },
  // Add more properties as needed
];

const Main = () => {
  return (
    // Main Section
    <div className="mt-4 py-12 px-4 md:px-16 bg-gray-50">
      <h2 className="font-bold flex gap-2 text-2xl md:text-3xl text-[#992c99] md:ml-5">
        Trending Properties <FaFire className="text-yellow-500 animate-pulse" />
      </h2>

      {/* Property Column */}
      <div className="properties grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 ml-[6%]">
        {propertiesData.map((property) => (
          <PropertyColumn
            key={property.id}
            img={property.img}
            name={property.name}
            location={property.location}
            price={property.price}
          />
        ))}
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="md:max-w-[90%] max-w-[100%] mx-auto pt-12 pb-10 md:pb-20 mt-16 md:px-9 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-2xl md:text-3xl border-b-2 border-gray-400 w-28 md:w-40 font-semibold mx-auto">
          <span className="text-[#992c99]">About</span> Us
        </h2>

        <div className="md:flex mt-10 md:mt-16 gap-16">
          <div className="about-img">
            <img
              src={personLogo1}
              alt=""
              className="w-64 md:w-[27rem] rounded-md shadow-xl hover:shadow-2xl mx-auto md:mt-[-2rem]"
            />
          </div>
          <div className="about-text w-80 md:w-96 mt-8 md:mt-0 mx-auto pl-0 md:pl-2">
            <h1 className="text-lg md:text-2xl max-[450px]:pl-1 font-semibold">
              We Are The Best And Trusted{" "}
              <span className="text-[#992c99]">Real Estate</span> Agency
            </h1>
            <p className="mt-3 max-[450px]:pl-1">
              Lorem ipsum, dolor sit amet Quasi et asperiores quidem, eius
              maiores inventore facilis repudiandae.
            </p>

            <ul className="pt-4 space-y-4">
              <motion.li
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md"
              >
                <FiCheckCircle className="text-[#992c99] bg-[#f6caf6] rounded-full" />{" "}
                Lorem ipsum dolor sit amet consectetur.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md"
              >
                <FiCheckCircle className="text-[#992c99] bg-[#f6caf6] rounded-full" />{" "}
                Lorem ipsum dolor sit amet consectetur.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md"
              >
                <FiCheckCircle className="text-[#992c99] bg-[#f6caf6] rounded-full" />{" "}
                Lorem ipsum dolor sit amet consectetur.
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.div>
      {/* End About Section */}

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-20 py-20"
      >
        <h2 className="text-2xl md:text-3xl border-b-2 border-gray-400 w-[9.7rem] md:w-[12rem] font-semibold mx-auto">
          How It <span className="text-[#992c99]">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full text-center mt-10 gap-5 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="w-72 mx-auto"
          >
            <img src={steps1} alt="" className="mx-auto pl-1 md:pl-0" />
            <h2 className="font-semibold text-lg mt-4">
              1. Search through and select a house of your choice
            </h2>
            <p className="text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              cupiditate sit quae blanditiis voluptatibus eligendi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="w-72 mx-auto"
          >
            <img src={steps2} alt="" className="mx-auto pl-3 md:pl-0" />
            <h2 className="font-semibold text-lg mt-4">
              2. Book A Physical Tour With One Of Our Agents
            </h2>
            <p className="text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              cupiditate sit quae blanditiis voluptatibus eligendi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="w-72 mx-auto"
          >
            <img src={steps3} alt="" className="mx-auto pl-8 md:pl-0" />
            <h2 className="font-semibold text-lg mt-4">
              3. Make Payment And Get Your Dream Home.
            </h2>
            <p className="text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              cupiditate sit quae blanditiis voluptatibus eligendi.
            </p>
          </motion.div>
        </div>
      </motion.div>
      {/* End How It Works */}

      {/* Explore Properties */}
      <div className="mt-16 py-20">
        <h2 className="font-semibold text-2xl md:text-3xl flex gap-2 justify-center">
          Explore Cities{" "}
          <FaLocationDot className="text-[#992c99] animate-bounce" />
        </h2>

        <div className="block md:flex justify-center mt-9 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-72 mx-auto cursor-pointer mb-8 md:mb-0"
          >
            <img
              src={lagos1}
              alt=""
              className="w-64 h-56 rounded-3xl shadow-xl hover:shadow-2xl mx-auto"
            />
            <h2 className="text-sm mt-2 font-semibold text-center">
              23 Properties
            </h2>
            <h2 className="text-lg mt-2 font-semibold text-center">Lagos</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-72 mx-auto cursor-pointer mb-8 md:mb-0"
          >
            <img
              src={enugu2}
              alt=""
              className="w-64 h-56 rounded-3xl shadow-xl hover:shadow-2xl mx-auto"
            />
            <h2 className="text-sm mt-2 font-semibold text-center">
              53 Properties
            </h2>
            <h2 className="text-lg mt-2 font-semibold text-center">Enugu</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-72 mx-auto cursor-pointer"
          >
            <img
              src={abuja2}
              alt=""
              className="w-64 h-56 rounded-3xl shadow-xl hover:shadow-2xl mx-auto"
            />
            <h2 className="text-sm mt-2 font-semibold text-center">
              18 Properties
            </h2>
            <h2 className="text-lg mt-2 font-semibold text-center">Abuja</h2>
          </motion.div>
        </div>
      </div>
      {/* End Explore Properties */}

      {/* Work with us */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-10 py-20"
      >
        <h2 className="text-xl md:text-3xl border-b-2 border-gray-400 w-[19.2rem] md:w-[27.5rem] pl-2 font-semibold mx-auto">
          Why You Should Work With Us
        </h2>
        <h4 className="text-center mt-4">
          We're Here To Satisfy All Your Housing Needs
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full text-center mt-10 gap-4 md:gap-8">
          <div className="w-72 mx-auto md:mb-0 transition hover:border hover:border-black p-3 hover:rounded-lg">
            <img src={vector2} alt="" className="mx-auto mb-3" />
            <h2 className="font-semibold text-lg">Wide range of properties</h2>
            <p className="text-sm mt-2">
              We offer expert legal help for all related property items in
              Dubai.
            </p>
          </div>

          <div className="w-72 mx-auto md:mb-0 transition hover:border hover:border-black p-3 hover:rounded-lg">
            <img src={vector1} alt="" className="mx-auto mb-3" />
            <h2 className="font-semibold text-lg">Buy or Rent Homes</h2>
            <p className="text-sm mt-2">
              We sell your home at the best market price and very quickly as
              well.
            </p>
          </div>

          <div className="w-72 mx-auto transition hover:border hover:border-black p-3 hover:rounded-lg">
            <img src={vector} alt="" className="mx-auto mb-3" />
            <h2 className="font-semibold text-lg">Trusted by Thousands</h2>
            <p className="text-sm mt-2">
              We offer you free consultancy to get a loan for your new home.
            </p>
          </div>
        </div>
      </motion.div>
      {/* End Work with us */}

      {/* Discover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12 py-12 bg-cover bg-center w-[99vw] h-[65vh] md:h-[80vh] ml-[-3.8vw] relative"
        style={{
          backgroundImage: `url(${lovetolive1})`,
        }}
      >
        <div
          className="bg-black w-full h-full opacity-40 absolute top-0 left-0"
          style={{
            zIndex: 1,
          }}
        ></div>
        <div className="relative z-10 text-white pt-6 md:pt-12">
          <h2 className="text-xl text-center md:text-[1.7rem] font-semibold mt-8">
            Discover a place you'll love to live
          </h2>
          <p className="text-center mt-2">
            Every day is a journey, and the journey itself is home. <br /> A
            house is made of walls and beams, a home is built with love and
            dreams.
          </p>
          <h4 className="text-center mt-4 font-semibold">
            Find Your Dream Home Today!
          </h4>
          <div className="flex justify-center mt-8">
            <Link to={"/all-properties"}>
              <button className="bg-[#992c99] text-white px-4 md:px-8 py-2 md:py-4 rounded-2xl hover:bg-[#621c62] transition flex items-center gap-2">
                View Properties <FaHome className="animate-bounce" />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* End Discover */}

      {/* Reviews */}
      <Reviews />

      {/* Featured */}
      <Featured />

      {/* FAQ */}
      <Faq />
    </div>
  );
};

export default Main;
