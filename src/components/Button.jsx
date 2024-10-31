// Button.jsx
import React from "react";

const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
