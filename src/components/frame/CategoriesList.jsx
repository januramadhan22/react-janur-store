import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../utils/actions/categorieActions";
import { LoadingCategories } from "../card/Loading";

function CategoriesList() {
  const dispatch = useDispatch();
  const { getAllCategoriesLoading, getAllCategoriesResult } = useSelector(
    (state) => state.categoryReducers
  );
  const categories = [
    {
      name: "Fashions",
      image:
        "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Gadgets",
      image:
        "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FkZ2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Sports",
      image:
        "https://plus.unsplash.com/premium_photo-1666955973759-655578290b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Electronics",
      image:
        "https://plus.unsplash.com/premium_photo-1664194583957-a23dfea9c2e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Kids",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Games",
      image:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="relative z-10 w-full grid grid-cols-3 gap-5">
      {getAllCategoriesLoading ? (
        <LoadingCategories />
      ) : (
        categories.map((item, index) => (
          <div
            key={index}
            className="relative z-10 w-full h-72 bg-slate-200 rounded-sm flex justify-center items-center group cursor-pointer "
          >
            <div className="w-full h-full absolute z-10 top-0 left-0 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-full w-full object-center group-hover:scale-110 transition-all ease-out duration-200"
              />
            </div>
            <div className="w-full h-full absolute z-10 bg-black opacity-30" />
            <h1 className="relative z-10 text-3xl capitalize font-semibold text-white">
              {item.name}
            </h1>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoriesList;
