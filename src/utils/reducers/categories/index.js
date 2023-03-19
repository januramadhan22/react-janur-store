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
        getAllCategoriesLoading: action.payload.loading,
        getAllCategoriesResult: action.payload.data,
        getAllCategoriesError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default categories;
