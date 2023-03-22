import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewArrival } from "../../utils/actions/productActions";
import NewProductBanner from "../banner/NewProductBanner";
import Card from "../card/Card";
import { LoadingAllProducts } from "../card/Loading";

function NewArrival() {
  const dispatch = useDispatch();
  const { getNewArrivalLoading, getNewArrivalResult } = useSelector(
    (state) => state.productReducers
  );
  const loading = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    dispatch(getNewArrival());
  }, [dispatch]);

  return (
    <div className="relative w-full min-h-screen flex flex-col gap-5">
      <NewProductBanner />
      <div className="w-full grid grid-cols-3 gap-5">
        {getNewArrivalLoading
          ? loading.map((index) => <LoadingAllProducts key={index} />)
          : getNewArrivalResult &&
            getNewArrivalResult.map((item) => (
              <Card
                isLarge
                key={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                rate={item.rate}
              />
            ))}
      </div>
    </div>
  );
}

export default NewArrival;
