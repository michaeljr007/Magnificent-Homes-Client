import React from "react";
import Typewriter from "typewriter-effect";
import { FaRocket, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

// Hero component
const Hero = () => {
  // Function to handle "More Info" click
  const handleTourClick = () => {
    // Navigate to the tour info page
    // You may replace "/tour-info" with your actual route path
    window.location.href = "/tour-form";
    // Optional: You may use react-router-dom's Link component instead of window.location.href
    // return <Link to="/tour-info" />;
  };

  return (
    <div className="overflow-x-hidden">
      {/* Main heading */}
      <h1 className="dream-home text-center font-semibold text-[1.2rem] md:text-[2.5rem] text-white mt-[8rem] lg:mt-[11rem]">
        Find Your Dream Home
      </h1>

      {/* Subheading with Typewriter effect */}
      <h1 className="ml-[10vw] max-[360px]:ml-[6vw] md:ml-[28vw] font-bold text-[1.6rem] md:text-[3rem] flex text-white mt-[1rem]">
        Our Homes Are{" "}
        <span className="font-extralight inline ml-3">
          <Typewriter
            options={{
              strings: ["Stunning", "Modern", "Luxurious", "Affordable"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>

      {/* Action buttons */}
      <ul className="take-action flex gap-[1rem] md:gap-[2rem] justify-center mt-[39vh] md:mt-[4.8rem]">
        <li>
          <Link to={"/all-properties"}>
            <a
              className="bg-white hover:text-purple-800 px-[1rem] md:px-[1.5rem] flex items-center gap-[0.2rem] md:gap-[0.5rem] py-[0.7rem] md:py-[0.8rem] text-[#992c99] no-underline rounded"
              href="#login"
            >
              View Listings <FaHome className="ml-1" />
            </a>
          </Link>
        </li>
        <li>
          <a
            onClick={handleTourClick}
            className="bg-[#992c99] text-white px-[1rem] md:px-[1.5rem] flex items-center gap-[0.2rem] md:gap-[0.5rem] py-[0.7rem] md:py-[0.8rem] no-underline rounded hover:bg-[#621c62]"
            href="#signup"
          >
            Book A Tour <FaRocket className="ml-1" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
