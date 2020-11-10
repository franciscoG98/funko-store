import { combineReducers } from "redux";
import ProductReducers from "./modalReducers";
import CategoryReducers from "./tweetReducers";



export default combineReducers({
    Product: ProductReducers,
    Category: CategoryReducers,
  });