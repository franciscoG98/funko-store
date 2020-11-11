import { combineReducers } from "redux";
import ProductReducers from "./Products";
import CategoryReducers from "./Categories";



export default combineReducers({
    Product: ProductReducers,
    Category: CategoryReducers,
  });