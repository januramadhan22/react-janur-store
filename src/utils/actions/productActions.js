import { axiosCreate } from "../axiosCreate";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_NEW_ARRIVAL = "GET_NEW_ARRIVAL";

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axiosCreate
      .get("products")
      .then((response) => {
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getNewArrival = () => {
  return (dispatch) => {
    dispatch({
      type: GET_NEW_ARRIVAL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axiosCreate
      .get("new-arrival")
      .then((response) => {
        dispatch({
          type: GET_NEW_ARRIVAL,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_NEW_ARRIVAL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
