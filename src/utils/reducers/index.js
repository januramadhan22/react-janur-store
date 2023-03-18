import { combineReducers } from "redux";
import productReducers from "./products";
import categoryReducers from "./categories";

export default combineReducers({ productReducers, categoryReducers });
