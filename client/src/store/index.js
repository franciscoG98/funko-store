import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "../reducers";
import thunk from "redux-thunk";
import { loadState, saveState } from '../components/saveToLocalStorage/LocalStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialData = loadState()


const store = createStore(
    Reducer,
    initialData,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(function () {
    saveState(store.getState())
})

export default store;
