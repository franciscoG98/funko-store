// import { loadState } from '../components/saveToLocalStorage/LocalStorage';

import { loadState } from "../store/saveToLocalStorage/LocalStorage";

const initialState = {
    items: [],
    orderItem: [],
    cart: [],
    userItem: [],
    userInfo: [],
    carrito: [],
    cartProd: [],
    incDec: [],
    guestCart: loadState() === undefined ? '' : loadState(),
    guestCartProd: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload.data.producto]
            }


        case "DELETE_ITEM":
            return {
                ...state,
                cart: state.cart.filter((i) => i.productId !== action.payload),
                cartProd: state.cartProd.filter((i) => i.id !== action.payload)
                // carrito: console.log(action.payload)
            }

        case 'GET_ADMIN_ORDER':
            return {
                ...state,
                orderItem: action.payload.data
            }

        case 'GET_USER_ORDER':
            return {
                ...state,
                userItem: action.payload.data.orderlines
            }

        case "UPDATE_ORDER_LINE":
            return {
                ...state,
                carrito: action.payload
            }

        case "INCREASE_ORDER_LINE":
            return {
                ...state,
                cart: [...state.cart]
            }

        case "DECREASE_ORDER_LINE":
            return {
                ...state,
                cart: [...state.cart]
            }

        case "GET_USER_INFO":
            return {
                ...state,
                userInfo: action.payload.data
            }
        case "GET_CART":
            return {
                ...state,
                cart: action.payload.data.orderlines,
                cartProd: action.payload.data.products
            }

        case "GET_GUEST_CART":
            return {
                ...state,
                guestCartProd: "hola"
            }

        case "UPDATE_GUEST_CART":
            return {
                ...state,
                guestCart: [...state.guestCart, action.payload]
                /* cart: action.payload.cart,
                cartProd: action.payload */
            }

        case 'FILTER_ADMIN_ORDER':
            return {
                ...state,
                orderItem: action.payload.data.ordenes
            }


        default: return state;

    }
}
// case GET_PRODUCTS_CART:
    //           return {
    //         ...state,
    //         cart: action.payload,
    //  case ADD_PRODUCT_TO_CART:
    //       // let array = [...state.cart, action.payload];
    //           return {
    //         ...state,
    //         cart: [...state.cart, action.payload]