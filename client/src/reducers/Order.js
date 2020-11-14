const initialState = {
    items: [],
    orderItem: []
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
                items: [...state.items, action.payload]
            }

        case 'GET_ADMIN_ORDER':
            return {
                ...state,
                orderItem: action.payload.data
            }
        default: return state;
    
    }
}