const initialState = {
    items: [],
    orderItem: [],
    cart: [],
    userItem: [],
    userInfo: [],
    carrito: [],
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
                items: state.items.filter((i) => i.id !== action.payload)
            }

        case 'GET_ADMIN_ORDER':
            return {
                ...state,
                orderItem: action.payload.data
            }

        case 'GET_USER_ORDER':
            return {
                ...state,
                userItem: action.payload.data
            }

        case "UPDATE_ORDER_LINE":
            return {
                ...state,
                cart: action.payload
            }

        case "GET_USER_INFO":
            return {
                ...state,
                userInfo: action.payload.data
            }
        case "GET_CART":
            return {
                ...state,
                carrito: action.payload.data
            }


        default: return state;

    }
}