import React from "react";
import Burger from "../assets/burger.png";
import Garlic from "../assets/garlic.png";
import Onion from "../assets/onion.png";
import Onion2 from "../assets/onion_2.png";
import OnionChilli from "../assets/onion_tomato.png";
import Parsley from "../assets/parsley.png";
import Parsley2 from "../assets/parsley_2.png";
import ParsleyChilli from "../assets/parsley_chilli.png";

function Banner() {
  return (
    <div id="banner" className="relative w-full min-h-screen bg-slate-white">
      <div className="absolute w-full h-2/3 bg-orange-200 rounded-b-[50%] bg-opacity-70" />
      <h1 className="relative w-fit text-[160px] mx-auto z-20 text-white font-serif">
        Let's Cook
      </h1>
      <img
        id="burger"
        src={Burger}
        alt="Burger"
        width={"500px"}
        className="absolute top-20 right-[445px] z-30"
      />
      <img
        id="garlic"
        src={Garlic}
        alt="Burger"
        className="absolute w-24 top-72 left-96 z-20 rotate-45"
      />
      <img
        id="garlic"
        src={Garlic}
        alt="Burger"
        className="absolute w-20 top-80 right-[420px] z-20 rotate-180"
      />
      <img
        id="onion"
        src={Onion}
        alt="Burger"
        className="absolute w-52 rotate-45 top-10 left-40 z-10"
      />
      <img
        id="onion-2"
        src={Onion2}
        alt="Burger"
        className="absolute w-32 top-36 right-96 z-20"
      />
      <img
        id="onion-2"
        src={Onion2}
        alt="Burger"
        className="absolute w-32 top-36 right-96 z-20"
      />
      <img
        id="onion-chilli"
        src={OnionChilli}
        alt="Burger"
        className="absolute w-52 rotate-180 top-96 right-72 z-20"
      />
      <img
        id="parsley"
        src={Parsley}
        alt="Burger"
        className="absolute z-20 w-24 top-96 rotate-12 left-[440px]"
      />
      <img
        id="parsley"
        src={Parsley}
        alt="Burger"
        className="absolute z-20 w-24 top-[480px] rotate-180 left-48"
      />
      <img
        id="parsley-2"
        src={Parsley2}
        alt="Burger"
        className="absolute z-20 w-20 top-48 right-48"
      />
      <img
        id="parsley-2"
        src={Parsley2}
        alt="Burger"
        className="absolute z-20 w-20 top-48 right-48"
      />
      <img
        id="parsley-chilli"
        src={ParsleyChilli}
        alt="Burger"
        className="absolute z-20 w-28 top-80 rotate-45"
      />
      <img
        id="parsley-chilli"
        src={ParsleyChilli}
        alt="Burger"
        className="absolute z-20 w-28 top-80 right-10 -rotate-90"
      />

      <button className="absolute z-30 bottom-32 right-[610px] bg-orange-200 w-fit px-8 py-3 rounded-full font-semibold text-sm text-white scale-75 hover:bg-orange-600 hover:scale-100 transition-all ease-out duration-300">
        Check The Recipe
      </button>
    </div>
  );
}

export default Banner;
