import {
  GET_ALL_PRODUCTS,
  GET_NEW_ARRIVAL,
} from "../../actions/productActions";

const initialState = {
  getAllProductsLoading: false,
  getAllProductsResult: false,
  getAllProductsError: false,

  getNewArrivalLoading: false,
  getNewArrivalResult: false,
  getNewArrivalError: false,
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
    case GET_NEW_ARRIVAL:
      return {
        ...state,
        getNewArrivalLoading: action.payload.loading,
        getNewArrivalResult: action.payload.data,
        getNewArrivalError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default products;
