const initialState = {
    reviews: [],
    stars: []

}


export default (state = initialState, action) => {
    switch(action.type){
        case "ADD_REVIEW":
            return {
                ...state,
                reviews: [...state.reviews, action.payload]
            }
            case "GET_REVIEW":
                return {
                    ...state,
                    stars: action.payload.data
                }    

            default: return state     
    }
}