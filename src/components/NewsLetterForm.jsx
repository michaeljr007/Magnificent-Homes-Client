import React, { useEffect } from "react";
import logo from "../assets/img/logo1.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NewsletterForm = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    script.setAttribute("data-title", "Untitled Project");
    script.setAttribute("data-url", "q6perr0q-untitled-project");
    script.setAttribute("data-domain", "forms");
    script.setAttribute("data-full-page", "false");
    script.setAttribute("data-min-height", "500px");
    script.setAttribute("data-form-id", "66028");

    document.body.appendChild(script);

    // Handle script loading error
    script.onerror = () => {
      console.error("Failed to load Visme form script");
    };

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="newsletter-form-container h-[80vh] p-2 bg-gray-100">
      {/* Visme form div */}
      <div
        id="visme"
        className="visme_d"
        data-title="Untitled Project"
        data-url="q6perr0q-untitled-project"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="66028"
      ></div>
      <div className="flex">
        <Link to={"/"}>
          <FaHome className="text-[#992c99] mt-4 text-[2.8rem] cursor-pointer animate-pulse" />
        </Link>

        <Link to={"/"}>
          <img
            src={logo}
            className="w-[19vw] md:w-[6vw] ml-[28vw] md:ml-[43vw] mt-2"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default NewsletterForm;
