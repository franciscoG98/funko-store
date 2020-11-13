import { combineReducers } from "redux";
import ProductReducers from "./Products";
import CategoryReducers from "./Categories";
import OrderReducers from './Order';



export default combineReducers({
    Product: ProductReducers,
    Category: CategoryReducers,
    Order: OrderReducers,
  });