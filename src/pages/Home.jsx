import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { getAllProducts } from "../utils/actions/productActions";

function Home() {
  const dispatch = useDispatch();
  const { getAllProductsLoading, getAllProductsResult } = useSelector(
    (state) => state.productReducers
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(getAllProductsResult);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Home;
