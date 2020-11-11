
const initialState = {
    categories: [],
    categoryByName: [],
    filterProductsByCat: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                categories:  action.payload
            }            

        case "ADD_CATEGORY":
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        
        case "EDIT_CATEGORY":
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }

        case "FILTER_PRODUCTS":
            return {
                ...state,
                filterProductsByCat: action.payload.data.products
            }
        
        case "DELETE_CATEGORY":
            return {
                ...state,
                categories: state.categories
            }

        case "GET_CATEGORY_NAME":
            return {
                ...state,
                categoryByName: [action.payload.data]
            }


        
            default: return state;
    
    }
}