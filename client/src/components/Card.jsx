import React from "react";

const Card = ({ title, text }) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-lg p-4 hover:scale-105 transition-transform duration-300 w-[300px] h-[250px]">
      <h1 className="text-2xl mb-2 font-semibold h-10">{title}</h1>
      <p className="text-gray-400">{text}</p>
    </div>
  );
};

export default Card;
