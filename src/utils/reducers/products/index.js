import { GET_ALL_PRODUCTS } from "../../actions/productActions";

const initialState = {
  getAllProductsLoading: false,
  getAllProductsResult: false,
  getAllProductsError: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        getAllProductsLoading: action.payload.loading,
        getAllProductsResult: action.payload.data,
        getAllProductsError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default products;
