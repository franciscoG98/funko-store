const initialState = {
    data: []
}

export default (state = initialState, action)=>{

    switch(action.type){        
        case "NEW_USER":
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        
            case "GET_USERS": 
                return {
                    ...state,
                    data: action.payload.data
                }
            case "PROMOTE_USER":
                return {
                    ...state,
                    data: state.data
                }
            case 'DELETE_USER':
                return {
                    ...state,
                    data: [...state.data]
                }
            
            case 'RESET_PASSWORD':
                return {
                ...state,
                data: [...state.data]
            }


    default: return state;
  }

}
