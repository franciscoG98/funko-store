const initialState = {
    items: [],
    cart: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload.data.producto]
            }
        
        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter((i) => i.id !== action.payload)
            }

        case "UPDATE_ORDER_LINE":
            return {
                ...state,
                cart: action.payload
            }


        default: return state; 
    
    }
}