import React from "react";
import loader from "../img/logo1.png"; // Importing the loader image

//Loader component
const Loader = () => {
  return (
    <div className="h-[100vh] self-center items-center object-center justify-center content-center text-center w-[100vw] bg-gray-100">
      {/* Full-screen container with gray background */}
      <div className="py-10">
        {/* Padding for content */}
        <span>
          <img
            className="loading-img animate-pulse mt-[-1rem] max-[380px]:mt-[-4.5rem] lg:mt-[-4rem] ml-[4rem] max-[380px]:ml-[5.3rem] md:ml-[8rem] lg:ml-[38vw] w-[200px] md:w-[300px]"
            src={loader} // Using the imported loader image
            alt="loader" // Alt text for accessibility
          />
        </span>
      </div>
    </div>
  );
};

export default Loader;
