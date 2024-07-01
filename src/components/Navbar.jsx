import React from "react";
import logo1 from "../img/logo1.png";
import { Link } from "react-router-dom";

// Navbar component
const Navbar = () => {
  // Function to handle the toggle of the navbar in mobile view
  const handleToggle = (e) => {
    console.log("Clicked");

    // Selecting DOM elements for the navbar and lines for the toggle button
    const navbar = document.querySelector(".navbar");
    const firstLine = document.querySelector(".first-line");
    const secondLine = document.querySelector(".second-line");
    const thirdLine = document.querySelector(".third-line");

    // Toggling the rotation class on the lines of the toggle button
    firstLine.classList.toggle("rotate");
    secondLine.classList.toggle("rotate");
    thirdLine.classList.toggle("rotate");

    // Toggling the visibility of the navbar
    if (navbar.classList.contains("hidden")) {
      navbar.classList.remove("hidden");
      navbar.classList.add("block");
    } else {
      navbar.classList.remove("block");
      navbar.classList.add("hidden");
    }
  };

  return (
    <div className="flex justify-between px-[5rem] py-[0.5rem] md:py-[1rem] bg-white fixed top-0 w-[100vw] z-50">
      {/* Logo and Title */}
      <div>
        <h1 className="text-[1.7rem] text-[#992c99] max-[450px]:hidden font-bold">
          Magnificent Homes
        </h1>
        <Link to={"/"}>
          <img
            src={logo1}
            alt=""
            className="md:hidden w-[8rem] ml-[-4rem] mt-[-0.2rem]"
          />
        </Link>
      </div>

      {/* Mobile navbar toggle button */}
      <div
        onClick={handleToggle}
        className="md:hidden text-[#c844c8] nav-toggle mt-[0.7rem] mr-[-2.8rem]"
      >
        <div className="first-line"></div>
        <div className="second-line"></div>
        <div className="third-line"></div>
      </div>

      {/* Navbar links */}
      <ul className="hidden bg-[purple] max-[450px]:z-10 max-[450px]:p-[1rem] ml-[-4.9rem] md:ml-0 max-[450px]:h-[58vh] max-[450px]:w-[98vw] md:bg-transparent mt-[4.5rem] md:mt-[0rem] navbar md:flex gap-[3rem] pt-[0.5rem] max-[450px]:absolute">
        <Link to={"/"}>
          <li className="text-white md:text-[#c44ac4] max-[450px]:mb-[0.6rem] pt-2 pb-3">
            <a
              className="no-underline hover:text-[#f065f0] md:text-[#992c99] md:hover:text-[#fa70fa]"
              href="#home"
            >
              Home
            </a>
          </li>
        </Link>

        <li className="text-white md:text-[#c44ac4] max-[450px]:mb-[0.6rem]">
          <Link to={"/all-properties"}>
            <a
              href="#properties"
              className="no-underline hover:text-[#f065f0] md:text-[#992c99] pt-2 pb-3 md:hover:text-[#fa70fa]"
            >
              All Properties
            </a>
          </Link>
        </li>

        {/* Dropdown menu for Categories */}
        <li className="max-[450px]:mb-[0.6rem]">
          <div className="dropdown relative inline-block">
            <button className="dropbtn max-[450px]:text-white pt-2 pb-3 md:text-[#992c99] md:hover:text-[#fa70fa] border-none text-[17px]">
              Categories
            </button>
            <div className="dropdown-content hidden bg-[#f1f1f1] min-w-[160px] absolute z-[1] shadow-xl">
              <a
                className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-[#c63ac6]"
                href="#home"
              >
                Link1
              </a>
              <a
                className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-[#c63ac6]"
                href="#home"
              >
                Link2
              </a>
              <a
                className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-[#c63ac6]"
                href="#home"
              >
                Link3
              </a>
              <a
                className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-[#c63ac6]"
                href="#home"
              >
                Link4
              </a>
            </div>
          </div>
        </li>

        {/* Dropdown menu for About Us */}
        <li className="max-[450px]:mb-[0.8rem]">
          <div className="dropdown relative inline-block">
            <button className="dropbtn max-[450px]:text-white pt-0 pb-3 md:text-[#c44ac4] border-none text-[17px]">
              About Us
            </button>
            <div className="dropdown-content hidden bg-[#f1f1f1] min-w-[160px] absolute z-[1] shadow-xl">
              <a
                className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-[#c63ac6]"
                href="#home"
              >
                Link1
              </a>
              <a
                className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-[#c63ac6]"
                href="#home"
              >
                Link2
              </a>
              <a
                className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-[#c63ac6]"
                href="#home"
              >
                Link3
              </a>
              <a
                className="block no-underline p-[17px] text-[18px] hover:text-white hover:bg-[#c63ac6]"
                href="#home"
              >
                Link4
              </a>
            </div>
          </div>
        </li>

        {/* Login and Register links */}
        <li>
          <div>
            <ul className="block md:flex gap-[1rem]">
              <li className="max-[450px]:mb-[2rem]">
                <Link to={"/login"}>
                  <a
                    className="bg-[#992c99] px-[1.5rem] py-[0.5rem] pt-2 pb-3 text-white no-underline rounded hover:bg-[#691d69]"
                    href="#login"
                  >
                    Login
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/signup"}>
                  <a
                    className="bg-[#992c99] px-[1.5rem] py-[0.5rem] pt-2 pb-3 text-white no-underline rounded hover:bg-[#691d69]"
                    href="#signup"
                  >
                    Register
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
