const initialState = {
    categories: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                categories: [...state.categories, action.payload.data.categories]
            }

        case "ADD_CATEGORY":
            return {
                ...state,
                categories: [...state.categories].push(action.payload)
            }
        
        case "EDIT_CATEGORY":
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }

        case "FILTER_PRODUCTS":
            return {
                ...state,
                categories: [...state.categories, action.payload.data.products]
            }
        
            default: return state;
    
    }
}