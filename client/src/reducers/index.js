import { combineReducers } from "redux";
import ProductReducers from "./Products";
import CategoryReducers from "./Categories";
import OrderReducers from './Order';
import ProfileReducers from './Profile';
import ReviewReducer from "./Reviews";

import LoginReducers from './Login';
import UserReducers from './User';


export default combineReducers({
    Product: ProductReducers,
    Category: CategoryReducers,
    Order: OrderReducers,
    Review: ReviewReducer,
    Login: LoginReducers,
    User: UserReducers,
    Profile: ProfileReducers,

  });