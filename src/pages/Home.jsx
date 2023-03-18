import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Container from "../components/frame/Container";
import Footer from "../components/Footer";
import CategoriesList from "../components/frame/CategoriesList";
import Discount from "../components/frame/Discount";
import NewArrival from "../components/frame/NewArrival";
import ProductList from "../components/frame/ProductList";
import Navbar from "../components/Navbar";

function Home() {
  const dispatch = useDispatch();
  const [openSearch, setOpenSearch] = useState(false);
  const [tabMenu, setTabMenu] = useState(3);
  const menuBar = ["Discount", "New Arrival", "Categories", "All Products"];

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
        menuBar={menuBar}
        tabMenu={tabMenu}
        setTabMenu={setTabMenu}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        onClose={toggleClose}
      />
      <Container>
        <>
          {tabMenu === 0 ? (
            <Discount />
          ) : tabMenu === 1 ? (
            <NewArrival />
          ) : tabMenu === 2 ? (
            <CategoriesList />
          ) : (
            <ProductList />
          )}
        </>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
