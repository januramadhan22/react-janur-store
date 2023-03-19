import { axiosCreate } from "../axiosCreate";

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_SPECIFIED_CATEGORY = "GET_SPECIFIED_CATEGORY";

export const getAllCategories = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axiosCreate
      .get("products/categories")
      .then((response) => {
        dispatch({
          type: GET_ALL_CATEGORIES,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_CATEGORIES,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getSpecifiedCategory = (category) => {
  return (dispatch) => {
    dispatch({
      type: GET_SPECIFIED_CATEGORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axiosCreate
      .get(`products/category/${category}`)
      .then((response) => {
        dispatch({
          type: GET_SPECIFIED_CATEGORY,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_SPECIFIED_CATEGORY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
