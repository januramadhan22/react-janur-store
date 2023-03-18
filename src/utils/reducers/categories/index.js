import { GET_ALL_CATEGORIES } from "../../actions/categorieActions";

const initialState = {
  getAllCategoriesLoading: false,
  getAllCategoriesResult: false,
  getAllCategoriesError: false,
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        getAllcategoriesLoading: action.payload.loading,
        getAllcategoriesResult: action.payload.data,
        getAllcategoriesError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default categories;
