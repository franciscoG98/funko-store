import { combineReducers } from "redux";
import ProductReducers from "./Products";
import CategoryReducers from "./Categories";
import OrderReducers from './Order';
import LoginReducers from './Login';
import UserReducers from './User';

export default combineReducers({
    Product: ProductReducers,
    Category: CategoryReducers,
    Order: OrderReducers,
    Login: LoginReducers,
    User: UserReducers,
  });