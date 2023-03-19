import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import { getAllProducts } from "../../utils/actions/productActions";
import Card from "../card/Card";
import { LoadingAllProducts } from "../card/Loading";
import {
  getAllCategories,
  getSpecifiedCategory,
} from "../../utils/actions/categorieActions";

function ProductList() {
  const dispatch = useDispatch();
  const [openCategories, setOpenCategories] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const loading = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [all, setAll] = useState(true);
  const [electronics, setElectronics] = useState(false);
  const [jewelery, setJewelery] = useState(false);
  const [mens, setMens] = useState(false);
  const [womens, setWomens] = useState(false);

  const { getAllProductsLoading, getAllProductsResult } = useSelector(
    (state) => state.productReducers
  );
  const {
    getAllCategoriesResult,
    getSpecifiedCategoryResult,
    getSpecifiedCategoryLoading,
  } = useSelector((state) => state.categoryReducers);

  useEffect(() => {
    if (all) {
      dispatch(getAllProducts());
      dispatch(getAllCategories());
    } else if (electronics || jewelery || mens || womens) {
      dispatch(getSpecifiedCategory());
      dispatch(getAllCategories());
    }
  }, [dispatch]);

  return (
    <div className="relative w-full flex gap-5">
      {/* Menu Side */}
      <div className="fixed z-30 w-56 h-fit flex flex-col justify-start items-start gap-6 px-2 py-4 border rounded-md bg-gray-50 hover:border-gray-400 transition-all ease-out duration-300">
        <button
          onClick={() => {
            setAll(true) || dispatch(getAllProducts());
            setElectronics(false);
            setJewelery(false);
            setMens(false);
            setWomens(false);
          }}
          className="w-full px-4 py-2 rounded-md text-left text-sm text-gray-700 cursor-pointer hover:bg-slate-200"
        >
          All Products
        </button>
        {/* Categories */}
        <div className="w-full relative flex flex-col">
          <button
            onClick={() => {
              setOpenCategories(!openCategories);
              setOpenSort(false);
            }}
            className="w-full flex items-center justify-between px-4 py-2 rounded-md text-left text-sm text-gray-700 cursor-pointer hover:bg-slate-200"
          >
            Categories{" "}
            <MdKeyboardArrowDown
              className={`text-lg transition-all ease-out ${
                openCategories ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <div
            className={`relative w-full h-fit flex flex-col justify-start transition-all ease-out duration-300 ${
              openCategories ? "scale-y-100" : "scale-y-0"
            }`}
          >
            {getAllCategoriesResult &&
              getAllCategoriesResult.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item == "electronics"
                      ? setElectronics(true) ||
                        setAll(false) ||
                        dispatch(getSpecifiedCategory(item))
                      : item == "jewelery"
                      ? setJewelery(true) ||
                        setAll(false) ||
                        dispatch(getSpecifiedCategory(item))
                      : item == "men's clothing"
                      ? setMens(true) ||
                        setAll(false) ||
                        dispatch(getSpecifiedCategory(item))
                      : setWomens(true) ||
                        setAll(false) ||
                        dispatch(getSpecifiedCategory(item));
                  }}
                  className={`w-full flex items-center justify-between px-6 py-2 rounded-md text-left text-sm text-gray-700 capitalize cursor-pointer hover:bg-slate-200 transition-all ease-out ${
                    openCategories
                      ? "block opacity-100 visible"
                      : "absolute top-0 opacity-0 invisible"
                  }`}
                >
                  {item}
                </button>
              ))}
          </div>
        </div>

        {/* Sort */}
        <div className="w-full relative flex flex-col">
          <button
            onClick={() => {
              setOpenSort(!openSort);
              setOpenCategories(false);
            }}
            className="w-full flex items-center justify-between px-4 py-2 rounded-md text-left text-sm text-gray-700 cursor-pointer hover:bg-slate-200"
          >
            Sort By{" "}
            <MdKeyboardArrowDown
              className={`text-lg transition-all ease-out ${
                openSort ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <div
            className={`relative w-full h-fit flex flex-col justify-start transition-all ease-out duration-300 ${
              openSort ? "scale-y-100" : "scale-y-0"
            }`}
          >
            <button
              className={`w-full flex items-center justify-between px-6 py-2 rounded-md text-left text-sm text-gray-700 cursor-pointer hover:bg-slate-200 transition-all ease-out ${
                openSort
                  ? "block opacity-100 visible"
                  : "absolute top-0 opacity-0 invisible"
              }`}
            >
              Product Name (A-Z)
            </button>
            <button
              className={`w-full flex items-center justify-between px-6 py-2 rounded-md text-left text-sm text-gray-700 cursor-pointer hover:bg-slate-200 transition-all ease-out ${
                openSort
                  ? "block opacity-100 visible"
                  : "absolute top-0 opacity-0 invisible"
              }`}
            >
              Highest Price
            </button>
            <button
              className={`w-full flex items-center justify-between px-6 py-2 rounded-md text-left text-sm text-gray-700 cursor-pointer hover:bg-slate-200 transition-all ease-out ${
                openSort
                  ? "block opacity-100 visible"
                  : "absolute top-0 opacity-0 invisible"
              }`}
            >
              Lowest Price
            </button>
          </div>
        </div>
      </div>

      {/* List Of Products */}
      <div className="ml-60 w-full grid grid-cols-3 gap-5">
        {getAllProductsLoading || getSpecifiedCategoryLoading
          ? loading.map((index) => <LoadingAllProducts key={index} />)
          : all
          ? getAllProductsResult &&
            getAllProductsResult.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))
          : getSpecifiedCategoryResult.map((item) => (
              <Card
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

export default ProductList;
