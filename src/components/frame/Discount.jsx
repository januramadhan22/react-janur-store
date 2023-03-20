import React from "react";
import janurLife from "../../assets/new_arrival/janur_life.jpg";
import janurPants from "../../assets/new_arrival/janur_pants.jpg";
import totebagDash from "../../assets/new_arrival/totebag_dash.jpg";
import totebagLife from "../../assets/new_arrival/totebag_life.jpg";
import Card from "../card/Card";

function Discount() {
  const discountProducts = [
    {
      id: 1,
      title: "Janur T-Shirt - Life",
      price: 11.99,
      discount: 4.44,
      image: janurLife,
    },
    {
      id: 2,
      title: "Janur Totebag - Dash",
      price: 8.99,
      discount: 3.33,
      image: totebagDash,
    },
    {
      id: 3,
      title: "Janur Totebag - Life",
      price: 8.99,
      discount: 3.33,
      image: totebagLife,
    },
    {
      id: 4,
      title: "Janur Short Pants",
      price: 9.99,
      discount: 3.55,
      image: janurPants,
    },
  ];

  return (
    <div className="relative w-full flex flex-col gap-5">
      {/* <NewProductBanner /> */}
      <div className="w-full grid grid-cols-3 gap-5">
        {discountProducts.map((item) => (
          <Card
            isLarge
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
}

export default Discount;
