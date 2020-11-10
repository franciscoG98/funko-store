
const initialState = {
    products: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: [...state.products, action.payload.data]
            }

        case "ADD_PRODUCTS":
            return {
                ...state,
                products: [...state.products].push(action.payload)
            }
        
        case "EDIT_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case "SEARCH_PRODUCTS":
            return {
                ...state,
                products: [...state.products, action.payload.data]
            }

        
            default: return state;
    
    }
}