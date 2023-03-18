import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../utils/actions/categorieActions";

function CategoriesList() {
  const dispatch = useDispatch();
  const { getAllCategoriesLoading, getAllCategoriesResult } = useSelector(
    (state) => state.categoryReducers
  );

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  console.log(getAllCategoriesResult);

  return (
    <div className="relative z-30 w-full px-52 grid grid-cols-3 gap-5">
      <div className="w-full h-72 bg-slate-200 rounded-sm flex justify-center items-center">
        <h1 className="text-3xl capitalize font-semibold">Categorie</h1>
      </div>
    </div>
  );
}

export default CategoriesList;
