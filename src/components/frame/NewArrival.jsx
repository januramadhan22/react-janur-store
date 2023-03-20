import React from "react";
import NewProductBanner from "../banner/NewProductBanner";
import Card from "../card/Card";
import janurDash from "../../assets/new_arrival/janur_dash.jpg";
import janurGembot from "../../assets/new_arrival/janur_gembot.jpg";
import janurLife from "../../assets/new_arrival/janur_life.jpg";
import janurPants from "../../assets/new_arrival/janur_pants.jpg";
import totebagDash from "../../assets/new_arrival/totebag_dash.jpg";
import totebagGembot from "../../assets/new_arrival/totebag_gembot.jpg";
import totebagLife from "../../assets/new_arrival/totebag_life.jpg";

function NewArrival() {
  const newArrivalProducts = [
    {
      id: 1,
      title: "Janur T-Shirt - Dash",
      price: "11.99",
      image: janurDash,
    },
    {
      id: 2,
      title: "Janur T-Shirt - Gembot",
      price: "11.99",
      image: janurGembot,
    },
    {
      id: 3,
      title: "Janur T-Shirt - Life",
      price: "11.99",
      image: janurLife,
    },
    {
      id: 4,
      title: "Janur Totebag - Dash",
      price: "8.99",
      image: totebagDash,
    },
    {
      id: 5,
      title: "Janur Totebag - Gembot",
      price: "8.99",
      image: totebagGembot,
    },
    {
      id: 6,
      title: "Janur Totebag - Life",
      price: "8.99",
      image: totebagLife,
    },
    {
      id: 7,
      title: "Janur Short Pants",
      price: "9.99",
      image: janurPants,
    },
  ];

  return (
    <div className="relative w-full flex flex-col gap-5">
      <NewProductBanner />
      <div className="w-full grid grid-cols-3 gap-5">
        {newArrivalProducts.map((item) => (
          <Card
            isLarge
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewArrival;
