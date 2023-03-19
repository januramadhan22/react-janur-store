import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../utils/actions/categorieActions";
import { LoadingCategories } from "../card/Loading";

function CategoriesList() {
  const dispatch = useDispatch();
  const loading = [1, 2, 3, 4, 5, 6];
  const { getAllCategoriesLoading, getAllCategoriesResult } = useSelector(
    (state) => state.categoryReducers
  );
  const categoriesImage = {
    electronics:
      "https://plus.unsplash.com/premium_photo-1664194584355-25196f114804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    jewelery:
      "https://images.unsplash.com/photo-1558897796-185b06fc450a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    mens: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    womens:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVucyUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  };

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="relative z-10 w-full grid grid-cols-3 gap-5">
      {getAllCategoriesLoading
        ? loading && loading.map((index) => <LoadingCategories key={index} />)
        : getAllCategoriesResult &&
          getAllCategoriesResult.map((item, index) => (
            <div
              key={index}
              className="relative z-10 w-full h-72 bg-slate-200 rounded-sm flex justify-center items-center group cursor-pointer "
            >
              <div className="w-full h-full absolute z-10 top-0 left-0 overflow-hidden">
                <img
                  src={
                    item === "electronics"
                      ? categoriesImage.electronics
                      : item === "jewelery"
                      ? categoriesImage.jewelery
                      : item === "men's clothing"
                      ? categoriesImage.mens
                      : categoriesImage.womens
                  }
                  alt={item}
                  className="object-cover h-full w-full object-center group-hover:scale-110 transition-all ease-out duration-200"
                />
              </div>
              <div className="w-full h-full absolute z-10 bg-black opacity-30" />
              <h1 className="relative z-10 text-3xl capitalize font-semibold text-white">
                {item}
              </h1>
            </div>
          ))}
    </div>
  );
}

export default CategoriesList;
