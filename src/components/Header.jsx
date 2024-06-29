import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import videoBg from "../videos/videobg.mp4";
import { motion } from "framer-motion";

// Header component
const Header = () => {
  return (
    // Motion div for animation with framer-motion
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
      viewport={{
        amount: "all",
      }}
      className="w-[100vw] h-[100vh]"
    >
      {/* Background video */}
      <video
        className="w-[100vw] max-[450px]:h-[90vh] h-[93vh] mt-[-1rem] absolute object-cover z-[-1]"
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay to darken the video */}
      <div className="bg-black w-[100vw] max-[450px]:h-[90vh] h-[93vh] mt-[-1rem] absolute opacity-50 z-[-1]"></div>

      {/* Navbar and Hero components */}
      <Navbar />
      <Hero />
    </motion.div>
  );
};

export default Header;
