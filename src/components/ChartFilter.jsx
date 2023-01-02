import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-10 m-2 h-8 border-1 rounded-md text-sm items-center flex justify-center cursor-pointer ${
        active
          ? "bg-accent border-accent text-gray-100"
          : "bg-accent/40 text-white"
      }`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;
