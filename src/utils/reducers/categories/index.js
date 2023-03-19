import {
  GET_ALL_CATEGORIES,
  GET_SPECIFIED_CATEGORY,
} from "../../actions/categorieActions";

const initialState = {
  getAllCategoriesLoading: false,
  getAllCategoriesResult: false,
  getAllCategoriesError: false,

  getSpecifiedCategoryLoading: false,
  getSpecifiedCategoryResult: false,
  getSpecifiedCategoryError: false,
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

    case GET_SPECIFIED_CATEGORY:
      return {
        ...state,
        getSpecifiedCategoryLoading: action.payload.loading,
        getSpecifiedCategoryResult: action.payload.data,
        getSpecifiedCategoryError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default categories;
