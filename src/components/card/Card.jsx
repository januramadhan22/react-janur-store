import React from "react";
import { HiStar } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";

function Card({ title, image, price, isLarge = false }) {
  return (
    <div className="relative w-full flex flex-col gap-4 cursor-pointer group">
      <div
        className={`relative w-full h-52 flex justify-center ${
          isLarge && "h-96"
        }`}
      >
        <img src={image} alt={title} className="h-full object-cover" />
        <div className="absolute bottom-1 left-1 flex items-center gap-1">
          <p className=" bg-black py-0.5 px-1 text-xs text-white bg-opacity-70 rounded-sm">
            Available
          </p>
          <div className="py-0.5 px-2 bg-red-400 text-white rounded-sm">
            <FaShippingFast />
          </div>
        </div>
      </div>
      <div className="w-full px-2 space-y-1 text-left">
        <h3 className="text-lg truncate">{title}</h3>
        <p className="text-gray-500">$ {price}</p>
        <span className="flex items-center gap-1">
          <HiStar className="text-yellow-500" /> 4,95
        </span>
      </div>
    </div>
  );
}

export default Card;
