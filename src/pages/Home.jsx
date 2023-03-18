import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import CategoriesList from "../components/frame/CategoriesList";
import ProductList from "../components/frame/ProductList";
import Navbar from "../components/Navbar";

function Home() {
  const dispatch = useDispatch();
  const [openSearch, setOpenSearch] = useState(false);
  const [categoriesPage, setCategoriesPage] = useState(false);

  const toggleClose = () => {
    if (openSearch) {
      return setOpenSearch(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div
        onClick={toggleClose}
        className="w-full h-screen absolute top-0 left-0 bg-transparent z-10"
      />
      <Navbar
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        onClose={toggleClose}
        changeView={() => setCategoriesPage(!categoriesPage)}
      />
      {categoriesPage ? <CategoriesList /> : <ProductList />}
    </div>
  );
}

export default Home;
