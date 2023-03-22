import React from "react";
import { HiStar } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";

function Card({ name, image, price, discount, rate, isLarge = false }) {
  return (
    <div className="relative w-full flex flex-col gap-4 cursor-pointer group">
      <div
        className={`relative w-full h-52 flex justify-center ${
          isLarge && "h-96"
        }`}
      >
        <img src={image} alt={name} className="h-full w-full object-cover" />
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
        <h3 className="text-lg truncate">{name}</h3>
        <p
          className={`text-gray-500 ${
            discount && "flex flex-col leading-snug"
          }`}
        >
          <span className={discount && "line-through"}>$ {price}</span>

          {discount && (
            <span className="text-red-400">$ {price - discount}</span>
          )}

          {discount && (
            <span className="w-fit px-1.5 py-0 bg-red-400 rounded-sm text-xs text-white">
              - $ {discount}
            </span>
          )}
        </p>

        <span className="flex items-center gap-1">
          <HiStar className="text-yellow-500" /> {rate}
        </span>
      </div>
    </div>
  );
}

export default Card;
