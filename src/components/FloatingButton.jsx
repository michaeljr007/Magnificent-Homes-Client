import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  const whatsappNumber = "1234567890"; // Replace with your WhatsApp number
  const whatsappMessage = "Hello, I am interested in your properties!"; // Default message

  const handleChatClick = () => {
    // Construct WhatsApp URL with number and message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    // Floating button component
    <button
      onClick={handleChatClick} // Call handleChatClick when button is clicked
      className="fixed bottom-4 right-4 bg-[#992c99] text-white p-4 rounded-full shadow-lg hover:bg-[#712171] transition-all duration-300 z-50 flex items-center justify-center"
      style={{ fontSize: "24px" }} // Set button font size
    >
      <FaWhatsapp /> {/* WhatsApp icon */}
    </button>
  );
};

export default FloatingButton;
