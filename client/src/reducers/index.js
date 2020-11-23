import { combineReducers } from "redux";
import ProductReducers from "./Products";
import CategoryReducers from "./Categories";
import OrderReducers from './Order';
import ReviewReducer from "./Reviews";



export default combineReducers({
    Product: ProductReducers,
    Category: CategoryReducers,
    Order: OrderReducers,
    Review: ReviewReducer
  });