import React from "react";
import { HiStar } from "react-icons/hi";

function Card({ title, image, price }) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full h-52 flex justify-center">
        <img src={image} alt={title} className="h-full object-contain" />
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
