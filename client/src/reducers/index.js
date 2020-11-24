import { combineReducers } from "redux";
import ProductReducers from "./Products";
import CategoryReducers from "./Categories";
import OrderReducers from './Order';
import LoginRedicers from './Login';
import UserReducer from './User';



export default combineReducers({
    Product: ProductReducers,
    Category: CategoryReducers,
    Order: OrderReducers,
    Login: LoginRedicers,
    User: UserReducer,
  });