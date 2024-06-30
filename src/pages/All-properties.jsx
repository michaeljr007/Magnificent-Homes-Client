import React, { useState } from "react";
import PropertyCard from "../components/PropertyColumn";
import FilterAside from "../components/FilterAside";
import bongalo1 from "../img/bongalo1.JPG";
import duplex1 from "../img/duplex1.JPG";
import duplex2 from "../img/duplex2.JPG";
import bongalo2 from "../img/bongalo2.JPG";
import duplex3 from "../img/duplex3.JPG";
import bongalo3 from "../img/bongalo3.JPG";
import bongalo4 from "../img/bongalo4.JPG";
import duplex4 from "../img/duplex4.JPG";
import duplex5 from "../img/duplex5.JPG";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdMenu, MdCancel } from "react-icons/md";

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

const AllPropertiesPage = () => {
  const [filteredType, setFilteredType] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleFilterChange = (type) => {
    setFilteredType(type);
  };

  const filteredProperties = filteredType
    ? propertiesData.filter((property) => property.type === filteredType)
    : propertiesData;

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState); // Toggle sidebarOpen state
  };

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <div className="md:hidden absolute z-50 ml-2 mt-2 text-2xl cursor-pointer">
        {sidebarOpen ? (
          <MdCancel onClick={toggleSidebar} />
        ) : (
          <MdMenu onClick={toggleSidebar} />
        )}
      </div>

      {/* Sidebar */}
      <div className={`md:block`}>
        <FilterAside
          sidebarOpen={sidebarOpen}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 py-6 pl-3 pr-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold flex gap-2 items-center">
            All Properties{" "}
            <IoHome className="text-[#992c99] hover:text-[#6e286e] mr-1 animate-pulse" />
          </h1>
          <Link to={"/"}>
            <button className="py-2 px-4 bg-[#992c99] hover:bg-[#702070] text-white rounded-lg">
              Home
            </button>
          </Link>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              img={property.img}
              name={property.name}
              location={property.location}
              price={property.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPropertiesPage;
