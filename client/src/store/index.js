import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "../reducers";
import thunk from "redux-thunk";
import { loadState, saveState } from '../localStorage/localStorage'; //local storage



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialData = loadState() //estado inicial de mi localStorage



const store = createStore(
    Reducer,
    initialData,

    composeEnhancers(applyMiddleware(thunk))
);

//me suscribo al estado para actualizar cualquier cambio en el local storage
store.subscribe(function () {
    saveState([store.getState().Order.carrito])
})
export default store;
