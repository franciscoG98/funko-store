import { loadState, saveState } from '../localStorage/localStorage'; //local storage

const initialState = {
    items: [],
    orderItem: [],
    cart: [],
    userItem: [],
    userInfo: [],
    carrito: loadState() === undefined ? [] : loadState(),
    cartProd: [],


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
                cart: state.cart.filter((i) => i.productId !== action.payload)
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
                carrito: action.payload
            }

        case "UPDATE_GUEST_CART":
            return {
                ...state,
                cart: action.payload.cart,
                cartProd: action.payload.data.products
            }

        default: return state;

    }
}