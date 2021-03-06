/* eslint-disable import/no-anonymous-default-export */
// import { loadState } from '../components/saveToLocalStorage/LocalStorage';
import {orderlines, decrease} from "../components/CartOrder/Utils"
import { loadState } from "../store/saveToLocalStorage/LocalStorage";




const initialState = {
    items: 0,
    orderItem: [],
    cart: [],
    userItem: [],
    userInfo: [],
    carrito: [],
    cartProd: [],
    incDec: [],
    prueba: [],
    guestOrder: [],
    guestCart: loadState() === undefined ? []: loadState(),
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
                carrito: action.payload,
                items: state.items +1
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
                guestCart: state.guestCart,
                //guestOrder: action.payload
            }

        case "UPDATE_GUEST_CART":
            return {
                ...state,
                guestCartProd: [...state.guestCartProd, action.payload],
                guestCart: [...state.guestCartProd, action.payload],
                guestOrder: orderlines([...state.guestCart])
                /* cart: action.payload.cart,
                cartProd: action.payload */
            }
            case "INCREASE_GUEST_LINE":
                return {
                    ...state,
                    guestCart: state.guestCart,
                }
    
            case "DECREASE_GUEST_LINE":
                return {
                    ...state,
                    guestCart: decrease([...state.guestCart], action.payload.id)
                }
                
            case "REMOVE_GUEST_LINE":
                return {
                    ...state,
                    guestCart: state.guestCart.filter((i) => i.id !== action.payload)
                }

        case 'FILTER_ADMIN_ORDER':
            return {
                ...state,
                orderItem: action.payload.data.ordenes
            }

        case 'UPDATE_STATE_ORDER':
            return {
                ...state,
                orderItem: action.payload
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