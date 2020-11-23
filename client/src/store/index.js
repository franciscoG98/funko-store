import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "../reducers";
import thunk from "redux-thunk";
import { loadState, saveState } from '../components/saveToLocalStorage/LocalStorage';

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialData = loadState()
// const persistedState = loadFromLocalStorage();

const store = createStore(
    Reducer,
    // persistedState,
    initialData,
    composeEnhancers(applyMiddleware(thunk))
);

// store.subscribe(() => saveToLocalStorage(store.getState()));
store.subscribe(function () {
    saveState(store.getState())
})

export default store;
